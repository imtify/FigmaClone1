import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Globe } from "lucide-react";

function CommunitySection() {
  return (
    <section className="wrapper bg-white">
      <div className="mx-auto text-center">
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
  );
}

export default CommunitySection;
