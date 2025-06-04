import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function PixelGradeSection() {
  return (
    <section className="wrapper">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Pixelgrade illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex-1 pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-gray-600 mb-8">
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
