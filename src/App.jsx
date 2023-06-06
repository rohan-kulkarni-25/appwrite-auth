// import { useEffect } from "react";
// import { createAccountWithEmailAndPassword } from "./utils/Auth";

import { useState } from "react";
import {
  // createAccountWithOAuth,
  createAccountWithPhone,
  updatePhoneSecret,
} from "./utils/Auth";

const App = () => {
  const [secret, setSecret] = useState("");
  const [response, setResponse] = useState("");
  const handleLogin = async () => {
    const response = await createAccountWithPhone();

    setResponse(response);
  };

  const handleSubmit = async () => {
    const responses = await updatePhoneSecret(response.userId, secret);
  
    console.log(responses);
  };

  return (
    <div className="bg-pink-400">
      {/* <button onClick={createAccountWithOAuth}>GOOGLE</button> */}
      <button onClick={handleLogin}>PHONE</button>
      <input
        type="number"
        value={secret}
        onChange={(e) => {
          setSecret(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default App;
