import React from "react";

interface ActivityStep {
  stepNumber: number;
  description: string;
}

interface ActivityProps {
  steps: ActivityStep[];
}

const Activity: React.FC<ActivityProps> = ({ steps }) => {
  return (
    <div className="w-full flex gap-4 flex-grow">
      <div className="w-full flex flex-col justify-between gap-4">
        <h1 className="text-xl font-bold">Activity</h1>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
            {steps.slice(0, 4).map((step) => (
              <div
                key={step.stepNumber}
                className="h-1/4 flex items-center gap-2"
              >
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  {step.stepNumber}
                </span>
                <div className="flex flex-col">
                  <p className="text-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4 pt-8 lg:pt-0">
            {steps.slice(4).map((step) => (
              <div
                key={step.stepNumber}
                className="h-1/4 flex items-center gap-2"
              >
                <span className="rounded-2xl bg-[#C5FFFC] flex justify-center items-center p-5 text-xl font-bold">
                  {step.stepNumber}
                </span>
                <div className="flex flex-col">
                  <p className="text-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
