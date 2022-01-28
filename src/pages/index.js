import Head from 'next/head';

//Axios
import axios from 'axios';

// Layout
import Layout from '../components/layouts/base';
// UI Components
import HeroBanner from '../components/common/HeroBanner';
import GiftCardBanner from '../components/common/GiftCardBanner';
import ExploreBanner from '../components/common/ExploreBanner';

export default function Home({ exploreData }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone" />
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
        />
      </Head>

      <Layout>
        <HeroBanner />
        <GiftCardBanner />
        <section className="max-w-[1350px] px-5 mx-auto xl:max-w-7xl">
          <ExploreBanner exploreData={exploreData} />
        </section>
      </Layout>
    </main>
  );
}

export async function getStaticProps() {
  try {
    const { data: exploreData } = await axios.get(
      'https://jsonkeeper.com/b/4G1G'
    );

    return {
      props: {
        exploreData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
