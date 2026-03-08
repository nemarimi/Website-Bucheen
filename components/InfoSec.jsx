export default function InfoSection() {
    return (
        <>
            <div className="relative overflow-hidden">
                <div className="hidden lg:block absolute top-8 -left-16 w-80 h-80 rounded-full border-2 border-orange-200" />
                <div className="hidden lg:block absolute top-16 -left-8 w-64 h-64 rounded-full border-2 border-orange-100" />
                <div className="hidden lg:block absolute top-24 left-2 w-48 h-48 rounded-full border-2 border-orange-50" />

                <div className="flex flex-col md:flex-row items-center gap-4 px-4 pt-120 py-24 max-w-screen-xl mx-auto">
                    <div className="hidden lg:block flex-1" />
                    <div className="w-full lg:flex-1 flex flex-col gap-4 text-center items-center lg:text-left lg:items-start">
                        <h2 className="text-3xl font-semibold text-gray-900">
                            Find Match Now and Develop Your Feelings
                        </h2>
                        <p className="text-gray-500 text-xl">
                            There are so many platforms from this Pokan to make a task manager.
                        </p>
                        <button className="bg-[#f4845f] text-white px-6 py-2 rounded-lg w-fit">
                            Read More
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 px-4 pt-100 pb-20 md:pt-16 overflow-hidden max-w-screen-xl mx-auto justify-start md:justify-center">
                <div className="w-full max-w-lg mx-auto md:mx-0 lg:flex-1 flex flex-col gap-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center md:text-left">
                        How It Works To Find Your Relationship
                    </h2>
                    {[
                        { icon: "🔍", text: "Find your dating relationship in app and waiting until you get a notification." },
                        { icon: "❤️", text: "Dating with benefits and you redefine the expectations of a perfect relationship." },
                        { icon: "👤", text: "Ideal relationship makes your online dating relationship run more smoothly." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-2xl shrink-0">
                                {item.icon}
                            </div>
                            <p className="text-gray-500 text-lg">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex flex-1" />
            </div>
        </>
    )
}