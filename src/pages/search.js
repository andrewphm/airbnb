import { useState, useRef } from 'react';

// Layout
import Layout from '../components/layouts/base';

// Router
import { useRouter } from 'next/router';

import { format } from 'date-fns';

// UI Components
import InfoCard from '../components/common/InfoCard';
import Map from '../components/common/Map';

const Search = ({ data }) => {
  const router = useRouter();

  console.log(data);

  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');

  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const [elRefs, setElRefs] = useState([]);

  return (
    <main className="">
      <Layout>
        <section className="w-full py-4 flex items-center justify-between px-10 bg-white">
          <div>
            <h1 className="text-3xl font-semibold py-1">Stays in {location}</h1>
            <p className="text-xs">
              300+ stays for {formattedStartDate} to {formattedEndDate} -{' '}
              {numOfGuests} guests
            </p>
          </div>

          <div className="hidden lg:flex gap-x-8 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>

        <section className="flex w-full h-[80vh] overflow-hidden">
          <div className="grow-[2] overflow-scroll scrollbar-hide px-3 scroll-smooth">
            {data.map((item, i) => (
              <InfoCard key={i} item={item} id={i} />
            ))}
          </div>

          <div className="hidden lg:flex w-5/12">
            <Map data={data} />
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch('https://jsonkeeper.com/b/NZZ3');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
