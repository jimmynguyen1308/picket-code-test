export default function Requirments() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-2">Task 1</h1>
      <p className="text-sm mb-1">
        Create a simple UI in React with a text input field and a submit button.
        Text input field should have a blue border in normal state.
      </p>
      <p className="text-sm mb-1">
        If the text input field contains a string that is an integer, the submit
        button when clicked should show an alert with the number.
      </p>
      <p className="text-sm mb-1">
        If the value in the text input field is not a number or valid integer,
        the text input field's border should turn red and the input should
        vibrate 3 times (the whole input element should vibrate).
      </p>
      <p className="text-sm mb-1">
        If the user keeps entering a non-integer/invalid number (for example:
        including some letters) and presses the submit button again, the text
        field should vibrate again.
      </p>
    </>
  )
}
