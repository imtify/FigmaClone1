import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="wrapper py-[96px] h-[599px] flex flex-col items-center justify-between">
        <div className="flex gap-[72px]">
          <div className="flex-1 max-w-[657px]">
            <h1 className="font-semibold sm:text-[64px] sm:leading-[76px] text-4xl tracking-normal text-gray-800 mb-4">
              Lessons and insights{" "}
              <span className="text-green-500">from 8 years</span>
            </h1>
            <p className="font-normal text-base leading-6 tracking-normal text-gray-600 mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="w-[128px] h-[52px] gap-[10px] p-[14px_32px] rounded-md bg-green-500 hover:bg-green-600 text-base text-white">
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
        <div className="flex justify-center pt-16 space-x-2">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
