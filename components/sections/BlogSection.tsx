import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "What are your safeguarding responsibilities and how can you manage them?",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/placeholder.svg?height=200&width=300",
  },
];

function BlogSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 mb-12">
          The Nexcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the
          community, read about how our community are increasing their
          membership income and lot's more.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-gray-800 mb-4">{post.title}</h3>
                <Button
                  variant="ghost"
                  className="text-green-500 hover:text-green-600"
                >
                  Readmore <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
