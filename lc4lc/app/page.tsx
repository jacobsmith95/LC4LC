"use client";


import Image from 'next/image'

import { useEffect, useState, useRef } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

export default function Home() {

  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  return (
    <div className="">
      <main className="flex flex-col justify-center items-center content-center font-sans">
        <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div  className="flex flex-col justify-center md:flex-row">
            <div className="min-w-xl order-1 p-5">
              <div className="flex flex-col items-center justify-center h-164 bg-bluegreen rounded-lg shadow-xl text-white font-semibold text-shadow-lg">
                <div className="text-7xl/30">
                  <a className="underline decoration-lorigreen">Discover</a> <br></br>
                  <a className="underline decoration-lorigreen">your true</a> <br></br>
                </div>
                <a className="text-9xl font-bold text-lorigreen underline decoration-lavender">joyful</a> <br></br>
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
          <div className="flex flex-col justify-center items-center content-center p-10">
            <h2 className="max-w-3/4 text-4xl font-semibold tracking-tight text-black text-shadow-lg">
            
            </h2>
            <p className="max-w-3/4 text-2xl text-zinc-600 text-shadow-lg">
            Finding joy has always been hard, even more so in today's world.
            Get Er Done With Joy Equus Coaching gives you the tools needed to find yourself and your joy.
            In just a few sessions, we can give you a new way of looking at yourself, your life, and those around you.
            We will help you find what you need to create your true joyful life.
            </p>
          </div>
        </div>
        <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col justify-center items-center content-center p-10">
            <h3 className="max-w-3/4 text-4xl font-semibold tracking-tight text-black text-shadow-lg p-10">
              Lives Changed
            </h3>
            <div className="max-w-3/4 text-2xl text-zinc-600 text-shadow-lg">
              For the past 5 years, Lori has been helping people find their joy and change their lives.
            </div>
            <div className="flex flex-col md:grid grid-cols-2 gap-x-4 gap-y-4 p-10 max-w-3/4 text-shadow-lg">
              <div className="text-2xl text-zinc-600 p-10 bg-lorigreen rounded-lg shadow-xl">
                <p>
                  "Lori is a patient and wise life coach. Her insights, compassionate presence, and playful coaching style have helped me find creative answers to my own questions and longings."
                  <br/><br/>
                  - Britta
                </p>
              </div>
              <div className="text-2xl text-zinc-600 p-10 bg-lorigreen rounded-lg shadow-xl">
                <p>
                  "Working with Lori has been an amazing experience. I've learned a great deal about myself and found new ways to tackle challenges thanks to her equus therapy. I wholeheartedly recommend her!"
                  <br/><br/>
                  - Christy
                </p>
              </div>
              <div className="col-span-2 text-2xl text-zinc-600 p-10 bg-lorigreen rounded-lg shadow-xl">
                <p>
                  "I was instantly struck by Lori's love of these amazing animals and her connection with them. Her kind ear towards my history and guidance to explore the thoughts and feelings that come up while engaging with the horses
                  has given me a profound compassion for myself in adverse situations. In just a couple of sessions, I have gained courage and ease while facing current difficulties. Thank you both to Lori and these intuitive animals!"
                  <br/><br/>
                  - Gina
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref3} className={`flex flex-col justify-center content-center items-center transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col max-w-3/4 justify-center items-center content-center p-10">
            <h4 className="max-w-3/4 text-4xl font-semibold tracking-tight text-black text-shadow-lg p-10">
              Equus Coaching is a Powerful Tool for Joy
            </h4>
            <div className="max-w-3/4 md:grid grid-cols-2 gap-x-10 justify-items-center">
              <div className="order-1">
                <p className="text-2xl text-zinc-600 text-shadow-lg">
                By partnering with an equine co-coach, equus coaching offers unique benefits and profound, visceral insights into the self.
                Horses are naturally sensitive and intuitive, they improve your understanding of your inner-dialogue and can help you pinpoint and understand roadblocks.
                Equus coaching helps you move past internal conflict and develop your own personal flow and joy.
                <br></br><br></br>
                At Get Er Done With Joy Equus Coaching, Lori taps into the playful and simple nature of horses to help you move towards a more rewarding life. 
                The powerful connection between you and an equine co-coach can help you explore what you want out of your life, career, and relationships.
                </p>
              </div>
              <div className="order-2">
                <Image className="rounded-lg shadow-2xl"
                  src="/IMG_20260604.PNG"
                  width={400}
                  height={400}
                  alt="Picture of Lori Cook, equine life coach."
                />
              </div>
            </div>
          </div>
        </div>
        <div ref={ref4} className={`flex flex-col justify-center content-center items-center transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col max-w-3/4 justify-center items-center content-center p-10">
            <h4 className="max-w-3/4 text-4xl font-semibold tracking-tight text-black text-shadow-lg p-10">
              Meet Your Coach
            </h4>
            <div className="max-w-3/4 grid grid-cols-2 justify-items-center">
              <div className="">
                <Image className="rounded-lg shadow-2xl"
                  src="/lori_cook_life_coach.png"
                  width={400}
                  height={400}
                  alt="Picture of Lori Cook, equine life coach."
                />
              </div>
              <div className="bg-bluegreen rounded-lg shadow-xl">
                <p className="text-2xl text-white p-10 text-shadow-lg">
                Lori's lifetime of experience has included years of massage therapy, art therapy, and equus coaching.
                She has Eagala training and is certified by the Center for Equus Coaching.
                Lori has developed her attention to the body and her client's physical cues, mirroring the sensitivity of her equine co-coaches.
                <br></br><br></br>
                Through her work, Lori has focused on improving her client's sense of healthy play and ability to find joy.
                She herself has struggled in the past, and built the skills necessary to find joy in life's hardest moments.
                These are the skills she loves to teach to others to help them find their own truly joyful life.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={ref5} className={`transition-opacity ease-in duration-700 ${isVisible5 ? "opacity-100" : "opacity-0"}`}>
          <div className="">
            <h5 className="max-w-3/4 text-4xl font-semibold tracking-tight text-black text-shadow-lg p-20">
              Contact
            </h5>
          </div>
        </div>
      </main>
    </div>
  );
}
