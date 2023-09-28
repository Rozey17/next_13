/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="band">
        <span className="">
          <a className="" href="">
            about
          </a>
          <p className="">|</p>
          <a className="" href="">
            store
          </a>
          <p className="">|</p>

          <a className="" href="">
            newsletter
          </a>
          <p className="">|</p>

          <a className="" href="">
            faqs
          </a>
        </span>

        <span className="">
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href="" className="lowercase pl-2">
              fitwear@fitness.com
            </a>
          </span>
          <p className="">|</p>

          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <h1 className="">No 58A, Baltimore Street, USA</h1>
          </span>
        </span>
      </div>

      <div className="h-screen relative bg-black">
        <img
          // src="https://images.pexels.com/photos/2294400/pexels-photo-2294400.jpeg"
          src="https://images.pexels.com/photos/5128291/pexels-photo-5128291.jpeg"
          className="h-full w-full object-cover object-center opacity-70 "
          alt=""
        />
        <div className="absolute inset-0">
          <div className="relative p-5 h-full space-y-32">
            {/* header */}
            <div className="header font-body">
              <img
                src="https://static.wixstatic.com/media/a101fc_2e2ee42952b342609a1b970a5825ed57~mv2_d_4000_2042_s_2.png/v1/fill/w_560,h_288,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a101fc_2e2ee42952b342609a1b970a5825ed57~mv2_d_4000_2042_s_2.png"
                className="h-20"
                alt=""
              />
              <span className="">
                <a className="" href="">
                  Home
                </a>
                <a className="" href="">
                  Services
                </a>
                <a className="" href="">
                  Blog
                </a>
                <a className="" href="">
                  Pages
                </a>
                <a className="" href="">
                  Shop
                </a>
                <a className="" href="">
                  Contact
                </a>
              </span>
              <button className="button-primary">log in</button>
            </div>

            <div className="flex justify-end">
              <div className=" w-2/3 ">
                <div className="space-y-10 ">
                  <div className="space-y-10 ">
                    <div className="flex  items-center justify-end">
                      {/* <span className="text-white ">-----------</span> */}
                      <p className="text-[#F20E0E] uppercase flex justify-end font-body">
                        plan to fit
                      </p>
                    </div>
                    <div className="space-y-5 text-right font-body">
                      <span className="text-7xl font-outline font-bold text-transparent bg-clip-text uppercase">
                        carve{" "}
                      </span>
                      <span className=" text-7xl text-transparent bg-clip-text bg-white font-bold uppercase text-right">
                        yourself, carve{" "}
                      </span>
                      <span className="text-7xl font-outline font-bold text-transparent bg-clip-text uppercase">
                        your
                      </span>{" "}
                      <span className=" text-7xl text-transparent bg-clip-text bg-white font-bold uppercase text-right">
                        future
                      </span>
                    </div>

                    <h1 className="text-white text-lg ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa sint incidunt ipsum soluta distinctio reprehenderit
                      laboriosam. Placeat quaerat quos nam!
                    </h1>
                    <div className="flex justify-end font-body">
                      <button className=" button-primary ">gear up</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
