import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LandingPageFooter from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Background from "../../public/images/landingPage/landingpagebg.svg";
import HalfSlice from "../../public/images/landingPage/halfslice.svg";
import EllipseOne from "../../public/images/landingPage/Ellipse1.svg";
import EllipseTwo from "../../public/images/landingPage/Ellipse2.svg";
import Rectangle from "../../public/images/landingPage/Rectangle.svg";
import HalfSliceTwo from "../../public/images/landingPage/halfslice2.svg";
import Stickers from "../../public/images/landingPage/stickers.svg";
import StickersTwo from "../../public/images/landingPage/stickers2.svg";
import RectangleTwo from "../../public/images/landingPage/Rectangle2.svg";
import HalfSliceThree from "../../public/images/landingPage/halfslice3.svg";
import HalfSliceFour from "../../public/images/landingPage/halfslice4.svg";
import Triangle from "../../public/images/landingPage/triangle.svg";
import map1 from "../../public/images/landingPage/prenatalparadise.svg";
import map2 from "../../public/images/landingPage/blossomhaven.svg";
import map3 from "../../public/images/landingPage/starlightmeadows.svg";
import map4 from "../../public/images/landingPage/rainbowvalley.svg";
import map5 from "../../public/images/landingPage/adventurebay.svg";
import map6 from "../../public/images/landingPage/fantasyforest.svg";

import pinkBg2 from "../../public/images/landingPage/pinkBg2.png";
import pregNews1 from "../../public/images/landingPage/pregnNews1.png";
import authorImage1 from "../../public/images/landingPage/authorImage1.png";
import Nerd from "../../public/images/landingPage/nerd.svg";

interface AccordionModel {
  summaryHeader: string;
  detailText: string;
}
interface MapCardModel {
  mapImageSrc: StaticImageData;
  ageCategory: string;
  mapName: string;
}
interface CarouselCardModel {
  bgImage: StaticImageData;
  articleImage: StaticImageData;
  articleCategory: string;
  articleHeader: string;
  authorImage: StaticImageData;
  authorName: string;
}
const accordionLeftSideData: AccordionModel[] = [
  {
    summaryHeader: "Caregiver Wellness",
    detailText: `Caregiver Wellness: Promoting the physical and mental well-being of caregivers to ensure a nurturing and stimulating environment.`,
  },
  {
    summaryHeader: "Emotional, Behavioral and Social",
    detailText: `Emotional, Behavioral, and Social: Teaching life-long skills in emotional well-being, behavior, and social interactions. `,
  },
  {
    summaryHeader: "Math and Science",
    detailText: `Math and Science: Introducing basic mathematical concepts and scientific exploration. `,
  },
  {
    summaryHeader: "Physical Activity",
    detailText: `Physical Activity: Encouraging movement and physical development through play, exercise, and outdoor activities.`,
  },
  {
    summaryHeader: "Sound and Music",
    detailText: `Sound and Music: Incorporating auditory experiences, music, and sound exploration for sensory development. `,
  },
];

const accordionRightSideData: AccordionModel[] = [
  {
    summaryHeader: "Creative Arts",
    detailText: `Creative Arts: Encompassing expressive activities that encourage imagination, self-expression, and skill development. `,
  },
  {
    summaryHeader: "Language, Literacy, and Speech",
    detailText: `Language, Literacy, and Speech: Enhancing language development, reading, writing, and communication skills.`,
  },
  {
    summaryHeader: "Nutrition",
    detailText: `Nutrition: Supporting healthy eating habits, balanced diets, and nourishment for growing bodies.  `,
  },
  {
    summaryHeader: "Safety",
    detailText: `Safety: Ensuring child safety in the home and surrounding environment. `,
  },
  {
    summaryHeader: "Touch",
    detailText: `Touch: Providing sensory experiences involving tactile activities such as feeling different textures or objects.`,
  },
];

