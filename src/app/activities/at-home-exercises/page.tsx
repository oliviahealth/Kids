import React from 'react';

function Header() {
    return (
        <div className="flex items-center mb-4">
            <div className="flex-shrink-0">
                <img src={"/images/FlowerIcon.png"} alt="Logo" className="h-12 w-12" />
            </div>
            <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-800">At-Home Exercises</h1>
                <h2 className="text-xl font-semibold text-orange-500">Caregiver Wellness - Blossom Haven</h2>
            </div>
        </div>
    );
}

function AtHomeExercises() {
    return <>
        {/* <img src="/images/map.svg" className="absolute h-[100%] w-[100%] object-cover" /> */}
        <div className="h-[100%] w-[100%] bg-cover bg-center bg-[url('/images/map.svg')]">
            <div className="bg-white rounded-lg m-32 p-16">
                <div className="flex">
                    <div className="">
                        <Header />
                        <h3 className="text-lg font-semibold mb-4">Mindful Movement</h3>
                        <p className="mb-4">
                            Sometimes as a caregiver of an infant (0-1 year old), the last thing on your mind is to exercise because you are constantly busy with other tasks. However, exercising has numerous benefits that any caregiver can easily do at home! Today we're going to learn how any caregiver can do exercises at home that improve physical and mental health.
                        </p>
                        <p className="mb-4">
                            First we're going to discuss what the benefits of exercise for caregivers of infants. No matter how long or how difficult one is exercising, the benefits include improved energy, improved sleep, reduced feelings of stress, and reduced risk of heart and related diseases <a href="https://www.acog.org/womens-health/faqs/exercise-after-pregnancy" className="text-blue-500 underline">(source)</a>.
                        </p>
                        <p className="mb-4">
                            Please note, for postpartum caregivers, talk to your doctor to make sure you're able to do these exercises at home. Those who went through a difficult pregnancy and/or had a c-section may need time to recover before starting to exercise <a href="https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/exercise-after-pregnancy/art-20044596" className="text-blue-500 underline">(source)</a>.
                        </p>

                    </div>
                    <div className="">
                        <img className="object-cover" src=" /images/AtHomeExercisesActivityBackground.png" alt="Illustration" />
                        <img className="object-cover" src="/images/AtHomeExercisesActivitySaly.png" alt="Saly" />
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <a href="#" className="text-red-500">Learn more</a>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full">Continue</button>
                </div>
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">&times;</button>
            </div>
        </div>
    </>
}

export default AtHomeExercises;