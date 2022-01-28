import React from 'react';
import Image from 'next/image';

import heroImage from '../../assets/heroimage.webp';

const HeroBanner = () => {
  return (
    <section className="hero-container">
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          layout="fill"
          objectFit="cover"
          src={heroImage}
          alt="Hero image"
          objectPosition="bottom"
        />

        <div className="absolute text-center top-[40%] text-black w-full">
          <p className="font-bold text-md sm:text-lg md:text-2xl lg:text-4xl">
            Not sure where to go? Perfect.
          </p>
          <button className="bg-white py-3 px-10 rounded-full font-semibold shadow-md mt-3 xl:shadow-lg hover:shadow-xl active:scale-90 transition duration-150 lg:mt-10">
            <span className="text-transparent bg-[linear-gradient(90deg,_#6F019C_0%,_#C6017E_135.12%)_!important] bg-clip-text xl:text-2xl">
              I&apos;m flexible
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
