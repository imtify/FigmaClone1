import React from "react";
import Image from "next/image";
import FeatureCard from "@/components/ui/feature-card";

function CommunitySection() {
  return (
    <section className="wrapper min-h-[416px]">
      <div className="mx-auto text-center">
        <h2 className="text-4xl leading-[44px] font-semibold text-gray-800 mb-4">
          Manage your entire community
          <br />
          in a single system
        </h2>
        <p className="text-gray-600 text-md pb-4">
          Who is Nextcent suitable for?
        </p>
        <div className="flex flex-col xl:flex-row justify-center gap-[128px]">
          <FeatureCard
            icon={
              <Image
                src="/Membership.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            }
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
          </FeatureCard>
          <FeatureCard
            icon={
              <Image
                src="/Building.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            }
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
          </FeatureCard>
          <FeatureCard
            icon={
              <Image
                src="/Group.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
                style={{
                  filter:
                    "invert(49%) sepia(97%) saturate(484%) hue-rotate(77deg) brightness(92%) contrast(91%)",
                }}
              />
            }
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
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
