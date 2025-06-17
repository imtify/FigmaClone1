import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function PixelGradeSection() {
  return (
    <section className="wrapper h-[433px]">
      <div className="mx-auto flex gap-[50px] items-center">
        <div className="flex-1 max-w-[442px]">
          <Image
            src="/Pixelgrade.png"
            alt="Pixelgrade illustration"
            width={442}
            height={433}
            className="object-contain"
          />
        </div>
        <div className="flex-1 pr-[60px]">
          <h2 className="text-4xl leading-[44px] font-semibold text-gray-800 mb-6">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 text-[14px] leading-[20px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PixelGradeSection;
