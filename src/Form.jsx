import React from "react";

const Form = ({ onSubmit, value, onChange }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={(e) => onChange(e)} />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default Form;
