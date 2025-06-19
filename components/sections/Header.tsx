import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="w-full bg-gray-50">
      <div className="wrapper flex items-center justify-between !pl-[105px] !pr-[120px] py-[30px] mx-auto">
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
            width={111}
            height={18}
            className="object-contain"
          />
        </div>

        <nav className="hidden w-[588px] h-[24px] xl:flex items-center space-x-[50px] ml-[42px]">
          <a
            href="#"
            className="font-medium text-base leading-6 tracking-normal text-[#18191F]"
          >
            Home
          </a>
          <a
            href="#"
            className="font-normal text-base leading-6 tracking-normal text-[#18191F]"
          >
            Service
          </a>
          <a
            href="#"
            className="font-normal text-base leading-6 tracking-normal text-[#18191F]"
          >
            Feature
          </a>
          <a
            href="#"
            className="font-normal text-base leading-6 tracking-normal text-[#18191F]"
          >
            Product
          </a>
          <a
            href="#"
            className="font-normal text-base leading-6 tracking-normal text-[#18191F]"
          >
            Testimonial
          </a>
          <a
            href="#"
            className="font-normal text-base leading-6 tracking-normal text-[#18191F]"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-[14px]">
          <Button
            variant="ghost"
            className="font-medium text-[14px] leading-5 tracking-normal text-green-500 px-[20.5px]"
          >
            Login
          </Button>
          <Button className="font-medium h-[40px] w-[91px] text-[14px] leading-5 tracking-normal bg-green-500 hover:bg-green-600 text-white px-[20.5px]">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
