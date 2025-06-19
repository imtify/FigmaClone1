import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { clients } from "@/app/data";

function TestimonialSection() {
  return (
    <section className="bg-gray-50">
      <div className="wrapper h-[390px] py-8 mx-auto flex gap-[78px] items-center">
        <div className="flex-2">
          <Image
            src="/Testimonial.png"
            alt="Testimonial"
            width={326}
            height={326}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1">
          <p className="text-md text-gray-600 mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className="mb-8">
            <div className="text-green-500 text-[20px] leading-[28px] font-semibold">
              Tim Smith
            </div>
            <div className="text-gray-400">
              British Dragon Boat Racing Association
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {clients.slice(0, -1).map((client, i) => (
              <div
                key={i}
                className="w-12 h-12 flex items-center justify-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
            <Button
              variant="ghost"
              className="text-green-500 text-[20px] leading-[28px] font-semibold hover:text-green-400"
            >
              Meet all customers <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
