import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-6xl flex-col px-15 bg-white sm:items-start">
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
          <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-10 tracking-tight text-black text-shadow-lg text-center">
            Discover Your True JOYFUL Life
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-5 max-w-5xl text-4xl text-center font-semibold tracking-tight text-black text-shadow-lg">
            Lives Changed
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center text-center mb-5">
            <div className="text-lg leading-8 text-zinc-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/><br/>
                Lorem ipsum
              </p>
            </div>
            <div className="text-lg leading-8 text-zinc-600">
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br/><br/>
                Lorem ipsum
              </p>
            </div>
            <div className="mt-5 text-lg leading-8 text-zinc-600">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <br/><br/>
                Lorem ipsum
              </p>
            </div>
            <div className="mt-5 text-lg leading-8 text-zinc-600">
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/><br/>
                Lorem ipsum
              </p>
            </div>
          </div>
          <h4 className="max-w-4xl text-4xl font-semibold leading-10 tracking-tight text-black text-shadow-lg">
            Meet Your Coach
          </h4>
          <div className="mt-5 grid grid-cols-2 gap-4 justify-items-center mb-5">
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
          <h5 className="max-w-4xl text-4xl font-semibold leading-10 tracking-tight text-black text-shadow-lg mb-15">
            Contact
          </h5>
        </div>
      </main>
    </div>
  );
}
