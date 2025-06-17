import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/app/data";

const posts = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/placeholder.svg?height=200&width=300",
  },
];

function BlogSection() {
  return (
    <section className="wrapper min-h-[506px] pb-36">
      <div className="mx-auto text-center">
        <h2 className="text-gray-800 text-4xl leading-[44px] font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 mb-12">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <div className="flex flex-col xl:flex-row gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={368}
                height={286}
                className="object-cover rounded-lg"
              />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10 w-[317px] h-[176px]">
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-4 h-[176px] text-center">
                    <h3 className="text-gray-800 text-[20px] leading-[28px] font-semibold mb-4">
                      {post.title}
                    </h3>
                    <Button
                      variant="ghost"
                      className="text-[20px] leading-[28px] font-semibold text-green-500 hover:text-green-600"
                    >
                      Readmore <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
