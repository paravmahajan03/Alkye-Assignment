import React from "react";
import PropTypes from "prop-types";

export default function Step1({ data, handleUserData, handleStep, error }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStep(2);
  };
  return (
    <div className="flex justify-between sm:flex-col">
      <div className="w-4/12 sm:w-10/12 mb-16">
        <p className="text-2xl sm:text-2xl-sm">STEP 1</p>
        <h1 className="text-5xl sm:text-5xl-sm leading-5xl sm:leading-5xl-sm font-medium mb-4 sm:mb-2">
          Enter your email address to continue
        </h1>
        <p className="text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm">
          Log in to your account. If you don’t have one, you will be prompted to
          create one.
        </p>
      </div>
      <form className="w-[53.2%] sm:w-full" onSubmit={handleSubmit}>
        <input
          value={data}
          onChange={(e) => handleUserData({ [e.target.id]: e.target.value })}
          type="text"
          id="username"
          required
          placeholder="Email"
          className="border rounded-[5px] w-full border-inputs py-[3.4%] px-[6.6%] sm:py-3 sm:px-6 placeholder-loginSection text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
        />
        <p>{error}</p>
        <div className="flex justify-end gap-6 mt-[3.5%]">
          <p className="hidden mt-6 sm:block text-xl sm:text-xl-sm sm:leading-xl-sm w-full sm:underline">
            Have an account?
          </p>
          <button
            type="submit"
            className="sm:mt-[3.5%] bg-black flex justify-center items-center px-[8.6%] rounded-[10px] py-3 text-white float-right text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm sm:py-1.5 sm:px-8 font-bold"
          >
            <span className="block">Continue</span>
          </button>
        </div>
      </form>
    </div>
  );
}

Step1.propTypes = {
  data: PropTypes.string.isRequired,
  handleUserData: PropTypes.func.isRequired,
  handleStep: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};