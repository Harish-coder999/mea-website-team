import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';
import RevealOnScroll from '../components/RevealOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import { lazy, Suspense } from 'react';

const InfoGrid = lazy(() => import('../components/InfoGrid'));
const SponsorGrid = lazy(() => import('../components/SponsorGrid'));

import { useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';



  return (
    <div className="min-h-screen animate-fade-in">
      <SEO 
        title="Home" 
        description="MECHNOTRON is a National-level technical symposium organized with pomp and grandeur every year by the Department of Mechanical Engineering, Coimbatore Institute of Technology.Mechnotron provides a huge platform for students all around the nation to portray their talents and showcase their skills through jam-packed webinars and various virtual events."
      />


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="container mx-auto text-center">
          <div className="animate-mechanical-rise">
            {/* 
                Hidden static elements to maintain layout flow.
                The visual is handled by ScrollMorph.tsx.
            */}
            <div className="flex justify-center mb-8 animate-float">
              <img src="/logos/2k26.png" alt="Mechnotron Logo" width="192" height="180" className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(255,204,0,0.5)] border-4 border-white rounded-full bg-black" />
            </div>
            <h1 className="text-3xl sm:text-6xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight px-4">
              <span className="text-white" style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>MECHNOTRON</span> <span className="text-primary" style={{ textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1), 0 0 10px rgba(255,204,0,0.5), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>2K26</span>
            </h1>
            <div className="w-fit mx-auto text-xs sm:text-sm md:text-lg font-extrabold text-red-500 tracking-[0.2em] sm:tracking-[0.5em] uppercase mb-8 px-4 py-2 rounded-lg" style={{ textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000', backgroundColor: 'rgba(0,0,0,0.4)' }}>
              Fuel the Future. Race the Innovation
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto px-6 py-4 rounded-lg" style={{ textShadow: '0 0 15px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,1)', backgroundColor: 'rgba(0,0,0,0.5)', fontWeight: '500' }}>
              Experience the future of technology. Join us for two days of innovation,
              competition, and inspiration. Mechnotron2k26 is a platform for students to showcase their skills and talents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link
                to="/events"
                id="hero-cta"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-[var(--shadow-industrial)] transition-all duration-300 flex items-center gap-2"
              >
                Explore Events
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Countdown Section */}
      <section className="relative py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <RevealOnScroll width="100%">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary" style={{ textShadow: '0 0 20px rgba(255,204,0,0.3)' }}>
              Registration closes in
            </h2>
            <Countdown />
          </RevealOnScroll>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <RevealOnScroll width="100%">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/*Events */}
              <div className="group relative bg-black/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:scale-105">
                <div className="text-center">
                  <AnimatedCounter end={25} suffix="+" className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold">Events</div>
                </div>
              </div>

              {/* Prize Pool */}
              <div className="group relative bg-black/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:scale-105">
                <div className="text-center">
                  <AnimatedCounter end={1.5} prefix="₹" suffix="L" className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold">Prize Pool</div>
                </div>
              </div>

              {/* Participants */}
              <div className="group relative bg-black/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:scale-105">
                <div className="text-center">
                  <AnimatedCounter end={2500} suffix="+" className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold">Participants</div>
                </div>
              </div>

              {/* Workshops */}
              <div className="group relative bg-black/60 backdrop-blur-sm border-2 border-primary/40 rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_rgba(255,204,0,0.4)] hover:scale-105">
                <div className="text-center">
                  <AnimatedCounter end={3} suffix="+" className="text-3xl md:text-5xl font-bold text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold">Workshops</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    {/* Sponsors Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <RevealOnScroll width="100%">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 industrial-text">
              Our Sponsors
            </h2>

            {/* Cinematic Sponsor Grid */}
            <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
              <SponsorGrid />
            </Suspense>
          </RevealOnScroll>
        </div>
      </section>

    {/* Info Grid Section */}
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <InfoGrid />
      </Suspense>

      
    </div>
  );
};

export default Home;
