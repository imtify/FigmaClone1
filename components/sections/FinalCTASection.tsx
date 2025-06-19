import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function FinalCTASection() {
  return (
    <section className="bg-gray-50 text-center">
      <div className="wrapper min-h-[300px] py-8 mx-auto">
        <h1 className="text-4xl lg:text-[64px] leading-[76px] font-semibold mb-8 text-gray-800">
          Pellentesque suscipit
          <br />
          fringilla libero eu.
        </h1>
        <Button className="bg-green-500 hover:bg-green-600 w-[178px] text-white px-8 py-3">
          Get a Demo <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}

export default FinalCTASection;
