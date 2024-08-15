"use client";
import React from "react";
import logo from "@/public/images/dashboard/blossomHaven/shared/logo.png";
import Activity from "@/components/Template/ActivitySteps";
import Footer from "@/components/Template/Footer";
import Header from "@/components/Template/Header";

export default function Page2({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const activitySteps = [
    {
      stepNumber: 1,
      description:
        "Grab two plastic cups and let you and your child decorate the outside of the cups. This lets the child grow a connection to the maracas and have fun creative arts fun.",
    },
    {
      stepNumber: 2,
      description:
        "Fill up one of the plastic cups with items to make the maracas sound. This can be beans, dried pasta, nuts, baby snacks, corn kernels, rice, and many other items that can be found within the house.",
    },
    {
      stepNumber: 3,
      description:
        "Place non-toxic glue on the rim of the cup filled with maraca items. Place the other plastic cup on top of the glued one rim to rim and let the glue dry.",
    },
    {
      stepNumber: 4,
      description:
        "Once glue is dried, tape the rims of the plastic cups as an added precaution that nothing will fall out of the maracas.",
    },
    {
      stepNumber: 5,
      description:
        "Make one more of these for two total. When finished, start shaking them around to show your baby how it works and start singing to them. Make sure to smile, laugh, and get your child engaged in it.",
    },
    {
      stepNumber: 6,
      description:
        "You can use these maracas now whenever you want. Story time or anytime you sing to your child you can bring out these maracas and get your child jumping, dancing, and singing along.",
    },
  ];

  return (
    <>
      <Header
        logoSrc={logo}
        title="Baby's Homemade Maracas"
        subtitle="Sound & Music - Blossom Haven"
        homeLink="/home"
        subtitleColor="#F1A533"
      />

      <Activity steps={activitySteps} stepNumberColor="#F8E7BA" />
      <Footer
        onNext={onNext}
        onBack={onBack}
        leftButtonText="Back"
        rightButtonText="Continue"
        leftClickAllowed={true}
      />
    </>
  );
}
