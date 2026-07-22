import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface VideoBackgroundProps {
    onVideoLoaded?: (loaded: boolean) => void;
}

const VideoBackground = ({ onVideoLoaded }: VideoBackgroundProps) => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (onVideoLoaded) {
            onVideoLoaded(isVideoLoaded);
        }
    }, [isVideoLoaded, onVideoLoaded]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // We blur if we are not on the home page OR if we've scrolled down on the home page.
    const shouldBlur = location.pathname !== '/' || isScrolled;

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black">
            {/* The blur overlay */}
            <div 
                className={`absolute inset-0 z-10 transition-all duration-700 pointer-events-none ${
                    shouldBlur ? 'backdrop-blur-[10px] bg-black/70' : 'backdrop-blur-0 bg-black/60'
                }`} 
            />

            {/* Poster for Loading Fallback */}
            {!isVideoLoaded && (
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{ backgroundImage: 'url("/logos/2k26.png")' }}
                />
            )}

            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/logos/2k26.png"
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
