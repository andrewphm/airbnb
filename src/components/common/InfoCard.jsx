import { Favorite, FavoriteOutlined, Star } from '@mui/icons-material';
import Image from 'next/image';

const InfoCard = ({ item }) => {
  const { img, description, lat, long, location, price, star, title, total } =
    item;

  return (
    <div className="flex flex-col w-full h-full mb-4 md:flex-row md:max-h-[250px] max-w-xl mx-auto justify-center md:max-w-full md:justify-start md:p-5 border-b">
      <div className="relative w-full md:min-w-[300px] h-[clamp(13rem,_50vw,_20rem)] md:max-h-52 md:max-w-[315px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt=""
          className="rounded-xl"
        />
        <div className="absolute right-4 top-2 text-red-500 md:hidden">
          <FavoriteOutlined className="text-3xl hover:scale-105 cursor-pointer" />
        </div>
      </div>

      <div className="info w-10/12 py-2 md:px-4 md:hidden">
        <div className="flex items-center text-[15px]">
          <Star className="text-red-500 text-[15px]" />
          <p>{star}</p>
        </div>
        <p className="text-lg">{location}</p>
        <p className="truncate text-lg">{title}</p>
        <p className="font-bold">{price}</p>
        <p className="truncate md:overflow-visible md:whitespace-normal w-full">
          {description}
        </p>
      </div>

      {/* show on min-width 776px */}
      <div className="hidden md:flex flex-col px-3 relative justify-between">
        <div>
          <p className="text-[15px] text-gray-500">{location}</p>
          <p className="truncate text-xl">{title}</p>
        </div>

        <p className="truncate md:overflow-visible md:whitespace-normal w-10/12">
          {description}
        </p>

        <div className="flex justify-between">
          <div className="flex items-center text-[15px]">
            <Star className="text-red-500 text-[15px]" />
            <p>{star}</p>
          </div>
          <p className="font-bold">{price}</p>
        </div>

        <div className="absolute right-4 top-2 text-red-500 ">
          <FavoriteOutlined className="text-2xl hover:scale-105 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
