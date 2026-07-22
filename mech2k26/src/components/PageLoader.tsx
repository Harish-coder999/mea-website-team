import { useEffect, useState } from 'react';

interface PageLoaderProps {
    isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            // Add a small delay before hiding to ensure smooth transition
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 800);
            return () => clearTimeout(timer);
        } else {
            setShowLoader(true);
        }
    }, [isLoading]);

    if (!showLoader) return null;

    return (
        <div 
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[hsl(222,47%,11%)] via-[hsl(217,33%,17%)] to-[hsl(222,47%,11%)] transition-opacity duration-1000 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="relative w-full max-w-md px-8">
                {/* Race Track Lines */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 overflow-hidden">
                    {/* Top track line */}
                    <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent">
                        <div className="h-full w-20 bg-primary/60 animate-[slide_1s_linear_infinite]"></div>
                    </div>
                    {/* Bottom track line */}
                    <div className="absolute bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent">
                        <div className="h-full w-20 bg-primary/60 animate-[slide_1s_linear_infinite]" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                </div>

                {/* F1 Car Container */}
                <div className="relative flex items-center justify-center h-32">
                    {/* Motion blur trails */}
                    <div className="absolute left-0 right-1/2 h-1 bg-gradient-to-r from-transparent to-primary/40 blur-sm animate-pulse"></div>
                    <div className="absolute left-0 right-1/2 h-1 bg-gradient-to-r from-transparent to-primary/20 blur-md animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    
                    {/* F1 Car - Animated */}
                    <div className="relative animate-[bounce_0.5s_ease-in-out_infinite]">
                        {/* Car Body */}
                        <svg width="120" height="60" viewBox="0 0 120 60" className="drop-shadow-[0_0_15px_rgba(255,204,0,0.6)]">
                            {/* Rear Wing */}
                            <rect x="5" y="15" width="15" height="3" fill="hsl(48, 100%, 50%)" />
                            <rect x="5" y="22" width="15" height="8" fill="hsl(48, 100%, 50%)" opacity="0.8" />
                            
                            {/* Main Body */}
                            <path d="M 20 25 L 35 20 L 70 18 L 95 20 L 110 25 L 105 35 L 25 35 Z" 
                                  fill="hsl(48, 100%, 50%)" 
                                  stroke="hsl(48, 100%, 60%)" 
                                  strokeWidth="1.5"/>
                            
                            {/* Cockpit */}
                            <ellipse cx="60" cy="27" rx="15" ry="8" fill="hsl(222, 47%, 11%)" opacity="0.7" />
                            
                            {/* Front Nose */}
                            <path d="M 95 20 L 115 23 L 115 27 L 105 35 L 95 28 Z" 
                                  fill="hsl(48, 100%, 45%)" />
                            
                            {/* Front Wing */}
                            <rect x="108" y="28" width="10" height="2" fill="hsl(48, 100%, 50%)" />
                            <rect x="108" y="32" width="10" height="2" fill="hsl(48, 100%, 50%)" />
                            
                            {/* Rear Wheel */}
                            <circle cx="30" cy="38" r="8" fill="hsl(222, 47%, 11%)" stroke="hsl(48, 100%, 50%)" strokeWidth="2" />
                            <circle cx="30" cy="38" r="4" fill="hsl(48, 100%, 50%)" />
                            
                            {/* Front Wheel */}
                            <circle cx="90" cy="38" r="8" fill="hsl(222, 47%, 11%)" stroke="hsl(48, 100%, 50%)" strokeWidth="2" />
                            <circle cx="90" cy="38" r="4" fill="hsl(48, 100%, 50%)" />
                            
                            {/* Speed lines */}
                            <line x1="15" y1="28" x2="5" y2="28" stroke="hsl(48, 100%, 50%)" strokeWidth="1" opacity="0.6" className="animate-pulse" />
                            <line x1="18" y1="32" x2="8" y2="32" stroke="hsl(48, 100%, 50%)" strokeWidth="1" opacity="0.4" className="animate-pulse" />
                        </svg>
                        
                        {/* Exhaust flames */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex gap-1">
                            <div className="w-3 h-1 bg-gradient-to-l from-primary to-transparent rounded-full animate-pulse"></div>
                            <div className="w-2 h-1 bg-gradient-to-l from-primary/60 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        </div>
                    </div>
                </div>

                {/* Speed Indicator */}
                <div className="mt-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
                        <p className="text-primary text-xl md:text-2xl font-bold industrial-text tracking-[0.3em] animate-pulse">
                            LOADING
                        </p>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                    
                    {/* Speed dots */}
                    <div className="flex justify-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    
                    {/* Speed text */}
                    <p className="text-primary/60 text-sm mt-3 tracking-wider font-mono">
                        ACCELERATING...
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes slide {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(500%); }
                }
            `}</style>
        </div>
    );
};

export default PageLoader;
