import { useEffect, useState } from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import { getToken } from "../../utilities/apiPaths";
import { useNavigate } from "react-router-dom";

export default function LoginSection() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  
  useEffect(() => {
    if (localStorage.getItem("userData")) navigate("/dashboard");
  }, [navigate]);

  const [err, setErr] = useState("");
  const handleUserData = (data) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };
  const handleStep = (value) => {
    setStep(value);
  };
  const handleAuthentication = async () => {
    try {
      setErr("");
      const url = import.meta.env.VITE_API_ENDPOINT + getToken;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      localStorage.setItem("userData", JSON.stringify(data));
      navigate("/dashboard");
    } catch (err) {
      // console.log("Error:", err);
      setErr(err?.non_field_errors?.[0] || err?.message || err);
    }
  };

  const [step, setStep] = useState(1);
  return (
    <div className=" bg-loginSection py-[5.9%] px-[5.5%] sm:px-[8.15%] sm:py-[9.55%]">
      <div className="bg-white rounded-[50px] px-[5.8%] pt-[6.45%] pb-[7.5%] sm:px-[11.7%] sm:py-[14%] sm:pb-20">
        <img
          src="/assets/logo/Logo.png"
          alt="logo"
          className="mb-[7.8%] sm:w-16 sm:mb-[15.3%]"
        />
        {step === 1 ? (
          <Step1
            error={err}
            data={userData.username}
            handleUserData={handleUserData}
            handleStep={handleStep}
          />
        ) : (
          <Step2
            error={err}
            data={userData.password}
            handleUserData={handleUserData}
            handleAuthentication={handleAuthentication}
          />
        )}
        {step === 2 ? (
          <p className="text-sm sm:text-sm-sm leading-sm sm:leading-sm-sm w-full sm:underline pr-2 sm:mt-6">
            {` Dingoo will use your data to personalise and improve your Dingoo
          experience and to send you information about Dingoo. You can change
          your communication preferences anytime. We may use your data as
          described in our Privacy Policy, including sharing it with The Test of
          Companies. By clicking "Agree & Continue", you agree to our Subscriber
          Agreement and acknowledge that you have read our Privacy
          Policy and Collection Statement.`}
          </p>
        ) : null}
      </div>
    </div>
  );
}
