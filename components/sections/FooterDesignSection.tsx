import Image from "next/image";
import { Button } from "@/components/ui/button";

function FooterDesignSection() {
  return (
    <section className="wrapper min-h-[433px]">
      <div className="mx-auto flex gap-[50px] items-center">
        <div className="flex-1 max-w-[442px]">
          <Image
            src="/FooterDesign.png"
            alt="Pixelgrade illustration"
            width={442}
            height={433}
            className="object-contain"
          />
        </div>
        <div className="flex-1 pr-[60px]">
          <h2 className="text-4xl leading-[44px] font-semibold text-gray-800 mb-6">
            How to design your site footer like we did
          </h2>
          <p className="text-gray-600 text-[14px] leading-[20px] mb-8">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
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
