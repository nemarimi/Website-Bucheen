import { useState, useEffect, useRef } from 'react'

const reviews = [
    { name: "User1", location: "Location", text: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet", stars: 5 },
    { name: "User2", location: "Location", text: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ", stars: 5 },
    { name: "User3", location: "Location", text: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet", stars: 5 },
]

export default function Reviews() {
    const [current, setCurrent] = useState(0)
    const touchStartX = useRef(0)

    const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)
    const next = () => setCurrent((prev) => (prev + 1) % reviews.length)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % reviews.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-32 px-4 w-full overflow-hidden">

            <div className="text-center mb-12 max-w-md mx-auto">
                <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                    What Our Customers<br />Have To Say
                </h2>
                <p className="text-gray-400">Here's what our customers say with Bucheen</p>
            </div>

            <div className="hidden lg:flex gap-6 max-w-screen-xl mx-auto px-4">
                {reviews.map((review, i) => (
                    <div key={i} className="flex-1 border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300" />
                            <div>
                                <p className="font-semibold text-gray-900">{review.name}</p>
                                <p className="text-sm text-gray-400">{review.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{review.text}</p>
                        <div className="flex gap-1">
                            {[...Array(review.stars)].map((_, j) => (
                                <span key={j} className="text-yellow-400">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="hidden sm:flex lg:hidden gap-6 max-w-screen-xl mx-auto px-4">
                {reviews.slice(0, 2).map((review, i) => (
                    <div key={i} className="flex-1 border border-gray-200 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300" />
                            <div>
                                <p className="font-semibold text-gray-900">{review.name}</p>
                                <p className="text-sm text-gray-400">{review.location}</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">{review.text}</p>
                        <div className="flex gap-1">
                            {[...Array(review.stars)].map((_, j) => (
                                <span key={j} className="text-yellow-400">★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="sm:hidden">
                <div
                    className="overflow-hidden"
                    onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
                    onTouchEnd={(e) => {
                        const diff = touchStartX.current - e.changedTouches[0].clientX
                        if (diff > 50) next()
                        if (diff < -50) prev()
                    }}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {reviews.map((review, i) => (
                            <div key={i} className="min-w-full px-2 box-border">
                                <div className="border border-gray-200 rounded-2xl p-4">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                                        <div>
                                            <p className="font-semibold text-gray-900">{review.name}</p>
                                            <p className="text-sm text-gray-400">{review.location}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4">{review.text}</p>
                                    <div className="flex gap-1">
                                        {[...Array(review.stars)].map((_, j) => (
                                            <span key={j} className="text-yellow-400">★</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full cards-button flex items-center justify-center transition-colors"
                    >
                        ←
                    </button>
                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full cards-button flex items-center justify-center transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>

        </section>
    )
}