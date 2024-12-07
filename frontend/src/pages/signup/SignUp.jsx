import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="mx-auto flex min-w-96 max-w-md flex-col items-center justify-center">
      <div className="w-full rounded-xl bg-gray-500 bg-opacity-10 p-8 shadow-xl backdrop-blur-sm">
        <h1 className="text-center text-4xl font-bold text-white">
          Sign Up for <span className="text-blue-400">Connectify</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="label">
              <span className="label-text font-medium">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="input input-bordered h-12 w-full rounded-xl border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered h-12 w-full rounded-xl border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered h-12 w-full rounded-xl border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="label-text font-medium">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered h-12 w-full rounded-xl border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to={"/login"} className="mt-6 inline-block text-sm text-blue-400 hover:text-blue-500 hover:underline">
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-primary btn-block mt-6 h-12 rounded-xl bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-600"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner text-white"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
