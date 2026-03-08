import { useState, useEffect, useRef } from 'react'
import iconOne from '../assets/icon-one.png'
import iconTwo from '../assets/icon-two.png'
import iconThree from '../assets/icon-three.png'

const reviews = [
    { name: "LOREM LOREM", text: "A man who is ideal for all women...A man who is ideal for all womenA man who is ideal for all women", icon: iconOne },
    { name: "LOREM LOREM", text: "Fera is a student from one of the famous universities...Fera is a student from one of the famous universitiesFera is a student from one of the famous universities", icon: iconTwo },
    { name: "LOREM LOREM", text: "Olap is a very sweet woman with curly and blonde hair...Olap is a very sweet woman with curly and blonde hair", icon: iconThree },
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
    }, [current])

    return (
        <section className="py-10 px-4 card-bg">
            <div className="text-center my-12 max-w-screen-xl px-4 mx-auto">
                <h2 className="text-4xl font-semibold text-gray-900 mb-4">Most Popular In This Week</h2>
                <p className="text-gray-400">There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful</p>
            </div>
            <div className="hidden sm:flex gap-6 items-start max-w-screen-xl mx-auto">
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-neutral-50 border border-amber-500 rounded-3xl shadow overflow-hidden"
                        style={{ marginTop: i === 0 ? '0px' : i === 1 ? '48px' : '96px' }}
                    >
                        <img src={review.icon} alt={review.name} className="w-full h-48 object-cover" />
                        <div className="p-6 text-center">
                            <p className="text-gray-600 text-sm">{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="sm:hidden overflow-hidden">
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
                        style={{ transform: `translateX(calc(-${current * 85}% - ${current * 16}px))` }}
                    >
                        {reviews.map((review, i) => (
                            <div key={i} className="min-w-[85%] mr-4 snap-start">
                                <div className="bg-neutral-50 border border-amber-500 rounded-3xl shadow overflow-hidden">
                                    <img src={review.icon} alt={review.name} className="w-full h-48 object-cover" />
                                    <div className="p-6 text-center">
                                        <p className="text-gray-600 text-sm">{review.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    {reviews.map((_, i) => (
                        <button class="cards-button"
                            key={i}
                            onClick={() => {
                                console.log('clicked', i)
                                setCurrent(i)
                            }}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                padding: '0',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: i === current ? '#f4845f' : '#d1d5db',
                                flexShrink: 0
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}