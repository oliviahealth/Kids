import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WalkingActivityPage5Props {
  onNext: () => void;
  onBack: () => void;
}

const WalkingActivityPage5: React.FC<WalkingActivityPage5Props> = ({
  onNext,
  onBack,
}) => {
  const [journalEntry, setJournalEntry] = useState("");
  const router = useRouter();

  const handleExit = () => {
    router.push("/home");
  };

  const handleJournalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry(event.target.value);
  };

  return (
    <div className="bg-[#79CBF1] w-[100%] h-[100%] flex md:flex-row flex-col overflow-auto justify-between items-center shadow-lg p-6">
              <div className="flex flex-col w-full h-full">
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
                  <div style={{ marginTop: "-15px" }}>
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
                  className="w-11/12 h-4/5 mx-auto rounded-lg border border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 pt-4 pb-4 px-4"
                  style={{ resize: "none" }} // Ensures the textarea is not resizable
                />
                <div className="flex flex-row pt-8">
                  <div className="w-full flex justify-start font-Inter">
                    <button onClick={onBack} className="text-red-500">
                      Back
                    </button>
                  </div>
                  <Image
                    height={80}
                    width={200}
                    priority
                    src="/images/continue_walking.svg"
                    alt="Continue button"
                    onClick={onNext}
                  />
                </div>
              </div>
            </div>
  );
};

export default WalkingActivityPage5;
