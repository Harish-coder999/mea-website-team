import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "./ui/dialog";
import { cn } from "../lib/utils";

// Sponsor tier types
type SponsorTier = 'title' | 'diamond' | 'gold' | 'silver' | 'bronze' | 'education' | 'event' | 'alumni';

interface Sponsor {
    id: number;
    name: string;
    tier: SponsorTier;
    logo?: string;
    description: string;
    website?: string;
    brochure?: string;
}

// Tier configurations with Tech/Aero styling
const tierConfig: Record<SponsorTier, {
    title: string;
    borderColor: string;
    accentColor: string;
    textColor: string;
    glowColor: string;
    frameStyle: 'aero-max' | 'aero-mid' | 'aero-light' | 'tech-simple';
}> = {
    title: {
        title: 'TITLE SPONSOR',
        borderColor: '#facc15', // Yellow-400
        accentColor: '#fbbf24', // Amber-400
        textColor: 'text-yellow-400',
        glowColor: 'rgba(250, 204, 21, 0.5)',
        frameStyle: 'aero-max'
    },
    diamond: {
        title: 'DIAMOND SPONSOR',
        borderColor: '#a5f3fc', // Cyan-200
        accentColor: '#22d3ee', // Cyan-400
        textColor: 'text-cyan-200',
        glowColor: 'rgba(165, 243, 252, 0.4)',
        frameStyle: 'aero-mid'
    },
    gold: {
        title: 'GOLD SPONSOR',
        borderColor: '#fbbf24', // Amber-400
        accentColor: '#d97706', // Amber-600
        textColor: 'text-amber-400',
        glowColor: 'rgba(251, 191, 36, 0.4)',
        frameStyle: 'aero-mid'
    },
    silver: {
        title: 'SILVER SPONSOR',
        borderColor: '#9ca3af', // Gray-400
        accentColor: '#4b5563', // Gray-600
        textColor: 'text-gray-400',
        glowColor: 'rgba(156, 163, 175, 0.3)',
        frameStyle: 'aero-light'
    },
    education: {
        title: 'EDUCATION PARTNER',
        borderColor: '#22d3ee', // Cyan-400
        accentColor: '#0891b2', // Cyan-600
        textColor: 'text-cyan-400',
        glowColor: 'rgba(34, 211, 238, 0.4)',
        frameStyle: 'tech-simple'
    },
    event: {
        title: 'EVENT PARTNER',
        borderColor: '#c084fc', // Purple-400
        accentColor: '#9333ea', // Purple-600
        textColor: 'text-purple-400',
        glowColor: 'rgba(192, 132, 252, 0.4)',
        frameStyle: 'tech-simple'
    },
    bronze: {
        title: 'BRONZE SPONSOR',
        borderColor: '#cd7f32', // Bronze
        accentColor: '#a16207', // Amber-700
        textColor: 'text-orange-400',
        glowColor: 'rgba(205, 127, 50, 0.4)',
        frameStyle: 'aero-light'
    },
    alumni: {
        title: 'ALUMNI SPONSOR',
        borderColor: '#10b981', // Emerald-500
        accentColor: '#059669', // Emerald-600
        textColor: 'text-emerald-400',
        glowColor: 'rgba(16, 185, 129, 0.4)',
        frameStyle: 'tech-simple'
    }
};

