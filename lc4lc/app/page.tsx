import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between px-15 bg-white sm:items-start">
        <nav className="mt-10 max-w-5xl text-5xl text-center font-bold tracking-tight text-black">
          Get 'er Done With Joy Equus Life Coaching
          <br />
        </nav>
        <br />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="mt-10 max-w-6xl text-5xl font-semibold leading-10 tracking-tight text-black">
            <Image className="rounded-xl shadow-2xl"
              src="/IMG_20260304_093638.jpg"
              width={1500}
              height={1500}
              alt="Client connecting with her equine co-coach."
            />
          </h1>
          <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-10 tracking-tight text-black text-shadow-lg">
            Discover Your True JOYFUL Life
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 className="mt-5 max-w-5xl text-4xl text-center font-semibold leading-10 tracking-tight text-black text-shadow-lg">
            Lives Changed
          </h3>
          <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center mb-10">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p></p>
          <div className="mt-10 grid grid-cols-2 gap-4 justify-items-center mb-15">
            <div className="col-span-2">
              <p className="max-w-4xl text-4xl font-semibold leading-10 tracking-tight text-black text-shadow-lg">
              Meet Your Coach
              </p>
            </div>
            <div className="justify-items-center">
              <Image className="rounded-lg shadow-2xl"
                src="/lori_cook_life_coach.png"
                width={400}
                height={400}
                alt="Picture of Lori Cook."
              />
            </div>
            <div>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
