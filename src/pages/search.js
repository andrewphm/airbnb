// Layout
import Layout from '../components/layouts/base';

// Router
import { useRouter } from 'next/router';

import { format } from 'date-fns';

const Search = ({ data }) => {
  const router = useRouter();

  const { location, startDate, endDate, numOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');

  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Layout>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays for - {range} - {numOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:flex gap-x-8 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Search;

export async function getServerSideProps() {
  const res = await fetch('https://jsonkeeper.com/b/5NPS');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
