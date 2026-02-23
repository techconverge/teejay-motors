import intercity from "../../../../public/png/intercity.png";
import haulage from "../../../../public/png/haulage.png";
import manufact from "../../../../public/png/manufact.png";
import private_transfers from "../../../../public/png/private.png";
import busttops from "../../../../public/png/stop.png";
import shuttle from "../../../../public/png/transfers.png";
import ServiceItem from "./ServiceItem";

function ServiceList() {
  const services = [
    {
      image: intercity,
      title: "Intercity Transfers",
      desc: "Experience reliable, comfortable, and affordable intercity transfers with Teejay Motors. Designed to connect cities and communities across Nigeria, our services ensure your journeys are smooth, stress-free, and on time. With a focus on safety, comfort, and punctuality, every trip delivers a superior travel experience. By bridging cities and empowering connections, we foster growth, accessibility, and progress for individuals and communities alike. Discover the ease of intercity travel and redefine the way you move between cities with Teejay Motors.",
    },
    {
      image: manufact,
      title: "Manufacturing & Assembling",
      desc: "At Teejay Motors, we are shaping the future of mobility with our state-of-the-art manufacturing and assembling capabilities. Every vehicle we produce is crafted to meet the highest standards of quality, safety, and efficiency, ensuring reliability for our customers and communities. Our commitment to precision and innovation allows us to deliver exceptional products that align with global benchmarks while supporting local industries. By combining advanced technology with skilled expertise, we are not only building vehicles but also driving progress and creating opportunities. Experience the difference of cutting-edge manufacturing and assembling with Teejay Motors—where quality and innovation lead the way.",
    },
    {
      image: shuttle,
      title: "Shuttle Transfers",
      desc: "Teejay Motors Nigeria Limited was founded in July 2001 under Nigerian law.",
    },
    {
      image: private_transfers,
      title: "Private Transfers",
      desc: "Teejay Motors Nigeria Limited was founded in July 2001 under Nigerian law.",
    },
    {
      image: haulage,
      title: "Logistics & Haulage ",
      desc: "Teejay Motors Nigeria Limited was founded in July 2001 under Nigerian law.",
    },
    {
      image: busttops,
      title: "Bus Transfers",
      desc: "Teejay Motors Nigeria Limited was founded in July 2001 under Nigerian law.",
    },
  ];
  return (
    <div className="lg:px-10">
      <div className="  lg:px-10 !px-0 grid grid-cols-1 gap-5 mt-16 mb-5 ">
        {services.slice(0, 2).map((item, index) => (
          <ServiceItem
            image={item.image}
            title={item.title}
            description={item.desc}
            key={index}
          />
        ))}
      </div>
      <div className="  lg:px-10 !px-0 grid grid-cols-1 gap-5  mb-40 lg:grid-cols-2 ">
        {services.slice(2).map((item, index) => (
          <ServiceItem
            image={item.image}
            title={item.title}
            description={item.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

{
  /* <div
key={index}
className="  p-5 rounded-[20px] bg-[#FFF8F7] lg:flex lg:flex-row-reverse lg:items-center "
>
<div className=" w-20 h-20 flex-none lg:w-28 lg:h-28">
  <Image src={item.image} alt="image" className="w-full h-full" />
</div>
<div className=" flex flex-1 flex-col mt-3  h-full">
  <div>
    <h2 className=" text-2xl lg:w-[55%] font-medium  font-clash">
      {item.title}
    </h2>
    <p className=" subtext mt-1 !text-[#4E4E4E]">{item.desc}</p>
  </div>
  <a
    href="#"
    className=" flex text-primary mt-6 font-medium  font-clash  underline gap-2 items-center"
  >
    Find a terminal{" "}
    <div className="bg-black text-white p-1 flex flex-col justify-center items-center  rounded-full">
      <CgArrowTopRight color="white" size={20} />
    </div>
  </a>
</div>
</div> */
}

export default ServiceList;
