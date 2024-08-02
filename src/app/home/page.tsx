"use client";

import SideNav from "@/components/SideNav";
import React, { useState, useEffect, useRef } from "react";
import HomeNav from "@/components/HomeNav";
import Map from "@/components/Map";

interface MapMarkers {
  name: string;
  markers: {
    id: string;
    x: number;
    y: number;
    link: string;
    backgroundColor: string;
    borderColor: string;
    name: string;
  }[];
}
[];

const mapImages = [
  "/images/activities/parental-paradise/parental-paradise-map.png",
  "/images/activities/blossom-haven/blossom-haven-map.png",
  "/images/activities/starlight-meadows/starlight-meadows-map.png",
  "/images/activities/rainbow-valley/rainbow-valley-map.png",
  "/images/activities/adventure-bay/adventure-bay-map.png",
  "/images/activities/fantasy-forest/fantasy-forest-map.png",
];

const mapMarkers: MapMarkers[] = [
  {
    name: "Pregnancy Meditation",
    markers: [
      {
        id: "1",
        x: 25,
        y: 20,
        link: "/activities/pregnancy-meditation/baby-growth-journal",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Baby Growth Journal",
      },
      {
        id: "2",
        x: 10,
        y: 30,
        link: "/activities/pregnancy-meditation/homemade-growth-chart",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Homemade Growth Chart",
      },
      {
        id: "3",
        x: 15,
        y: 55,
        link: "/activities/pregnancy-meditation/maternity-photoshoot",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Maternity Photoshoot",
      },
      {
        id: "4",
        x: 25,
        y: 75,
        link: "/activities/pregnancy-meditation/meditation",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Meditation",
      },
      {
        id: "5",
        x: 40,
        y: 60,
        link: "/activities/pregnancy-meditation/memory-box",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Memory Box",
      },
      {
        id: "6",
        x: 60,
        y: 60,
        link: "/activities/pregnancy-meditation/my-babys-name-sign",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "My Baby's Name Sign",
      },
      {
        id: "7",
        x: 75,
        y: 65,
        link: "/activities/pregnancy-meditation/pregnancy-support-system",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Pregnancy Support System",
      },
      {
        id: "8",
        x: 85,
        y: 40,
        link: "/activities/pregnancy-meditation/relaxation-yoga",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Relaxation Yoga",
      },
    ],
  },
  {
    name: "Blossom Haven",
    markers: [
      {
        id: "1",
        x: 50,
        y: 20,
        link: "/activities/blossom-haven/at-home-exercises",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "At Home Exercises",
      },
      {
        id: "2",
        x: 40,
        y: 25,
        link: "/activities/blossom-haven/walking-nature-journal",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Walking Nature Journal",
      },
      {
        id: "3",
        x: 30,
        y: 30,
        link: "/activities/blossom-haven/marker3",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Baby's Magic Mirror!",
      },
      {
        id: "4",
        x: 20,
        y: 35,
        link: "/activities/blossom-haven/marker4",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Baby's Puppet Playtime",
      },
      {
        id: "5",
        x: 30,
        y: 45,
        link: "/activities/blossom-haven/marker5",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Baby's Day Out!",
      },
    ],
  },
  {
    name: "Starlight Meadows",
    markers: [
      {
        id: "1",
        x: 50,
        y: 20,
        link: "/activities/starlight-meadows/marker1",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Creating a Nighttime Routine",
      },
      {
        id: "2",
        x: 35,
        y: 30,
        link: "/activities/starlight-meadows/marker2",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Stretching (Stress Management)",
      },
      {
        id: "3",
        x: 20,
        y: 30,
        link: "/activities/starlight-meadows/marker3",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Box Breathing (Stress Management)",
      },
      {
        id: "4",
        x: 15,
        y: 60,
        link: "/activities/starlight-meadows/marker4",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Walking (Stress Management)",
      },
    ],
  },

  {
    name: "Rainbow Valley",
    markers: [
      {
        id: "1",
        x: 50,
        y: 10,
        link: "/activities/rainbow-valley/marker1",
        backgroundColor: "#E74C3C",
        borderColor: "#C0392B",
        name: "Create Your Own Music Playlist",
      },
      {
        id: "2",
        x: 35,
        y: 12,
        link: "/activities/rainbow-valley/marker2",
        backgroundColor: "#E67E22",
        borderColor: "#D35400",
        name: "Journaling",
      },
      {
        id: "3",
        x: 20,
        y: 15,
        link: "/activities/rainbow-valley/marker3",
        backgroundColor: "#F1C40F",
        borderColor: "#F39C12",
        name: "Vision Board for Self-Care",
      },
      {
        id: "4",
        x: 5,
        y: 25,
        link: "/activities/rainbow-valley/marker4",
        backgroundColor: "#2ECC71",
        borderColor: "#27AE60",
        name: "Mindful Driving",
      },
      {
        id: "5",
        x: 15,
        y: 32,
        link: "/activities/rainbow-valley/marker5",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Self-Care Wheel",
      },
      {
        id: "6",
        x: 25,
        y: 35,
        link: "/activities/rainbow-valley/marker6",
        backgroundColor: "#9B59B6",
        borderColor: "#8E44AD",
        name: "Cleaning Schedule",
      },
      {
        id: "7",
        x: 35,
        y: 37,
        link: "/activities/rainbow-valley/marker7",
        backgroundColor: "#E74C3C",
        borderColor: "#C0392B",
        name: "Self-Care Bingo",
      },
      {
        id: "8",
        x: 45,
        y: 40,
        link: "/activities/rainbow-valley/marker8",
        backgroundColor: "#E67E22",
        borderColor: "#D35400",
        name: "Foil Painting",
      },
      {
        id: "9",
        x: 52,
        y: 35,
        link: "/activities/rainbow-valley/marker9",
        backgroundColor: "#F1C40F",
        borderColor: "#F39C12",
        name: "Nature Collage",
      },
      {
        id: "10",
        x: 60,
        y: 30,
        link: "/activities/rainbow-valley/marker10",
        backgroundColor: "#2ECC71",
        borderColor: "#27AE60",
        name: "Salt Dough",
      },
      {
        id: "11",
        x: 70,
        y: 35,
        link: "/activities/rainbow-valley/marker11",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Toilet Paper Roll Stamps",
      },
      {
        id: "12",
        x: 80,
        y: 40,
        link: "/activities/rainbow-valley/marker12",
        backgroundColor: "#9B59B6",
        borderColor: "#8E44AD",
        name: "Ice Cube Paint",
      },
      {
        id: "13",
        x: 90,
        y: 45,
        link: "/activities/rainbow-valley/marker13",
        backgroundColor: "#E74C3C",
        borderColor: "#C0392B",
        name: "Create Your Own Paper Plate Sun",
      },
      {
        id: "14",
        x: 75,
        y: 50,
        link: "/activities/rainbow-valley/marker14",
        backgroundColor: "#E67E22",
        borderColor: "#D35400",
        name: "Create Your Own Stress Ball",
      },
      {
        id: "15",
        x: 65,
        y: 55,
        link: "/activities/rainbow-valley/marker15",
        backgroundColor: "#F1C40F",
        borderColor: "#F39C12",
        name: "Sorting With Friends",
      },
      {
        id: "16",
        x: 55,
        y: 60,
        link: "/activities/rainbow-valley/marker16",
        backgroundColor: "#2ECC71",
        borderColor: "#27AE60",
        name: "The Sharing Circle",
      },
      {
        id: "17",
        x: 45,
        y: 55,
        link: "/activities/rainbow-valley/marker17",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Toss With a Friend",
      },
      {
        id: "18",
        x: 35,
        y: 60,
        link: "/activities/rainbow-valley/marker18",
        backgroundColor: "#9B59B6",
        borderColor: "#8E44AD",
        name: "Creating Coping Skills",
      },
      {
        id: "19",
        x: 25,
        y: 55,
        link: "/activities/rainbow-valley/marker19",
        backgroundColor: "#E74C3C",
        borderColor: "#C0392B",
        name: "Match the Faces",
      },
    ],
  },
  {
    name: "Adventure Bay",
    markers: [
      {
        id: "1",
        x: 30,
        y: 15,
        link: "/activities/adventure-bay/marker1",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Affirmations",
      },
      {
        id: "2",
        x: 15,
        y: 25,
        link: "/activities/adventure-bay/marker2",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Power of Coloring",
      },
      {
        id: "3",
        x: 20,
        y: 40,
        link: "/activities/adventure-bay/marker3",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "My Gratitude Jars",
      },
      {
        id: "4",
        x: 25,
        y: 65,
        link: "/activities/adventure-bay/marker4",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Focusing on Feelings",
      },

      {
        id: "5",
        x: 35,
        y: 65,
        link: "/activities/adventure-bay/marker5",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Popsicle Stick Puppets",
      },
      {
        id: "6",
        x: 45,
        y: 65,
        link: "/activities/adventure-bay/marker6",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "DIY Puzzles",
      },
      {
        id: "7",
        x: 55,
        y: 65,
        link: "/activities/adventure-bay/marker7",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Handcrafted Picture Frames",
      },
      {
        id: "8",
        x: 75,
        y: 50,
        link: "/activities/adventure-bay/marker8",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Tree Painting Activity",
      },

      {
        id: "9",
        x: 85,
        y: 40,
        link: "/activities/adventure-bay/marker9",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "My Friendship Flower",
      },
      {
        id: "10",
        x: 80,
        y: 20,
        link: "/activities/adventure-bay/marker10",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Affirmation Friendship Bracelets",
      },

      {
        id: "11",
        x: 70,
        y: 25,
        link: "/activities/adventure-bay/marker11",
        backgroundColor: "#1ABC9C",
        borderColor: "#16A085",
        name: "Eric carle Read-Along & Caterpillar Craft",
      },
    ],
  },
  {
    name: "Fantasy Forest",
    markers: [
      {
        id: "1",
        x: 40,
        y: 15,
        link: "/activities/fantasy-forest/healthy-weekly-meal-planner",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Healthy Weekly Meal Planner",
      },
      {
        id: "2",
        x: 20,
        y: 20,
        link: "/activities/fantasy-forest/nature-walk",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Nature Walk",
      },
      {
        id: "3",
        x: 15,
        y: 35,
        link: "/activities/fantasy-forest/progressive-relaxation",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Progressive Relaxation",
      },
      {
        id: "4",
        x: 20,
        y: 50,
        link: "/activities/fantasy-forest/marker4",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Rock Painting",
      },
      {
        id: "5",
        x: 25,
        y: 65,
        link: "/activities/fantasy-forest/marker5",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "DIY Puzzle",
      },
      {
        id: "6",
        x: 40,
        y: 60,
        link: "/activities/fantasy-forest/marker6",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "DIY Stress Ball",
      },
      {
        id: "7",
        x: 57,
        y: 65,
        link: "/activities/fantasy-forest/marker7",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "My Rainbow",
      },
    ],
  },
];

const Dashboard: React.FC = () => {
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setContainerDimensions({ width: clientWidth, height: clientHeight });
    }
  }, [containerRef.current]);

  const map = mapImages[currentMapIndex];
  const markers = mapMarkers[currentMapIndex].markers;

  const handleMapChange = (index: number) => {
    setCurrentMapIndex(index);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full">
        <HomeNav onMapChange={handleMapChange} />
      </div>
      <div className="flex flex-grow h-full overflow-hidden">
        <SideNav />
        <div ref={containerRef} className="flex flex-col flex-grow">
          <div className="flex-grow relative">
            <Map
              image={map}
              markers={markers}
              height={containerDimensions.height}
              width={containerDimensions.width}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
