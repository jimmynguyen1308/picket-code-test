export default function Requirments() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-2">Task 2</h1>
      <p className="text-sm mb-1">
        Write a map function that accepts 3 arguments: (1) An array of values,
        (2) An async function, (3): An integer representing parallelization
        limit
      </p>
      <p className="text-sm mb-1">
        The function should map over the values from the input array (1st
        argument) using async function (2nd argument) with the maximum number of
        parallel executions of this function equal to the parallel limit (3rd
        argument). For example, if parallel limit is 3, the function should have
        at most 3 async executions running at the same time, if one completes
        first, the next execution should be started:
      </p>
      <p className="text-sm mb-1">
        (1) Start execution #1, (2) Start execution #2, (3) Start execution #3,
        (4) Excution #1 completes, start execution #4, (5), Excution #2
        completes, start execution #5, (6) Excution #3 completes, start
        execution #6, ...
      </p>
      <p className="text-sm mb-1">
        The function should work for any kind of values in the input array.
        Please maximize the parallelism of the async function execution. (i.e.
        always run as many async functions as permitted by the parallel limit)
      </p>
      <p className="text-sm mb-1">
        Please write a test suite in a framework of choice that proves the
        implementation works as expected.
      </p>
      <p className="text-sm mb-1">
        Bonus points: Make the function fully typed using TypeScript generics.
      </p>
    </>
  )
}
