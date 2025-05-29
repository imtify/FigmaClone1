import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroSection() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
            Lessons and insights{" "}
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
            Register
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Image
              src="/Hero.png"
              alt="Hero illustration"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-12 space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}

export default HeroSection;
