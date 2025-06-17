import React from "react";
import { Users, Building, Globe } from "lucide-react";

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="max-w-[299px] h-[260px] gap-2 rounded-[8px] bg-white shadow flex flex-col items-center text-center p-6"
      style={{ boxSizing: "border-box" }}
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-[28px] leading-[36px] font-bold text-gray-800 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-[14px] leading-[20px]">{children}</p>
    </div>
  );
}

function CommunitySection() {
  return (
    <section className="wrapper h-[416px]">
      <div className="mx-auto text-center">
        <h2 className="text-4xl leading-[44px] font-semibold text-gray-800 mb-4">
          Manage your entire community
          <br />
          in a single system
        </h2>
        <p className="text-gray-600 text-md pb-4">
          Who is Nextcent suitable for?
        </p>
        <div className="flex justify-center gap-[128px]">
          <Card
            icon={<Users className="w-8 h-8 text-green-500" />}
            title={
              <>
                <span>Membership</span>
                <br />
                Organisations
              </>
            }
          >
            Our membership management software provides full automation of
            membership renewals and payments.
          </Card>
          <Card
            icon={<Building className="w-8 h-8 text-green-500" />}
            title={
              <>
                <span>National</span>
                <br />
                Associations
              </>
            }
          >
            Our membership management software provides full automation of
            membership renewals and payments.
          </Card>
          <Card
            icon={<Globe className="w-8 h-8 text-green-500" />}
            title={
              <>
                <span>Clubs And</span>
                <br />
                Groups
              </>
            }
          >
            Our membership management software provides full automation of
            membership renewals and payments.
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
