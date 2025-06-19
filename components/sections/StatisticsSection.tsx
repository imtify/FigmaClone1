import React from "react";
import Image from "next/image";
import { Users, Building, TrendingUp, Calendar } from "lucide-react";

function StatisticsSection() {
  function StatBox({
    icon,
    value,
    label,
  }: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }) {
    return (
      <div className="flex w-[255px] items-center space-x-4">
        {icon}
        <div>
          <div className="text-[28px] leading-[36px] font-bold text-gray-800">
            {value}
          </div>
          <div className="text-gray-600">{label}</div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50">
      <div className="wrapper min-h-[288px] py-16 mx-auto flex flex-col lg:flex-row gap-[72px] items-center">
        <div className="flex-1">
          <h2 className="text-4xl leading-[44px] font-semibold text-gray-800 mb-4">
            Helping a local
            <br />
            <span className="text-green-500">business reinvent itself</span>
          </h2>
          <p className="text-gray-600 mb-8">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex-1 h-[160px] flex flex-wrap gap-6">
          <StatBox
            icon={
              <Image
                src="/Member.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain "
              />
            }
            value="2,245,341"
            label="Members"
          />
          <StatBox
            icon={
              <Image
                src="/Club.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            }
            value="46,328"
            label="Clubs"
          />
          <StatBox
            icon={
              <Image
                src="/Booking.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain "
              />
            }
            value="828,867"
            label="Event Bookings"
          />
          <StatBox
            icon={
              <Image
                src="/Payment.svg"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain "
              />
            }
            value="1,926,436"
            label="Payments"
          />
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
