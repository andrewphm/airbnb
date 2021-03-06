import { useState, useRef, useEffect, createRef } from 'react';

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

  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(data.length)
      .fill()
      .map((_, i) => createRef());

    setElRefs(refs);
  }, [data]);

  return (
    <main className="">
      <Layout>
        <section className="w-full py-4 flex items-center justify-between px-4 md:px-10 bg-white">
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

        <section className="flex w-screen md:h-[80vh] md:overflow-hidden mt-3 md:mt-0">
          <div className="w-full md:grow-[2] md:overflow-scroll md:scrollbar-hide px-4 scroll-smooth flex flex-col gap-y-4 md:gap-y-0">
            {data.map((item, i) => (
              <InfoCard key={i} item={item} id={i} elRef={elRefs[i]} />
            ))}
          </div>

          <div className="hidden lg:flex w-5/12">
            <Map data={data} elRefs={elRefs} />
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
