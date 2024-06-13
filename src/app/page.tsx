import Mission from "@/components/Mission";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import island from "../../public/images/landingPage/island.jpeg";
import map1 from "../../public/images/landingPage/map1.jpeg";
import pinkBackground from "../../public/images/landingPage/pregnancy bg.png";
// const Fold: React.FC = () => {
//   return (
//     <svg
//       xmlns=" http://www.w3.org/2000/svg"
//       width="32"
//       height="32"
//       viewBox="0 0 32 32"
//       fill="none"
//     >
//       <path
//         d="M9.87326 31.5371C4.16226 31.8626 -0.399419 26.8475 0.464277 21.1928L3.70125 1.27976e-05L31.2771 30.3171L9.87326 31.5371Z"
//         fill="#D9D9D9"
//       />
//     </svg>
//   );
// };

// const Explore: React.FC = () => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348 91" fill="none">
//       <rect
//         x="2.93809"
//         y="2.93809"
//         width="342.124"
//         height="84.2251"
//         rx="42.1126"
//         fill="#FF7272"
//         stroke="#D83939"
//         strokeWidth="5.87617"
//       />
//       <path
//         d="M39.0729 29.5443H61.2106V35.3912H49.0706V42.0637H59.7823V47.7767H49.0706V54.6724H61.2106V61.0994H39.0729V29.5443ZM86.4056 48.5577L94.4394 61.0994H83.5045L78.8404 53.0879L74.6449 61.0994H66.5441L73.3952 48.6916L65.3614 37.0203H76.2963L80.7372 44.7194L85.2228 37.0203H93.3236L86.4056 48.5577ZM98.5902 37.0203H108.409C108.156 37.8237 107.978 38.575 107.874 39.2742C107.784 39.9586 107.74 40.6801 107.74 41.4389C108.156 40.7099 108.699 40.0404 109.369 39.4304C110.038 38.8204 110.775 38.2923 111.578 37.846C112.382 37.3996 113.222 37.05 114.1 36.7971C114.993 36.5442 115.863 36.4177 116.711 36.4177C117.961 36.4177 119.173 36.6558 120.348 37.1318C121.524 37.6079 122.558 38.3444 123.45 39.3412C124.358 40.3379 125.08 41.6174 125.615 43.1795C126.166 44.7268 126.441 46.5716 126.441 48.714C126.441 51.1241 126.136 53.1623 125.526 54.8286C124.931 56.48 124.15 57.819 123.183 58.8455C122.216 59.8721 121.122 60.6159 119.902 61.0771C118.697 61.5234 117.485 61.7466 116.265 61.7466C115.387 61.7466 114.531 61.6499 113.698 61.4565C112.88 61.278 112.114 61.0251 111.4 60.6978C110.7 60.3556 110.076 59.9613 109.525 59.515C108.975 59.0538 108.543 58.5554 108.231 58.0198V70.74H98.5902V37.0203ZM108.231 49.1156C108.231 50.3356 108.365 51.3547 108.632 52.173C108.9 52.9912 109.25 53.6533 109.681 54.1591C110.128 54.6501 110.626 55.0071 111.177 55.2303C111.742 55.4386 112.315 55.5427 112.895 55.5427C113.475 55.5427 114.04 55.4386 114.591 55.2303C115.141 55.0071 115.632 54.6501 116.064 54.1591C116.495 53.6533 116.837 52.9912 117.09 52.173C117.358 51.3398 117.492 50.3133 117.492 49.0933C117.492 47.8883 117.358 46.8766 117.09 46.0583C116.837 45.2252 116.495 44.5557 116.064 44.0499C115.632 43.544 115.141 43.187 114.591 42.9787C114.055 42.7555 113.497 42.6439 112.917 42.6439C112.337 42.6439 111.764 42.7555 111.199 42.9787C110.648 43.187 110.15 43.544 109.704 44.0499C109.257 44.5557 108.9 45.2252 108.632 46.0583C108.365 46.8766 108.231 47.8957 108.231 49.1156ZM131.797 26.8218H141.437V61.0994H131.797V26.8218ZM160.629 61.7466C158.874 61.7466 157.312 61.583 155.943 61.2557C154.574 60.9284 153.376 60.4746 152.35 59.8944C151.323 59.3141 150.446 58.6298 149.717 57.8413C149.002 57.0379 148.422 56.1676 147.976 55.2303C147.53 54.293 147.202 53.3037 146.994 52.2622C146.801 51.2208 146.704 50.1645 146.704 49.0933C146.704 48.037 146.801 46.9956 146.994 45.9691C147.202 44.9276 147.53 43.9383 147.976 43.001C148.422 42.0488 149.002 41.1785 149.717 40.39C150.431 39.5866 151.301 38.8948 152.328 38.3146C153.369 37.7195 154.574 37.2583 155.943 36.931C157.312 36.5888 158.874 36.4177 160.629 36.4177C162.385 36.4177 163.947 36.5888 165.316 36.931C166.684 37.2583 167.882 37.7195 168.909 38.3146C169.95 38.8948 170.828 39.5866 171.542 40.39C172.256 41.1785 172.836 42.0488 173.283 43.001C173.729 43.9383 174.049 44.9276 174.242 45.9691C174.45 46.9956 174.555 48.037 174.555 49.0933C174.555 50.1645 174.45 51.2208 174.242 52.2622C174.049 53.3037 173.729 54.293 173.283 55.2303C172.836 56.1676 172.249 57.0379 171.52 57.8413C170.805 58.6298 169.935 59.3141 168.909 59.8944C167.882 60.4746 166.684 60.9284 165.316 61.2557C163.947 61.583 162.385 61.7466 160.629 61.7466ZM156.345 49.0933C156.345 49.8967 156.419 50.6852 156.568 51.4588C156.716 52.2176 156.954 52.902 157.282 53.5119C157.624 54.107 158.063 54.5906 158.598 54.9625C159.149 55.3195 159.826 55.4981 160.629 55.4981C161.433 55.4981 162.102 55.3195 162.638 54.9625C163.188 54.5906 163.627 54.107 163.954 53.5119C164.297 52.902 164.542 52.2176 164.691 51.4588C164.84 50.6852 164.914 49.8967 164.914 49.0933C164.914 48.2899 164.84 47.5089 164.691 46.7501C164.542 45.9765 164.297 45.2921 163.954 44.697C163.627 44.0871 163.188 43.5961 162.638 43.2242C162.102 42.8522 161.433 42.6663 160.629 42.6663C159.826 42.6663 159.149 42.8522 158.598 43.2242C158.063 43.5961 157.624 44.0871 157.282 44.697C156.954 45.2921 156.716 45.9765 156.568 46.7501C156.419 47.5089 156.345 48.2899 156.345 49.0933ZM179.821 37.0203H188.993C188.963 37.4071 188.941 37.8385 188.926 38.3146C188.911 38.7758 188.904 39.2668 188.904 39.7875C188.904 40.2933 188.904 40.8066 188.904 41.3273C188.904 41.848 188.904 42.3464 188.904 42.8225C189.201 42.0935 189.588 41.3496 190.064 40.5909C190.54 39.8172 191.098 39.1254 191.738 38.5155C192.393 37.9055 193.129 37.4071 193.947 37.0203C194.78 36.6186 195.71 36.4177 196.737 36.4177C196.93 36.4177 197.139 36.4326 197.362 36.4624C197.6 36.4772 197.83 36.507 198.053 36.5516C198.277 36.5963 198.485 36.6558 198.678 36.7302C198.887 36.7897 199.058 36.8641 199.192 36.9533L198.411 46.1476C197.741 45.8947 197.034 45.7087 196.29 45.5897C195.547 45.4558 194.899 45.3888 194.349 45.3888C193.59 45.3888 192.921 45.4855 192.341 45.679C191.775 45.8575 191.292 46.0955 190.89 46.3931C190.488 46.6906 190.168 47.0179 189.93 47.375C189.707 47.732 189.551 48.0817 189.462 48.4238V61.0994H179.821V37.0203ZM225.569 60.1398C224.171 60.601 222.661 60.9804 221.039 61.278C219.418 61.5904 217.729 61.7466 215.973 61.7466C214.054 61.7466 212.224 61.4937 210.484 60.9879C208.743 60.482 207.211 59.6935 205.886 58.6223C204.562 57.5512 203.506 56.1973 202.718 54.5608C201.944 52.9094 201.557 50.9456 201.557 48.6693C201.557 47.375 201.758 46.1773 202.16 45.0764C202.561 43.9606 203.104 42.9489 203.789 42.0414C204.488 41.1339 205.299 40.3305 206.221 39.6313C207.158 38.932 208.155 38.3444 209.212 37.8683C210.283 37.3922 211.384 37.0351 212.514 36.7971C213.645 36.5442 214.753 36.4177 215.839 36.4177C217.55 36.4177 219.06 36.6111 220.37 36.998C221.679 37.3699 222.765 37.8757 223.628 38.5155C224.506 39.1552 225.168 39.8991 225.614 40.7471C226.06 41.5951 226.283 42.4952 226.283 43.4473C226.283 44.6078 226.083 45.5971 225.681 46.4154C225.294 47.2336 224.766 47.9254 224.096 48.4908C223.442 49.0413 222.676 49.4801 221.798 49.8074C220.935 50.1199 220.02 50.3654 219.053 50.5439C218.086 50.7075 217.097 50.8117 216.085 50.8563C215.088 50.9009 214.136 50.9233 213.228 50.9233C212.916 50.9233 212.611 50.9233 212.314 50.9233C212.031 50.9084 211.748 50.9009 211.466 50.9009C211.585 51.749 211.815 52.4631 212.157 53.0433C212.514 53.6235 212.953 54.0996 213.474 54.4715C214.01 54.8286 214.62 55.0889 215.304 55.2526C216.003 55.4014 216.747 55.4758 217.536 55.4758C218.131 55.4758 218.763 55.4311 219.432 55.3419C220.117 55.2526 220.801 55.1336 221.485 54.9848C222.185 54.8212 222.877 54.6426 223.561 54.4492C224.26 54.2409 224.93 54.0252 225.569 53.802V60.1398ZM211.265 47.4642C211.622 47.4494 212.075 47.4271 212.626 47.3973C213.191 47.3675 213.786 47.3155 214.411 47.2411C215.036 47.1667 215.661 47.0626 216.286 46.9287C216.911 46.7948 217.476 46.6237 217.982 46.4154C218.488 46.2071 218.897 45.9467 219.209 45.6343C219.522 45.3219 219.678 44.9425 219.678 44.4962C219.678 43.7374 219.373 43.1349 218.763 42.6886C218.168 42.2274 217.335 41.9968 216.263 41.9968C215.773 41.9968 215.244 42.0712 214.679 42.2199C214.114 42.3538 213.586 42.6216 213.095 43.0233C212.604 43.425 212.187 43.9829 211.845 44.697C211.503 45.4112 211.309 46.3336 211.265 47.4642Z"
//         fill="white"
//       />
//       <path
//         d="M284.503 23.1991C285.212 22.4313 286.175 22 287.179 22C288.183 22 289.146 22.4313 289.856 23.1991L306.892 41.6292C307.601 42.3972 308 43.4387 308 44.5247C308 45.6107 307.601 46.6523 306.892 47.4203L289.856 65.8503C289.142 66.5964 288.185 67.0092 287.193 66.9998C286.2 66.9905 285.251 66.5598 284.549 65.8004C283.847 65.0411 283.449 64.0139 283.44 62.94C283.431 61.8662 283.813 60.8316 284.503 60.0592L294.751 48.6203H258.786C257.782 48.6203 256.819 48.1888 256.109 47.4207C255.399 46.6527 255 45.6109 255 44.5247C255 43.4385 255.399 42.3968 256.109 41.6287C256.819 40.8607 257.782 40.4292 258.786 40.4292H294.751L284.503 28.9903C283.793 28.2222 283.394 27.1807 283.394 26.0947C283.394 25.0087 283.793 23.9672 284.503 23.1991Z"
//         fill="white"
//       />
//       <path
//         d="M284.503 23.1991C285.212 22.4313 286.175 22 287.179 22C288.183 22 289.146 22.4313 289.856 23.1991L306.892 41.6292C307.601 42.3972 308 43.4387 308 44.5247C308 45.6107 307.601 46.6523 306.892 47.4203L289.856 65.8503C289.142 66.5964 288.185 67.0092 287.193 66.9998C286.2 66.9905 285.251 66.5598 284.549 65.8004C283.847 65.0411 283.449 64.0139 283.44 62.94C283.431 61.8662 283.813 60.8316 284.503 60.0592L294.751 48.6203H258.786C257.782 48.6203 256.819 48.1888 256.109 47.4207C255.399 46.6527 255 45.6109 255 44.5247C255 43.4385 255.399 42.3968 256.109 41.6287C256.819 40.8607 257.782 40.4292 258.786 40.4292H294.751L284.503 28.9903C283.793 28.2222 283.394 27.1807 283.394 26.0947C283.394 25.0087 283.793 23.9672 284.503 23.1991Z"
//         stroke="#B538D4"
//       />
//     </svg>
//   );
// };

