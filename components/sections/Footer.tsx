import Image from "next/image";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-24 lg:gap-48">
          <div className="flex-2">
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
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Stay up to date</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-md"
                />
                <Button className="bg-green-500 hover:bg-green-600 rounded-l-none">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
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
