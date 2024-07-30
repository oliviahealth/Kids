import React from "react";

export interface ActivityStep {
  stepNumber: number;
  description: string;
}

export interface ActivityProps {
  steps: ActivityStep[];
  stepNumberColor: string;
  title?: string;
}

const Activity: React.FC<ActivityProps> = ({
  steps,
  stepNumberColor,
  title = "Activity",
}) => {
  return (
    <div className="w-full flex flex-col gap-4 flex-grow">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="flex w-full flex-col lg:flex-row flex-grow gap-4">
        <div className="flex flex-col lg:w-1/2 gap-8">
          {steps.slice(0, 4).map((step) => (
            <div key={step.stepNumber} className="flex items-center gap-2">
              <span
                className="rounded-2xl flex justify-center items-center p-5 text-xl font-bold"
                style={{ backgroundColor: stepNumberColor }}
              >
                {step.stepNumber}
              </span>
              <div className="flex flex-col">
                <p className="text-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:w-1/2 gap-8">
          {steps.slice(4).map((step) => (
            <div key={step.stepNumber} className="flex items-center gap-2">
              <span
                className="rounded-2xl flex justify-center items-center p-5 text-xl font-bold"
                style={{ backgroundColor: stepNumberColor }}
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
  );
};

export default Activity;
