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
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Relaxation Yoga",
            icon: "/images/dashboard/pregnancy/yoga-mat.svg",
            link: "/activities/parental-paradise/week1-caregiver-wellness/relaxation-yoga",
          },
          {
            name: "Building My Pregnancy Support System",
            icon: "/images/dashboard/pregnancy/paper.svg",
            link: "/activities/parental-paradise/week1-caregiver-wellness/pregnancy-support-system",
          },
          {
            name: "Baby Growth Journal",
            icon: "/images/dashboard/pregnancy/journal.svg",
            link: "/activities/parental-paradise/week1-caregiver-wellness/baby-growth-journal",
          },
        ],
      },
      {
        id: "2",
        x: 9,
        y: 33,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Creative Arts",
        activities: [
          {
            name: "Homemade Growth Chart",
            icon: "/images/dashboard/pregnancy/plank.svg",
            link: "/activities/parental-paradise/week2-creative-arts/homemade-growth-chart",
          },
          {
            name: "Memory Box",
            icon: "/images/dashboard/pregnancy/box.svg",
            link: "/activities/parental-paradise/week2-creative-arts/memory-box",
          },
          {
            name: "Maternity Photoshoot",
            icon: "/images/dashboard/pregnancy/camera.svg",
            link: "/activities/parental-paradise/week2-creative-arts/maternity-photoshoot",
          },
          {
            name: "My Baby's Name Sign",
            icon: "/images/dashboard/pregnancy/board.svg",
            link: "/activities/parental-paradise/week2-creative-arts/my-babys-name-sign",
          },
        ],
      },
      {
        id: "3",
        x: 9,
        y: 56,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Emotional, Social, Behavioral",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          {
            name: "Breathing Techniques For Pregnant Women",
            icon: "",
            link: "/activities/parental-paradise/week3-emotional-behavioral-social/breathing-techniques-for-pregnant-women",
          },
          {
            name: "Birth Affirmations",
            icon: "",
            link: "/activities/parental-paradise/week3-emotional-behavioral-social/birth-affirmations",
          },
          {
            name: "Reaching Out to Available Resources",
            icon: "",
            link: "/activities/parental-paradise/week3-emotional-behavioral-social/reaching-out-to-available-resources",
          },
        ],
      },
      {
        id: "4",
        x: 16,
        y: 76,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Language, Literacy, and Speech",
        activities: [
          {
            name: "Narrating Your Daily Activities",
            icon: "/images/dashboard/pregnancy/journal.svg",
            link: "/activities/parental-paradise/week4-language-literacy-speech/narrating-daily-activities",
          },
          {
            name: "Reading Routine",
            icon: "/images/dashboard/pregnancy/paper.svg",
            link: "/activities/parental-paradise/week4-language-literacy-speech/daily-reading-routine",
          },
          {
            name: "Books for your Baby!",
            icon: "/images/dashboard/pregnancy/journal.svg",
            link: "/activities/parental-paradise/week4-language-literacy-speech/books-for-your-baby",
          },
        ],
      },
      {
        id: "5",
        x: 34,
        y: 65,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Math and Science",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          {
            name: "Your Baby's Size in Everyday Objects",
            icon: "",
            link: "/activities/parental-paradise/week5-math-and-science/baby-size-in-everyday-objects",
          },
          {
            name: "Financial Planning for Baby's First Year",
            icon: "",
            link: "/activities/parental-paradise/week5-math-and-science/financial-planning-for-baby-first-year",
          },
        ],
      },
      {
        id: "6",
        x: 35,
        y: 45,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Nutrition",
        activities: [
          { name: "Weekly Meal Tracker", icon: "/images/dashboard/pregnancy/paper.svg", link: "/activities/parental-paradise/week6-nutrition/weekly-meal-tracker" }, 
          { name: "Trying New Recipes", icon: "/images/dashboard/pregnancy/pencil.svg", link: "/activities/parental-paradise/week6-nutrition/trying-new-recipes" },
        ],
      },
      {
        id: "7",
        x: 49,
        y: 49,
        backgroundColor: "#F797FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F797FF",
        activitiesBackgroundColor: "#FEEDFF",
        name: "Physical Activity",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          { name: "Safe and Effective Strength Training for Expectant Mothers", icon: "", link: "" },
          { name: "Walking With Your Baby", icon: "", link: "" },
          { name: "Lets Go Swimming!", icon: "", link: "" },
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
        name: "Safety",
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
        name: "Sound and Music",
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
        name: "Touch",
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
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Meditation for Caregiver(s) of 0-1 Year Old(s)",
            icon: "/images/gymclothes.svg",
            link: "/activities/blossom-haven/week1-caregiver-wellness/meditation",
          },
          {
            name: "Walking Nature Journal",
            icon: "/images/journal.svg",
            link: "/activities/blossom-haven/week1-caregiver-wellness/walking-nature-journal",
          },
          {
            name: "At-Home Exercises",
            icon: "/images/activities/blossom-haven/yogamat.svg",
            link: "/activities/blossom-haven/week1-caregiver-wellness/at-home-exercises",
          },
        ],
      },
      {
        id: "2",
        x: 32,
        y: 33,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Creative Arts",
        activities: [
          {
            name: "Colored Ice Cube Melting Activity",
            icon: "/images/activities/blossom-haven/ice-cube-tray.svg",
            link: "/activities/blossom-haven/week2-creative-arts/colored-ice-cube-melting-activity",
          },
          {
            name: "Your Very Own Sensory Bottle",
            icon: "/images/activities/blossom-haven/water-bottle.svg",
            link: "/activities/blossom-haven/week2-creative-arts/your-very-own-sensory-bottle",
          },
          {
            name: "Baby's First Art Piece: A Safe Painting Activity",
            icon: "/images/activities/blossom-haven/canvas.svg",
            link: "/activities/blossom-haven/week2-creative-arts/babys-first-art-piece",
          },
        ],
      },
      {
        id: "3",
        x: 17,
        y: 46,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Emotional, Social, Behavioral",
        activities: [
          {
            name: "Baby's Magic Mirror",
            icon: "/images/dashboard/blossomHaven/week/3/act1/camera_lens.png",
            link: "/activities/blossom-haven/week3-emotional-behavioral-social/babys-magic-mirror",
          },
          {
            name: "Baby's Puppet Playtime",
            icon: "images/dashboard/blossomHaven/week/3/act2/buttons.png",
            link: "/activities/blossom-haven/week3-emotional-behavioral-social/babys-puppet-playtime",
          },
          {
            name: "Baby's Day Out",
            icon: "/images/dashboard/blossomHaven/week/3/act3/child_stroller.png",
            link: "/activities/blossom-haven/week3-emotional-behavioral-social/babys-day-out",
          },
        ],
      },
      {
        id: "4",
        x: 22,
        y: 65,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Language, Literacy, and Speech",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
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
        name: "Math and Science",
        activities: [
          {
            name: "Baby's Shape Play Mat",
            icon: "/images/activities/blossom-haven/week5/household-items.svg",
            link: "/activities/blossom-haven/week5-math-and-science/babys-shape-play-mat",
          },
          {
            name: "Bubble Pop Party!",
            icon: "/images/activities/blossom-haven/week5/bubbles.svg",
            link: "/activities/blossom-haven/week5-math-and-science/bubble-pop-party",
          },
          {
            name: "Colorful Oil and Water Science Bag",
            icon: "/images/activities/blossom-haven/week5/oil.svg",
            link: "/activities/blossom-haven/week5-math-and-science/colorful-oil-and-water-science-bag",
          },
        ],
      },
      {
        id: "6",
        x: 43,
        y: 52,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Nutrition",
        activities: [
          {
            name: "Breastfeeding Relief Stretches for Caregiver",
            icon: "/images/dashboard/blossomHaven/pillow.svg",
            link: "/activities/blossom-haven/week6-nutrition/breastfeeding-relief-tips",
          },
          {
            name: "Baby's Yummy Snack Necklace",
            icon: "/images/dashboard/blossomHaven/string.svg",
            link: "/activities/blossom-haven/week6-nutrition/baby-yummy-snack-necklace",
          },
          {
            name: "The Many Textures of Foods",
            icon: "/images/dashboard/blossomHaven/snacks.svg",
            link: "/activities/blossom-haven/week6-nutrition/many-textures-of-foods",
          },
        ],
      },
      {
        id: "7",
        x: 53,
        y: 55,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Physical Activity",
        activities: [
          {
            name: "Baby's Obstacle Course",
            icon: "/images/activities/blossom-haven/week7/playMat.svg",
            link: "/activities/blossom-haven/week7_activityA",
          },
          {
            name: "Happy Tummy Workout",
            icon: "/images/activities/blossom-haven/week7/secondPlayMat.svg",
            link: "/activities/blossom-haven/week7_activityB",
          },
          {
            name: "Baby Boot Camp",
            icon: "images/activities/blossom-haven/week5/camera.svg",
            link: "/activities/blossom-haven/week7_activityC",
          },
        ],
      },
      {
        id: "8",
        x: 72,
        y: 57,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Safety",
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
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Sound and Music",
        activities: [
          {
            name: "Baby's Drum Solo",
            icon: "images/dashboard/blossomHaven/week/9/camera_lens.png",
            link: "activities/blossom-haven/week9-sound-and-music/baby-drum-solo",
          },
          {
            name: "Baby's Homemade Maracas",
            icon: "images/dashboard/blossomHaven/week/9/stick.png",
            link: "activities/blossom-haven/week9-sound-and-music/baby-homemade-maracas",
          },
          {
            name: "Counting Digits",
            icon: "images/dashboard/blossomHaven/week/9/kernels.png",
            link: "activities/blossom-haven/week9-sound-and-music/counting-digits",
          },
        ],
      },
      {
        id: "10",
        x: 75,
        y: 25,
        backgroundColor: "#F1A533",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#F1A533",
        activitiesBackgroundColor: "#E8F5E9",
        name: "Touch",
        activities: [
          { name: "Baby’s Sensory Bin", icon: "/images/activities/blossom-haven/week10/camera.svg", link: "/activities/blossom-haven/week10-touch/babys-sensory-bin" },
          { name: "Activity 2", icon: "images/activities/blossom-haven/week10/shape.svg", link: "/activities/blossom-haven/week10-touch/activity-2" },
          { name: "Activity 3", icon: "/images/activities/blossom-haven/week10/ribbon.svg", link: "/activities/blossom-haven/week10-touch/activity-3" },
        ]
      }
    ],
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
        activitiesBackgroundColor: "#C5CEFF",
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Walking Activity",
            icon: "/images/dashboard/StarlightMeadows/water.svg",
            link: "/activities/starlight-meadows/week1-caregiver-wellness/stress-management-walking",
          },
          {
            name: "Box Breathing",
            icon: "/images/dashboard/StarlightMeadows/personIcon.svg",
            link: "/activities/starlight-meadows/week1-caregiver-wellness/stress-management-box-breathing",
          },
          {
            name: "Creating a Nighttime Routine",
            icon: "/images/dashboard/StarlightMeadows/book.svg",
            link: "/activities/starlight-meadows/week1-caregiver-wellness/creating-a-nighttime-routine",
          },
          {
            name: "Stretching",
            icon: "/images/dashboard/StarlightMeadows/yogaMat.svg",
            link: "/activities/starlight-meadows/week1-caregiver-wellness/stress-management-stretching",
          },
        ],
      },
      {
        id: "2",
        x: 34,
        y: 33,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Creative Arts",
        activities: [
          {
            name: "Playdough Activity",
            icon: "images/dashboard/StarlightMeadows/week2/cream of tartar.svg",
            link: "/activities/starlight-meadows/week2-creative-arts/playdough-activity",
          },
          {
            name: "Mess-Free Water Painting",
            icon: "/images/dashboard/StarlightMeadows/week2/paint brush.svg",
            link: "/activities/starlight-meadows/week2-creative-arts/mess-free-water-painting",
          },
          {
            name: "Handprint Painting",
            icon: "/images/dashboard/StarlightMeadows/week2/acrylic paint.svg",
            link: "/activities/starlight-meadows/week2-creative-arts/handprint-painting",
          },
          {
            name: "Nature Collage",
            icon: "images/dashboard/StarlightMeadows/week2/leaves.svg",
            link: "/activities/starlight-meadows/week2-creative-arts/nature-collage",
          },
        ],
      },
      {
        id: "3",
        x: 19,
        y: 34,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Emotional, Social, Behavioral",
        activities: [
          {
            name: "Emotions Sensory Bin",
            icon: "/images/dashboard/StarlightMeadows/week3/container.svg",
            link: "/activities/starlight-meadows/week3-emotional-behavioral-social/emotions-sensory-bin",
          },
          {
            name: "My Turn, Your Turn",
            icon: "/images/dashboard/StarlightMeadows/week3/childrenstoys.svg",
            link: "/activities/starlight-meadows/week3-emotional-behavioral-social/my-turn-your-turn",
          },
          {
            name: "Rolling the Ball",
            icon: "/images/dashboard/StarlightMeadows/week3/ball.svg",
            link: "/activities/starlight-meadows/week3-emotional-behavioral-social/rolling-the-ball",
          },
          {
            name: "Get Ready With Me!",
            icon: "images/dashboard/StarlightMeadows/week3/clothesoptions.svg",
            link: "/activities/starlight-meadows/week3-emotional-behavioral-social/get-ready-with-me",
          },
        ],
      },
      {
        id: "4",
        x: 13,
        y: 57,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Language, Literacy, and Speech",
        activities: [
          {
            name: "Walking Tour",
            icon: "/images/dashboard/StarlightMeadows/personIcon.svg",
            link: "/activities/starlight-meadows/week4-language-literacy-speech/walking-tour",
          },
          {
            name: "Unloading Groceries",
            icon: "/images/dashboard/StarlightMeadows/apple.svg",
            link: "/activities/starlight-meadows/week4-language-literacy-speech/unloading-groceries",
          },
          {
            name: 'The Cow Says "Moo!"',
            icon: "/images/dashboard/StarlightMeadows/week4/animalpictures.svg",
            link: "/activities/starlight-meadows/week4-language-literacy-speech/the-cow-says-moo",
          },
          { name: "Blowing Bubbles!", icon: "", link: "" }, // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
        ],
      },
      {
        id: "5",
        x: 30,
        y: 69,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Math and Science",
        activities: [
          {
            name: "Sink and Float",
            icon: "/images/dashboard/StarlightMeadows/week5/floatobj.svg",
            link: "/activities/starlight-meadows/week5-math-and-science/sink-and-float",
          },
          {
            name: "Colorful Ice Activity",
            icon: "/images/dashboard/StarlightMeadows/week5/icecubetray.svg",
            link: "/activities/starlight-meadows/week5-math-and-science/colorful-ice-activity",
          },
          {
            name: "Blocks",
            icon: "images/dashboard/StarlightMeadows/week5/stackable.svg",
            link: "/activities/starlight-meadows/week5-math-and-science/blocks",
          },
        ],
      },
      {
        id: "6",
        x: 43,
        y: 53,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Nutrition",
        activities: [
          { name: "Grocery Store Adventure!", icon: "", link: "" },
          { name: "Rainbow Plate!", icon: "", link: "" },
        ],
      },
      {
        id: "7",
        x: 61,
        y: 53,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Physical Activity",
        activities: [
          { name: "Crawl Like a Puppy, Hop Like a Bunny!", icon: "", link: "" },
          { name: "Nature Walk", icon: "", link: "" },
        ],
      },
      {
        id: "8",
        x: 72,
        y: 65,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Safety",
        activities: [
          { name: "Crawl Like a Puppy, Hop Like a Bunny!", icon: "", link: "" },
          { name: "Nature Walk", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 86,
        y: 54,
        backgroundColor: "#5A6EDD",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Sound and Music",
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
        activitiesBorderColor: "#5A6EDD",
        activitiesBackgroundColor: "#C5CEFF",
        name: "Touch",
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
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Journaling for the Caregivers of 2-3 Year Olds",
            icon: "/images/dashboard/rainbowValley/week/1/act2/act2_image3.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/journaling",
          },
          {
            name: "Self-Care BINGO",
            icon: "/images/dashboard/rainbowValley/week/1/act7/act7_image2.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/self-care-bingo",
          },
          {
            name: "Create Your Own Music Playlist",
            icon: "/images/dashboard/rainbowValley/week/1/act1/act1_image1.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/create-your-own-music-playlist",
          },
          {
            name: "Vision Board for Self-Care",
            icon: "/images/dashboard/rainbowValley/week/1/act3/act3_image1.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/vision-board-for-self-care",
          },
          {
            name: "Mindful Driving",
            icon: "/images/dashboard/rainbowValley/week/1/act4/act4_image1.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/mindful-driving",
          },
          {
            name: "Self Care Wheel",
            icon: "/images/dashboard/rainbowValley/week/1/act5/act5_image3.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/self-care-wheel",
          },
          {
            name: "Cleaning Schedule",
            icon: "/images/dashboard/rainbowValley/week/1/act6/act6_image2.png",
            link: "/activities/rainbow-valley/week1-caregiver-wellness/cleaning-schedule",
          },
        ],
      },
      {
        id: "2",
        x: 35,
        y: 36,
        backgroundColor: "#FF9255",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Creative Arts",
        activities: [
          {
            name: "Foil Painting",
            icon: "/images/dashboard/rainbowValley/week/2/act1/paint.png",
            link: "/activities/rainbow-valley/week2-creative-arts/foil-painting",
          },
          {
            name: "Nature Collage",
            icon: "/images/dashboard/rainbowValley/week/2/act2/collected_items.png",
            link: "/activities/rainbow-valley/week2-creative-arts/nature-collage",
          },
          {
            name: "Salt Dough",
            icon: "images/dashboard/rainbowValley/week/2/act3/salt.png",
            link: "/activities/rainbow-valley/week2-creative-arts/salt-dough",
          },
          {
            name: "Toilet Paper Roll Stamps",
            icon: "/images/dashboard/rainbowValley/week/2/act4/toilet_paper.png",
            link: "/activities/rainbow-valley/week2-creative-arts/toilet-paper-roll-stamps",
          },
          {
            name: 'Ice Cube "Paint"',
            icon: "/images/dashboard/rainbowValley/week/2/act5/ice_cube_tray.png",
            link: "/activities/rainbow-valley/week2-creative-arts/ice-cube-paint",
          },
          {
            name: "Create Your Own Paper Plate Sun",
            icon: "/images/dashboard/rainbowValley/week/2/act6/scissors.png",
            link: "/activities/rainbow-valley/week2-creative-arts/create-your-own-paper-plate-sun",
          },
        ],
      },
      {
        id: "3",
        x: 22,
        y: 47,
        backgroundColor: "#FBFF44",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Emotional, Social, Behavioral",
        activities: [
          {
            name: "Create Your Own Stress Ball",
            icon: "/images/dashboard/rainbowValley/week/3/act1/balloon.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/create-your-own-stress-ball",
          },
          {
            name: "Sorting With Friends",
            icon: "/images/dashboard/rainbowValley/week/3/act2/children_toys.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/sorting-with-friends",
          },
          {
            name: "The Sharing Circle",
            icon: "/images/dashboard/rainbowValley/week/1/act3/act3_image1.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/the-sharing-circle",
          },
          {
            name: "Toss With a Friend",
            icon: "images/dashboard/rainbowValley/week/3/act4/ball.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/toss-with-a-friend",
          },
          {
            name: "Creating Coping Skills",
            icon: "images/dashboard/rainbowValley/week/3/act5/writing_utensils.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/creating-coping-skills",
          },
          {
            name: "Match the Faces",
            icon: "images/dashboard/rainbowValley/week/3/act6/scissors.png",
            link: "/activities/rainbow-valley/week3-emotional-behavioral-social/match-the-faces",
          },
          { name: "Stop, Slow, and Go!", icon: "", link: "" }, // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
        ],
      },
      {
        id: "4",
        x: 12,
        y: 71,
        backgroundColor: "#46FF58",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Language, Literacy, and Speech",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          { name: "Just Add a Sticky Note", icon: "", link: "" },
          { name: "Trace that Letter", icon: "", link: "" },
          { name: "The Animals on the Farm", icon: "", link: "" },
          { name: "Name Train", icon: "", link: "" },
          { name: "Playdough Fun!", icon: "", link: "" },
        ],
      },
      {
        id: "5",
        x: 34,
        y: 71,
        backgroundColor: "#57F5FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Math and Science",
        activities: [
          {
            name: "Cloud in a Jar",
            icon: "/images/activities/rainbow-valley/week5/foodColoring.svg",
            link: "/activities/rainbow-valley/week5-math-and-science/cloud-in-a-jar",
          },
          {
            name: "Nature Bingo",
            icon: "/images/activities/rainbow-valley/week5/bingoCard.svg",
            link: "/activities/rainbow-valley/week5-math-and-science/nature-bingo",
          },
          {
            name: "Traveling Water",
            icon: "/images/activities/rainbow-valley/week5/water.svg",
            link: "/activities/rainbow-valley/week5-math-and-science/traveling-water",
          },
          {
            name: "Create Your Own Lava Lamp",
            icon: "/images/activities/rainbow-valley/week5/clearJar.svg",
            link: "/activities/rainbow-valley/week5-math-and-science/create-your-own-lava-lamp",
          },
        ],
      },
      {
        id: "6",
        x: 43,
        y: 55,
        backgroundColor: "#3858FF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Nutrition",
        activities: [
          {
            name: "Sort the Food Groups",
            icon: "images/dashboard/rainbowValley/week/3/act6/expressions_template.png",
            link: "/activities/rainbow-valley/week6-nutrition/sort-food-groups",
          },
          {
            name: "Funny Food Faces!",
            icon: "/images/dashboard/rainbowValley/week/6/fruit.svg",
            link: "/activities/rainbow-valley/week6-nutrition/funny-food-faces",
          },
        ],
      },
      {
        id: "7",
        x: 57,
        y: 62,
        backgroundColor: "#B93CFF",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Physical Activity",
        activities: [
          { name: "Exercise BINGO", icon: "", link: "" },
          { name: "Scavenger Hunt", icon: "", link: "" },
          { name: "Freeze Dance", icon: "", link: "" },
          { name: "Simon Says", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 70,
        y: 77,
        backgroundColor: "#FF5B5B",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Safety",
        activities: [
          { name: "Practice a Fire Drill", icon: "/images/dashboard/rainbowValley/week/3/act5/writing_utensils.png", link: "/activities/rainbow-valley/week8-safety/practice-a-fire-drill" },
          { name: "Safety BINGO", icon: "/images/dashboard/rainbowValley/week/3/act6/paper.png", link: "/activities/rainbow-valley/week8-safety/safety-bingo" },
        ]
      },
      {
        id: "9",
        x: 85,
        y: 60,
        backgroundColor: "#FF9255",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Sound and Music",
        activities: [
          { name: "Sort the Food Groups", icon: "images/dashboard/rainbowValley/week/3/act6/expressions_template.png", link: "/activities/rainbow-valley/week6-nutrition/sort-food-groups" },
          { name: "Funny Food Faces!", icon: "/images/dashboard/rainbowValley/week/6/fruit.svg", link: "/activities/rainbow-valley/week6-nutrition/funny-food-faces" },
        ]
      },
      {
        id: "10",
        x: 75,
        y: 39,
        backgroundColor: "#FBFF44",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Physical Activity",
        activities: [
          { name: "Exercise BINGO", icon: "", link: "" },
          { name: "Scavenger Hunt", icon: "", link: "" },
          { name: "Freeze Dance", icon: "", link: "" },
          { name: "Simon Says", icon: "", link: "" },
        ]
      },
      {
        id: "8",
        x: 70,
        y: 77,
        backgroundColor: "#FF5B5B",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Safety",
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
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Sound and Music",
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
        activitiesBorderColor: "#FF5B5B",
        activitiesBackgroundColor: "#FFD0D0",
        name: "Touch",
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
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Affirmations for 3-4 Year Olds and Their Caregivers",
            icon: "/images/dashboard/adventure-bay/Vector.png",
            link: "/activities/adventure-bay/week1-caregiver-wellness/affirmations-for-children-and-caregivers",
          },
          {
            name: "The Power of Coloring for Caregivers of 3-4 Year Olds",
            icon: "/images/dashboard/adventure-bay/fluent_pen-20-filled.png",
            link: "/activities/adventure-bay/week1-caregiver-wellness/the-power-of-coloring-for-caregivers",
          },
          {
            name: "My Gratitude Jars",
            icon: "/images/dashboard/adventure-bay/marker.png",
            link: "/activities/adventure-bay/week1-caregiver-wellness/my-gratitude-jars",
          },
          {
            name: "Focusing on Feelings",
            icon: "/images/dashboard/adventure-bay/mdi_paper.png",
            link: "/activities/adventure-bay/week1-caregiver-wellness/focusing-on-feelings",
          },
        ],
      },
      {
        id: "2",
        x: 12,
        y: 17,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Creative Arts",
        activities: [
          {
            name: "Popsicle Stick Puppets",
            icon: "/images/dashboard/adventure-bay/Creative-Arts/popsicle.png",
            link: "/activities/adventure-bay/week2-creative-arts/popsicle-stick-puppets",
          },
          {
            name: "DIY Puzzles",
            icon: "/images/dashboard/adventure-bay/Creative-Arts/cardboard.png",
            link: "/activities/adventure-bay/week2-creative-arts/DIY-puzzles",
          },
          {
            name: "Handcrafted Picture Frames",
            icon: "/images/dashboard/adventure-bay/Creative-Arts/picture.png",
            link: "/activities/adventure-bay/week2-creative-arts/handcrafted-picture-frames",
          },
          {
            name: "Tree Painting Activity",
            icon: "/images/dashboard/adventure-bay/Creative-Arts/template.png",
            link: "/activities/adventure-bay/week2-creative-arts/tree-painting-activity",
          },
        ],
      },
      {
        id: "3",
        x: 25,
        y: 35,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Emotional, Social, Behavioral",
        activities: [
          {
            name: "Affirmation Friendship Bracelets",
            icon: "/images/dashboard/adventure-bay/week3/string.png",
            link: "/activities/adventure-bay/week3-emotional-behavioral-social/affirmation-friendship-bracelets",
          },
          {
            name: "My Friendship Flower",
            icon: "images/dashboard/adventure-bay/week3/template.png",
            link: "/activities/adventure-bay/week3-emotional-behavioral-social/my-friendship-flower",
          },
          { name: "The Friendship Recipe", icon: "", link: "" }, // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          { name: "Worry Go Away", icon: "", link: "" }, // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
        ],
      },
      {
        id: "4",
        x: 20,
        y: 65,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Language, Literacy, and Speech",
        activities: [ // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          { name: "Eric Carle Read-Along & Caterpillar Craft", icon: "/images/dashboard/adventure-bay/week4/paper.png", link: "/activities/adventure-bay/week4-language-literacy-speech/eric-carle-read-along-and-caterpillar-craft" }, 
          { name: "Magic Letters", icon: "", link: "" },
          { name: "DIY Alphabet Book", icon: "", link: "" },
          { name: "Shaving Cream Lettering", icon: "", link: "" },
        ],
      },
      {
        id: "5",
        x: 41,
        y: 65,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Math and Science",
        activities: [
          { name: "The Water Cycle", icon: "", link: "" },
          { name: "Fruit and Vegetable Scavenger Hunt", icon: "", link: "" },
        ],
      },
      {
        id: "6",
        x: 49,
        y: 46,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Nutrition",
        activities: [
          { name: "A Rainbow of Flavors", icon: "", link: "" },
          { name: "My Happy Healthy Plate", icon: "", link: "" },
        ],
      },
      {
        id: "7",
        x: 59,
        y: 57,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Physical Activity",
        activities: [
          { name: "Superhero Power Pose & More", icon: "", link: "" },
          { name: "Yoga Pose Exploration", icon: "", link: "" },
        ],
      },
      {
        id: "8",
        x: 70,
        y: 70,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Safety",
        activities: [
          { name: "Superhero Power Pose & More", icon: "", link: "" },
          { name: "Yoga Pose Exploration", icon: "", link: "" },
        ]
      },
      {
        id: "9",
        x: 83,
        y: 53,
        backgroundColor: "#52C5C0",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Sound and Music",
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
        activitiesBorderColor: "#52C5C0",
        activitiesBackgroundColor: "#C5FFFC",
        name: "Touch",
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
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Caregiver Wellness",
        activities: [
          {
            name: "Progressive Relaxation",
            icon: "/images/activities/fantasy-forest/gratitude-jar.svg",
            link: "/activities/fantasy-forest/week1-caregiver-wellness/progressive-relaxation",
          },
          {
            name: "Healthy Plate Planner",
            icon: "/images/activities/fantasy-forest/pen.svg",
            link: "/activities/fantasy-forest/week1-caregiver-wellness/healthy-weekly-meal-planner",
          },
          {
            name: "Nature Walk",
            icon: "/images/activities/fantasy-forest/paper.svg",
            link: "activities/fantasy-forest/week1-caregiver-wellness/nature-walk",
          },
        ],
      },
      {
        id: "2",
        x: 12,
        y: 16,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Creative Arts",
        activities: [
          {
            name: "Rock Painting Activity",
            icon: "/images/dashboard/fantasyForest/week/2/act1/paint_brushes.png",
            link: "/activities/fantasy-forest/week2-creative-arts/rock-painting",
          },
          {
            name: "DIY Puzzle Activity",
            icon: "/images/dashboard/fantasyForest/week/2/act2/coloring_pages.png",
            link: "/activities/fantasy-forest/week2-creative-arts/DIY-puzzle",
          },
          {
            name: "DIY Stress Ball",
            icon: "/images/dashboard/fantasyForest/week/2/act3/balloon.png",
            link: "/activities/fantasy-forest/week2-creative-arts/DIY-stress-ball",
          },
          {
            name: "My Rainbow",
            icon: "/images/dashboard/fantasyForest/week/2/act4/crayons.png",
            link: "/activities/fantasy-forest/week2-creative-arts/my-rainbow",
          },
        ],
      },
      {
        id: "3",
        x: 20,
        y: 42,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Emotional, Social, Behavioral",
        activities: [
          {
            name: "Emotion Matching",
            icon: "/images/activities/fantasy-forest/activity-sheet.svg",
            link: "/activities/fantasy-forest/week3-emotional-behavioral-social/emotion-matching",
          },
          {
            name: "The Rainbow Road",
            icon: "/images/activities/fantasy-forest/dice.svg",
            link: "/activities/fantasy-forest/week3-emotional-behavioral-social/rainbow-road",
          },
          {
            name: "Cardboard Emotions",
            icon: "/images/activities/fantasy-forest/toilet-paper.svg",
            link: "/activities/fantasy-forest/week3-emotional-behavioral-social/cardboard-emotions",
          },
          {
            name: "Worry Pyramid",
            icon: "/images/activities/fantasy-forest/marker.svg",
            link: "/activities/fantasy-forest/week3-emotional-behavioral-social/worry-pyramid",
          },
        ],
      },
      {
        id: "4",
        x: 19,
        y: 72,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Language, Literacy, and Speech",
        activities: [
          {
            name: "The Friendship Flower",
            icon: "images/activities/fantasy-forest/week4/crayons.svg",
            link: "/activities/fantasy-forest/week4-language-literacy-speech/the-friendship-flower",
          },
          { name: "I Love Me!", icon: "", link: "" }, // *** ADD LINKS AND ICONS ONCE ACTIVITIES ARE IN THE DIRECTORY ***
          {
            name: "Spot Goes to the Swimming Pool",
            icon: "images/activities/fantasy-forest/week4/book.svg",
            link: "/activities/fantasy-forest/week4-language-literacy-speech/spot-goes-to-the-swimming-pool",
          },
          {
            name: "Taste Test Challenge",
            icon: "images/activities/fantasy-forest/week4/muffin-tin.svg",
            link: "/activities/fantasy-forest/week4-language-literacy-speech/taste-test-challenge",
          },
        ],
      },
      {
        id: "5",
        x: 40,
        y: 74,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Math and Science",
        activities: [
          {
            name: "Roll The Dice Movement",
            icon: "/images/activities/fantasy-forest/week5/dice.svg",
            link: "/activities/fantasy-forest/week5-math-and-science/roll-the-dice-movement",
          },
          {
            name: "DIY Stress Ball",
            icon: "/images/activities/fantasy-forest/week5/balloon.svg",
            link: "/activities/fantasy-forest/week5-math-and-science/DIY-stress-ball",
          },
          {
            name: "Will it Sink or Float?",
            icon: "/images/activities/fantasy-forest/week5/householdObjects.svg",
            link: "/activities/fantasy-forest/week5-math-and-science/will-it-sink-or-float",
          },
        ],
      },
      {
        id: "6",
        x: 49,
        y: 51,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Nutrition",
        activities: [
          {
            name: "Healthy Heart Scavenger Hunt",
            icon: "images/dashboard/fantasyForest/week/6/tree.svg",
            link: "/activities/fantasy-forest/week6-nutrition/scavenger-hunt",
          },
          {
            name: "Fruit Memory Matching",
            icon: "/images/dashboard/fantasyForest/week/6/paper.svg",
            link: "/activities/fantasy-forest/week6-nutrition/fruit-memory-matching",
          },
          {
            name: "My Plate Coloring Page",
            icon: "/images/dashboard/fantasyForest/week/6/pencil.svg",
            link: "/activities/fantasy-forest/week6-nutrition/plate-coloring-page",
          },
        ],
      },
      {
        id: "7",
        x: 57,
        y: 61,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Physical Activity",
        activities: [
          {
            name: "Move Like an Animal",
            icon: "images/dashboard/fantasyForest/week/7/animal_cards.png",
            link: "activities/fantasy-forest/week7-physical-activity/move-like-an-animal",
          },
          {
            name: "Family Dance Party!",
            icon: "images/dashboard/fantasyForest/week/7/music.png",
            link: "activities/fantasy-forest/week7-physical-activity/family-dance-party",
          },
          {
            name: "Tooth Fairy Balance",
            icon: "images/dashboard/fantasyForest/week/7/pillows.png",
            link: "activities/fantasy-forest/week7-physical-activity/tooth-fairy-balance",
          },
        ],
      },
      {
        id: "8",
        x: 68,
        y: 76,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Safety",
        activities: [
          { name: "Will it Sink or Float?", icon: "images/dashboard/fantasyForest/week/8/bear.svg", link: "/activities/fantasy-forest/week8-safety/will-it-sink-or-float" },
          { name: "Let’s Swim!", icon: "/images/dashboard/fantasyForest/week/8/picture.svg", link: "/activities/fantasy-forest/week8-safety/lets-swim" },
          { name: "Red Light, Yellow Light, Green Light", icon: "/images/dashboard/fantasyForest/week/8/sun.svg", link: "/activities/fantasy-forest/week8-safety/red-light-yellow-light-green-light" },
          { name: "Safety Scavenger Hunt", icon: "/images/dashboard/fantasyForest/week/8/pencil.svg", link: "/activities/fantasy-forest/week8-safety/safety-scavenger-hunt" },
        ]
      },
      {
        id: "9",
        x: 78,
        y: 52,
        backgroundColor: "#35A663",
        borderColor: "#FFFFFF",
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Sound and Music",
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
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Sound and Music",
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
        activitiesBorderColor: "#35A663",
        activitiesBackgroundColor: "#B5F6D0",
        name: "Touch",
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
      <div className="relative flex-grow">
        <div ref={containerRef} className="flex flex-col h-full">
          <div className="relative flex-grow">
            <Map
              image={map}
              markers={markers}
              height={containerDimensions.height}
              width={containerDimensions.width}
            />
            <div className="absolute top-0 right-0 mt-4 mr-4 z-20">
              <HomeNav onMapChange={handleMapChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
