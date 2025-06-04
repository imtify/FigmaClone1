import React from "react";
import { Users, Building, TrendingUp, Calendar } from "lucide-react";

function StatisticsSection() {
  return (
    <section className="bg-gray-50">
      <div className="wrapper max-w-6xl mx-auto flex items-center">
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
              <div className="text-2xl font-bold text-gray-800">2,245,341</div>
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
              <div className="text-2xl font-bold text-gray-800">1,926,436</div>
              <div className="text-gray-600">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
