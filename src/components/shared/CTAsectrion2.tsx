import { FaArrowRight } from "react-icons/fa";
import Button from "../ui/Button";
import Image from "next/image";

export default function CTASection2() {
  return (
    <div className="bg-white font-lexend">
      <div className="mx-auto container px-4 pb-16 pt-10 lg:px-10">
        <div className="overflow-hidden rounded-[15px] lg:rounded-[25px] bg-primary shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pb-12 pt-10 sm:px-10 sm:pt-16 lg:py-16 lg:pr-0">
            <div className="lg:self-center">
              <h2 className="text-3xl font-semibold  text-white sm:text-5xl font-clash">
                <span className="block">Ready to ride in comfort?</span>
              </h2>
              <p className="mt-4 text-sm lg:text-base  pr-10 lg:pr-40 text-red-100">
                Sit Back, Relax, and Enjoy the Ride – Discover Comfort Like
                Never Before on Your Next Bus Journey!
              </p>
              <a href="/our-buses">
                <Button
                  iconRight={
                    <FaArrowRight
                      size={12}
                      className=" duration-500 ml-2  group-hover:translate-x-1"
                    />
                  }
                  title="Hire a bus"
                  className=" mt-10 xl:!p-3.5 !bg-black xl:!px-6 p-3"
                />
              </a>
            </div>
          </div>
          <div className="  relative h-[300px] lg:h-full w-full bg-black   ">
            <Image
              priority
              layout="fill"
              objectFit="cover"
              alt="App screenshot"
              src="https://ucarecdn.com/c06fd541-c759-4dd1-9831-c7733d53a1a5/teejaymotors15.JPG"
              className="w-full h-full object-cover  grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
