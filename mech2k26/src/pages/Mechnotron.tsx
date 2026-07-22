import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';

// -----------------------------------------------------------------------------
// Component: LogoTimeline
// -----------------------------------------------------------------------------
// Handles the rendering of the top logo grid independently.
const LogoTimeline = ({ data }: { data: { year: number, logo: string }[] }) => {
    return (
        <div className="mb-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
            {data.map((item, index) => (
                <RevealOnScroll key={item.year} width="100%">
                    <div
                        className="flex flex-col items-center group cursor-pointer w-full"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Large Round Logo Container */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/40 border-2 border-primary/30 p-4 group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(255,204,0,0.4)] transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
                            <img
                                src={item.logo}
                                alt={`${item.year} logo`}
                                width="160"
                                height="160"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>

                        {/* Year Text */}
                        <span className="mt-4 text-xl md:text-2xl font-bold industrial-text tracking-widest text-white/80 group-hover:text-primary transition-colors">
                            {item.year}
                        </span>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
    );
};

// -----------------------------------------------------------------------------
// Component: VideoCard
// -----------------------------------------------------------------------------
const VideoCard = ({ 
    data, 
    activeId, 
    onPlay 
}: { 
    data: { year: number, video: string }, 
    activeId: number | null, 
    onPlay: (id: number) => void 
}) => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Lazy loading state
    const lastTap = useRef<number>(0);

    // Sync internal playing state with activeId (Mutual Exclusion)
    useEffect(() => {
        if (activeId !== data.year && isPlaying) {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    }, [activeId, data.year, isPlaying]);

    // Handle fullscreen change events to update state
    useEffect(() => {
        const handleFullscreenChange = () => {
             setIsFullscreen(!!document.fullscreenElement);
        };
        
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = () => {
        if (!containerRef.current) return;

        if (document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            }
        } else {
            const containerEl = containerRef.current as any;
            if (containerEl.requestFullscreen) {
                containerEl.requestFullscreen();
            } else if (containerEl.webkitRequestFullscreen) {
                containerEl.webkitRequestFullscreen();
            }
        }
    };

    const togglePlay = () => {
        // Load video on first play
        if (!isVideoLoaded) {
            setIsVideoLoaded(true);
            // Wait for video to load before playing
            setTimeout(() => {
                if (videoRef.current) {
                    onPlay(data.year);
                    videoRef.current.play();
                    setIsPlaying(true);
                    
                    // Auto-fullscreen on mobile
                    if (window.innerWidth < 768) {
                        toggleFullscreen();
                    }
                }
            }, 100);
            return;
        }

        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                onPlay(data.year);
                videoRef.current.play();
                setIsPlaying(true);
                
                // Auto-fullscreen on mobile
                if (window.innerWidth < 768) {
                    toggleFullscreen();
                }
            }
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap.current;
        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
            toggleFullscreen();
        }
        lastTap.current = currentTime;
    };

    return (
        <RevealOnScroll key={data.year} width="100%">
            <div className="group bg-card/40 backdrop-blur-md rounded-xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,204,0,0.15)] flex flex-col">

                {/* Header at Top */}
                <div className="p-4 bg-black/40 flex items-center justify-between border-b border-white/5 backdrop-blur-sm relative z-20">
                    <h3 className="text-xl font-bold industrial-text">
                        Mechnotron {data.year}
                    </h3>
                </div>

                {/* Video Container */}
                <div
                    ref={containerRef}
                    className={`relative w-full bg-black cursor-pointer group/video transition-all duration-500 ease-in-out mx-auto ${isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen' : 'aspect-square max-w-xs'}`}
                    onClick={!isPlaying ? togglePlay : undefined}
                    onDoubleClick={toggleFullscreen}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Only render video element after user clicks play */}
                    {isVideoLoaded ? (
                        <video
                            ref={videoRef}
                            src={data.video}
                            className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                            playsInline
                            controls={isPlaying} 
                            onEnded={() => setIsPlaying(false)}
                            onPause={() => setIsPlaying(false)}
                            onPlay={() => {
                                setIsPlaying(true);
                                onPlay(data.year); 
                            }}
                            preload="none"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-black/80 to-black/60 flex items-center justify-center">
                            <span className="text-white/50 text-sm">Click to load video</span>
                        </div>
                    )}

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/video:bg-black/40 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 flex items-center justify-center transform group-hover/video:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </RevealOnScroll>
    );
};

// -----------------------------------------------------------------------------
// Page: Mechnotron
// -----------------------------------------------------------------------------
const Mechnotron = () => {
    // State to track which video is currently playing
    const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

    // 1. Logo Data Source - Independent
    const logoTimelineData = [
        { year: 2026, logo: '/logos/2k26.png' },
        { year: 2025, logo: '/logos/2k25.jpg' },
        { year: 2024, logo: '/logos/2k24.jpg' },
        { year: 2023, logo: '/logos/2k23.jpg' },
        { year: 2022, logo: '/logos/2k22.jpg' },
        { year: 2021, logo: '/logos/2k21.jpg' },
        { year: 2020, logo: '/logos/2k20.jpg' },
        { year: 2018, logo: '/logos/2k19.jpg' },
        ];

    // 2. Video Data Source - Independent
    const videoGridData = [
        { year: 2026, video: '/mechnoron_videos/drone2025.mp4' },
        { year: 2025, video: '/mechnoron_videos/2k25.mp4' },
        { year: 2024, video: '/mechnoron_videos/2k24.mp4' },
        { year: 2021, video: '/mechnoron_videos/2k21.mp4' },
        { year: 2019, video: '/mechnoron_videos/2k19.mp4' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 animate-fade-in relative z-10">
            <SEO 
                title="Mechnotron Legacy" 
                description="A journey through the history of Mechnotron. From our humble beginnings to a grand tech symposium."
                url="https://mechnotron2k26.citmea.in/mechnotron"
            />
            <div className="container mx-auto max-w-7xl">
                {/* Hero Section */}
                <div className="text-center mb-12 animate-mechanical-rise">
                    <h1
                        className="text-4xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#FFCC00] via-[#FFD700] to-[#FFA500] text-transparent bg-clip-text animate-pulse"
                        style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '2px' }}
                    >
                        Legacy of Mechnotron
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Celebrating 9 years of innovation, engineering excellence, and technological breakthroughs.
                    </p>
                </div>

                {/* Independent Logo Timeline Component */}
                <LogoTimeline data={logoTimelineData} />

                {/* Independent Video Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {videoGridData.map((data) => (
                        <VideoCard 
                            key={data.year} 
                            data={data} 
                            activeId={activeVideoId}
                            onPlay={setActiveVideoId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mechnotron;
