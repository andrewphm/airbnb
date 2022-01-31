import Image from 'next/image';

const InspireBanner = ({ img, title, description, buttonText }) => {
  return (
    <section className="my-12 w-full">
      <div className="relative w-full h-[400px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={description}
          className="rounded-2xl"
        />

        <div className="absolute top-10 left-10 w-1/2 space-y-3 lg:left-20 lg:top-20">
          <h3 className="text-3xl font-medium lg:text-4xl ">{title}</h3>
          <p className="font-semibold lg:text-xl">{description}</p>
          <button className="text-sm text-white lg:text-xl bg-gray-900 px-4 py-2 rounded-lg hover:scale-105 shadow-md hover:shadow-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InspireBanner;
