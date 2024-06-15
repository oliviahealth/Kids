import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import island from "../../public/images/landingPage/island.jpeg";
import map1 from "../../public/images/landingPage/map1.jpeg";
import pinkBackground from "../../public/images/landingPage/pregnancy bg.png";
import pinkBg2 from "../../public/images/landingPage/pinkBg2.png";
import pregNews1 from "../../public/images/landingPage/pregnNews1.png";
import authorImage1 from "../../public/images/landingPage/authorImage1.png";


const LandingPage: React.FC = () => {
  return (
    <>
      <div className="landing-page relative">
        <Navbar />

        <section>
          <div className="my-3">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4">
                  <div className="container mx-auto">
                    <Image
                      src="/images/landingPage/rocket.png"
                      height={400}
                      width={300}
                      alt="Olivia Kids"
                    ></Image>
                  </div>
                </div>
                <div className="p-4 my-auto">
                  <div className="container mx-auto">
                    <h3 className="text-2xl font-bold">
                      Explore a world of education made for kids, and driven by
                      you.
                    </h3>
                    <p className="py-5">
                      We believe in facilitating education that puts the
                      relationship between the child and the guardian at the
                      forefront, because a strong support system and intimate
                      guidance empowers children to succeed.
                    </p>
                    <div className="flex justify-between my-5">
                      <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                        Explore for free
                      </button>
                      <button className="text-rose-600 hover:bg-rose-600 hover:text-white font-bold py-2 px-4 rounded">
                        Learn More
                      </button>
                      <button className="text-rose-600 hover:bg-rose-600 hover:text-white font-bold py-2 px-4 rounded">
                        OliviaHealth
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-5">
            <div className="grid grid-rows-12 grid-cols-12">
              <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                <Image
                  className="h-full w-full opacity-30 rounded-[100px]"
                  src={island}
                  alt="Olivia Kids"
                ></Image>
              </div>
              <div className="col-start-2 col-end-12 sm:col-start-3 sm:col-end-11 row-start-3 row-end-11 z-10 overflow-auto h-[40rem] xl:h-auto">
                <div className="bg-white p-6 rounded-3xl shadow-md">
                  <section>
                    <h3 className="text-2xl font-bold mb-4">Learn by domain</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 ">
                      <div className="divide-y px-5">
                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Caregiver Wellness
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Emotional, Behavioral and Social
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Math and Science
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Physical Activity
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Sound and Music
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>
                      </div>
                      <div className="divide-y px-5">
                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Creative Arts
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Language, Literacy, and Speech
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Nutrition
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Safety
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>

                        <details className="group py-1 text-lg">
                          <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                            Touch
                            <svg
                              className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="5"
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
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Explicabo, est corrupti voluptas,
                            reprehenderit maiores sint quidem sit nostrum
                            molestiae distinctio incidunt temporibus beatae,
                            alias dicta soluta tenetur velit itaque placeat.
                          </p>
                        </details>
                      </div>
                    </div>
                    <div className="grid text-right mt-5">
                      <Link href={""}>
                        <span className="text-indigo-600">
                          Why these topics?
                        </span>
                      </Link>
                    </div>
                    <div className="grid">
                      <hr className="border-gray-300 mx-3 mt-5" />
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold pt-10">Our World</h3>
                    <p>
                      Voyage to the world that suits you by clicking the icon!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="flex-column justify-end shadow-xl rounded-xl">
                          <Image
                            className="mx-auto w-auto  rounded-t-2xl"
                            src={map1}
                            alt="Olivia Kids"
                          ></Image>
                          <div className="text-center bg-white shadow-xl rounded-b-xl">
                            <p>Ages 0-1</p>
                            <h4 className="text-lg font-bold ">Map 1</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="my-3">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 m-auto text-center sm:text-left">
                  <p>Build your collection while building skills</p>
                  <h3 className="text-2xl font-bold">Collect as you go!</h3>
                  <p className="py-5">
                    As you and your child gain useful tools and essential
                    knowledge, you'll also collect a series of well-earned
                    badges. Earn stickers through activities tailored to your
                    child's developmental stage, progressively uncovering badges
                    as you go! Click on each to learn more!
                  </p>
                  <div className="my-5">
                    <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                      Start your journey
                    </button>
                  </div>
                </div>
                <div className="p-4 m-auto hidden sm:grid">
                  <Image
                    src="/images/landingPage/rocket.png"
                    height={400}
                    width={300}
                    alt="Olivia Kids"
                  ></Image>
                </div>
              </div>
            </div>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 m-auto hidden sm:grid">
                  <Image
                    src="/images/landingPage/rocket.png"
                    height={400}
                    width={300}
                    alt="Olivia Kids"
                  ></Image>
                </div>
                <div className="p-4 m-auto text-center sm:text-right">
                  <p>Entering new areas and new opportunities</p>
                  <h3 className="text-2xl font-bold">Adapt to new locations</h3>
                  <p className="py-5">
                    Once you enter the map, you will be thrust into a variety of
                    locations, all of which require different skills to conquer.
                    Opportunities for growth span the entirety of the map, and
                    welcome brave explorers!
                  </p>
                  <div className="my-5">
                    <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                      View world map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-12 grid-rows-12">
            <div className="col-start-1 col-end-13  row-start-1 row-end-13">
              <Image
                className="h-[200px] md:h-40"
                src={pinkBackground}
                alt="Olivia Kids"
              ></Image>
            </div>
            <div className="col-start-1 col-end-13 row-start-1 md:row-start-3 row-end-13  ">
              <h3 className="text-2xl font-bold text-center">Pregnancy</h3>
              <p className="text-center">
                Wanting the best for your child can be stressful, so we've
                compiled a list of resources to make your journey easier and
                more informed. Dive into our catalog of research-based articles
                by clicking the "Explore Pregnancy" button below.
              </p>
            </div>
          </div>
          <div className="container px-10 m-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-4">
              <div className="grid grid-cols-12 mx-auto mb-auto">
                <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                  <Image src={pinkBg2} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-2 col-end-12 row-start-7 row-end-13">
                  <Image src={pregNews1} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-1 col-end-13">
                  <p>First Trimester (1 - 12 weeks)</p>
                  <h4 className="text-xl font-bold">
                    How Does Diet Affect Embryo Development?
                  </h4>
                  <div className="grid grid-cols-12">
                    <div>
                      <Image src={authorImage1} alt="Olivia Kids"></Image>
                    </div>
                    <div className="col-span-9 my-auto">
                      <p> Marie Buecker</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 mx-auto mb-auto">
                <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                  <Image src={pinkBg2} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-2 col-end-12 row-start-7 row-end-13">
                  <Image src={pregNews1} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-1 col-end-13">
                  <p>Third Trimester (24 - 36 weeks)</p>
                  <h4 className="text-xl font-bold">
                    What are the signs of healthy fetal movement?
                  </h4>
                  <div className="grid grid-cols-12">
                    <div>
                      <Image src={authorImage1} alt="Olivia Kids"></Image>
                    </div>
                    <div className="col-span-9 my-auto">
                      <p>Anika Puri</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 mx-auto mb-auto">
                <div className="col-start-1 col-end-13 row-start-1 row-end-13">
                  <Image src={pinkBg2} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-2 col-end-12 row-start-7 row-end-13">
                  <Image src={pregNews1} alt="Olivia Kids"></Image>
                </div>
                <div className="col-start-1 col-end-13">
                  <p>Full Duration</p>
                  <h4 className="text-xl font-bold">
                    What prenatal vitamins and supplements should I take?
                  </h4>
                  <div className="grid grid-cols-12">
                    <div>
                      <Image src={authorImage1} alt="Olivia Kids"></Image>
                    </div>
                    <div className="col-span-9 my-auto">
                      <p>Andrew Evanson</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="col-start-1 sm:col-start-6 col-end-9 m-auto">
                <button className="text-rose-600 hover:bg-rose-600 hover:text-white font-bold py-2 px-4 rounded">
                  Our Authors
                </button>
              </div>
              <div className="col-start-1 sm:col-start-10 col-end-13 m-auto">
                <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                  Explore Prenancy
                </button>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 m-10" />
        </section>

        <section>
          <div className="container m-auto px-20">
            <div className="grid grid-cols-1">
              <div className="grid grid-cols-1">
                <h3 className="text-2xl font-bold">About Us</h3>
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
                  The <span className="font-bold"> vision </span> of the POEMCF
                  is to be a leading program, founded in evidence, to implement
                  promising approaches for facilitating a culture of healthy
                  mothers, children and families. Its{" "}
                  <span className="font-bold"> mission </span> is to improve the
                  well-being and health outcomes of pregnant mothers, infants,
                  children, youth and their families across Texas communities.
                </p>
                <br />
                <p>
                  The POEMCF is distinctive for Texas A&M in its focus on
                  delivery of multiple evidence-based programs to improve
                  outcomes for vulnerable mothers, children and families.
                  Current programming is listed below.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 my-10">
                <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                  Champions
                </button>
                <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                  GC Moms
                </button>
                <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                  HIPPY at Texas A&M
                </button>
                <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                  Nurse Family Partnership at Texas A&M
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="h-[300px]"></div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
