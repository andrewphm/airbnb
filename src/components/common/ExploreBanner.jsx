import React from 'react';
import Image from 'next/image';

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className="flex items-center rounded-xl hover:bg-gray-100 transition duration-200 ease-out hover:scale-105 cursor-pointer w-full max-w-[300px] sm:max-w-[250px] gap-x-3">
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          alt=""
        />
      </div>

      <div>
        <h2 className="font-semibold">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

const ExploreBanner = ({ exploreData }) => {
  return (
    <section className="my-8">
      <h1 className="font-semibold text-[clamp(1.5rem,_3vw,_2.2rem)] mb-4">
        Explore Nearby
      </h1>
      <ul className="grid w-full mx-auto grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 ">
        {exploreData?.map(({ img, distance, location }, i) => {
          return (
            <li
              key={i}
              className="list-none w-full mx-auto flex justify-center"
            >
              <SmallCard img={img} distance={distance} location={location} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ExploreBanner;
