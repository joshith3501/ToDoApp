
const InputField = () => {
  return (
    <>
      <form className="add-form">
        <input
          type="text"
          placeholder="Enter your text"
          className="add-input"
        />
        <button type="submit" value="submit" className="add-submit">Add</button>
      </form>
    </>
  );
}

export default InputField