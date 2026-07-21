import { useEffect } from 'react';

export const usePreventZoom = () => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey && (
                e.key === '=' ||
                e.key === '-' ||
                e.key === '0' ||
                e.key === '+'
            )) {
                e.preventDefault();
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        };

        // Prevents pinch zoom in Safari
        const handleGestureStart = (e: Event) => {
            e.preventDefault();
        };

        // Prevents pinch zoom in Safari
        const handleGestureChange = (e: Event) => {
            e.preventDefault();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('gesturestart', handleGestureStart);
        document.addEventListener('gesturechange', handleGestureChange);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('gesturestart', handleGestureStart);
            document.removeEventListener('gesturechange', handleGestureChange);
        };
    }, []);
};
