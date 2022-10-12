import Image from "next/future/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  TiLocationArrowOutline as Location,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
  TiArrowForwardOutline,
  TiLocationOutline,
} from "react-icons/ti";

const Home = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="container text-white">
      <main className="w-screen h-screen sm:bg-green">
        <section id="landing" className="h-screen w-screen">
          <div className="h-full flex flex-col justify-center items-center overflow-scroll px-6 bg-black/60">
            <header className="absolute top-0 flex max-w-[1200px] mx-auto justify-center font-bold text-5xl sm:text-6xl font-display py-2">
              <span>noodleats</span>
            </header>
            <div className="-mt-16 flex flex-col gap-8">
              <h1 className="text-3xl sm:text-4xl text-center">
                Noodles At Your Doorstep
              </h1>
              <form className="flex gap-2 rounded-full bg-white p-2 text-black items-center justify-between">
                <TiLocationOutline className="text-xl" />
                <input
                  className="w-[70%] flex-grow outline-none"
                  type="text"
                  placeholder="Enter an address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  onClick={(e) => e.preventDefault()}
                  tabIndex={address.length > 0 ? 1 : -1}
                >
                  <TiArrowForwardOutline
                    className={`${
                      address.length > 0 ? "show" : "hide"
                    } text-xl`}
                  />
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="mx-auto max-w-[1200px] px-6 text-black">
          <section className="w-full py-16 grid place-content-center gap-16 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Image
                src="https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg?cs=srgb&dl=pexels-fauxels-3184195.jpg&fm=jpg"
                alt="8 people eating noodle dishes"
                height={250}
                className="object-cover aspect-video max-h-[250px] object-top bg-red-100"
                width={450}
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-sans font-bold">
                  Noodles With Friends
                </h2>
                <Link href="#">
                  <a className="text-sm w-max uppercase underline font-bold">
                    Order Now
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="two people handshaking"
                height={250}
                className="object-cover aspect-video max-h-[250px] object-center"
                width={450}
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-sans font-bold">
                  Become A Partner
                </h2>
                <Link href="#">
                  <a className="w-max text-sm uppercase underline font-bold">
                    Business Partners
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                src="https://images.pexels.com/photos/35969/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="phone showing google maps"
                height={250}
                className="object-cover aspect-video max-h-[250px] object-center"
                width={450}
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-sans font-bold">Try the App</h2>
                <Link href="#">
                  <a className="w-max text-sm uppercase underline font-bold">
                    Get the App
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full py-16 flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex w-full sm:max-w-[60%] flex-col gap-6">
              <h2 className="text-3xl text-black">All Noodles Welcome</h2>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                dicta unde ut blanditiis doloribus, rerum accusamus sapiente
                optio, similique, ipsa neque nemo culpa odit cupiditate! Eum
                quisquam a cupiditate commodi. Vero molestias harum, eveniet eum
                dignissimos corrupti quia at, natus quo laboriosam, veritatis
                impedit rerum ratione corporis alias culpa nobis! Exercitationem
                architecto dolor quia recusandae vitae nemo ut ad! Sunt?
                Molestiae minima facere blanditiis? Porro velit nostrum
                accusamus quidem et sit voluptatem ad quia temporibus! Suscipit
                numquam omnis ea reprehenderit veniam sequi consequuntur nisi in
                nostrum. Animi maiores repellat nemo!
              </p>
              <button className="rounded-full hover:brightness-95 focus:brightness-95 uppercase max-w-max bg-red px-8 py-2 text-white">
                about us
              </button>
            </div>
            <Image
              src="https://images.pexels.com/photos/1025316/pexels-photo-1025316.jpeg?cs=srgb&dl=pexels-calvin-hanson-1025316.jpg&fm=jpg"
              height={150}
              width={150}
              alt="pasta dish inside ceramic bowl"
              className="hidden md:block rounded-full w-[300px] h-[300px]"
            />
          </section>
          <footer className="drop-shadow-md p-3 flex flex-wrap justify-between items-center bottom-0 w-full">
            <span className="font-display flex-grow text-3xl">noodleeats</span>
            <div className="flex gap-8 text-2xl items-center">
              <TiSocialFacebook className="hover:text-red" />
              <TiSocialInstagram className="hover:text-red" />
              <TiSocialTwitter className="hover:text-red" />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