// const ExploreFrame: React.FC = () => {
//   return (
//     //<Link href="/home">
//     <div className="absolute transform -translate-y-1/2 right-[10%] top-1/2">
//       <div className="relative w-[100%] h-[100%] bg-white rounded-lg">
//         <div className="absolute top-0 right-0">
//           <Fold />
//         </div>

//         <div
//           className="flex flex-col p-4 pt-1 pb-1"
//           style={{ color: "#FF7272" }}
//         >
//           <Link href="/home" className="text-xl">
//             Next up:
//           </Link>
//           <Link href="/home" className="text-xl font-bold">
//             Math & Science
//           </Link>
//         </div>

//         <div className="w-[120%]">
//           <Link href="/home">
//             <Explore />
//           </Link>
//         </div>
//       </div>
//     </div>
//     //</Link>
//   );
// };

const LandingPage: React.FC = () => {
  return (
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
                className="w-[100%] opacity-30 rounded-[100px]"
                src={island}
                alt="Olivia Kids"
              ></Image>
            </div>
            <div className="col-start-3 col-end-11 row-start-3 row-end-11 z-10 overflow-auto h-[40rem] lg:h-auto">
              <div className="bg-white p-6 rounded-3xl shadow-md">
                <section>
                  <h3 className="text-2xl font-bold mb-4">Learn by domain</h3>
                  <div className="grid grid-cols-2 ">
                    <div className="divide-y px-5">
                      <details className="group py-1 text-lg">
                        <summary className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
                          Caregiver Wellness
                          <svg
                            className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
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
                            stroke-width="5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <p className="text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Explicabo, est corrupti voluptas, reprehenderit
                          maiores sint quidem sit nostrum molestiae distinctio
                          incidunt temporibus beatae, alias dicta soluta tenetur
                          velit itaque placeat.
                        </p>
                      </details>
                    </div>
                  </div>
                  <div className="float-right">
                    <Link href={""}>
                      <span className="text-indigo-600">Why these topics?</span>
                    </Link>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold pt-10">Our World</h3>
                  <p>
                    Voyage to the world that suits you by clicking the icon!{" "}
                  </p>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
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
                    <div className="col-span-4 ">
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
              <div className="p-4 my-auto">
                <div className="container mx-auto">
                  <p>Build your collection while building skills</p>
                  <h3 className="text-2xl font-bold">Collect as you go!</h3>
                  <p className="py-5">
                    As you and your child gain useful tools and essential
                    knowledge, you'll also collect a series of well-earned
                    badges. Earn stickers through activities tailored to your
                    child's developmental stage, progressively uncovering badges
                    as you go! Click on each to learn more!
                  </p>
                  <div className="flex justify-between my-5">
                    <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                      Start your journey
                    </button>
                  </div>
                </div>
              </div>

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
            </div>
          </div>
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
                  <p>Entering new areas and new opportunities</p>
                  <h3 className="text-2xl font-bold">Adapt to new locations</h3>
                  <p className="py-5">
                    Once you enter the map, you will be thrust into a variety of
                    locations, all of which require different skills to conquer.
                    Opportunities for growth span the entirety of the map, and
                    welcome brave explorers!
                  </p>
                  <div className="flex justify-between my-5">
                    <button className="bg-rose-600 text-white hover:bg-white hover:text-rose-600  font-bold py-2 px-4 rounded">
                      View world map
                    </button>
                  </div>
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
              compiled a list of resources to make your journey easier and more
              informed. Dive into our catalog of research-based articles by
              clicking the "Explore Pregnancy" button below.
            </p>
          </div>
        </div>
      </section>
      {/* <div className="relative image-container">
        <img
          className="object-fit w-full"
          src="/images/background.png"
          alt="Landing Page Image"
        />
        <ExploreFrame />
      </div> */}
      {/* <div
        className="empty-container"
        style={{
          height: "100px",
        }}
      ></div>
      <Mission /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
