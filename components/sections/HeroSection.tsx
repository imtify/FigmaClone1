import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="bg-gray-50 relative">
      <div className="wrapper py-[96px]">
        <div className="flex gap-[72px] items-start">
          <div className="flex-1 max-w-[657px]">
            <h1 className="font-semibold sm:text-[64px] sm:leading-[76px] text-4xl tracking-normal text-gray-800 mb-4">
              Lessons and insights{" "}
              <span className="text-green-500">from 8 years</span>
            </h1>
            <p className="font-normal text-base leading-6 tracking-normal text-gray-600 mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="w-[128px] gap-[10px] p-[14px_32px]       bg-green-500 hover:bg-green-600 text-base text-white">
              Register
            </Button>
          </div>
          <div className="flex-2 flex justify-center">
            <div className="relative">
              <Image
                src="/Hero.png"
                alt="Hero illustration"
                width={391}
                height={407}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dots positioned absolutely */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}

export default HeroSection;
