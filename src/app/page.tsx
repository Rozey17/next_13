import Image from 'next/image'

export default function Home() {
  return (
    <main className="font-body">
      <div className="bg-gray-900 flex justify-between items-center p-3">
        <div className="">
          <span className="divide-x flex items-center text-white text-xs capitalize">
            <p className="px-5">about</p>
            <p className="px-5">store</p>
            <p className="px-5">newsletter</p>
            <p className="px-5">faqs</p>
          </span>
        </div>
        <div className="">
          <span className="divide-x flex items-center text-white text-xs ">
            <a href="" className="text-white hover:text-red-500 px-5">
              fitwear@fitness.com
            </a>
            <p className="px-5">No 58A, Baltimore Street, USA</p>
          </span>
        </div>
      </div>
      <div className="h-screen relative bg-black">
        <img
          // src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
          src="https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg"
          className="h-full w-full object-cover object-center opacity-80 "
          alt=""
        />
        <div className="absolute inset-0">
          <div className="relative p-5 h-full space-y-20">
            <div className="justify-between items-center flex">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/02/13/Gym-Logo-Graphics-1-18.jpg"
                className="h-20"
                alt=""
              />
              <span className="flex items-center justify-between text-white text-lg">
                <a className="px-10" href="">
                  Home
                </a>
                <a className="px-10" href="">
                  Blog
                </a>
                <a className="px-10" href="">
                  Pages
                </a>
                <a className="px-10" href="">
                  Shop
                </a>
                <a className="px-10" href="">
                  Contact
                </a>
              </span>
              <button className="uppercase bg-red-600 px-8 py-2 text-white hover:bg-red-800 hover:duration-300 text-sm font-semibold">
                log in
              </button>
            </div>
            <div className=" flex justify-end">
              <div className=" w-1/2 ">
                <div className="space-y-10 ">
                  <div className="space-y-10">
                    <div className="">
                      <p className="text-red-600 uppercase flex justify-end">
                        plan to fit
                      </p>
                    </div>
                    <div className="space-y-5">
                      <p className=" text-7xl text-transparent bg-clip-text bg-white font-bold">
                        <span className="text-7xl text-transparent bg-clip-text bg-red-600 font-bold pr-5">
                          carve
                        </span>
                        yourself, carve your future
                      </p>
                    </div>

                    <h1 className="text-white line-clamp-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsa sint incidunt ipsum soluta distinctio reprehenderit
                      laboriosam. Placeat quaerat quos nam!
                    </h1>
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
