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

      {/* hero */}

      <div className=" relative bg-black">
        <img
          src="https://images.pexels.com/photos/5128291/pexels-photo-5128291.jpeg"
          className="h-full w-full object-cover object-center opacity-70 "
          alt=""
        />
        <div className="absolute inset-0">
          <div className="relative p-5 h-full ">
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
            <div className="flex justify-end items-center h-full">
              <div className="w-2/3">
                <div className="space-y-10">
                  <div className="space-y-10">
                    <div className="flex  items-center justify-end">
                      {/* <span className="overline text-white w-20"></span> */}
                      <p className="text-[#F20E0E] uppercase flex justify-end font-body">
                        plan to fit
                      </p>
                    </div>
                    <div className="hero-text">
                      <p className="">
                        <span className=" font-outline   ">carve </span>
                        <span className="   bg-white   ">yourself, carve </span>
                        <span className=" font-outline   ">your</span>{" "}
                        <span className="   bg-white   ">future</span>
                      </p>
                    </div>

                    <p className="text-white text-xl ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem aperiam reiciendis iusto eaque? Officiis autem
                      magnam eos et quos voluptatem fugiat. Rem impedit soluta
                      dicta laudantium culpa ipsam at laboriosam, similique
                      eaque magnam asperiores possimus suscipit, ullam quisquam.
                      Beatae, accusantium.
                    </p>

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

      {/* marquee */}

      <div className="marquee">
        <div className=" animate-marquee ">
          <span className="">dumbbell rows</span>
          <span className="">jump rope</span>
          <span className="">medicine ball</span>
          <span className="">kettlebell</span>
          <span className="">side planks</span>
        </div>

        <div className="absolute top-0  animate-marquee2 ">
          <span className="">dumbbell rows</span>
          <span className="">jump rope</span>
          <span className="">medicine ball</span>
          <span className="">kettlebell</span>
          <span className="">side planks</span>
        </div>
      </div>
    </main>
  );
}
