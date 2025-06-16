import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function TestimonialSection() {
  return (
    <section className="bg-gray-50">
      <div className="wrapper py-8 mx-auto flex items-center">
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Testimonial"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="flex-1 pl-12">
          <p className="text-lg text-gray-600 mb-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            sagittis ipsum. Nullam lacinia tincidunt ullamcorper. Mauris a
            lacinia lorem, vel suscipit ante. Pellentesque non tincidunt tortor.
            Integer pellentesque quam vel velit dapibus, ut finibus massa
            gravida.
          </p>
          <div className="mb-8">
            <div className="font-bold">Tim Smith</div>
            <div className="text-gray-400">
              British Dragon Boat Racing Association
            </div>
          </div>
          <div className="flex items-center space-x-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-8 h-8 bg-gray-600 rounded"></div>
            ))}
            <Button
              variant="ghost"
              className="text-green-500 hover:text-green-400"
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