const mapCardData: MapCardModel[] = [
  {
    mapImageSrc: map1,
    ageCategory: "Ages 0-1",
    mapName: "Prenatal Paradise",
  },
  {
    mapImageSrc: map2,
    ageCategory: "Ages 0-1",
    mapName: "Blossom Haven",
  },
  {
    mapImageSrc: map3,
    ageCategory: "Ages 0-1",
    mapName: "Starlight Meadows",
  },
  {
    mapImageSrc: map4,
    ageCategory: "Ages 0-1",
    mapName: "Rainbow Valley",
  },
  {
    mapImageSrc: map5,
    ageCategory: "Ages 0-1",
    mapName: "Adventure Bay",
  },
  {
    mapImageSrc: map6,
    ageCategory: "Ages 0-1",
    mapName: "Fantasy Forest",
  },
];

const carouselCardData: CarouselCardModel[] = [
  {
    bgImage: pinkBg2,
    articleImage: pregNews1,
    articleCategory: "First Trimester (1 - 12 weeks)",
    articleHeader: "How Does Diet Affect Embryo Development?",
    authorImage: authorImage1,
    authorName: "Marie Buecker",
  },
  {
    bgImage: pinkBg2,
    articleImage: pregNews1,
    articleCategory: "Third Trimester (24 - 36 weeks)",
    articleHeader: "What are the signs of healthy fetal movement?",
    authorImage: authorImage1,
    authorName: "Anika Puri",
  },
  {
    bgImage: pinkBg2,
    articleImage: pregNews1,
    articleCategory: "Full Duration",
    articleHeader: "What prenatal vitamins and supplements should I take?",
    authorImage: authorImage1,
    authorName: "Andrew Evanson",
  },
];

function Accordion({ summaryHeader, detailText }: AccordionModel) {
  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-2 h-6 w-6 mx-auto mt-3 rounded-full bg-gray-400"></div>
        <div className="col-span-10">
          <details className="group py-1 text-lg">
            <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              {summaryHeader}
              <svg
                className="h-6 w-6 rotate-0 transform text-black group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <p className="text-gray-500 text-sm">{detailText}</p>
          </details>
        </div>
      </div>
      <div className="grid">
        <hr className="border-gray-300 my-2" />
      </div>
    </div>
  );
}

