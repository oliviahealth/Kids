"use client";
import React, { useState, useEffect } from "react";
import logo from "/public/images/activities/fantasy-forest/week4/world-icon.svg";

import image1 from "../../../../../../public/images/dashboard/fantasyForest/week/6/pencil.svg";
import image2 from "../../../../../../public/images/dashboard/fantasyForest/week/6/paper.svg";
import image3 from "../../../../../../public/images/dashboard/fantasyForest/week/6/paper.svg";
import image4 from "../../../../../../public/images/dashboard/fantasyForest/week/6/tree.svg";

import downloadIcon from "@/public/images/dashboard/rainbowValley/shared/download.png";
import Header from "@/components/Template/Header";
import Footer from "@/components/Template/Footer";
import IntroductionAndMaterials from "@/components/Template/IntroductionAndMaterials";
import { tap } from "node:test/reporters";

type CheckboxState = {
  [key: string]: boolean;
};

export default function Page1({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const handleCheckboxChange = (type: keyof typeof isChecked) => {
    setIsChecked((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const allChecked = Object.values(isChecked).every(Boolean);
    setButtonDisabled(!allChecked);
  }, [isChecked]);

  return (
    <>
      <Header
        logoSrc={logo}
        title="Healthy Heart Scavenger Hunt"
        subtitle="Nutrition - Fantasy Forest"
        homeLink="/"
        subtitleColor="#35A663"
      />

      <IntroductionAndMaterials
        introductionTitle="Introduction"
        introductionText="An important part of a child’s growth and development is the food they eat. Feeding your child a healthy diet from a young age has been proven to reduce future health problems and aids in their brain development. Emphasizing the importance of having a balanced diet with a variety of foods is important to start teaching your child the benefits of a healthy diet. In this activity, children practice counting techniques by counting the number of fruits and vegetables they find, as well as organizing skills by classifying fruits and vegetables into specific groups based on specific characteristics. This activity is a fun scavenger hunt that also allows your child to be introduced to a variety of healthy and nutritious food choices."
        materialsTitle="Materials Needed"
        materials={[
          {
            name: "Pen/Pencil",
            image: image1,
            alt: "image1",
            key: "image1",
          },
          {
            name: "Provided Worksheet",
            image: image2,
            alt: "image2",
            key: "image2",
          },
          { name: "Blank Sheet of Paper", image: image3, alt: "image3", key: "image3" },
          { name: "Household Fruits/Veggies", image: image4, alt: "image4", key: "image4" },
          { name: "", image: "empty", alt: "Item 5", key: "item5" },
          { name: "", image: "empty", alt: "Item 6", key: "item6" },
          { name: "", image: "empty", alt: "Item 7", key: "item7" },
          { name: "", image: "empty", alt: "Item 8", key: "item8" },
        ]}
        isChecked={isChecked}
        handleCheckboxChange={handleCheckboxChange}
        mainBackgroundColor="#B5F6D0"
        emptyCardBackgroundColor="#88DFAC"
        checkedCardColor="#35A663"
        link={[
          {
            text: "Download \"Provided Worksheet\"",
            img: downloadIcon,
            url: "https://tamucs.sharepoint.com/teams/Team-OLIVIAContentWorkgroup/Shared%20Documents/Forms/AllItems.aspx?id=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL%2FOLIVIAKIDS%20Creating%20Coping%20Skills%2Epdf&parent=%2Fteams%2FTeam%2DOLIVIAContentWorkgroup%2FShared%20Documents%2FGeneral%2FOlivia%2DKIDS%2FContent%20Team%20Folder%2FFINALIZED%20Content%20Folder%2FWeek%203%20Emotional%2C%20Behavioral%20%26%20Social%20FINAL",
          },
        ]}
      />
      <Footer
        onNext={onNext}
        onBack={onBack}
        rightButtonDisabledAllowed={true}
        rightButtonDisabled={buttonDisabled}
        leftButtonText="Learn More"
        rightButtonText="Continue"
      />
    </>
  );
}