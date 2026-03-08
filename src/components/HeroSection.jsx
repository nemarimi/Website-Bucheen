import { useState } from "react";

const phoneScreen1 = (
    <div className="w-full h-full bg-[#f9c5b6] rounded-3xl flex flex-col items-center justify-end pb-8 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-linear-to-b from-[#f9c5b6] to-[#f4a48e] opacity-60 rounded-3xl" />
        <div className="relative z-10 bg-white rounded-2xl p-4 w-full shadow-xl mb-4">
            <p className="text-[#f4845f] font-bold text-center text-sm mb-1">Find Your Dream Partner Now</p>
            <p className="text-gray-400 text-xs text-center mb-3">Find your partner now, all easy with us.</p>
            <div className="flex justify-center gap-1 mb-3">
                <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                <span className="w-2 h-2 rounded-full bg-[#f4845f] inline-block" />
            </div>
            <button className="w-full bg-[#f4845f] text-white rounded-xl py-2 text-sm font-semibold">Get Started</button>
        </div>
    </div>
);

const phoneScreen2 = (
    <div className="w-full h-full bg-white rounded-3xl flex flex-col p-4 gap-3 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#f4845f] flex items-center justify-center text-white font-bold text-xs">E</div>
            <div>
                <p className="font-bold text-gray-800 text-xs">Hello Naida</p>
                <p className="text-gray-400 text-[10px]">Find Your Love Now</p>
            </div>
        </div>
        <div className="flex gap-2 bg-gray-100 rounded-xl p-2 items-center">
            <select className="bg-transparent text-xs text-gray-600 flex-1 outline-none">
                <option>Male</option>
                <option>Female</option>
            </select>
            <div className="w-px h-4 bg-gray-300" />
            <select className="bg-transparent text-xs text-gray-600 flex-1 outline-none">
                <option>Female</option>
                <option>Male</option>
            </select>
        </div>
        <button className="bg-[#f4845f] text-white rounded-xl py-1.5 text-xs font-semibold">Find Now</button>
        <p className="text-gray-700 font-bold text-xs">Event Dating</p>
        <div className="flex gap-2">
            <div className="flex-1 bg-[#f4845f] rounded-xl h-16 flex flex-col justify-end p-2">
                <p className="text-white text-[10px] font-semibold">Wedding party</p>
            </div>
            <div className="flex-1 bg-[#c4b5f4] rounded-xl h-16 flex flex-col justify-end p-2">
                <p className="text-white text-[10px] font-semibold">Birthday party</p>
            </div>
        </div>
        <p className="text-gray-700 font-bold text-xs">Most Popular</p>
        <div className="flex gap-2">
            {["#f4845f", "#f9c5b6", "#c4b5f4", "#a78bfa"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow" style={{ background: c }} />
            ))}
        </div>
    </div>
);

export default function HeroSection() {
    const [gender1, setGender1] = useState("Male");
    const [gender2, setGender2] = useState("Female");

    return (
        <section
            className="w-full min-h-screen flex items-center justify-center px-4 py-16 hero-bg"
        >
            <div className="mt-60 lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-screen-xl mx-auto ">

                <div className=" mt-48 lg:mt-0 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
                    <h1 className="text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
                        Find{" "}
                        <span className="text-[#f4845f]">Match Now</span>
                        <br />
                        and Grow Your
                        <br />
                        Feelings
                    </h1>

                    <p className="text-gray-500 text-base leading-relaxed max-w-md">
                        There are so many platforms from this Pokan to make a task manager
                        manage all your time, the data needed is very useful and we have it
                        all to get you to be successful.
                    </p>

                    <div className="flex items-center gap-0 bg-white rounded-2xl shadow-md px-4 py-3 w-fit">
                        <select
                            value={gender1}
                            onChange={(e) => setGender1(e.target.value)}
                            className="bg-transparent text-gray-700 text-sm pr-4 outline-none cursor-pointer"
                        >
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div className="w-px h-6 bg-gray-200 mx-2" />
                        <select
                            value={gender2}
                            onChange={(e) => setGender2(e.target.value)}
                            className="bg-transparent text-gray-700 text-sm pr-4 outline-none cursor-pointer"
                        >
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                        <button className="ml-4 bg-[#f4845f] hover:bg-[#e5724d] transition-colors text-white font-semibold px-6 py-2 rounded-xl text-sm">
                            Find Now
                        </button>
                    </div>
                </div>


                <div className="static lg:relative flex justify-center items-center h-480px order-1 lg:order-2">

                    <div
                        className="absolute w-52 h-96 rounded-3xl shadow-2xl overflow-hidden"
                        style={{
                            transform: "rotate(-8deg) translateX(-30px) translateY(20px)",
                            zIndex: 1,
                        }}
                    >
                        {phoneScreen1}
                    </div>

                    <div
                        className="absolute w-52 h-105px rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
                        style={{
                            transform: "rotate(4deg) translateX(60px) translateY(-10px)",
                            zIndex: 2,
                        }}
                    >
                        {phoneScreen2}
                    </div>
                </div>
            </div>
        </section>
    );
}
