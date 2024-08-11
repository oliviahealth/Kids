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
        // Add names here for each point - Ex: Caregiver Wellness
        x: 24,
        y: 16,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Relaxation Yoga", icon: "", link: "" }, // put a required item from the activity
          { name: "Building My Pregnancy Support System", icon: "", link: "" },
          { name: "Baby Growth Journal", icon: "", link: "" },
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
          { name: "Homemade Growth Chart", icon: "", link: "" },
          { name: "Memory Box", icon: "", link: "" },
          { name: "Maternity Photoshoot", icon: "", link: "" },
          { name: "My Baby's Name Sign", icon: "", link: "" },
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
          { name: "Breathing Techniques For Pregnant Women", icon: "", link: "" },
          { name: "Birth Affirmations", icon: "", link: "" },
          { name: "Reaching Out to Available Resources", icon: "", link: "" },
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
          { name: "Narrating Your Daily Activities", icon: "", link: "" },
          { name: "Reading Routine", icon: "", link: "" },
          { name: "Books for your Baby!", icon: "", link: "" },
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
          { name: "Your Baby's Size in Everyday Objects", icon: "", link: "" },
          { name: "Financial Planning for Baby's First Year", icon: "", link: "" },
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
          { name: "Weekly Meal Tracker", icon: "", link: "" },
          { name: "Trying New Recipes", icon: "", link: "" },
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
          { name: "Safe and Effective Strength Training for Expectant Mothers", icon: "", link: "" },
          { name: "Walking With Your Baby", icon: "", link: "" },
          { name: "Lets Go Swimming!", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 62,
      //   y: 50,
      //   backgroundColor: "#F797FF",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F797FF",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 71,
      //   y: 38,
      //   backgroundColor: "#F797FF",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F797FF",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 69,
      //   y: 20,
      //   backgroundColor: "#F797FF",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F797FF",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Meditation for Caregiver(s) of 0-1 Year Old(s)", icon: "", link: "" },
          { name: "Walking Nature Journal", icon: "", link: "" },
          { name: "At-Home Exercises", icon: "", link: "" },
        ]
      },
      {
        id: "2",
        x: 32,
        y: 33,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Colored Ice Cube Melting Activity", icon: "", link: "" },
          { name: "Your Very Own Sensory Bottle", icon: "", link: "" },
          { name: "Baby's First Art Piece: A Safe Painting Activity", icon: "", link: "" },
        ]
      },
      {
        id: "3",
        x: 17,
        y: 46,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Baby's Magic Mirror", icon: "", link: "" },
          { name: "Baby's Puppet Playtime", icon: "", link: "" },
          { name: "Baby's Day Out", icon: "", link: "" },
        ]
      },
      {
        id: "4",
        x: 22,
        y: 65,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Extended Family Story Time", icon: "", link: "" },
          { name: "Little Emotional Explorer!", icon: "", link: "" },
          { name: "Animal Safari: Baby's Animal Adventure!", icon: "", link: "" },
        ]
      },
      {
        id: "5",
        x: 39,
        y: 68,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Baby's Shape Play Mat", icon: "", link: "" },
          { name: "Bubble Pop Party!", icon: "", link: "" },
          { name: "Colorful Oil and Water Science Bag", icon: "", link: "" },
        ]
      },
      {
        id: "6",
        x: 43,
        y: 52,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Breastfeeding Relief Stretches for Caregiver", icon: "", link: "" },
          { name: "Baby's Yummy Snack Necklace", icon: "", link: "" },
          { name: "The Many Textures of Foods", icon: "", link: "" },
        ]
      },
      {
        id: "7",
        x: 53,
        y: 55,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        activities: [
          { name: "Baby's Obstacle Course", icon: "", link: "" },
          { name: "Happy Tummy Workout", icon: "", link: "" },
          { name: "Baby Boot Camp", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 72,
      //   y: 57,
      //   backgroundColor: "#F1A533",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F1A533",
      //   activitiesBackgroundColor: "#E8F5E9",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 80,
      //   y: 45,
      //   backgroundColor: "#F1A533",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F1A533",
      //   activitiesBackgroundColor: "#E8F5E9",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 75,
      //   y: 25,
      //   backgroundColor: "#F1A533",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#F1A533",
      //   activitiesBackgroundColor: "#E8F5E9",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#FFFDE7",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 72,
      //   y: 65,
      //   backgroundColor: "#5A6EDD",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#5A6EDD",
      //   activitiesBackgroundColor: "#FFFDE7",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 86,
      //   y: 54,
      //   backgroundColor: "#5A6EDD",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#5A6EDD",
      //   activitiesBackgroundColor: "#FFFDE7",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 78,
      //   y: 27,
      //   backgroundColor: "#5A6EDD",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#5A6EDD",
      //   activitiesBackgroundColor: "#FFFDE7",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
        activitiesBorderColor: "#FF5B5B",
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
        activitiesBorderColor: "#FF9255",
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
        activitiesBorderColor: "#FBFF44",
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
        activitiesBorderColor: "#46FF58",
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
        activitiesBorderColor: "#57F5FF",
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
        activitiesBorderColor: "#3858FF",
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
        activitiesBorderColor: "#B93CFF",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 70,
      //   y: 77,
      //   backgroundColor: "#FF5B5B",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#FF5B5B",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 85,
      //   y: 60,
      //   backgroundColor: "#FF9255",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#FF9255",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 75,
      //   y: 39,
      //   backgroundColor: "#FBFF44",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#FBFF44",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
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
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 70,
      //   y: 70,
      //   backgroundColor: "#52C5C0",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#52C5C0",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 83,
      //   y: 53,
      //   backgroundColor: "#52C5C0",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#52C5C0",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 77,
      //   y: 33,
      //   backgroundColor: "#52C5C0",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#52C5C0",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
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
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#FEEDFF",
        activities: [
          { name: "Activity 1", icon: "", link: "" },
          { name: "Activity 2", icon: "", link: "" },
          { name: "Activity 3", icon: "", link: "" },
          { name: "Activity 4", icon: "", link: "" },
        ]
      },
      // {
      //   id: "8",
      //   x: 68,
      //   y: 76,
      //   backgroundColor: "#35A663",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#35A663",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "9",
      //   x: 78,
      //   y: 52,
      //   backgroundColor: "#35A663",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#35A663",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // },
      // {
      //   id: "10",
      //   x: 71,
      //   y: 33,
      //   backgroundColor: "#35A663",
      //   borderColor: "#FFFFFF",
      //   activitiesBorderColor: "#35A663",
      //   activitiesBackgroundColor: "#FEEDFF",
      //   activities: [
      //     { name: "Activity 1", icon: "", link: "" },
      //     { name: "Activity 2", icon: "", link: "" },
      //     { name: "Activity 3", icon: "", link: "" },
      //     { name: "Activity 4", icon: "", link: "" },
      //   ]
      // }
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
