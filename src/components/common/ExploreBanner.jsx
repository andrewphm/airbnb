import Image from 'next/image';

import giftCardMobile from '../../assets/giftcardmobile.webp';

const ExploreBanner = () => {
  return (
    <section className="flex justify-center items-center py-4">
      <div className="w-[335px] h-[430px] mx-4 relative rounded-3xl overflow-hidden">
        <Image
          src={giftCardMobile}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom bottom"
          alt=""
        />

        <div className="absolute top-1/2 w-full text-center">
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
    </section>
  );
};

export default ExploreBanner;
