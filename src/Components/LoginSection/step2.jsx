import { useState } from "react";
import PropTypes from "prop-types";

export default function Step2({
  data,
  handleUserData,
  handleAuthentication,
  error,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await handleAuthentication();
    setIsLoading(false);
  };

  return (
    <div className="flex justify-between sm:flex-col">
      <div className="w-4/12 sm:w-10/12 mb-16 sm:mb-8">
        <p className="text-2xl sm:text-2xl-sm">STEP 2</p>
        <h1 className="text-5xl sm:text-5xl-sm leading-5xl sm:leading-5xl-sm font-medium mb-4 sm:mb-2">
          Create an account to continue
        </h1>
        <p className="text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm">
          You’ll be able to log in to Dingoo with this email address and
          password.
        </p>
      </div>
      <form
        className="w-[53.2%] sm:w-full mt-6 sm:mt-0 relative"
        onSubmit={handleSubmit}
      >
        <label className="text-2xl" htmlFor="password">
          Enter a password to create your account with 
        </label>
        <input
          type={isVisible ? "text" : "password"}
          value={data}
          onChange={(e) => handleUserData({ [e.target.id]: e.target.value })}
          id="password"
          required
          placeholder="Choose a password"
          className="border rounded-[5px] w-full border-inputs py-[3.4%] px-[6.6%] sm:py-3 sm:px-6 placeholder-loginSection text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm"
        />
        <div className="absolute z-20 pl-2 right-[6.6%] top-[24%] sm:top-[25%]">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsVisible(!isVisible);
            }}
            type="button"
          >
            {isVisible ? (
              <img
                className="size-6 sm:size-4"
                src="/assets/icons/eye-off.svg"
                alt="opened eye icon"
              />
            ) : (
              <img
                className="size-6 sm:size-4"
                src="/assets/icons/eye-off.svg"
                alt="closed eye icon"
              />
            )}
          </button>
        </div>
        <p>{error}</p>
        <div className="flex justify-between gap-6 mt-[3.5%]">
          <p className="text-xl sm:text-xl-sm sm:leading-xl-sm w-full sm:underline">
            Use a minimum of 6 characters (case sensitive) with at least one
            number or special character.
          </p>
          <button
            disabled={isLoading}
            type="submit"
            className={`${
              isLoading
                ? "cursor-not-allowed bg-[#00000099]"
                : "cursor-pointer bg-black hover:bg-[#00000090]"
            } w-[58%] xl:w-full h-fit flex justify-center items-center px-[5%] rounded-[10px] py-3 text-white float-right text-2xl sm:text-2xl-sm leading-2xl sm:leading-2xl-sm sm:py-1.5 sm:px-8 font-bold`}
          >
            <span className="block sm:hidden">Agree & Continue</span>
            <span className="hidden sm:block">Continue</span>
          </button>
        </div>
      </form>
    </div>
  );
}

Step2.propTypes = {
  data: PropTypes.string.isRequired,
  handleUserData: PropTypes.func.isRequired,
  handleAuthentication: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};
