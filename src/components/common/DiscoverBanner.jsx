import Image from 'next/image';

const Card = ({ img, title }) => {
  return (
    <div className="">
      <div className="relative w-60 h-60 cursor-pointer hover:scale-[1.03] transition duration-300 ease-out md:h-72 md:w-72">
        <Image
          alt=""
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl mt-3 font-medium capitalize">{title}</h3>
    </div>
  );
};

const DiscoverBanner = ({ discoverData }) => {
  return (
    <section className="my-8">
      <h1 className="font-semibold text-[clamp(1.5rem,_3vw,_2.2rem)] mb-4">
        Discover Airbnb Experiences
      </h1>

      <ul className="flex overflow-x-scroll scrollbar-hide overflow-y-visible py-1 gap-x-5 pl-3">
        {discoverData?.map(({ img, title }, i) => (
          <li key={i} className="flex justify-center">
            <Card img={img} title={title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DiscoverBanner;