// sponsor data with descriptions and links
const sponsors: Sponsor[] = [
    { 
        id: 1, 
        name: 'Flowtech', 
        tier: 'bronze', 
        logo: '/sponsorship_images/flowtech.PNG',
        description: 'Flowtech Engineers is an industrial equipment supplier and manufacturer headquartered in Chennai, India, with a manufacturing facility in Coimbatore. The company has over 15 years of domain experience as an authorized distributor of Flowserve pumps and subsequently expanded into valve manufacturing under its own Flowtech brand, establishing its own production unit in 2021. It is certified to ISO 9001:2015 quality management standards.',
        website: 'https://www.flowtech.in/' 
    },
    { 
        id: 2, 
        name: 'Indian bank', 
        tier: 'gold', 
        logo: '/sponsorship_images/indian.png',
        description: "Indian Bank is a public sector bank headquartered in Chennai, founded in 1907. It offers banking services like savings, loans, digital banking, and corporate finance. In 2020, it merged with Allahabad Bank, expanding its reach to 6,000+ branches across India. Its digital banking app is IndOASIS, and its tagline is 'Your Own Bank'.",
        website: 'https://www.indianbank.in/'
    },
    { 
        id: 3, 
        name: 'StudyIn', 
        tier: 'education', 
        logo: '/sponsorship_images/studyin.jpeg',
        description: "GoStudyIn is an international study-abroad consultancy offering personalised guidance for Indian students on university selection, applications, visas, scholarships, and related processes. It supports applications to leading universities across destinations such as the UK, USA, Canada, Australia, Ireland, New Zealand and Dubai, backed by certified counsellors and global offices. The company emphasises ethical, transparent practices and free expert counselling to streamline the overseas education journey.",
        website: 'https://gostudyin.com/india/'
    },
    { 
        id: 4, 
        name: 'KOSO', 
        tier: 'bronze', 
        logo: '/sponsorship_images/koso.png',
        description: 'KOSO is a global leader in control valve solutions, founded in 1965 in Japan. Its Indian subsidiary, KOSO India, specializes in standard and severe service control valves for industries like oil & gas, petrochemicals, and power. With advanced manufacturing facilities in Nashik and Coimbatore, it combines Japanese engineering with Indian manufacturing excellence. KOSO India has reported strong financial growth, with revenues between INR 100-500 crore.',
        website: 'https://www.koso.co.in/' 
    },
    {
        id: 5,
        name : 'R K SAFETY CERTIFICATIONS',
        tier: 'bronze',
        logo: '/sponsorship_images/RKSAFETY.png',
        description: 'R K Safety Certifications is a professional safety consultancy led by a Chartered Engineer and Competent Person under the Factories Act.We provide statutory approvals, safety audits, inspections, and competency certifications for industrial plants, machinery, and buildings.Trusted by industries across Tamil Nadu, we ensure regulatory compliance, operational safety, and risk reduction.',
        brochure: '/sponsorship_images/RK.pdf'
    },
        {
        id: 6,
        name : 'International Education Specialists;',
        tier: 'education',
        logo: '/sponsorship_images/idp.jpeg',
        description: 'IDP Education is a global study-abroad consultancy that provides Indian students with expert guidance on course selection, university applications, visa processing, and pre-departure support.With over 50 years of experience and a strong presence across India, it partners with leading universities in Australia, Canada, the UK, the USA, Ireland, and New Zealand.IDP also co-owns the IELTS test and offers free, end-to-end counselling services to simplify the overseas education journey.',
        website: 'https://www.idp.com/india/'
    },
    {
        id: 7,
        name: 'GRG',
        tier: 'diamond',
        logo: '/sponsorship_images/grg.png',
        description: 'GRG Polydynamics Pvt. Ltd., established in 2011, is a leading plastics injection moulding company based in Chennai. Part of a professionally managed group with over three decades of industrial expertise, the company serves automotive and non-automotive sectors with high-quality engineering plastic components.With advanced injection moulding capabilities and end-to-end solutions including design, tooling, manufacturing, assembly, and testing, GRG specializes in automotive lighting components, interior trims, reflectors, lens systems and sunroof parts.Certified with IATF 16949:2016 and ISO 14001:2015, GRG Polydynamics is committed to precision, quality, and manufacturing excellence.',
        brochure: '/sponsorship_images/grg.pdf',
    }

];

