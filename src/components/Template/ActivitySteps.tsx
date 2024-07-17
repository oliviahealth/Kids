import React from "react";

export interface ActivityStep {
  stepNumber: number;
  description: string;
}

export interface ActivityProps {
  steps: ActivityStep[];
  stepNumberColor: string;
}

const Activity: React.FC<ActivityProps> = (activityProps: ActivityProps) => {
  return (
    <div className="w-full flex gap-4 flex-grow">
      <div className="w-full flex flex-col justify-between gap-4">
        <h1 className="text-xl font-bold">Activity</h1>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4">
            {activityProps.steps.slice(0, 4).map((step) => (
              <div key={step.stepNumber} className="h-1/4 flex items-center gap-2">
                <span
                  className="rounded-2xl flex justify-center items-center p-5 text-xl font-bold"
                  style={{ backgroundColor: activityProps.stepNumberColor }}
                >
                  {step.stepNumber}
                </span>
                <div className="flex flex-col">
                  <p className="text-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-4 pt-8 lg:pt-0">
            {activityProps.steps.slice(4).map((step) => (
              <div key={step.stepNumber} className="h-1/4 flex items-center gap-2">
                <span
                  className="rounded-2xl flex justify-center items-center p-5 text-xl font-bold"
                  style={{ backgroundColor: activityProps.stepNumberColor }}
                >
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