import { test, expect } from "vitest"
import { simulateFunction, type AsyncFunctionType } from "."

test("test", () => {
  const array_of_values = [5, 1, 3, 4]
  const async_function: AsyncFunctionType = (value: number) =>
    new Promise((resolve) => setTimeout(resolve, value * 1000))
  const concurrency_limit = 3

  simulateFunction(array_of_values, async_function, concurrency_limit).then(
    (state: any) => {
      console.log(state)
      expect(state.queue).toHaveLength(4)
      expect(state.serviceCounters).toHaveLength(3)
      expect(state.serviceCounters[0].isAvailable).toBeFalsy()
      expect(state.serviceCounters[0].currentValue).toBe(5)
      expect(state.serviceCounters[1].isAvailable).toBeTruthy()
      expect(state.serviceCounters[1].currentValue).toBeNull()
    }
  )
})
