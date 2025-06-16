import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="w-full bg-gray-50">
      <div className="flex items-center justify-between wrapper h-[84px] mx-auto">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={35}
            height={24}
            className="object-contain"
          />

          <Image
            src="/logo2.svg"
            alt="Logo"
            width={112}
            height={20}
            className="object-contain"
          />
        </div>

        <nav className="hidden w-[425px] h-[30px] xl:flex items-center space-x-8">
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800"
          >
            Home
          </a>
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800text-gray-600 hover:text-gray-800"
          >
            Service
          </a>
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800"
          >
            Feature
          </a>
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800"
          >
            Product
          </a>
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800"
          >
            Testimonial
          </a>
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-gray-600 hover:text-gray-800"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="font-medium text-[14px] leading-5 tracking-normal text-green-500"
          >
            Login
          </Button>
          <Button className="font-medium text-[14px] leading-5 tracking-normal bg-green-500 hover:bg-green-600 text-white">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
