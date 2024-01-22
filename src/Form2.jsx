import React from "react";

const Form2 = ({ onSubmit, value }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} name="input2" />
        <button type="submit"> Submit2 </button>
      </form>
    </div>
  );
};

export default Form2;
