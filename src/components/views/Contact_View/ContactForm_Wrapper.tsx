import Button from "@/components/ui/Button";
import { BiSolidSend } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function ContactForm_Wrapper() {
  return (
    <div className="relative isolate  font-lexend">
      <div className=" grid  grid-cols-1 lg:grid-cols-2">
        <div className="flex-1 h-full lg:p-20 p-5 rounded-[20px]  bg-primary">
          <div className="grid grid-cols-1 ">
            <div>
              <h2 className="text-pretty text-white font-clash text-5xl font-semibold tracking-tight">
                Get in touch with Us
              </h2>
              <p className="mt-4 text-base/7 pr-20  text-red-100">
                You can reach us via any of the contact below
              </p>
            </div>
            <div className="grid mt-20 grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl h-fit cursor-pointer bg-white p-5">
                <h3 className="text-base/7 font-semibold text-slate-900">
                  Email Us
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-red-600"
                        href="mailto:info@teejaymotors.com"
                      >
                        info@teejaymotors.com
                      </a>
                    </dd>
                    <p className="text-slate-700 text-sm">
                      Click here to send us a mail
                    </p>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl cursor-pointer bg-slate-50 p-5">
                <h3 className="text-base/7 font-semibold text-slate-900">
                  Call Us
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-slate-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                  </div>
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                      <a
                        className="font-semibold text-red-600"
                        href="tel:+2349065566300"
                      >
                        +2349065566300
                      </a>
                    </dd>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Click here to give us a call
                  </p>
                </dl>
              </div>
              <div className="rounded-2xl cursor-pointer bg-black  p-5">
                <a
                  className="font-semibold text-red-600"
                  href="https://wa.me/+2349065566300"
                >
                  <FaWhatsapp className="text-4xl text-white  mb-2" />
                  <h3 className="text-base/7 font-semibold text-white">
                    Chat Us on Whatsapp
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Click here to chat with us on Whatsapp
                  </p>
                </a>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5">
                <div className="mb-3">
                  <div className="  text-3xl flex items-center justify-start mt-2 gap-4">
                    {/* <FaFacebook className=" hover:text-primary cursor-pointer" /> */}
                    <a
                      target="_blank"
                      href="https://www.instagram.com/teejaymotors"
                    >
                      <FaInstagram className=" hover:text-primary cursor-pointer" />
                    </a>
                    {/* <FaLinkedin className=" hover:text-primary cursor-pointer" /> */}
                  </div>
                </div>
                <h3 className="text-base/7 font-semibold text-slate-900">
                  Follow Us on Social Media
                </h3>
                <p className="text-slate-700 text-sm">
                  Click one of the icons to follow us
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:items-center    lg:justify-center">
          <form
            action="#"
            method="POST"
            className="px-4   py-10 lg:pb-24 lg:pt-20 font-lexend sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="w-full lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 lg:gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-slate-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-slate-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-slate-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-slate-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-slate-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button
                  title="Send Message"
                  iconRight={<BiSolidSend className="ml-4 text-xl" />}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
