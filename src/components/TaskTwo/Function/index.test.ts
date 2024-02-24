import { vi, test } from "vitest"
import { simulateFunction, type AsyncFunctionType } from "."

test("test", async () => {
  const array_of_values = [2, 5, 2, 4, 10, 1, 10]
  const async_function: AsyncFunctionType = (value: number) =>
    new Promise((resolve) => setTimeout(resolve, value * 1000))
  const concurrency_limit = 3

  await vi.waitFor(() => {
    simulateFunction(array_of_values, async_function, concurrency_limit)
  })
})