function MapCard({ mapImageSrc, ageCategory, mapName }: MapCardModel) {
  return (
    <div>
      <div className="grid grid-cols-12 grid-rows-12">
        <div className="col-start-1 col-end-13 row-start-1 row-end-13">
          <Image
            className="mx-auto w-auto rounded-2xl"
            src={mapImageSrc}
            alt="Olivia Kids"
          ></Image>
        </div>
        <div className="col-start-1 col-end-13 row-start-9 row-end-13 text-center bg-white rounded-xl bg-opacity-60">
          <div className="">
            <p>{ageCategory}</p>
            <h4 className="text-lg font-bold ">{mapName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselCard({
  bgImage,
  articleImage,
  articleCategory,
  articleHeader,
  authorImage,
  authorName,
}: CarouselCardModel) {
  return (
    <div className="grid grid-cols-12 mx-auto mb-auto">
      <div className="col-start-1 col-end-13 row-start-1 row-end-13">
        <Image src={bgImage} alt="Olivia Kids"></Image>
      </div>
      <div className="col-start-2 col-end-12 row-start-7 row-end-13">
        <Image src={articleImage} alt="Olivia Kids"></Image>
      </div>
      <div className="col-start-2 col-end-13 mt-3 space-y-2">
        <p>{articleCategory}</p>
        <h4 className="text-xl font-bold">{articleHeader}</h4>
        <div className="grid grid-cols-12 space-x-2">
          <div>
            <Image src={authorImage} alt="Olivia Kids"></Image>
          </div>
          <div className="col-span-9 my-auto">
            <p> {authorName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const LandingPage: React.FC = () => {
  return (
  <>
    <div className="landing-page relative">
      <Navbar />
      <div className="mt-20"></div>
      <div className="relative pt-80"> 
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover rounded-t-[100px] rounded-b-[100px]"
            src={Background}
            alt="Olivia Kids"
          />
        </div>

        <div className="relative mt-[-10rem]">
                <Image
                  height={200}
                  width={200}
                  src={Nerd}
                  alt="Olivia Kids"
                  className="absolute left-40"
                />
              </div>

        <div className="mt-[-10rem] max-w-md text-right relative z-10 ml-auto mr-40"> 
          <h3 className="text-2xl font-bold">
            Explore a world of education made for kids, and driven by you.
          </h3>
          <p className="py-5">
            We believe in facilitating education that puts the
            relationship between the child and the guardian at the
            forefront, because a strong support system and intimate
            guidance empowers children to succeed.
          </p>
          <div className="flex justify-between my-5">
            <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded">
              Explore for free
            </button>
            <button className="text-rose-600 font-bold py-2 px-4 rounded">
              Learn More
            </button>
            <button className="text-rose-600 font-bold py-2 px-4 rounded">
              OliviaHealth
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 transform translate-y-1/2">
          <Image
            className="h-auto w-auto"
            src={HalfSlice}
            alt="Half Slice"
          />
        </div>

        <div className="absolute bottom-0 right-0 transform translate-y-1/3" style={{ right: '16rem' }}>
          <Image
            className="h-auto w-auto"
            src={EllipseOne}
            alt="Ellipse One"
          />
        </div>
        
        <section className="relative z-10">
        <div className="py-80">
          <div className="container mx-auto">
            
          </div>
        </div>
      </section>

        <section className="relative z-10 mt-[-15rem]">
          <div className="py-10">
            <div className="grid grid-rows-12 grid-cols-12">
              <div className="col-start-2 col-end-12 sm:col-start-2 sm:col-end-12 row-start-2 row-end-12 overflow-auto h-[40rem] xl:h-auto">
                <div className="bg-white py-10 rounded-3xl shadow-md px-[8%]">
                  <section>
                    <h3 className="text-2xl font-bold mb-2">Learn by domain</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      <div>
                        {accordionLeftSideData.map(
                          ({ summaryHeader, detailText }, index) => {
                            return (
                              <Accordion
                                key={"accordionLeftSideData_" + index}
                                summaryHeader={summaryHeader}
                                detailText={detailText}
                              />
                            );
                          }
                        )}
                      </div>
                      <div>
                        {accordionRightSideData.map(
                          ({ summaryHeader, detailText }, index) => {
                            return (
                              <Accordion
                                key={"accordionLeftSideData_" + index}
                                summaryHeader={summaryHeader}
                                detailText={detailText}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="grid text-right mt-5">
                      <Link href="">
                        <span className="text-rose-600 font-semibold">
                          Why these topics?
                        </span>
                      </Link>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold pt-10">Our World</h3>
                    <p>
                      Voyage to the world that suits you by clicking the icon!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-7">
                      {mapCardData.map(
                        ({ mapImageSrc, ageCategory, mapName }, index) => {
                          return (
                            <MapCard
                              key={"mapCardData_" + index}
                              mapImageSrc={mapImageSrc}
                              ageCategory={ageCategory}
                              mapName={mapName}
                            />
                          );
                        }
                      )}
                    </div>
                    <div className="grid text-right mt-10 mb-2">
                      <Link href="">
                        <span className="text-rose-600 font-semibold">
                          Explore entire map
                        </span>
                      </Link>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative py-20">
        <div className="my-3">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 m-auto text-center sm:text-left max-w-md space-y-2">
                <p>Build your collection while building skills</p>
                <h3 className="text-2xl font-bold">Collect as you go!</h3>
                <p className="py-5">
                  {`As you and your child gain useful tools and essential
                  knowledge, you'll also collect a series of well-earned
                  badges. Earn stickers through activities tailored to your
                  child's developmental stage, progressively uncovering badges
                  as you go! Click on each to learn more!`}
                </p>
                <div className="my-5">
                  <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded">
                    Start your journey
                  </button>
                </div>
              </div>
              <div className="p-4 m-auto hidden sm:grid">
                <Image
                  src={Stickers}
                  height={400}
                  width={300}
                  alt="Olivia Kids"
                />
              </div>
            </div>
          </div>

          <div className="relative py-10 mt-20">
            <div className="absolute left-0" style={{ left: '12rem', top: '50%', transform: 'translateY(-50%)' }}>
              <Image
                src={Rectangle}
                height={50}
                width={50}
                alt="Rectangle"
                className="h-auto w-auto"
              />
            </div>
            <div className="absolute right-0" style={{ top: '50%', transform: 'translateY(-50%)' }}>
              <Image
                src={EllipseTwo}
                alt="Ellipse Two"
                className="h-auto w-auto"
              />
            </div>
          </div>

            

          <div className="container mx-auto mt-60">
            <div className="absolute left-0 transform">
              <Image
                src={HalfSliceTwo}
                alt="Half Slice Two"
                className="h-auto w-auto"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 m-auto hidden sm:grid">
                <Image
                  src={StickersTwo}
                  height={400}
                  width={300}
                  alt="Olivia Kids"
                />
              </div>
              <div className="p-4 m-auto text-center sm:text-right max-w-md space-y-2">
                <p>Entering new areas and new opportunities</p>
                <h3 className="text-2xl font-bold">Adapt to new locations</h3>
                <p className="py-5">
                  Once you enter the map, you will be thrust into a variety of
                  locations, all of which require different skills to conquer.
                  Opportunities for growth span the entirety of the map, and
                  welcome brave explorers!
                </p>
                <div className="my-5">
                  <button className="bg-rose-600 text-white font-bold py-2 px-4 rounded">
                    View world map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
          
          
        <hr className="border-gray-300 my-6" />

        <div className="absolute right-0 transform translate-y-2">
          <Image
            src={RectangleTwo}
            alt="Rectangle Two"
            className="h-auto w-auto"
          />
        </div>

        
        

        <section>
          <div className="container m-auto px-20 mt-40 mb-40">
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-1">
                <h3 className="text-2xl font-bold text-violet-400">About Us</h3>
                  <div className="absolute left-0 transform -translate-y-1/2 mt-10">
                    <Image
                      src={HalfSliceThree}
                      alt="Half Slice Three"
                      className="h-auto w-auto"
                    />
                  </div>
                <div className="mt-5">
                  
                  <p>
                    The{" "}
                    <span className="font-bold">
                      {" "}
                      Program of Excellence for Mothers, Children and Families
                      (POEMCF){" "}
                    </span>{" "}
                    at the Texas A&M School of Nursing develops and manages
                    projects that improve the health and well-being of families
                    and communities across Texas. The POEMCF was created to help
                    mothers, birthing people, infants, children, youth and
                    families thrive by providing educational health promotion,
                    preventative health care and community services.
                  </p>
                  <br />
                  <p>
                    The <span className="font-bold"> vision </span> of the
                    POEMCF is to be a leading program, founded in evidence, to
                    implement promising approaches for facilitating a culture of
                    healthy mothers, children and families. Its{" "}
                    <span className="font-bold"> mission </span> is to improve
                    the well-being and health outcomes of pregnant mothers,
                    infants, children, youth and their families across Texas
                    communities.
                  </p>
                  <br />
                  <p>
                    The POEMCF is distinctive for Texas A&M in its focus on
                    delivery of multiple evidence-based programs to improve
                    outcomes for vulnerable mothers, children and families.
                    Current programming is listed below.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                <button className="bg-violet-400 text-white hover:bg-violet-600 border-solid border-2 border-violet-800 font-bold py-2 px-4 rounded">
                  Champions
                </button>
                <button className="bg-violet-400 text-white hover:bg-violet-600 border-solid border-2 border-violet-800 font-bold py-2 px-4 rounded">
                  GC Moms
                </button>
                <button className="bg-violet-400 text-white hover:bg-violet-600 border-solid border-2 border-violet-800 font-bold py-2 px-4 rounded">
                  HIPPY at Texas A&M
                </button>
                <button className="bg-violet-400 text-white hover:bg-violet-600 border-solid border-2 border-violet-800 font-bold py-2 px-4 rounded">
                  Nurse Family Partnership at Texas A&M
                </button>
              </div>  
            </div>
            
          </div>
          
        </section>

        
        <section className="relative">
    {/* Triangle Positioned on the Right Above the Footer */}
    <div className="absolute right-0 top-0 transform -translate-y-full" style={{ paddingRight: '2rem' }}>
      <Image
        src={Triangle}
        alt="Triangle"
        height={100}
        width={100}
      />
    </div>
    
    {/* Footer */}
    <LandingPageFooter />
  </section>
      </div>
    </>
  );
};

export default LandingPage;
