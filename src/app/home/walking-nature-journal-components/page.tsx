"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WalkingNatureJournalWrapUp: React.FC = () => {
  const router = useRouter();
  // const [walkingPage, setWalkingPage] = useState(0);
  const [walkingPage, setWalkingPage] = useState(() => {
    // Get the saved walkingPage from localStorage or default to 0
    const savedPage = localStorage.getItem('walkingPage');
    return savedPage ? parseInt(savedPage, 10) : 0;
  });
  const [journalEntry, setJournalEntry] = useState(() => {
    // Get the saved journal entry from localStorage or default to an empty string
    return localStorage.getItem('journalEntry') || '';
  });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea when walkingPage is 1
    if (walkingPage === 1 && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [walkingPage]); // Dependency on walkingPage

  useEffect(() => {
    // Save journal entry to localStorage when it changes
    localStorage.setItem('journalEntry', journalEntry);
  }, [journalEntry]);

  const handleExit = () => {
    router.push("/home");
  };

  const handleContinue = () => {
    // Example action for continue, increment the walkingPage state
    setWalkingPage(walkingPage + 1);
  };

  const handleJournalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(event.target.value);
  };

  const renderWalkingPage = () => {
    switch (walkingPage) {
      case 0:
        return (
          <div className="bg-gray-500 h-screen flex justify-center items-center">
            <div className="bg-[#79CBF1] w-[90%] h-[90%] flex md:flex-row flex-col overflow-auto justify-between items-center rounded-3xl shadow-lg p-6">
              <div className="w-1/2 p-4 h-full flex flex-col justify-between">
                <div className="flex flex-col justify-center items-center flex-grow">
                  <div className="pl-12 font-Candal">
                    <h1 className="text-2xl font-bold mb-2">
                      Enjoy your walk!
                    </h1>
                    <p className="mb-4 font-thin">
                      Remember to be attentive and stay safe.
                    </p>
                    <p className="mb-6 font-thin">
                      Once you have finished your walk, come back and continue
                      the activity.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-start font-Inter">
                  <button onClick={handleExit} className="text-red-500">
                    End Walk
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-4 h-full flex flex-row justify-center items-center">
                <div className="pl-12">
                  <Image
                    height={80}
                    width={260}
                    priority
                    src="/images/farmer_dude.svg"
                    alt="Image of character in an overalls"
                  />
                </div>
                <div className="h-full pl-4 flex flex-col justify-between items-end">
                  <Image
                    height={73}
                    width={73}
                    priority
                    src="/images/exit.svg"
                    alt="Exit button"
                    onClick={handleExit}
                  />
                  <Image
                    height={80}
                    width={200}
                    priority
                    src="/images/continue_walking.svg"
                    alt="Continue button"
                    onClick={handleContinue}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bg-gray-500 h-screen flex justify-center items-center">
            <div className="bg-[#79CBF1] w-[90%] h-[90%] flex md:flex-row flex-col overflow-auto justify-between rounded-3xl shadow-lg p-6">
              <div className="flex flex-col w-full">
                <div className="flex flex-row p-4 pl-8 justify-between">
                  <div className="font-Candal">
                    {/* containing time for some reflection text */}
                    <h1 className="text-2xl font-bold mb-2">
                      Time for some reflection!
                    </h1>
                    <p className="mb-4 font-thin">
                      Reflect on what you saw and felt on your walk.
                    </p>
                    <p className="mb-6 font-thin">
                      Once you finish, submit the journal entry.
                    </p>
                  </div>
                  <div style={{ marginTop: "-25px" }}>
                    <Image
                      height={73}
                      width={73}
                      priority
                      src="/images/exit.svg"
                      alt="Exit button"
                      onClick={handleExit}
                    />
                  </div>
                </div>
                <textarea
                  value={journalEntry}
                  onChange={handleJournalChange}
                  placeholder="Type your journal entry..."
                  className="w-11/12 h-3/5 mx-auto rounded-lg border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pt-4 pb-4 px-4"
                  style={{ resize: "none" }} // Ensures the textarea is not resizable
                />
                <div className="flex flex-row pt-8">
                  <div className="w-full flex justify-start font-Inter">
                    <button onClick={handleExit} className="text-red-500">
                      End Walk
                    </button>
                  </div>
                  <Image
                    height={80}
                    width={200}
                    priority
                    src="/images/continue_walking.svg"
                    alt="Continue button"
                    onClick={handleContinue}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      // Add cases for walkingPage 1 and 2 if needed
      default:
        return <p>No content available.</p>;
    }
  };

  return renderWalkingPage(); // Correct the placement of this return statement
};

export default WalkingNatureJournalWrapUp;
