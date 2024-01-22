import { useState } from "react";
import "./App.css";

import PhoneOtpForm from "./components/PhoneNumInput";

function App() {
  const [inputvalue, setInputValue] = useState();
  const [showForm, setShowForm] = useState({ show: false, value: "" });
  const [otp, setOTP] = useState();
  const handleSubmit = (input) => {
    console.log(input);
    alert(`Login Successful- ${input}`);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <>
      <PhoneOtpForm />
    </>
  );
}

export default App;
