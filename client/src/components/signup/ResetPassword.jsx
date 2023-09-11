import React, { useState } from "react";
import axios from "axios";


const ResetPassword = () => {

  const [email, setEmail] = useState("");
  //const baseURL = "http://ec2-3-39-231-102.ap-northeast-2.compute.amazonaws.com:8080";
  const baseURL = process.env.REACT_APP_API_URL;
  const handleEmailSubmit = async () => {
    try {
      // 이메일이 존재하는지 확인
      await axios.post(`${baseURL}/auth/email/password`, { email });
      alert(`We've sent you a new password to your email address.`)

    } catch (error) {
      alert("Email does not exist.");
      console.error("Password reset initiation failed:", error);
    }
  };
  return (
    <div className='my-4'>
      <h2>Reset your Password</h2>
      <input
        type="email"
        placeholder="Email you signed up with"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleEmailSubmit}>Submit</button>
    </div>
  );
};

export default ResetPassword;
