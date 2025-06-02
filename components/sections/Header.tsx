import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="flex items-center justify-between max-w-[1440px] h-[84px] mx-auto px-6 py-4 bg-white">
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

      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Home
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Service
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Feature
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Product
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          Testimonial
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">
          FAQ
        </a>
      </nav>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-green-500">
          Login
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Sign up
        </Button>
      </div>
    </header>
  );
}

export default Header;
