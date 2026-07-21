import { useState, useEffect } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        // Set the date we're counting down to
        const countDownDate = new Date("Feb 19, 2026 12:00:00").getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <div className="flex justify-center items-center gap-3 md:gap-6">
                {timeUnits.map((unit, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        {/* Card Container */}
                        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-black/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl md:rounded-3xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]">
                            {/* Value */}
                            <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tabular-nums">
                                {String(unit.value).padStart(2, '0')}
                            </div>
                        </div>

                        {/* Label */}
                        <div className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-wider font-semibold mt-2 md:mt-3">
                            {unit.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Countdown;
