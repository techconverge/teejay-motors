import React from "react";
import ContactForm_Wrapper from "./ContactForm_Wrapper";

function ContactUsForm() {
  return (
    <div className=" pb-20 w-full flex flex-col justify-start items-center">
      <div className=" w-full grayscale overflow-hidden h-[500px] absolute  bg-black">
        <img
          src="https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?t=st=1733070442~exp=1733074042~hmac=e002c5daaa10b97c5e963e9635c679cf62369668bfb8ef457c1333379cc7bc14&w=1380"
          alt="bus"
          className="w-full h-full"
        />
      </div>
      <div className=" flex-col container !px-2 ">
        <div className="relative  bg-white rounded-2xl mt-16 p-4 py-5 ">
          <ContactForm_Wrapper />
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
