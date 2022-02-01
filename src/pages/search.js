// Layout
import Layout from '../components/layouts/base';

// Router
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen justify-between">
      <Layout>
        <section>
          <p className="text-xs">300+ stays for 5 number of guests</p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>

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
