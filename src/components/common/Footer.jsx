import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] p-6 py-8 lg:px-16 sm:px-12">
      <div className="lg:flex justify-around lg:border-b-2 border-b-gray-200">
        <div className="flex flex-col gap-2 border-b pb-6 mb-6 border-gray-300 lg:border-none">
          <p className="font-semibold">Support</p>
          <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between lg:flex-col">
            <a href="#" className="md:w-[250px]">
              Help Centre
            </a>
            <a href="#" className="md:w-[250px]">
              Safety information
            </a>
            <a href="#" className="md:w-[250px]">
              Cancellation options
            </a>
            <a href="#" className="md:w-[250px]">
              Our COVID-19 Response
            </a>
            <a href="#" className="md:w-[250px]">
              Supporting people with disabilities
            </a>
            <a href="#" className="md:w-[250px]">
              Report a neighbourhood concern
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b pb-6 mb-6 border-gray-300 lg:border-none">
          <p className="font-semibold">Community</p>

          <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between lg:flex-col">
            <a href="#" className="md:w-[250px]">
              Airbnb.org: disaster relief housing
            </a>
            <a href="#" className="md:w-[250px]">
              Support Afghan refugees
            </a>
            <a href="#" className="md:w-[250px]">
              Celebrating diversity & belonging
            </a>
            <a href="#" className="md:w-[250px]">
              Combating discrimination
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b pb-6 mb-6 border-gray-300 lg:border-none">
          <p className="font-semibold">Hosting</p>
          <div className="flex flex-col gap-2 md:flex-row flex-wrap justify-between lg:flex-col">
            <a href="#" className="md:w-[250px]">
              Try hosting
            </a>
            <a href="#" className="md:w-[250px]">
              AirCover: protection for Hosts
            </a>
            <a href="#" className="md:w-[250px]">
              Explore hosting resources
            </a>
            <a href="#" className="md:w-[250px]">
              Visit our community forum
            </a>
            <a href="#" className="md:w-[250px]">
              How to host responsibly
            </a>
          </div>
        </div>
      </div>

      <div className="text-[15px] flex-col flex gap-y-4 md:items-center md:w-full lg:flex-row lg:justify-between lg:pt-5">
        <div className="flex gap-x-16">
          <div className="flex gap-x-5">
            <div className="flex gap-x-2">
              <LanguageIcon />
              <p className="underline font-medium">English (CA)</p>
            </div>

            <div className="flex gap-x-2">
              <p>$</p>
              <p className="underline font-medium">CAD</p>
            </div>
          </div>

          <div className="gap-x-4 hidden sm:flex">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>

        <div className="flex flex-col md:items-center lg:flex-row lg:gap-x-5">
          <p className="text-[15px]">© 2022 Airbnb, Inc.</p>

          <ul className="flex gap-x-3 text-[15px]">
            <li>
              <p className="before:content-['•'] before:w-[10px] before:mx-0.5">
                Privacy
              </p>
            </li>
            <li>
              <p className="before:content-['•'] before:w-[10px] before:mx-0.5">
                Terms
              </p>
            </li>
            <li>
              <p className="before:content-['•'] before:w-[10px] before:mx-0.5">
                Sitemap
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
