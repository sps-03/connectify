import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="mx-auto flex min-w-96 max-w-md flex-col items-center justify-center">
      <div className="w-full rounded-lg bg-gray-500 bg-opacity-10 p-8 shadow-xl backdrop-blur-sm">
        <h1 className="text-center text-4xl font-bold text-white">
          Login to <span className="text-blue-400">Connectify</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered h-12 w-full rounded-md border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-12 w-full rounded-md border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/signup" className="mt-6 inline-block text-sm text-blue-400 hover:text-blue-500 hover:underline">
            Don’t have an account? Sign up
          </Link>

          <div>
            <button
              className="btn btn-primary btn-block mt-6 h-12 rounded-md bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-600"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner text-white"></span> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
