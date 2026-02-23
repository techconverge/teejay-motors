import Image from "next/image";
import logo from "../../../../public/Logo-light.svg";
import safety from "../../../../public/png/safety.png";

export default function OurServicesSection() {
  return (
    <div className="relative my-10  lg:pb-20 ">
      <div className="lg:mx-auto  lg:grid lg:max-w-[95rem] lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
            <svg
              fill="none"
              width={404}
              height={392}
              viewBox="0 0 404 392"
              className="absolute opacity-40 left-1/2 top-8 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    fill="currentColor"
                    width={4}
                    height={4}
                    className="text-gray-200"
                  />
                </pattern>
              </defs>
              <rect
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                width={404}
                height={392}
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <div className="relative overflow-hidden  rounded-[15px] lg:rounded-[25px]  pb-10 pt-64 ">
              <Image
                alt="safety"
                src={safety}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-red-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600  opacity-90" />
              <div className=" absolute top-5 left-5 ">
                <Image alt="teejaymotors" src={logo} className="h-12" />
              </div>
              <div className="relative px-5 lg:px-8 flex flex-col justify-center items-center lg:items-start">
                <blockquote className="mt-8 text-start">
                  <div className="relative text-lg font-medium text-white md:grow">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="absolute left-0 top-0 size-8 -translate-x-3 -translate-y-2 transform text-red-400"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative font-lexend lg:text-base font-medium text-sm lg:pr-10 ">
                      At Teejay Motors, our mission is clear: to redefine
                      mobility and logistics with innovation, reliability, and a
                      commitment to progress. Every solution we create is
                      designed to empower individuals and businesses, making
                      movement effortless and opportunities accessible.
                      Together, we’re driving towards a future where mobility
                      works seamlessly for everyone."
                    </p>
                  </div>

                  <footer className="mt-4 font-lexend">
                    <p className="text-sm lg:text-base font-bold text-rose-200">
                      Mr. Adekunle Tajudeen, <br />
                      Managing Director, Teejay Motors
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md text-start px-4 sm:max-w-3xl lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-4xl font-bold uppercase font-clash text-gray-900 sm:text-5xl">
              Your <span className="text-gradient"> safety</span> <br />
              our Promise
            </h2>
            <div className="mt-6 space-y-6 text-gray-500 font-medium text-[#111111] text-sm lg:text-base  font-lexend">
              <p>
                At Teejay Motors, you’re at the heart of everything we do. Your
                well-being and aspirations drive every decision, fueling our
                relentless commitment to put people first. That’s why your
                safety isn’t just a priority—it’s our unwavering mission.
              </p>
              <p>
                From innovative solutions to thoughtful processes, every
                interaction, product, and service is designed to provide you
                with security and peace of mind. We go above and beyond to
                ensure your trust is met with unmatched dedication, creating an
                environment where you feel protected and empowered.
              </p>
              <p>
                Progress isn’t just about technology; it’s about enabling you to
                achieve more. By leveraging cutting-edge tools and
                forward-thinking ideas, we simplify your journey, unlock new
                opportunities, and help you thrive in today’s fast-paced world.
                Your success is our success, and every step forward is designed
                to make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black relative h-[300px] px-4 lg:px-10   lg:h-[500px]  overflow-hidden  mt-10 ">
        <Image
          priority
          layout="fill"
          objectFit="cover"
          className="w-full rounded-[15px] lg:rounded-[25px]  h-full object-cover items-center"
          src="https://res.cloudinary.com/dlmjx1uwj/image/upload/v1735130770/teejaymotors-20_mhrdmr.jpg"
          alt="buses"
        />
      </div>
    </div>
  );
}
