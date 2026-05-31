import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center content-center font-sans">
        <div className="flex md:flex-row">
          <div className="min-w-xl order-1 p-5">
            <div className="flex flex-col items-center justify-center h-164 bg-bluegreen rounded-lg shadow-xl text-white font-semibold text-shadow-lg">
              <div className="text-7xl/30">
                <a className="underline decoration-lorigreen">Discover</a> <br></br>
                <a className="underline decoration-lorigreen">your true</a> <br></br>
              </div>
              <a className="text-9xl font-bold text-lorigreen underline decoration-lavender transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-130">joyful</a> <br></br>
              <a className="text-8xl/30 underline decoration-lorigreen">life</a>
            </div>
            <div className="">
            </div>
          </div>
          <div className="max-w-5xl order-2 p-5">
            <Image className="rounded-lg shadow-xl brightness-90"
              src="/IMG_20260304_093638.jpg"
              width={1279}
              height={852}
              alt="Client connecting with her equine co-coach."
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center content-center p-20">
          <h2 className="max-w-5xl text-4xl font-semibold tracking-tight text-black text-shadow-lg">
            
          </h2>
          <p className="max-w-3/4 text-lg text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-5/6">
          <h3 className="max-w-5xl text-4xl font-semibold tracking-tight text-black text-shadow-lg">
            Lives Changed
          </h3>
          <div className="grid grid-cols-2">
            <div className="text-lg text-zinc-600">
              <p>
                "Lori is a patient and wise life coach. Her insights, compassionate presence, and playful coaching style have helped me find creative answers to my own questions and longings."
                <br/><br/>
                - Britta
              </p>
            </div>
            <div className="text-lg text-zinc-600">
              <p>
                "Working with Lori has been an amazing experience. I've learned a great deal about myself and found new ways to tackle challenges thanks to her equus therapy. I wholeheartedly recommend her!"
                <br/><br/>
                - Christy
              </p>
            </div>
            <div className="col-span-2 text-lg text-zinc-600">
              <p>
                "I was instantly struck by Lori's love of these amazing animals and her connection with them. Her kind ear towards my history and guidance to explore the thoughts and feelings that come up while engaging with the horses
                has given me a profound compassion for myself in adverse situations. In just a couple of sessions, I have gained courage and ease while facing current difficulties. Thank you both to Lori and these intuitive animals!"
                <br/><br/>
                - Gina
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="max-w-4xl text-4xl font-semibold tracking-tight text-black text-shadow-lg">
            Meet Your Coach
          </h4>
          <div className="grid grid-cols-2">
            <div className="">
              <Image className="rounded-lg shadow-2xl"
                src="/lori_cook_life_coach.png"
                width={400}
                height={400}
                alt="Picture of Lori Cook, equine life coach."
              />
            </div>
            <div>
              <p className="max-w-2xl text-lg text-zinc-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h5 className="max-w-4xl text-4xl font-semibold tracking-tight text-black text-shadow-lg">
            Contact
          </h5>
        </div>
      </main>
    </div>
  );
}
