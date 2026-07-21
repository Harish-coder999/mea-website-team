import React from 'react';
import { Link } from 'react-router-dom';
import RevealOnScroll from './RevealOnScroll';

const InfoGrid = () => {
    return (
        <section className="relative py-20 px-4">
            <div className="container mx-auto">
                <RevealOnScroll width="100%">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* About Us Box */}
                        <div className="bg-card/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Logo Placeholder */}
                            <div className="w-24 h-24 mb-6 relative z-10">
                                <img src="/logos/CIT.png" alt="CIT Logo" width="96" height="96" className="w-full h-full object-contain" />
                                {/* Glow element */}
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">ABOUT US</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10 text-justify">
                                MECHNOTRON is a National-level technical symposium organized with pomp and grandeur every year by the Department of Mechanical Engineering, Coimbatore Institute of Technology. Mechnotron provides a huge platform for students all around the nation to portray their talents and showcase their skills through jam-packed webinars and various virtual events.
                            </p>
                            <Link to="https://www.cit.edu.in/departments/mechanical-engineering-department" className="px-6 py-2 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors relative z-10 inline-block">
                                View More
                            </Link>
                        </div>

                        {/* MEA Box */}
                        <div className="bg-card/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Logo Placeholder */}
                            <div className="w-24 h-24 mb-6 relative z-10">
                                <img src="/logos/MEA.png" alt="MEA Logo" width="96" height="96" className="w-full h-full object-contain" />
                                {/* Glow element */}
                                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-secondary relative z-10">MECHANICAL ENGINEERING ASSOCIATION (MEA)</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10 text-justify">
                                The Mechanical Engineering Association at Coimbatore Institute of Technology is the driving force behind Mechnotron, our esteemed national-level technical symposium. With a steadfast commitment to advancing the field of mechanical engineering, our association cultivates an environment where innovation thrives and technical excellence is celebrated. Mechnotron, proudly hosted by our association, serves as a testament to our dedication to promoting learning, collaboration, and professional growth within the mechanical engineering community.
                            </p>
                            <Link to="https://citmea.in/" className="px-6 py-2 bg-secondary text-secondary-foreground font-bold rounded hover:bg-secondary/90 transition-colors relative z-10 inline-block">
                                View More
                            </Link>
                        </div>
                    </div>

                    {/* Staff Advisors Box */}
                    <div className="bg-card/30 backdrop-blur-md rounded-2xl border border-primary/20 p-8 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-center relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <h3 className="text-2xl font-bold mb-8 text-primary relative z-10">Guiding the Race with Experience </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {/* Advisor 1 */}
                            <div className="flex flex-col items-center group/member">
                                <div className="w-24 h-24 rounded-full border-2 border-primary/30 p-1 mb-4 group-hover/member:border-primary transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                                        <img src="https://citmea.in/team-pic/hod%20sir.jpg" alt="Dr Rajesh Ranganathan" width="96" height="96" loading="lazy" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">Dr Rajesh Ranganathan</h4>
                                <p className="text-sm text-muted-foreground">Head of the Department</p>
                            </div>

                            {/* Advisor 2 */}
                            <div className="flex flex-col items-center group/member">
                                <div className="w-24 h-24 rounded-full border-2 border-primary/30 p-1 mb-4 group-hover/member:border-primary transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                                        <img src="https://citmea.in/team-pic/m-velliangiri-sir.jpg" alt="Dr M Velliangiri" width="96" height="96" loading="lazy" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">Dr M Velliangiri</h4>
                                <p className="text-sm text-muted-foreground">Assistant Professor</p>
                            </div>

                            {/* Advisor 3 */}
                            <div className="flex flex-col items-center group/member">
                                <div className="w-24 h-24 rounded-full border-2 border-primary/30 p-1 mb-4 group-hover/member:border-primary transition-colors duration-300">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                                        <img src="https://citmea.in/team-pic/sam%20sir.png" alt="Dr D P Sam Solomon" width="96" height="96" loading="lazy" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-1">Dr D P Sam Solomon</h4>
                                <p className="text-sm text-muted-foreground">Assistant Professor</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default InfoGrid;
