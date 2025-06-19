import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
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

export default FeatureCard;
