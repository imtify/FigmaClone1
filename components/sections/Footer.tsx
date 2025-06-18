import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="bg-gray-900 min-h-[328px] text-white py-16">
      <div className="wrapper mx-auto">
        <div className="flex flex-col md:flex-row gap-20 lg:gap-[125px]">
          <div className="flex-2 space-y-10">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src="/logoFooter.svg"
                alt="Logo"
                width={43}
                height={30}
                className="object-contain"
              />
              <Image
                src="/logo2Footer.svg"
                alt="Logo"
                width={138}
                height={26}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Copyright © 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>
            <div className="flex space-x-4">
              <Image
                src="/Social1.svg"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Image
                src="/Social2.svg"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Image
                src="/Social3.svg"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <Image
                src="/Social4.svg"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row gap-24 lg:gap-[120px]">
            <div>
              <h3 className="text-[20px] leading-[28px] font-bold mb-4">
                Company
              </h3>
              <ul className="text-[14px] leading-[20px] space-y-2 text-gray-400">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] leading-[28px] font-bold mb-4">
                Support
              </h3>
              <ul className="text-[14px] leading-[20px] space-y-2 text-gray-400">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[20px] leading-[28px] font-bold mb-4">
                Stay up to date
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="text-[14px] leading-[20px] flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-md"
                />
                <Button className="bg-gray-800 rounded-l-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_443_994)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_443_994">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
