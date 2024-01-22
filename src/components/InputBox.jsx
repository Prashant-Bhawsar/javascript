import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import styles from "./InputBox.module.scss";
const InputBox = ({ length = 4, onOtpSubmit }) => {
  //initializing array of given length
  const [inputBox, setInputBoxValue] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const handleKeyUp = (e, index) => {
    if (
      e.key === "Backspace" &&
      !inputBox[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      console.log(index);
      inputRefs.current[index - 1].focus();
    }
  };
  const handleonChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && inputBox[index] === "") {
      const newOtp = [...inputBox];
      newOtp[index] = value;
      setInputBoxValue(newOtp);

      //move to next input field
      if (value && index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }

      //submit trigger
      const combinedInput = newOtp.join("");
      if (combinedInput.length === length) {
        onOtpSubmit(combinedInput);
      }
    } else {
      alert("Please Enter Numeric Value");
    }
  };
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  return (
    <>
      <div className={styles.otp_container}>
        {inputBox.map((item, index) => {
          return (
            <input
              className={styles.otp_input}
              key={index}
              type="text"
              id={index}
              ref={(input) => (inputRefs.current[index] = input)}
              name={"input" + index}
              value={item}
              onChange={(e) => handleonChange(e, index)}
              onKeyUp={(e) => handleKeyUp(e, index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default InputBox;
