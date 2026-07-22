import React from 'react';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';

interface TeamMember {
    id: number;
    name: string;
    roles: string[];
    image?: string;
}

const Team = () => {
    const [activeFilter, setActiveFilter] = React.useState('All');


    const teamMembers: TeamMember[] = [
        {
            id: 1,
            name: 'Athisivanantha Balan A',
            roles: ['Chairman'],
            image: '/team_images/athi.jpg',
        },
        {
            id: 2,
            name: 'Alagusundaram C',
            roles: ['Secretary'],
            image: '/team_images/alagusundaram.jpeg',
        },
        {
            id: 3,
            name: 'Shree Veknesh Manikandan',
            roles: ['Secretary'],
            image: '/team_images/viknesh.jpeg',
        },
        {
            id: 4,
            name: 'Visvesh Rayan K',
            roles: ['Joint Secretary'],
            image: '/team_images/vishvesh.jpeg',
        },
        {
            id: 5,
            name: 'Avanish K S',
            roles: ['Joint Secretary'],
            image: '/team_images/avanish.jpg',
        },
        {
            id: 6,
            name: 'Ramya M R',
            roles: ['Joint Secretary'],
            image: '/team_images/ramya.jpeg',  
        },
        {
            id: 7,
            name: 'Deepika A',
            roles: ['Joint Secretary'],
            image: '/team_images/deepika.jpeg',
        },
        {
            id: 8,
            name: 'Shyam Siddharth M',
            roles: ['Treasurer'],
            image: '/team_images/shyam_siddarth.jpg',
        },
        {
            id: 9,
            name: 'Santhosh P',
            roles: ['Treasurer'],
            image: '/team_images/santhosh.jpg',
        },
        {
            id: 10,
            name: 'Harish V',
            roles: ['Website Team Head ', 'Website Team'],
            image: '/team_images/harish.jpg',
        },
        {
            id: 11,
            name: 'Somesh R',
            roles: ['Website Team'],
            image: '/team_images/somesh.jpg',
        },
        {
            id: 12,
            name: 'Laxmeesh Durai R T',
            roles: ['Website Team'],
            image: '/team_images/LaxmeeshDurai.jpg',
        },
        {
            id: 13,
            name: 'Santhanakrishnan S',
            roles: ['Website Team'],
            image: '/team_images/santax.jpeg',
        }, 
        {
            id: 14,
            name: 'Thilageshwaran S',
            roles: ['Design Team Head', 'Design Team'],
            image: '/team_images/thilageshwaran.jpg',
        },
        {
            id: 15,
            name: 'Pranesh Lal B G',
            roles: ['Design Team'],
            image: '/team_images/praneshlal.jpg',
        },
        {
            id: 16,
            name: 'Ragubala M',
            roles: ['Design Team'],
            image: '/team_images/ragubala.jpg',
        },
        {
            id: 17,
            name: 'Kiruthiga U K',
            roles: ['Design Team'],
            image: '/team_images/kiruthiga.jpg',
        },
        {
            id: 18,
            name: 'Hemavathy I',
            roles: ['Design Team'],
            image: '/team_images/Hemavathyi.jpg',
        },
        {
            id: 19,
            name: 'Yeshwanth V',
            roles: ['Design Team'],
            image: '/team_images/yeshwanth.jpg',
        },
        {
            id: 20,
            name: 'Suhashini S',
            roles: ['Design Team'],
            image: '/team_images/suhashini.jpg',
        },
        {
            id: 21,
            name: 'Aishwarya P',
            roles: ['Design Team'],
            image: '/team_images/aishwarya.jpeg',
        },
        {
            id: 22,
            name: 'Lavan P',
            roles: ['Flagship Team Head', 'Flagship Team'],
            image: '/team_images/lavan.jpg',
        },
        {
            id: 23,
            name: 'Gopi Krishna V',
            roles: ['Flagship Team Head', 'Flagship Team'],
            image: '/team_images/gopiKrishna.jpeg',
        },
        {
            id: 24,
            name: 'Saravanan P',
            roles: ['Flagship Team Head', 'Flagship Team'],
            image: '/team_images/saravanan.jpg',
        },
        {
            id: 25,
            name: 'Arrun Kumar K',
            roles: ['Flagship Team Head', 'Flagship Team'],
            image: '/team_images/arrunkumar.jpg',
        },
        {
            id: 26,
            name: 'Indhumathi K',
            roles: ['Flagship Team'],
            image: '/team_images/indumathi.jpg',
        },
        {
            id: 27,
            name: 'Sudarshan S',
            roles: ['Flagship Team'],
            image: '/team_images/sudharshan.jpg',
        },
        {
            id: 28,
            name: 'Siva Karupasamy S',
            roles: ['Flagship Team'],
            image: '/team_images/sivakaruppasamy.webp',
        },
        {
            id: 29,
            name: 'Susindhar R',
            roles: ['Flagship Team'],
            image: '/team_images/susindhar.jpg',
        },
        {
            id: 30,
            name: 'Prem Kumar M',
            roles: ['Flagship Team'],
            image: '/team_images/premkumar.jpg',
        },
        {
            id: 31,
            name: 'Arshath Marzook S M',
            roles: ['Flagship Team'],
            image: '/team_images/arshathmarzook.jpg',
        },
        {
            id: 32,
            name: 'Kerithick S',
            roles: ['Flagship Team'],
            image: '/team_images/kerithick.jpg',
        },
        {
            id: 33,
            name: 'Praveen S',
            roles: ['Flagship Team'],
            image: '/team_images/praveen.jpg',
        },
        {
            id: 34,
            name: 'Girish A S',
            roles: ['Flagship Team'],
            image: '/team_images/girish.jpg',
        },
        {
            id: 35,
            name: 'Naren Karthikeyan K',
            roles: ['Flagship Team'],
            image: '/team_images/narenkarthikeyan.jpg',
        },
        {
            id: 36,
            name: 'Sundar N',
            roles: ['Flagship Team'],
            image: '/team_images/sundar.jpg',
        },
        {
            id: 37,
            name: 'Mahendran M',
            roles: ['Flagship Team'],
            image: '/team_images/mahendran.jpg',
        },
        {
            id: 38,
            name: 'Venudharsan P',
            roles: ['Flagship Team'],
            image: '/team_images/venu.jpeg',
        },
        {
            id: 39,
            name: 'Nathin M',
            roles: ['Sponsorship Team'],
            image: '/team_images/nathin.jpeg',
        },
        {
            id: 40,
            name: 'Jaya Vinish S',
            roles: ['Sponsorship Team'],
            image: '/team_images/JayaVinishs.jpeg',
        },
        {
            id: 41,
            name: 'Anthony Joseph S',
            roles: ['Sponsorship Team'],
            image: '/team_images/anthonyjoseph.jpg',
        },
        {
            id: 42,
            name: 'Rakul Pranav PA',
            roles: ['Sponsorship Team'],
            image: '/team_images/rakulpranav.jpg',
        },
        {
            id: 43,
            name: 'Mageshwaran R',
            roles: ['Sponsorship Team'],
            image: '/team_images/maheshwaran.jpg',
        },
        {
            id: 44,
            name: 'Ragul Gandhi R',
            roles: ['Workshop Team Head', 'Workshop Team'],
            image: '/team_images/ragul-gandhi.jpg',
        },
        {
            id: 45,
            name: 'Shreeya V',
            roles: ['Workshop Team'],
            image: '/team_images/shreeya.jpg',
        },
        {
            id: 46,
            name: 'Bhuvanesh S',
            roles: ['Workshop Team'],
            image: '/team_images/bhuvanesh.S.jpg',
        },
        {
            id: 47,
            name: 'Kaavyashree M',
            roles: ['Workshop Team'],
            image: '/team_images/kaavyashree.jpg',
        },
        {
            id: 48,
            name: 'Gowtham C ',
            roles: ['Workshop Team'],
            image: '/team_images/gowtham c.jpg',
        },
        {
            id: 49,
            name: 'Janani K',
            roles: ['Workshop Team'],
            image: '/team_images/janani.jpg',
        },
        {
            id: 50,
            name: 'Buvaneshwari B',
            roles: ['Workshop Team'],
            image: '/team_images/buvaneshwar.jpeg',
        },
        {
            id: 51,
            name: 'Manish Kumar M ',
            roles: ['Event Conveying Team Head', 'Event Conveying Team'],
            image: '/team_images/manishkumar.jpg',
        },
        {
            id: 52,
            name: 'Ragulwin R S',
            roles: ['Event Conveying Team Head', 'Event Conveying Team'],
            image: '/team_images/Ragulwi.jpeg',
        },
        {
            id: 53,
            name: 'Gokulnath A',
            roles: ['Event Conveying Team Head', 'Event Conveying Team'],
            image: '/team_images/gokulnath.jpg',
        },
        {
            id: 54,
            name: 'Dinakaran V',
            roles: ['Event Conveying Team Head', 'Event Conveying Team'],
            image: '/team_images/dinakaran.jpg',
        },
        {
            id: 55,
            name: 'Madhav Ananth G',
            roles: ['Event Conveying Team'],
            image: '/team_images/madhavananth.jpg',
        },
        {
            id: 56,
            name: 'Hemachandran G',
            roles: ['Event Conveying Team'],
            image: '/team_images/hemachandran.jpeg',
        },
        {
            id: 57,
            name: 'Deepak S',
            roles: ['Event Conveying Team'],
            image: '/team_images/deepak.jpg',
        },
        {
            id: 58,
            name: 'Thamaraiselvan G',
            roles: ['Event Conveying Team'],
            image: '/team_images/thamarai.jpeg',
        },
        {
            id: 59,
            name: 'Dhilip R',
            roles: ['Event Conveying Team'],
            image: '/team_images/dhilip.jpg',
        },
        {
            id: 60,
            name: 'Vinothan G',
            roles: ['Event Conveying Team'],
            image: '/team_images/vinothan.jpg',
        },
        {
            id: 61,
            name: 'Hariprasath K',
            roles: ['Event Conveying Team'],
            image: '/team_images/hariprasath.jpg',
        },
        {
            id: 62,
            name: 'Annush S',
            roles: ['Content Creation Team'],
            image: '/team_images/annushs.jpeg',
        },
        {
            id: 63,
            name: 'Deepak R',
            roles: ['Content Creation Team'],
            image: '/team_images/deepakr.jpg',
        },
        {
            id: 64,
            name: 'Gokul S',
            roles: ['Content Creation Team'],
            image: '/team_images/gokul.jpg',
        },
        {
            id: 65,
            name: 'Kavin Karthik N',
            roles: ['Content Creation Team'],
            image: '/team_images/kavin.jpeg',
        },
        {
            id: 66,
            name: 'Shahid U',
            roles: ['Content Creation Team'],
            image: '/team_images/shahid.jpg',
        },
        {
            id: 67,
            name: 'Siva Sankar P',
            roles: ['Director of Photography'],
            image: '/team_images/siva-sankar.jpeg',
        },
        {
            id: 68,
            name: 'Athish Kumar A',
            roles: ['Social Media Managing Team'],
            image: '/team_images/athish.JPG',
        },
        {
            id: 69,
            name: 'Preethivasan C',
            roles: ['Social Media Managing Team'],
            image: '/team_images/preethivasa.jpeg',
        },
        {
            id: 70,
            name: 'Gowtham K',
            roles: ['Event Managing Team Head', 'Event Managing Team'],
            image: '/team_images/gowtham k.jpeg',
        },
        {
            id: 71,
            name: 'Dhakshinyaa R K',
            roles: ['Event Managing Team Head', 'Event Managing Team'],
            image: '/team_images/dhakshinyaa.jpg',
        },
        {
            id: 72,
            name: 'Ananth M',
            roles: ['Event Managing Team Head', 'Event Managing Team'],
            image: '/team_images/ananth.jpg',
        },
        {
            id: 73,
            name: 'Sridhar G',
            roles: ['Event Managing Team Head', 'Event Managing Team'],
            image: '/team_images/sridhar.jpg',
        },
        {
            id: 74,
            name: 'Loganathan M',
            roles: ['Event Managing Team'],
            image: '/team_images/loganathan.jpg',
        },
        {
            id: 75,
            name: 'Ramnath G',
            roles: ['Event Managing Team'],
            image: '/team_images/ramnath.jpg',
        },
        {
            id: 76,
            name: 'Siddarth P',
            roles: ['Event Managing Team'],
            image: '/team_images/siddarth.jpeg',
        },
        {
            id: 77,
            name: 'Gowtham V',
            roles: ['Event Managing Team'],
            image: '/team_images/gowtham v.jpeg',
        },
        {
            id: 78,
            name: 'Midhun N ',
            roles: ['Event Managing Team'],
            image: '/team_images/midhun.jpg',
        },
        {
            id: 79,
            name: 'Kapeeshram K',
            roles: ['Event Managing Team'],
            image: '/team_images/kapeeshram.jpg',
        },
        {
            id: 80,
            name: 'Sheresh Raja R',
            roles: ['Event Managing Team'],
            image: '/team_images/shereshraja.jpeg',
        },
        {
            id: 81,
            name: 'Hariharan M R',
            roles: ['Event Managing Team'],
            image: '/team_images/hariharan.png',
        },
        {
            id: 82,
            name: 'Rakhul M',
            roles: ['Event Managing Team'],
            image: '/team_images/rakhul.jpg',
        },
        {
            id: 83,
            name: 'Sukul A S',
            roles: ['Event Managing Team'],
            image: '/team_images/sukul.jpg',
        },
        {
            id: 84,
            name: 'Dhanush B',
            roles: ['Event Managing Team'],
            image: '/team_images/dhanush.jpg',
        },
        {
            id: 85,
            name: 'Jegan Abinesh',
            roles: ['Event Managing Team'],
            image: '/team_images/jegan.jpg',
        },
        {
            id: 86,
            name: 'Sanjith S',
            roles: ['Event Managing Team'],
            image: '/team_images/sanjith.jpeg',
        },
        {
            id: 87,
            name: 'Venkatesan M',
            roles: ['Event Managing Team'],
            image: '/team_images/venkatesan.jpg',
        },
        {
            id: 90,
            name: 'Jaisurya S',
            roles: ['Event Managing Team'],
            image: '/team_images/jaisurya.jpg',
        },
        {
            id: 88,
            name: 'Mithun Karthikeyan',
            roles: ['Event Managing Team'],
            image: '/team_images/mk.jpeg',
        },

    ];


    const filters = [
        'All',
        'Chairman',
        'Secretary',
        'Joint Secretary',
        'Treasurer',
        'Website Team',
        'Design Team',
        'Flagship Team',
        'Sponsorship Team',
        'Workshop Team',
        'Event Conveying Team',
        'Content Creation Team',
        'Director of Photography',
        'Social Media Managing Team',
        'Event Managing Team',
    ];

    const filteredMembers = teamMembers.filter((member) => activeFilter === 'All' || member.roles.includes(activeFilter));

    const roleColorMap: { [key: string]: string } = {
        'Chairman': '#FF8700', 
        'Secretary': '#0090FF', 
        'Joint Secretary': '#1E41FF', 
        'Treasurer': '#E1E1E1', 
        'Website Team Head ':'#ffd700', 
        'Website Team': '#ffd700',
        'Design Team Head': '#DC0000', 
        'Design Team': '#DC0000',
        'Flagship Team Head': '#00FF87', 
        'Flagship Team': '#00FF87',
        'Sponsorship Team': '#E1E1E1', 
        'Workshop Team Head': '#1A4CFF', 
        'Workshop Team': '#1A4CFF',
        'Event Conveying Team Head': '#005AFF', 
        'Event Conveying Team': '#005AFF',
        'Content Creation Team': '#DC0000', 
        'Director of Photography': '#00E701', 
        'Social Media Managing Team': '#00E701', 
        'Event Managing Team Head': '#00D2BE', 
        'Event Managing Team': '#00D2BE',
    };

    const getRoleColor = (role: string) => {
        return roleColorMap[role] || '#ffffff'; // Fallback to white usually, or primary color var
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 animate-fade-in">
            <SEO 
                title="Team" 
                description="Meet the dedicated team behind Mechnotron2k26. Students, organizers, and visionaries working together."
                url="https://mechnotron2k26.citmea.in/team"
            />
            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 animate-mechanical-rise">
                    <h1 className="text-2xl sm:text-5xl md:text-5xl font-bold mb-4 text-yellow-400">One Team. One Vision. Infinite Speed</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The Brains Powering the Machine</p>
                </div>

                {/* Mobile Filter - Sticky */}
                <div className="md:hidden sticky top-20 z-40 max-w-xs mx-auto mb-8 animate-slide-in-left">
                    <div className="bg-background/80 backdrop-blur-md rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-primary/20">
                        <select
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg font-semibold bg-transparent text-foreground border-none focus:ring-2 focus:ring-primary outline-none transition-all duration-300"
                        >
                            {filters.map((filter) => (
                                <option key={filter} value={filter} className="bg-card text-foreground">
                                    {filter}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Desktop Filter */}
                <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-left">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm ${activeFilter === filter
                                ? 'bg-primary text-primary-foreground shadow-[var(--shadow-industrial)]'
                                : 'bg-card/50 text-foreground hover:bg-card border border-primary/20 hover:border-primary/50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Team Grid */}
                <RevealOnScroll width="100%">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                        {filteredMembers
                            .map((member, index) => {
                                const roleColor = getRoleColor(member.roles[0]);
                                
                                return (
                                <div
                                    key={member.id}
                                    className="group relative animate-slide-in-right"
                                    style={{ 
                                        animationDelay: `${index * 0.1}s`,
                                        '--team-color': roleColor 
                                    } as React.CSSProperties}
                                >
                                    <div 
                                        className="p-6 backdrop-blur-lg rounded-lg border transition-all duration-300 hover:scale-105"
                                        style={{ 
                                            backgroundColor: `${roleColor}30`, 
                                            borderColor: `${roleColor}40`,     
       
                                        }}
                                    >

                                        <div className="absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none group-hover:border group-hover:shadow-[0_0_20px_var(--team-color)] group-hover:border-[var(--team-color)]" />

                                        {/* Avatar */}
                                        <div className="relative mb-4 mx-auto w-32 h-32 sm:w-40 sm:h-40">
                                            <div 
                                                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden group-hover:animate-industrial-pulse border-2 transition-colors duration-300"
                                                style={{ borderColor: `${roleColor}50` }}
                                            >
                                                <img
                                                    src={member.image || '/none.png'}
                                                    alt={member.name}
                                                    width="160"
                                                    height="160"
                                                    loading="lazy"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-[var(--team-color)]">{member.name}</h3>
                                            
                                            <p 
                                                className="mb-4 font-medium px-2 py-1 rounded-full border inline-block"
                                                style={{ 
                                                    color: roleColor,
                                                    backgroundColor: `${roleColor}30`,
                                                    borderColor: `${roleColor}30`
                                                }}
                                            >
                                                {member.roles[0]}
                                            </p>
                                        </div>

                                        {/* Decorative Corner */}
                                        <div 
                                            className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 rounded-tr-lg transition-all duration-300 opacity-50 group-hover:opacity-100" 
                                            style={{ borderColor: roleColor }}
                                        />
                                        <div 
                                            className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 rounded-bl-lg transition-all duration-300 opacity-50 group-hover:opacity-100" 
                                            style={{ borderColor: roleColor }}
                                        />
                                    </div>
                                </div>
                            )})}
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Team;
