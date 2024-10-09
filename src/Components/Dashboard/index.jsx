import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import { getData } from "../../utilities/apiPaths";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

export default function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setIsLoading] = useState(false);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const url = import.meta.env.VITE_API_ENDPOINT + getData;
      const token = JSON.parse(localStorage.getItem("userData")).token;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();

        const convertedData = data.reduce((acc, item) => {
          if (item && item.prompt && item.id && item.image_url) {
            acc[item.prompt] = acc[item.prompt] || [];
            acc[item.prompt].push({
              id: item.id,
              image: item.image_url,
              alt: `slide image ${item.id}`,
            });
          }
          return acc;
        }, {});

        setData(convertedData);
      } else {
        throw new Error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black py-[5.9%] xxl:py-0 sm:py-[9.55%] sm:pt-0">
      <div className=" bg-black  px-[5.5%] sm:px-8 pt-[6.45%] sm:py-[14%] sm:pb-20">
        <button
          onClick={handleLogout}
          className="px-8 py-2 text-white border bg-black hover:bg-[#36363699] border-white rounded-2xl text-2xl float-right"
        >
          Logout
        </button>
        <div className=" px-[5.8%] sm:px-0">
          <img
            src="assets/logo/Logo_white.png"
            alt="logo"
            className="mb-[7.8%] xxl:mb-[3%] sm:w-16 sm:mb-[15.3%]"
          />
          <h1 className="text-5xl text-white">
            Welcome <span className="underline">Test</span>
          </h1>
          <p className="text-2xl text-white">Hope you having a good day!</p>
        </div>
      </div>
      {loading ? <Loader /> :Object.entries(data).map(([key, val]) => (
        <Carousel key={key} slides={data[key]} title={key} />
      ))}
    </div>
  );
}
