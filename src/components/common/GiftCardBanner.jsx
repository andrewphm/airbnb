import Image from 'next/image';

import giftCardMobile from '../../assets/giftcardmobile.webp';
import giftCardMedium from '../../assets/giftcardmedium.webp';
import giftCardLarge from '../../assets/giftcardlarge.webp';

const GiftCardBanner = () => {
  return (
    <section className="flex justify-center items-center p-4 xl:p-0 w-full md:w-full md:h-[500px] mt-8">
      <div className="mobile w-[350px] h-[450px] xs:w-[400px] xs:h-[550px] sm:w-[440px] sm:h-[600px] relative rounded-3xl overflow-hidden md:hidden">
        <Image
          src={giftCardMobile}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt=""
        />
        <div className="absolute top-1/2 w-full text-center  sm:top-[55%]">
          <p className="font-semibold">Introducing</p>
          <p className="text-5xl font-semibold">
            Airbnb
            <br></br>
            gift cards
          </p>
          <button className="text-white py-3 px-8 bg-black rounded-xl mt-4 shadow-md hover:shadow-lg active:scale-90 transition duration-150">
            Shop now
          </button>
        </div>
      </div>

      <div className="large w-full xl:max-w-[1200px] h-[500px] relative z-10 rounded-3xl overflow-hidden hidden md:inline-flex bg-[#EFEFEF]">
        <Image
          src={giftCardLarge}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt=""
        />
        <div className="absolute top-[20%] left-[15%] w-min-[300px] text-center">
          <p className="font-semibold text-2xl mb-3">Introducing</p>
          <p className="text-6xl font-semibold">
            Airbnb
            <br></br>
            gift cards
          </p>
          <button className="text-2xl text-white py-3 px-8 bg-black rounded-xl mt-8 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-100 transition duration-150">
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftCardBanner;
