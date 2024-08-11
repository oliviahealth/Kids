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
    name: "Prenatal Paradise",
    markers: [
      {
        id: "1",
        x: 24,
        y: 16,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 9,
        y: 33,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 9,
        y: 56,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 16,
        y: 76,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 34,
        y: 65,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 35,
        y: 45,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 49,
        y: 49,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 62,
        y: 50,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 71,
        y: 38,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 69,
        y: 20,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  },
  {
    name: "Blossom Haven",
    markers: [
      {
        id: "1",
        x: 45,
        y: 12,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 32,
        y: 33,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 17,
        y: 46,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 22,
        y: 65,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 39,
        y: 68,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 43,
        y: 52,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 53,
        y: 55,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 72,
        y: 57,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 80,
        y: 45,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 75,
        y: 25,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  },
  {
    name: "Starlight Meadows",
    markers: [
      {
        id: "1",
        x: 45,
        y: 12,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 34,
        y: 33,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 19,
        y: 34,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 13,
        y: 57,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 30,
        y: 69,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 43,
        y: 53,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 61,
        y: 53,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 72,
        y: 65,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 86,
        y: 54,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 78,
        y: 27,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  },
  {
    name: "Rainbow Valley",
    markers: [
      {
        id: "1",
        x: 52,
        y: 29,
        backgroundColor: "#FF5B5B",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 35,
        y: 36,
        backgroundColor: "#FF9255",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 22,
        y: 47,
        backgroundColor: "#FBFF44",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 12,
        y: 71,
        backgroundColor: "#46FF58",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 34,
        y: 71,
        backgroundColor: "#57F5FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 43,
        y: 55,
        backgroundColor: "#3858FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 57,
        y: 62,
        backgroundColor: "#B93CFF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 70,
        y: 77,
        backgroundColor: "#FF5B5B",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 85,
        y: 60,
        backgroundColor: "#FF9255",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 75,
        y: 39,
        backgroundColor: "#FBFF44",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  },
  {
    name: "Adventure Bay",
    markers: [
      {
        id: "1",
        x: 29,
        y: 7,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 12,
        y: 17,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 25,
        y: 35,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 20,
        y: 65,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 41,
        y: 65,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 49,
        y: 46,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 59,
        y: 57,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 70,
        y: 70,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 83,
        y: 53,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 77,
        y: 33,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  },
  {
    name: "Fantasy Forest",
    markers: [
      {
        id: "1",
        x: 31,
        y: 11,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 12,
        y: 16,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 20,
        y: 42,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 19,
        y: 72,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 40,
        y: 74,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 49,
        y: 51,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 57,
        y: 61,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 68,
        y: 76,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 78,
        y: 52,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      {
        id: "10",
        x: 71,
        y: 33,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      }
    ]
  }
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
