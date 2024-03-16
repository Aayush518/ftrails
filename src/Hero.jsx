import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full bg-white">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className="w-full space-y-2 border-yellow-50 lg:space-y-0 md:w-max lg:border-l"></div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                  Your favorite services, right at your palm
                </h1>
                <form action="" className="w-full mt-12">
                  <div
                    className="relative flex p-1 rounded-full bg-white border border-yellow-50
                   shadow-md md:p-2"
                  >
                    <select
                      className="hidden p-3 rounded-full bg-transparent md:block md:p-4"
                      name="domain"
                      id="domain"
                    >
                      <option value="design">Hotels</option>
                      <option value="development">Restaurant</option>
                      <option value="marketing">Resort</option>
                    </select>
                    <input
                      placeholder="Your favorite services"
                      className="w-full p-4 rounded-full"
                      type="text"
                    />
                    <button
                      type="button"
                      title="Start buying"
                      className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-50 to-yellow-50 hover:to-red-300 active:from-white-100 focus:from-red-400 md:px-12"
                    >
                      <span className="hidden text-yellow-900 font-semibold md:block">
                        Search
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 mx-auto text-yellow-900 md:hidden"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form>
                <p className="mt-8 text-gray-700 lg:w-10/12">
                  Track, record and connect {" "}
                  <a href="#" className="text-yellow-700">
                    
                  </a>{" "}
                  with your pals
                </p>
              </div>
              <div className="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
                <img
                  src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                  className="relative"
                  alt="food illustration"
                  loading="lazy"
                  width="4500"
                  height="4500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
