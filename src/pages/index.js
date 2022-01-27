import Head from 'next/head';

// Layout
import Layout from '../components/layouts/base';
// UI Components

export default function Home() {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Head>
        <title>Airbnb Clone</title>
        <meta name="description" content="Airbnb Clone" />
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/icons/android-icon-192x192-c0465f9f0380893768972a31a614b670.png"
        />
      </Head>

      <Layout>
        <h1 className="text-blue-900 text-4xl font-extrabold ">
          Lets build airbnb
        </h1>
      </Layout>
    </main>
  );
}
