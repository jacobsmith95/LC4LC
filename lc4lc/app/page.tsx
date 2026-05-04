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
            Discover Your True Joyful Life
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
                "Lori is a patient and wise life coach. Her insights, compassionate presence, and playful coaching style have helped me find creative answers to my own questions and longings."
                <br/><br/>
                - Britta
              </p>
            </div>
            <div className="text-lg leading-8 text-zinc-600">
              <p>
                "Working with Lori has been an amazing experience. I've learned a great deal about myself and found new ways to tackle challenges thanks to her equus therapy. I wholeheartedly recommend her!"
                <br/><br/>
                - Christy
              </p>
            </div>
            <div className="mt-5 col-span-2 text-lg leading-8 text-zinc-600">
              <p>
                "I started working with Lori to address a longstanding challenge with internalized scarcity and financial difficulties. I've worked with on this with different styles of coaching over the years, but never with horses.
                I was instantly struck by Lori's love of these amazing animals and her connection with them. Her kind ear towards my history and guidance to explore the thoughts and feelings that come up while engaging with the horses
                has given me a profound compassion for myself in adverse situations. In just a couple of sessions, I have gained courage and ease while facing current difficulties. Thank you both to Lori and these intuitive animals!"
                <br/><br/>
                - Gina
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
