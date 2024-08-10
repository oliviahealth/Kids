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

const mapMarkers1 = [
  {
    name: "Pregnancy Meditation",
    markers: [
      {
        id: "1",

        x: 25,
        y: 20,

        backgroundColor: "#EC407A",
        borderColor: "#D81B60",

        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",

        activities: [
          { name: "Meditation", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Walking Journal", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Typing Hero", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Tying Hero", icon: "/images/activities/blossom-haven/canvas.svg" },
        ]
      },
      {
        id: "1",

        x: 35,
        y: 20,

        backgroundColor: "#EC407A",
        borderColor: "#D81B60",

        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",

        activities: [
          { name: "Meditation", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Walking Journal", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Typing Heddddro", icon: "/images/activities/blossom-haven/canvas.svg" },
          { name: "Tying Hero", icon: "/images/activities/blossom-haven/canvas.svg" },
        ]
      }
    ]
  }
]

const mapMarkers: MapMarkers[] = [
  {
    name: "Pregnancy Meditation",
    markers: [
      {
        id: "1",
        x: 25,
        y: 20,
        link: "/activities/parental-paradise/baby-growth-journal",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Baby Growth Journal",
      },
      {
        id: "2",
        x: 10,
        y: 30,
        link: "/activities/parental-paradise/homemade-growth-chart",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Homemade Growth Chart",
      },
      {
        id: "3",
        x: 15,
        y: 55,
        link: "/activities/parental-paradise/maternity-photoshoot",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Maternity Photoshoot",
      },
      {
        id: "4",
        x: 25,
        y: 75,
        link: "/activities/parental-paradise/meditation",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Meditation",
      },
      {
        id: "5",
        x: 40,
        y: 60,
        link: "/activities/parental-paradise/memory-box",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Memory Box",
      },
      {
        id: "6",
        x: 60,
        y: 60,
        link: "/activities/parental-paradise/my-babys-name-sign",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "My Baby's Name Sign",
      },
      {
        id: "7",
        x: 75,
        y: 65,
        link: "/activities/parental-paradise/pregnancy-support-system",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Pregnancy Support System",
      },
      {
        id: "8",
        x: 85,
        y: 40,
        link: "/activities/parental-paradise/relaxation-yoga",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Relaxation Yoga",
      },
      {
        id: "9",
        x: 70,
        y: 35,
        link: "/activities/parental-paradise/narrating-daily-activities",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Narrating Your Daily Activities",
      },
      {
        id: "10",
        x: 50,
        y: 40,
        link: "/activities/parental-paradise/books-for-your-baby",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Books For Your Baby",
      },
      {
        id: "11",
        x: 30,
        y: 45,
        link: "/activities/parental-paradise/daily-reading-routine",
        backgroundColor: "#EC407A",
        borderColor: "#D81B60",
        name: "Daily Reading Routine",
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
      {
        id: "6",
        x: 40,
        y: 50,
        link: "/activities/blossom-haven/babys-shape-play-mat",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Baby's Shape Play Mat!",
      },
      {
        id: "7",
        x: 50,
        y: 55,
        link: "/activities/blossom-haven/bubble-pop-party",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Bubble Pop Party!",
      },
      {
        id: "8",
        x: 60,
        y: 65,
        link: "/activities/blossom-haven/colorful-oil-and-water-science-bag",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Colorful Oil and Water Science Bag",
      },
      {
        id: "9",
        x: 70,
        y: 75,
        link: "/activities/blossom-haven/babys-first-art-piece",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Baby's First Art Piece: A Safe Painting Activity",
      },
      {
        id: "10",
        x: 80,
        y: 55,
        link: "/activities/blossom-haven/colored-ice-cube-melting-activity",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Colored Ice Cube Melting Activity",
      },
      {
        id: "11",
        x: 90,
        y: 65,
        link: "/activities/blossom-haven/your-very-own-sensory-bottle",
        backgroundColor: "#FFA500",
        borderColor: "#FF8C00",
        name: "Your Very Own Sensory Bottle",
      },
    ],
  },
  {
    name: "Starlight Meadows",
    markers: [
      {
        id: "1",
        x: 50,
        y: 10,
        link: "/activities/starlight-meadows/marker1",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Creating a Nighttime Routine",
      },
      {
        id: "2",
        x: 35,
        y: 12,
        link: "/activities/starlight-meadows/marker2",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Stretching (Stress Management)",
      },
      {
        id: "3",
        x: 20,
        y: 15,
        link: "/activities/starlight-meadows/marker3",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Box Breathing (Stress Management)",
      },
      {
        id: "4",
        x: 5,
        y: 25,
        link: "/activities/starlight-meadows/marker4",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Walking (Stress Management)",
      },
      {
        id: "5",
        x: 15,
        y: 32,
        link: "/activities/starlight-meadows/marker5",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Emotions Sensory Bin",
      },
      {
        id: "6",
        x: 25,
        y: 35,
        link: "/activities/starlight-meadows/marker6",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "My Turn, Your Turn",
      },
      {
        id: "7",
        x: 35,
        y: 37,
        link: "/activities/starlight-meadows/marker7",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Rolling the Ball",
      },
      {
        id: "8",
        x: 45,
        y: 40,
        link: "/activities/starlight-meadows/marker8",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Get Ready With Me!",
      },
      {
        id: "9",
        x: 52,
        y: 35,
        link: "/activities/starlight-meadows/marker9",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Walking Tour",
      },
      {
        id: "10",
        x: 60,
        y: 30,
        link: "/activities/starlight-meadows/marker10",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Unloading Groceries",
      },
      {
        id: "11",
        x: 70,
        y: 35,
        link: "/activities/starlight-meadows/marker11",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: `The Cow Says "Moo!"`,
      },
      {
        id: "12",
        x: 80,
        y: 40,
        link: "/activities/starlight-meadows/marker12",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Sink and Float",
      },
      {
        id: "13",
        x: 90,
        y: 45,
        link: "/activities/starlight-meadows/marker13",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Colorful Ice Activity",
      },
      {
        id: "14",
        x: 75,
        y: 50,
        link: "/activities/starlight-meadows/marker14",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Blocks",
      },
      {
        id: "15",
        x: 65,
        y: 55,
        link: "/activities/starlight-meadows/marker15",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Blocks",
      },
      {
        id: "16",
        x: 55,
        y: 60,
        link: "/activities/starlight-meadows/marker16",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Playdough Activity",
      },
      {
        id: "17",
        x: 45,
        y: 55,
        link: "/activities/starlight-meadows/marker17",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Mess-Free Water Painting",
      },
      {
        id: "18",
        x: 35,
        y: 60,
        link: "/activities/starlight-meadows/marker18",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Handprint Painting",
      },
      {
        id: "19",
        x: 25,
        y: 55,
        link: "/activities/starlight-meadows/marker19",
        backgroundColor: "#3498DB",
        borderColor: "#2980B9",
        name: "Nature Collage",
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
      {
        id: "20",
        x: 15,
        y: 50,
        link: "/activities/rainbow-valley/week5/traveling-water",
        backgroundColor: "#E67E22",
        borderColor: "#D35400",
        name: "Traveling Water",
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
        x: 10,
        y: 50,
        link: "/activities/fantasy-forest/marker4",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Rock Painting",
      },
      {
        id: "5",
        x: 25,
        y: 55,
        link: "/activities/fantasy-forest/marker5",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "DIY Puzzle",
      },
      {
        id: "6",
        x: 35,
        y: 60,
        link: "/activities/fantasy-forest/marker6",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "DIY Stress Ball",
      },
      {
        id: "7",
        x: 45,
        y: 55,
        link: "/activities/fantasy-forest/marker7",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "My Rainbow",
      },
      {
        id: "8",
        x: 25,
        y: 30,
        link: "/activities/fantasy-forest/week3/emotion-matching",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Emotion Matching",
      },
      {
        id: "9",
        x: 45,
        y: 35,
        link: "/activities/fantasy-forest/week3/rainbow-road",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "The Rainbow Road",
      },
      {
        id: "10",
        x: 55,
        y: 40,
        link: "/activities/fantasy-forest/week3/cardboard-emotions",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Cardboard Emotions",
      },
      {
        id: "11",
        x: 65,
        y: 50,
        link: "/activities/fantasy-forest/week3/worry-pyramid",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Worry Pyramid",
      },
      {
        id: "12",
        x: 85,
        y: 30,
        link: "/activities/fantasy-forest/taste-test-challenge",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Taste Test Challenge",
      },
      {
        id: "13",
        x: 65,
        y: 25,
        link: "/activities/fantasy-forest/spot-goes-to-the-swimming-pool",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "Spot Goes to the Swimming Pool",
      },
      {
        id: "14",
        x: 55,
        y: 15,
        link: "/activities/fantasy-forest/the-friendship-flower",
        backgroundColor: "#2ecc71",
        borderColor: "#27ae60",
        name: "The Friendship Flower",
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
  const markers = mapMarkers1[currentMapIndex].markers;

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
