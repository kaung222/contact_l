import { useState } from "react";


const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }

  const passwordHandler = e => {
    setPassword(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(username, password);
  }


  
  return (
    <div className="flex  justify-center items-center h-screen">
      <form onSubmit={submitHandler} className="flex flex-col gap-5 w-96 shadow-md border p-7 rounded">
        <h3 className=" font-bold mx-auto font text-3xl text-blue-500">
          Login
        </h3>
        <div className="flex flex-col gap-3 mt-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className=" bg-gray-100 rounded p-2"
            placeholder="Enter your username"
            value={username}
            onChange={usernameHandler}
          />
        </div>
        <div className="flex flex-col gap-3 mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className=" bg-gray-100 rounded p-2"
            placeholder="Enter your password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <button className="btn bg-blue-500 text-white rounded px-4 py-1 mt-6 w-20 mx-auto shadow">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
