export type AsyncFunctionType = {
  (value: number): Promise<any>
}

type ServiceCounterType = {
  isAvailable: boolean
  currentValue: number | null
  serve: AsyncFunctionType
}

class Service {
  queue: Array<number>
  serviceCounters: Array<ServiceCounterType>

  constructor(async_function: AsyncFunctionType, concurrency_limit: number) {
    this.queue = []
    this.serviceCounters = new Array(concurrency_limit).fill(null).map(() => ({
      isAvailable: true,
      currentValue: null,
      serve: async (value: number) => {
        this.log(`Serving value = ${value}...`)
        await async_function(value)
      },
    }))
  }

  log(message: string) {
    console.log(`[LOG] ${message}`)
  }

  logQueue() {
    const queueIds = this.queue.map((value: number) => value).join(", ")
    this.log(`Queue: [${queueIds}]`)
  }

  enqueue(values: Array<number>) {
    for (let i = 0; i <= values.length - 1; i++) {
      this.queue.push(values[i])
    }
    this.logQueue()
    this.serveNext()
  }

  serveNext() {
    const nextValue = this.queue[0]
    if (nextValue) {
      this.serve(nextValue)
    }
  }

  async serve(value: number) {
    const freeCounter = this.serviceCounters.find(
      (counter: any) => counter.isFree
    )
    if (freeCounter) {
      freeCounter.isAvailable = false
      freeCounter.currentValue = value
      await freeCounter.serve(value)
      freeCounter.isAvailable = true
      freeCounter.currentValue = null
    } else {
      this.log(`No free counters, value = ${value} is on hold...`)
    }
  }
}

export const simulateFunction = async (
  array_of_values: Array<number>,
  async_function: AsyncFunctionType,
  concurrency_limit: number
) => {
  const service = new Service(async_function, concurrency_limit)
  service.enqueue(array_of_values)
}
