import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Building,
  Globe,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Nexcent Logo"
            width={35}
            height={24}
            className="object-contain"
          />

          <span className="text-xl font-bold text-gray-800">Nexcent</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Service
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Feature
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Product
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Testimonial
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            FAQ
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-green-500">
            Login
          </Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex-1 max-w-lg">
            <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
              Lessons and insights{" "}
              <span className="text-green-500">from 8 years</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
              Register
            </Button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
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

      {/* Clients Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clients</h2>
          <p className="text-gray-600 mb-12">
            We have been working with some Fortune 500+ clients
          </p>

          <div className="flex justify-center items-center space-x-12 opacity-60">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="w-12 h-12 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Management Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Manage your entire community
            <br />
            in a single system
          </h2>
          <p className="text-gray-600 mb-12">Who is Nextcent suitable for?</p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Membership
                  <br />
                  Organisations
                </h3>
                <p className="text-gray-600">
                  Our membership management software provides full automation of
                  membership renewals and payments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  National
                  <br />
                  Associations
                </h3>
                <p className="text-gray-600">
                  Our membership management software provides full automation of
                  membership renewals and payments.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Clubs And
                  <br />
                  Groups
                </h3>
                <p className="text-gray-600">
                  Our membership management software provides full automation of
                  membership renewals and payments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pixelgrade Section */}
      <section className="py-16 px-6 bg-gray-50">
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

      {/* Statistics Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Helping a local
              <br />
              <span className="text-green-500">business reinvent itself</span>
            </h2>
            <p className="text-gray-600">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  2,245,341
                </div>
                <div className="text-gray-600">Members</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Building className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">46,328</div>
                <div className="text-gray-600">Clubs</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">828,867</div>
                <div className="text-gray-600">Event Bookings</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  1,926,436
                </div>
                <div className="text-gray-600">Payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Design Section */}
      <section className="py-16 px-6 bg-gray-50">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How to design your site footer like we did
            </h2>
            <p className="text-gray-600 mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit libero nec lacus. Mauris pellentesque eget lorem
              malesuada wisi in. Sed bibendum elit eget erat.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="flex-1">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Testimonial"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="flex-1 pl-12 text-white">
            <p className="text-lg mb-6">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              sagittis ipsum. Nullam lacinia tincidunt ullamcorper. Mauris a
              lacinia lorem, vel suscipit ante. Pellentesque non tincidunt
              tortor. Integer pellentesque quam vel velit dapibus, ut finibus
              massa gravida.
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

      {/* Blog Section */}
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
            {[
              {
                title:
                  "Creating Streamlined Safeguarding Processes with OneRen",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title:
                  "What are your safeguarding responsibilities and how can you manage them?",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title:
                  "Revamping the Membership Model with Triathlon Australia",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, i) => (
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

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Pellentesque suscipit
            <br />
            fringilla libero eu.
          </h2>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
            Get a Demo <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-bold">Nexcent</span>
              </div>
              <p className="text-gray-400 mb-4">
                Copyright © 2020 Nexcent ltd.
                <br />
                All rights reserved
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Stay up to date</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-md"
                />
                <Button className="bg-green-500 hover:bg-green-600 rounded-l-none">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
