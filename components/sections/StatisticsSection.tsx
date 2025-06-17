import React from "react";
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
      <div className="wrapper h-[288px] py-16 mx-auto flex gap-[72px] items-center">
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
            icon={<Users className="w-8 h-8 text-green-500" />}
            value="2,245,341"
            label="Members"
          />
          <StatBox
            icon={<Building className="w-8 h-8 text-green-500" />}
            value="46,328"
            label="Clubs"
          />
          <StatBox
            icon={<TrendingUp className="w-8 h-8 text-green-500" />}
            value="828,867"
            label="Event Bookings"
          />
          <StatBox
            icon={<Calendar className="w-8 h-8 text-green-500" />}
            value="1,926,436"
            label="Payments"
          />
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
