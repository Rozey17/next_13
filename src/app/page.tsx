import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
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
          src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
          className="h-full w-full object-cover object-center opacity-80"
          alt=""
        />
        <div className="absolute inset-0">
          <div className="relative p-5 h-full">
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
              <button className="bg-red-500 px-8 py-2 text-white hover:bg-red-600">
                button
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