// Tech/Aero Frame Component
const TechFrame = ({ frameStyle, borderColor, accentColor }: {
    frameStyle: 'aero-max' | 'aero-mid' | 'aero-light' | 'tech-simple',
    borderColor: string,
    accentColor: string
}) => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Main Border Box - Cut Corners */}
            <div
                className="absolute inset-0"
                style={{
                    clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                    border: `1px solid ${borderColor}`,
                    background: `linear-gradient(135deg, ${borderColor}10, transparent 40%)`
                }}
            />

            {/* Border Lines (SVG for precise control) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Top Left Corner */}
                <path d="M0 10 L10 0 H30" stroke={borderColor} strokeWidth="2" fill="none" />
                {/* Bottom Right Corner */}
                <path d="M70 100 H90 L100 90 V70" stroke={borderColor} strokeWidth="2" fill="none" />

                {/* Aero Wings / Flaps */}
                {(frameStyle === 'aero-max' || frameStyle === 'aero-mid') && (
                    <>
                        {/* Left Flap */}
                        <path d="M-5 20 L0 20 L0 80 L-5 80" stroke={accentColor} strokeWidth="4" fill="none" opacity="0.8" />
                        {/* Right Flap */}
                        <path d="M105 20 L100 20 L100 80 L105 80" stroke={accentColor} strokeWidth="4" fill="none" opacity="0.8" />
                    </>
                )}

                {/* Extra Details for Max Aero */}
                {frameStyle === 'aero-max' && (
                    <>
                        <rect x="40" y="-2" width="20" height="4" fill={accentColor} />
                        <rect x="40" y="98" width="20" height="4" fill={accentColor} />
                    </>
                )}
            </svg>

            {/* Tech Markers */}
            <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-1 h-1 bg-current rounded-full" style={{ color: borderColor }} />
                <div className="w-1 h-1 bg-current rounded-full opacity-50" style={{ color: borderColor }} />
                <div className="w-1 h-1 bg-current rounded-full opacity-25" style={{ color: borderColor }} />
            </div>

            <div className="absolute bottom-2 left-2 flex gap-1">
                <div className="w-8 h-[2px] bg-current" style={{ color: borderColor }} />
            </div>
        </div>
    );
};

