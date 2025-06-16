import Image from "next/image";
import { Button } from "@/components/ui/button";

function FooterDesignSection() {
  return (
    <section className="wrapper bg-white">
      <div className="max-w-6xl mx-auto flex items-center">
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Mobile design illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex-1 pl-12">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit libero nec lacus. Mauris pellentesque eget lorem malesuada wisi
            in. Sed bibendum elit eget erat.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FooterDesignSection;