const SponsorGrid = () => {
    // Group sponsors by tier
    const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.tier]) {
            acc[sponsor.tier] = [];
        }
        acc[sponsor.tier].push(sponsor);
        return acc;
    }, {} as Record<SponsorTier, Sponsor[]>);

    // Order of tiers
    const tierOrder: SponsorTier[] = ['title', 'diamond', 'gold', 'silver', 'bronze', 'education', 'event', 'alumni'];

    return (
        <div className="pb-16 space-y-20">
            {/* Google Fonts - Orbitron for Tech Look */}
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />

            {tierOrder.map((tier) => {
                const tierSponsors = sponsorsByTier[tier];
                if (!tierSponsors || tierSponsors.length === 0) return null;

                const config = tierConfig[tier];

                return (
                    <div key={tier} className="flex flex-col items-center">
                        {/* Section Header */}
                        <div className="mb-12 text-center relative">
                            <h2 
                                className="text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase"
                                style={{ 
                                    fontFamily: "'Orbitron', sans-serif",
                                    color: config.textColor,
                                    textShadow: `0 0 20px ${config.glowColor}`
                                }}
                            >
                                {config.title}
                            </h2>
                            <div 
                                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-0.5 w-32"
                                style={{ 
                                    background: `linear-gradient(90deg, transparent, ${config.borderColor}, transparent)`
                                }}
                            />
                        </div>

                        {/* Dynamic Layout for this Tier */}
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4 w-full max-w-7xl mx-auto">
                            {tierSponsors.map((sponsor) => (
                                <div key={sponsor.id} className="flex flex-col items-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)] max-w-sm">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            {/* Interactive Card */}
                                                <button 
                                                    className="group relative cursor-pointer w-full max-w-[280px] sm:max-w-sm aspect-square mx-auto p-0 border-none bg-transparent block text-left"
                                                style={{
                                                    filter: `drop-shadow(0 0 10px ${config.glowColor}20)`
                                                }}
                                            >
                                                {/* Tech Frame Card */}
                                                <div className="relative h-full transition-all duration-500 group-hover:scale-[1.02] flex items-center justify-center p-8">

                                                    {/* Background with Carbon Fiber effect */}
                                                    <div
                                                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                                                        style={{
                                                            clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                                                            backgroundImage: 'radial-gradient(circle at center, transparent 0%, #000 100%), repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)'
                                                        }}
                                                    />

                                                    {/* Tech Border Frame */}
                                                    <TechFrame
                                                        frameStyle={config.frameStyle}
                                                        borderColor={config.borderColor}
                                                        accentColor={config.accentColor}
                                                    />

                                                    {/* Logo Container */}
                                                    <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                                                        <div 
                                                          className="absolute inset-0 rounded-full opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                                                          style={{ background: `radial-gradient(closest-side, ${config.glowColor}, transparent)`}} 
                                                        />
                                                        <img
                                                            src={sponsor.logo}
                                                            alt={sponsor.name}
                                                            width="300"
                                                            height="300"
                                                            className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
                                                            style={{
                                                                filter: `drop-shadow(0 0 5px ${config.glowColor})`
                                                            }}
                                                        />
                                                    </div>

                                                    {/* Hover Hint */}
                                                    <div className="absolute bottom-4 text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white/50">
                                                        CLICK FOR DETAILS
                                                    </div>

                                                    {/* Hover Glow Effect */}
                                                    <div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                                        style={{
                                                            background: `radial-gradient(circle at center, ${config.glowColor} 0%, transparent 70%)`
                                                        }}
                                                    />
                                                </div>
                                            </button>
                                        </DialogTrigger>

                                        {/* Modal Content */}
                                        <DialogContent className="bg-black/90 border border-white/10 backdrop-blur-xl text-white sm:max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide">
                                            <DialogHeader className="flex flex-col items-center gap-6 pt-12">
                                                <div className="w-48 h-48 relative flex items-center justify-center">
                                                    <div 
                                                        className="absolute inset-0 rounded-full opacity-30 blur-xl"
                                                        style={{ background: config.glowColor }} 
                                                    />
                                                    <img 
                                                        src={sponsor.logo} 
                                                        alt={sponsor.name}
                                                        width="200"
                                                        height="200"
                                                        className="relative z-10 max-w-full max-h-full object-contain" 
                                                    />
                                                </div>
                                                <div>
                                                    <DialogTitle 
                                                        className="text-2xl font-bold tracking-wider text-center uppercase mb-2"
                                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                                    >
                                                        {sponsor.name}
                                                    </DialogTitle>
                                                    <DialogDescription className="text-xs font-bold tracking-[0.2em] text-center uppercase" style={{ color: config.textColor }}>
                                                        {config.title}
                                                    </DialogDescription>
                                                </div>
                                            </DialogHeader>
                                            
                                            <div className="py-6 px-4 text-justify text-gray-300 leading-relaxed">
                                                {sponsor.description}
                                            </div>

                                            <div className="flex flex-wrap justify-center gap-4 pb-4">
                                                {sponsor.website && (
                                                    <a 
                                                        href={sponsor.website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-semibold transition-all duration-300 hover:gap-3 hover:brightness-110"
                                                        style={{
                                                            backgroundColor: `${config.accentColor}20`,
                                                            color: config.textColor,
                                                            border: `1px solid ${config.borderColor}80`,
                                                            boxShadow: `0 0 20px ${config.glowColor}20`
                                                        }}
                                                    >
                                                        Visit Website
                                                        <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                                {sponsor.brochure && (
                                                    <a 
                                                        href={sponsor.brochure} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-8 py-3 rounded-sm font-semibold transition-all duration-300 hover:gap-3 hover:brightness-110"
                                                        style={{
                                                            backgroundColor: `${config.accentColor}20`,
                                                            color: config.textColor,
                                                            border: `1px solid ${config.borderColor}80`,
                                                            boxShadow: `0 0 20px ${config.glowColor}20`
                                                        }}
                                                    >
                                                        View Brochure
                                                        <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default SponsorGrid;
