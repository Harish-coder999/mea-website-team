import { useState, useEffect } from 'react';
import { X, Trophy, MapPin, Package, Check, ChevronDown, Clock, Search, Users } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import RevealOnScroll from '../components/RevealOnScroll';
import SEO from '../components/SEO';
interface Event {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  registrationLink: string;
  rules?: string;
  prize?: string;
  time?: string;
  location?: string;
  registrationFee?: string;
  quotes?: string[];
  contacts: {
    name: string;
    phone: string;
  }[];
  teamSize?: string;
  rulesLink?: string;
}
interface Combo {
  id: number;
  name: string;
  category: 'Flagship'|'MEGA' | 'CORE' | 'DESIGN' | 'SPECIAL';
  price: number;
  events: string[];
  registrationLink: string;
  description?: string;
}
const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [dayFilter, setDayFilter] = useState('All Days');
  const [flippedComboIds, setFlippedComboIds] = useState<number[]>([]);

  const calculateCountdown = (targetDateStr: string) => {
    const targetDate = new Date(targetDateStr).getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return "Closed";

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days > 0) {
      return `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const DATES = {
    EVENTS: "Feb 19, 2026 12:00:00",
    FLAGSHIP: "Feb 20, 2026 09:00:00",
    WORKSHOPS: "Feb 20, 2026 22:00:00"
  };

  const ON_SPOT_HIDE_DATE = "Feb 21, 2026 09:00:00";

  const [eventsTimeLeft, setEventsTimeLeft] = useState(calculateCountdown(DATES.EVENTS));
  const [flagshipTimeLeft, setFlagshipTimeLeft] = useState(calculateCountdown(DATES.FLAGSHIP));
  const [workshopsTimeLeft, setWorkshopsTimeLeft] = useState(calculateCountdown(DATES.WORKSHOPS));
  const [showOnSpot, setShowOnSpot] = useState(new Date().getTime() < new Date(ON_SPOT_HIDE_DATE).getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setEventsTimeLeft(calculateCountdown(DATES.EVENTS));
      setFlagshipTimeLeft(calculateCountdown(DATES.FLAGSHIP));
      setWorkshopsTimeLeft(calculateCountdown(DATES.WORKSHOPS));
      setShowOnSpot(new Date().getTime() < new Date(ON_SPOT_HIDE_DATE).getTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleComboFlip = (comboId: number) => {
    setFlippedComboIds(prev => 
      prev.includes(comboId) 
        ? prev.filter(id => id !== comboId)
        : [...prev, comboId]
    );
  };
  const events: Event[] = [
    {
      id: 1,
      title: 'Roborally',
      category: 'Flagship',
      prize: '25000',
      time: 'Feb 20: 9:00 AM',
      location: 'Palani Ground',
      registrationFee: '500',
      description: 'A speed-and-precision robotics event where autonomous or manually controlled robots navigate a defined track with obstacles.Performance is evaluated based on completion time, control accuracy, and rule compliance.',
      image: '/event_images/robo-rally.jpg',
      registrationLink: 'https://forms.gle/St385cJnwumTfZZ4A',
      contacts: [
        { name: 'Arrun Kumar', phone: '+91 7373054888' },
        { name: 'Mahendran', phone: '+91 9363443367' },
        { name: 'Praveen', phone: '+91 9095152959' }
      ],
      teamSize: 'upto 4',
      rulesLink: '/posters/roborally.pdf'
    },
    {
      id: 2,
      title: 'Drone ObstacleX',
      category: 'Flagship',
      prize: '25000',
      time: 'Feb 20: 9:00 AM',
      location: 'Bus Shed',
      registrationFee: '500',
      description: 'Drone ObstacleX is the flagship UAV challenge that tests precision piloting through a high-speed obstacle arena of hoops, tunnels, and dynamic gates. Participants must demonstrate superior control stability, rapid maneuvering, and optimized drone performance under strict time constraints. It is the ultimate platform where aerial engineering meets competitive excellence.',
      image: '/event_images/drone.jpeg',
      registrationLink: 'https://forms.gle/St385cJnwumTfZZ4A',
      contacts: [
        { name: 'Saravanan P', phone: '+91 8524866133' },
        { name: 'Sudarshan S', phone: '+91 9025762421' },
        { name: 'Sundar N', phone: '+91 9345832427' }
      ],
      teamSize: 'upto 4',
      rulesLink: '/posters/drone.pdf'
    },
    {
      id: 3,
      title: 'Run-O-Tron',
      category: 'Flagship',
      prize: '20000',
      time: 'Feb 20: 9:00 AM',
      location: 'Palani Ground',
      registrationFee: '400',
      description: 'Design a compact, powerful robot to push the opponent out of the arena in a head-to-head combat challenge.Judging focuses on traction, control strategy, structural strength, and match dominance.',
      image: '/event_images/sumo.webp',
      registrationLink: 'https://forms.gle/St385cJnwumTfZZ4A',
      contacts: [
        { name: 'Gopi Krishna', phone: '+91 7550104394' },
        { name: 'Naren Karthikeyan', phone: '+91 9629421012' },
        { name: 'Indhumathi', phone: '+91 7397353009' }
      ],
      teamSize: 'upto 4',
      rulesLink: '/posters/runotron.pdf'
    },
    {
      id: 4,
      title: 'Robo Soccer',
      category: 'Flagship',
      prize: '20000',
      time: 'Feb 20: 9:00 AM',
      location: 'Palani Ground',
      registrationFee: '400',
      description: 'Build and control a robot to compete in a soccer-style match by scoring goals against an opposing team.Evaluation depends on mobility, ball control, teamwork strategy, and match performance.',
      image: '/event_images/robo-soccer.jpg',
      registrationLink: 'https://forms.gle/St385cJnwumTfZZ4A',
      contacts: [
        { name: 'Lavan', phone: '+91 8056013221' },
        { name: 'Susindhar', phone: '+91 9342530449' },
        { name: 'Girish', phone: '+91 8248979755' }
      ],
      teamSize: 'upto 4',
      rulesLink: '/posters/robosoccer.pdf'
    },
    {
      id: 5,
      title: 'Paper Presentation',
      category: 'Events',
      prize: '25000',
      time: 'Feb 20: 9:30 to 12:30',
      location: 'IT Block First Floor ( IT - 201,206,207,208,209) ',
      registrationFee: '279',
      quotes: ['Info: participants can do their presentation can go to the next event, they do not have to wait for the entire 3 hours'],
      rules: `RULES AND REGULATIONS:
1. Students from multi-disciplinary are allowed to form a group.
2. Presentation duration will be 10 minutes and followed by Viva.
3. The judge decision will be final.
4. The topics of papers can be chosen on their own.
5. Kindly bring your presentation in both PDF and PPTX format to avoid the compatibility issues.
CONSTRAINTS:
1. The participants should aim for 10-12 slides.
2. If video or audio is required in the presentation it should be within the slides. No external link should be included.
3. If prototype is required bring it on your own.`,
      description: 'Present your innovative research ideas on any engineering topic through a structured technical presentation.Evaluation focuses on innovation, technical depth, feasibility, and viva performance.',
      image: '/event_images/paper-presentation.jpeg',
      registrationLink: 'https://forms.gle/bvurUmoXomLs1DBn9',
      contacts: [
        { name: 'Mithun N', phone: '+91 8072794146' },
        { name: 'Jaisurya', phone: '+91 8903117671' },
        { name: 'Sukul', phone: '+91 9965632834' }
      ],
      teamSize: 'upto 4'
    },
    {
      id: 6,
      title: 'Design-a-thon',
      category: 'Events',
      prize: '3500',
      time: 'Feb 20: 9:30 to 1:30',
      location: 'IT Block Third Floor(CAD CAM LAB)  ',
      registrationFee: '199',
      quotes: ['Instruction: Participants try to bring their Laptop'],
      rules: `Rules & Instructions:
1. Time duration is 1.5 hours
2. Part and assembly drawing will be provided
3. Mass of the component should be within the set limit
4. Final model should be analysed by given data
5. Judge decision will be final
6. Participants can use any modeling software
7. Own device permitted for modelling
8. Analysis can be done in model software or ANSYS`,
      description: 'Create 3D part and assembly models within given constraints using any CAD software.Evaluation includes modeling accuracy, assembly quality, motion study, and mass properties.',
      image: '/event_images/design-a-thon.jpeg',
      registrationLink: 'https://forms.gle/RKQi7urZbfNVRdWx7',
      contacts: [
        { name: 'Gowtham', phone: '+91 8248355582' }
      ],
      teamSize: 'upto 3'
    },
    {
      id: 7,
      title: 'Codyssey',
      category: 'Events',
      prize: '2000',
      time: 'Feb 20: 9:30 to 12:30',
      location: 'Mechnotronics Lab',
      registrationFee: '99',
      quotes: ['Instructions: Participants try to bring their Laptop'],
      rules: `Rules & Regulations:
1. Conducted online using HackerRank
2. Consists of multiple coding problems
3. Includes medium to hard level problems
4. Focuses on algorithmic thinking, efficiency, and accuracy
Practices Not Allowed:
1. Using mobile phones for searching answers
2. Screen sharing or discussing solutions with others
3. Copy-pasting code from online sources
4. Opening multiple HackerRank accounts`,
      description: 'An online competitive coding contest testing algorithmic thinking and problem-solving skills.Rankings are based on the number of test cases passed on HackerRank.',
      image: '/event_images/code-odyssey.jpeg',
      registrationLink: 'https://forms.gle/F75T9tLTfnD9FFAF6',
      contacts: [
        { name: 'Rakhul', phone: '+91 7418901176' },
      ],
      teamSize: 'Individual'
    },
    {
      id: 8,
      title: 'Hackathon',
      category: 'Events',
      prize: '5000',
      time: 'Feb 20: 9:30 to 12:30',
      location: 'IT Block First Floor(IT-212)',
      registrationFee: '279',
      quotes: [
        'Domain - Energy, Automation, Software & AI, Electrical & Electronics, Manufacturing, Environment & Agriculture, Design &Optimization.',
        'Info : participants can present their idea and then can go to the next event, they do not have to wait for the entire 3 hours'
      ],
      rules: `RULES AND REGULATIONS:
1. The hackathon is open to students from all departments & Inter-departmental teams are allowed.
2. All participants must carry your college ID on the event day.
3. Each team must submit a PowerPoint presentation (8–10 slides) explaining their proposed solution before the event day.
4. The PPT should clearly explain the problem statement, proposed solution, and feasibility.
5. Each team will be allotted a maximum of 10 minutes for presentation and Q&A (Viva).
6. The domain for the hackathon is available in the website and the participants need to choose a domain in the Gform. And the solution should be given for the same domain only, solution proposed is irrelavent to the given domain will not be accepted.
7. The judge decision will be final.
CONSTRAINTS:
1. If video or audio is required in the presentation it should be within the slides. No external link should be included.
2. If prototype is required bring it on your own.`,
      description: 'Develop and present a practical solution to a real-world problem within a limited time.Judging emphasizes innovation, technical relevance, feasibility, and clarity of presentation.',
      image: '/event_images/hackathon.jpeg',
      registrationLink: 'https://forms.gle/XTi2gp8twytXA8iQ8',
      contacts: [
        { name: 'Sheresh Raja', phone: '+91 9566780860' },
        { name: 'Ramnath', phone: '+91 6385431646' },
      ],
      teamSize: 'upto 4'
    },
    {
      id: 9,
      title: 'Projectopia',
      category: 'Events',
      prize: '4500',
      time: 'Feb 20: 9:30 to 12:30',
      location: 'Rapid Prototye Lab',
      registrationFee: '279',
      quotes: ['Info : participants can present their project and then can go to the next event, they do not have to wait for the entire 3 hours'],
      rules: `Rules & Instructions:
1. Showcase your project prototype. If the prototype is too large or not feasible to bring, please attach clear photographs or a demonstration video in the presentation.
2. Open to all departments and streams of engineering.
3. Judge decision is final
Constraints:
1. Team time duration 10 minutes followed by Q&A (viva)
2. PPT must consist 10 to 15 slides
3. If video or audio is required in the presentation it should be within the slides. No external link should be included.`,
      description: 'Showcase a working prototype or demonstrable engineering project to highlight practical implementation.Assessment is based on innovation, technical analysis, feasibility, and viva interaction.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop',
      registrationLink: 'https://forms.gle/GLWFoFvQBpQ3GZN56',
      contacts: [
        { name: 'Dhanush', phone: '+91 7010748550' },
        { name: 'Sanjith', phone: '+91 9344663559' },
      ],
      teamSize: 'upto 4'
    },
    {
      id: 10,
      title: 'Hydro Thrust',
      category: 'Events',
      prize: '4000',
      time: 'Feb 20: 9:30 to 1:00',
      location: 'OAT Ground',
      registrationFee: '249',
      rules: `Rules & Instructions:
1. Launch pad must be brought by the respective teams.
2. Participants must release the rocket after countdown (timing will be announced later)
3. Any violation of rules leads to immediate disqualification.
4. The rocket must cross the qualification distance on each round.
5. No footpump is allowed, only hand pump (pressure must only be applied by hand with pump. No external assists with any other equipments).
6. Top 50% of teams from round 1 will be selected for round 2 (ex. If 10 teams are participating, top 5 teams will qualify to next round).
Constraints:
1. Only water propulsion is allowed.
2. The launch pad must not have launch angle greater than 45Â°.
3. No constraint on the pressure being set for flight for round 1. (If needed might include a pressure constraint for round 2).`,
      description: 'Design and launch a water-propelled rocket to achieve maximum horizontal distance.Performance is judged primarily on flight distance and structural integrity.',
      image: '/event_images/hydro-thrust.jpg',
      registrationLink: 'https://forms.gle/mUqFud2eYc4KD9En6',
      contacts: [
        { name: 'Siddarth', phone: '+91 9344742738' },
        { name: 'Kapeesh Ram', phone: '+91 7598572350' },
        { name: 'Jegan Abinesh', phone: '+91 7010122644' }
      ],
      teamSize: '2 - 3'
    },  
    {
      id: 11,
      title: 'Weld Wars',
      category: 'Events',
      prize: '1500',
      time: 'Feb 20: 2:00 to 4:00',
      location: 'Arc Welding Lab',
      registrationFee: '99',
      rules: `Event Details:
1. Welding Process: Shielded Metal Arc Welding (SMAW)
2. Joints: Corner Joint and T Joint
3. Material: Mild Steel (MS)
4. Eligibility: Engineering & Diploma Students
Rules & Regulations:
1. Welding must be done only using ARC welding
2. Only one participant is allowed at one welding station.
3. Time Limit:
  - Corner Joint - 10 minutes
  - T Joint - 10 minutes
4. No rework after welding completion.
5. Only one set of workpiece is given
6. Judges' decision is final.
7. Violating the rules leads to disqualification`,
      description: 'Perform SMAW welding on specified joints following industrial safety and quality standards.Evaluation focuses on bead profile, penetration, cleanliness, defect inspection, and safety.',
      image: '/event_images/weld-wars.jpeg',
      registrationLink: 'https://forms.gle/UPyPNYAuQTxQwZ9y6',
      contacts: [
        { name: 'Kapeesh Ram', phone: '+91 7598572350' }
      ],
      teamSize: 'Individual'
    },  
    {
      id: 12,
      title: 'Lathe Champion',
      category: 'Events',
      prize: '1500',
      time: 'Feb 20: 2:00 to 4:00',
      location: 'Central Workshop',
      registrationFee: '99',
      rules: `Rules and Regulations:
1. Engineering and Diploma students are eligible for participation
2. Machines, tools and part drawing will be provided
3. Participants must complete the task within the time limit
4. Safety gadgets like shoes must be bought by the respective member
5. Violating the rules leads to mark reduction or disqualification
6. Extra raw material will not be provided in case of wastage
7. The judge decision will be final.
Constraints:
1. Safety precaution must be followed (ex. Loose clothing, watches, long hair)
2. Operation must be done by the given gearbox settings
3. Measurement during machine running is not allowed`,
      description: 'Demonstrate precision machining skills by completing a turning task within a fixed time.Judging considers dimensional accuracy, surface finish, safety, and time efficiency.',
      image: '/event_images/lathe-champion.jpeg',
      registrationLink: 'https://forms.gle/JJNbubSTEPvX8wrq6',
      contacts: [
        { name: 'Ramnath', phone: '+91 6385431646' },
        { name: 'Jegan Abinesh', phone: '+91 7010122644' }
      ],
      teamSize: 'Individual'
    },  
    {
      id: 13,
      title: 'Debate Clash',
      category: 'Events',
      prize: '1000',
      time: 'Feb 20: 3:30 to 4:30',
      location: 'IT Block First Floor(IT-210)',
      registrationFee: '75',
      rules: `Rules & Instructions:
1. The debate topic will be given on spot.
2. Two teams will compete with each other with the given topic.
3. The topic will be in general and debatable, no core technical topics.
4. Each team must strictly complete within the allotted time (10 min).
5. All members must participate in the discussion.
6. Personal attacks or offensive language are prohibited.
7. Arguments must be supported by technical reasoning.
8. Preparation time of 5 minutes will be given to gather points.`,
      description: 'Engage in a structured debate on a given topic emphasizing logical and technical reasoning.Marks are awarded for argument flow, team coordination, communication, and confidence.',
      image: '/event_images/debate-clash.jpeg',
      registrationLink: 'https://forms.gle/n1ebPvQ2CBBEMxq88',
      contacts: [
        { name: 'Siddarth', phone: '+91 9344742738' }
      ],
      teamSize: '2-4'
    },    
    {
      id: 14,
      title: 'Bridge-Building',
      category: 'Events',
      prize: '750',
      time: 'Feb 20: 10:30 to 12:30',
      location: 'IT Block First Floor(IT-213)',
      registrationFee: '49',
      rules: `Event Rounds & Details:
1. Bridges must be built within specified time limit
2. Accessories required: scissors, cello tapes, rubber bands, glues, etcâ€¦ are provided
3. Focuses on creative thinking, efficiency, and accuracy.
Instructions for Participants:
1. Don't use mobile phones during the event.
2. Copying other teams will be considered as plagiarism and the team will be disqualified.`,
      description: 'Design and construct a bridge model optimized for maximum load-bearing capacity.Assessment prioritizes structural strength along with creativity and rigidity.',
      image: '/event_images/bridge-building.jpeg',
      registrationLink: 'https://forms.gle/iZJDXSjCgtRq9mZW6',
      contacts: [
        { name: 'Loganathan ', phone: '+91 7695847874' }
      ],
      teamSize: '2-4'
    },
    {
      id: 15,
      title: 'Auto Logix',
      category: 'Events',
      prize: '500',
      time: 'Feb 20: 3:30 to 4:30',
      location: 'IT Block First Floor(IT-207)',
      registrationFee: '49',
      rules: `Event Rounds:
Round 1: Identify & Connect
    Teams must find the brand logo display on the screen, find that by using buzzer, tell that how this logo is designed and what is the logic behind the logo.
Round 2: Engineering Behind the Automobiles (Group Discussion)
    Teams will be provided one logo randomly. Explain the mechanical advantages or working of transmission and advantages of that vehicle.
Round 3: Design from the Logo
    Teams will be given a car logo and a design theme. Based on the given logo, participants must hand-sketch the front view of a car that reflects the brand identity.
Rules & Regulations:
1. Open to students of all department.
2. Judge's decision is final
3. Teams must answer based on the given logo.
4. Only materials provided by the organizers can be used in design sketch round.`,
      description: 'Test your knowledge of automotive branding, engineering concepts, and design thinking.Includes logo analysis, technical discussion, and concept sketching rounds.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop',
      registrationLink: 'https://forms.gle/zSTvFGtzbkHqLKVK9',
      contacts: [
        { name: 'Jaisurya ', phone: '+91 8903117671' }
      ],
      teamSize: 'upto 2'
    },
    {
      id: 16,
      title: 'Engineering Quiz',
      category: 'Events',
      prize: '1000',
      time: 'Feb 20: 2:00 to 3:30',
      location: 'IT Block First Floor(IT-212)',
      registrationFee: '49',
      rules: `Event Rounds & Details:
1. There will be three rounds
2. First two rounds will be a descriptive round
3. Final round will be a buzzer round
4. Questions will be asked from general engineering concepts (all the department questions will be asked)
Evaluation Criteria:
1. Winners announced based on cumulative points of all the rounds.
2. Final round have negative marks.
Instructions for Participants:
1. Using mobile phones for searching answer is prohibited.
2. Discussing with other teams is prohibited.`,
      description: 'A multi-round quiz covering general engineering concepts across all departments.Winners are decided based on cumulative scores with negative marking in the final round.',
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1000&auto=format&fit=crop',
      registrationLink: 'https://forms.gle/dGgQSCE3fiGUZWZA8',
      contacts: [
        { name: 'Sukul ', phone: '+91 9965632834' }
      ],
      teamSize: 'upto 2'
    },
    {
      id: 17,
      title: 'Engineering Auction League',
      category: 'Events',
      prize: '1250',
      time: 'Feb 20 3:00 to 4:30',
      location: 'IT Block First Floor(IT-211)',
      registrationFee: '99',
      rules: `RULES AND REGULATIONS
1. Teams of 2–3 members participate by bidding CAM Credits on technical questions.
2. The highest bidding team answers the question within the given time.
3. Each team can attempt 10–15 questions and use up to 2 RTM options.
4. Correct answers earn points; wrong answers result in CAM Credit deduction.
5. Judges’ and coordinators’ decisions are final and binding.
CONSTRAINTS
1. Team size is strictly limited to 2–3 members.
2. Bidding is allowed only using CAM Credits provided.
3. RTM can be used only after a wrong answer by the winning team.
4. External help or discussion with other teams is not allowed.
5. All answers must be submitted within the time limit.
6. Mobils and class notes are strightly prohibited`,
      description: 'A strategic, cricket-inspired technical quiz where mechanical engineering teams bid Cam Credits to answer questions and score points.The event progresses through bidding, power-play, and a high-pressure super-over round testing speed, accuracy, and decision-making.',
      image: '/event_images/eal.jpeg',
      registrationLink: 'https://forms.gle/Wm6mAph93BkMargu5',
      contacts: [
        { name: 'Venkatesan', phone: '+91 9629853118' }
      ],
      teamSize: '2-3'
    },
    {
      id: 18,
      title: 'Mechanical Monopoly',
      category: 'Events',
      prize: '500',
      time: 'Feb 20 4:00 to 5:00',
      location: 'IT Block First Floor(IT-213)',
      registrationFee: '49',
      rules: `Rules & Regulations:
1. A total of four teams will participate in a single game session.
2. Teams will roll the dice in a fixed clockwise order.
3. When a team lands on a task square, they must attempt the task assigned by the event coordinator.
4. Tasks must be completed within the specified time limit.
5. Successful task completion allows the team to:
   - Remain on the same square
   - Earn points based on task difficulty
6. Failure to complete a task will result in a backlash penalty, which may include:
   - Moving back one or more squares
   - Loss of points
   - Returning to a previous checkpoint
7. Bonus squares may provide advantages such as extra points, additional dice rolls, or temporary immunity from penalties.
8. The decision of the judges and event coordinators is final and binding in all matters related to tasks, scoring, penalties, and gameplay.
9. The organizing committee reserves the right to modify the rules if required for the smooth conduct of the event.`,
      description: 'A strategy-based board game involving engineering tasks and decision-making challenges.Progress on the board and successful task completion determine the final score.',
      image: '/event_images/mechanical-monopoly.jpeg',
      registrationLink: 'https://forms.gle/w26i8NUywDanePwa8',
      contacts: [
        { name: 'Dhanush ', phone: '+91 7010748550' }
      ],
      teamSize: 'upto 2'
    },
    {
      id: 19,
      title: 'Brand-x',
      category: 'Events',
      prize: '500',
      time: 'Day 1: 11:00 to 12:00',
      location: 'IT Block First Floor(IT-210)',
      registrationFee: '49',
      quotes: ['The participants must bring their laptop with required softwares'],
      rules: `Rules & Regulations:
1. Inter departmental teams can be formed
2. Using external aids are not allowed
3. Participant will develop a brand in the given field (eg: automobile)
4. The participants must complete the task within the time constraint
5. Judge decision is final
Event Details:
Round 1: (15 min)
1. Team must develop a logo and name for the brand in given field & parameters.
2. Marks will be given based on the creativity & relevance to the field
Round 2: (15 min)
1. Team must develop a technical poster for advertising their brand
2. They can use the resources we provide to develop the poster
3. Evaluation will be based on the appealing poster & technical concept
Round 3: (10 min)
1. The team must present their brand as technical advertisement
2. Evaluation will be based on the technical explanation, attraction of target audience and clarity of the idea`,
      description: 'Create and promote a technical brand through logo design, poster creation, and presentation.Evaluation emphasizes creativity, technical relevance, and clarity of brand communication.',
      image: '/event_images/brand-x.jpeg',
      registrationLink: 'https://forms.gle/fDctzCLjEpQ6dvck6',
      contacts: [
        { name: 'Venkatesan', phone: '+91 9629853118' }
      ],
      teamSize: 'upto 2'
    },
    {
      id: 20,
      title: 'Electronic Conquest',
      category: 'Events',
      prize: '1250',
      time: 'Feb 20 2:00 to 3:30',
      location: 'Mechnotronics Lab',
      registrationFee: '124',
      rules: `Rules and Instructions:
1. At the beginning there will be a circuit correction using MATLAB.
2. The team which completes first within the given timing are allowed to move to the next round
3. By using the electronic component, teams must done a project regarding the use of the particular sensor and need to provide the correct output to the judge
4. Note: Judges decision will be final
Constraints:
1. Do not use your mobile phones or other electronic items during the first round
2. Only one hour for your final round`,
      description: 'A hands-on electronics challenge combining circuit debugging, sensor-based system design, and AI-assisted logic development.Teams progress from rapid MATLAB-based circuit correction to building a functional sensor-driven project, evaluated on output accuracy, technical complexity, and presentation quality.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
      registrationLink: 'https://forms.gle/T38Zk9eVYR7BDXQU6',
      contacts: [
        { name: 'Sheresh Raja ', phone: '+91 9566780860' }
      ],
      teamSize: 'upto 4'
    },
    {
      id: 21,
      title: 'Mech Maze',
      category: 'Events',
      prize: '750',
      time: 'Feb 20 2:00 to 3:30',
      location: 'IT Block First Floor(IT-208,209)',
      registrationFee: '49',
      rules: `Rules & Regulations:
1. Cross department members can form a team
2. The event consists of 3-5 rounds
3. Each round will have technical tasks like puzzles, quiz, etc.
4. Teams will be advanced to the next rounds based on first come first basis
5. Each round has a fixed maximum time
6. Teams failing to complete within the given time will have penalty
7. Use of any external aids like mobile is prohibited
8. Judge decision will be final
9. Any kind of malpractice leads to disqualification`,
      description: 'Navigate through multiple rounds of technical challenges under strict time constraints.Judging is based on completion time, accuracy, and team coordination.',
      image: '/event_images/mech-maze.jpeg',
      registrationLink: 'https://forms.gle/CTLRbCGr6JmBb1YN8',
      contacts: [
        { name: 'Midhun', phone: '+91 8072794146' }
      ],
      teamSize: '2-3'
    },
    {
      id: 22,
      title: 'Reverse Rumble',
      category: 'Events',
      prize: '1000',
      time: 'Feb 20 2:00 to 4:00',
      location: 'Thermodynamics Lab',
      registrationFee: '99',
      rules: `Rules & Instructions:
1. Fixed time will be allotted (maximum time duration 25 minutes).
2. Safety gadgets like shoes must be bought by the respective member.
3. Disassembling in the part measuring in the dimension.
4. Finishing in the process assemble in the tools proper place.
Constraints:
1. Team time fixed duration 25 minutes.
2. Provide in tools using in the process, no outside tools.
3. Your team members in working in the process with no outside support.`,
      description: 'Analyze a given mechanical component or system to understand its function, design intent, and working principles.Participants identify geometry, materials, and manufacturing logic, and propose a reconstructed or improved design based on engineering reasoning.',
      image: '/event_images/reverse-engineering.jpeg',
      registrationLink: 'https://forms.gle/eX94fHToeuZzR6xn9',
      contacts: [
        { name: 'Loganathan', phone: '+91 7695847874' }
      ],
      teamSize: '2-4'
    },
    {
      id: 23,
      title: 'GD&T Arena',
      category: 'Events',
      prize: '500',
      time: 'Feb 20 2:00 to 3:00',
      location: 'IT Block First Floor(IT-201)',
      registrationFee: '49',
      rules: `Rules & Instructions:
Round 1 - Quest for the best
1. 45 seconds per question
2. Questions shown one at a time
3. No backward navigation
Round 2 - GD&T Error Hunt
1. Participants will be provided with set of diagrams and their tolerances which include with correctly and wrongly dimensioned tolerances ones.
2. Participants have to identify the given dimensions whether right or wrong.
3. Rewrite the wrong dimensioned tolerances and justify their changes.
Round 3 - GD&T Architect
1. Participants will be provided with undimentioned drawings.
2. Which they would have to dimension and tolerance it based on the geometric constrain provided.
3. Participants can use ASME Y14.5 or ISO GPS for dimensioning and tolerancing.`,
      description: 'A competitive, multi-round event that tests practical understanding of Geometric Dimensioning & Tolerancing through rapid analysis and decision-making.Participants solve time-critical GD&T questions, diagnose tolerance failures, and propose corrected schemes based on real-world inspection and assembly scenarios.',
      image: '/event_images/gd&t-arena.jpg',
      registrationLink: 'https://forms.gle/tBXYHUJannfKqg7T8',
      contacts: [
        { name: 'Gowtham', phone: '+91 8248355582' }
      ],
      teamSize: 'upto 2'
    },
    {
      id: 24,
      title: 'Sudoku Surge',
      category: 'Events',
      prize: '500',
      time: 'Feb 20 3:30 to 4:30',
      location: 'IT Block First Floor(IT-206)',
      registrationFee: '49',
      rules: `Rules & Regulations:
1. Puzzle (9x9 Standard Sudoku) will be provided at the event venue.
2. Any violation of rules leads to immediate disqualification.
3. All two rounds must be completed within the time limit.
4. No external aids including phones, smartwatches, or additional reference materials are allowed to use
5. Material property tables will be provided to all participants.
Constraint:
Round 1:
    In first row, materials must be arranged in order of decreasing density (left to right) - density value will be given.
Round 2:
1. Mixed material names and numerical values will be given.
2. Calculate the young's modulus from the stress and strain values (given)
3. Grids must be arranged by using young's modulus values only`,
      description: 'An individual, logic-driven engineering puzzle that blends standard Sudoku rules with core material science concepts.Participants solve modified Sudoku grids using material density and Youngâ€™s modulus calculations, with evaluation based on accuracy, engineering correctness, and time efficiency.',
      image: '/event_images/sudoku.avif',
      registrationLink: 'https://forms.gle/w1XfSgUsoYhnouBT7',
      contacts: [
        { name: 'Sukul', phone: '+91 9344663559' }
      ],
      teamSize: 'upto 2'
    },
        {
      id: 25,
      title: 'Dronegenesis',
      category: 'Workshops',
      time: 'Feb 21, 9:30 A.M to 4:30 P.M',
      location: 'LBCH',
      registrationFee: '349',
      quotes: ['Built and fly own the sky'],
      description: 'Dronegenesis is a full-day, immersive program offering practical exposure to industrial drone technology, from fundamentals to live flight. It features a drone technology awareness session, an intensive hands-on drone building workshop, professional simulation-based flight training, and supervised live flying. The program concludes with career guidance, highlighting industry opportunities, essential skills, and future pathways in UAV technology. Live hands on experience (kit will be provided).',
      image: '/event_images/drone.jpg',
      registrationLink: 'https://forms.gle/jev5dL16E9p3kJhG9',
      contacts: [
        { name: 'Shreeya', phone: '+919790151145' },
        { name: 'Buvaneshwari', phone: '+916374487293' },
      ]
    },
    {
      id: 26,
      title: 'EV PRIME: Plug into the future',
      category: 'Workshops',
      time: 'Feb 21, 9:30 A.M-4:30 P.M',
      location: 'Auditorium',
      registrationFee: '399',
      quotes: ['The beginning of future mobility'],
      description: 'EV retrofitting accelerates the transition to sustainable mobility by converting conventional vehicles into efficient electric platforms, extending vehicle life while significantly lowering emissions, operating costs, and maintenance. Through the integration of electric motors, battery packs, and intelligent control systems, it enables rapid decarbonization of legacy fleets. This program offers intensive hands-on training in EV architecture, power electronics, ADAS, and electro-hydraulic systems, empowering participants with future-ready, industry-aligned automotive skills. Hands on practice. Live demonstration.',
      image: '/event_images/ev.jpg',
      registrationLink: 'https://forms.gle/dzPhZ62pSVW7kjdx8',
      contacts: [
        { name: 'Bhuvanesh', phone: '+916369632264' },
        { name: 'Gowtham C', phone: '+918015971508' },
      ]
    },
  ];
  const combos: Combo[] = [
    // MEGA COMBOS
    {
      id: 1,
      name: 'Combo 1',
      category: 'Flagship',
      price: 800,
      events: ['Roborally', 'Robo Soccer'],
      registrationLink: 'https://forms.gle/m7n3hcS6NgXFVKmv8'
    },
    {
      id: 2,
      name: 'Combo 2',
      category: 'Flagship',
      price: 700,
      events: ['Robo Soccer', 'Run-O-Tron'],
      registrationLink: 'https://forms.gle/m7n3hcS6NgXFVKmv8'
    },
    {
      id: 3,
      name: 'Combo 3',
      category: 'Flagship',
      price: 800,
      events: ['Roborally', 'Run-O-Tron'],
      registrationLink: 'https://forms.gle/m7n3hcS6NgXFVKmv8'
    },
    {
      id: 4,
      name: 'MEGA Combo 1',
      category: 'MEGA',
      price: 579,
      events: ['Paper Presentation', 'Hackathon', 'Electronic Conquest'],
      registrationLink: 'https://forms.gle/xmZNuEZN8SQzM3bD8'
    },
    {
      id: 5,
      name: 'MEGA Combo 2',
      category: 'MEGA',
      price: 489,
      events: ['Paper Presentation', 'Hackathon', 'Engineering Quiz'],
      registrationLink: 'https://forms.gle/ay6BeJkjcoqfDLCo7'
    },
    {
      id: 6,
      name: 'MEGA Combo 3',
      category: 'MEGA',
      price: 399,
      events: ['Projectopia', 'Codyssey', 'Electronic Conquest'],
      registrationLink: 'https://forms.gle/agNWjDSKpMQgnBAM6'
    },
    {
      id: 7,
      name: 'MEGA Combo 4',
      category: 'MEGA',
      price: 549,
      events: ['Paper Presentation', 'Hackathon', 'Engineering Auction League'],
      registrationLink: 'https://forms.gle/Yi73F6CfVkL8pgpT8'
    },
    // CORE COMBO
    {
      id: 8,
      name: 'CORE Combo',
      category: 'CORE',
      price: 229,
      events: ['Lathe Champion', 'Weld Wars', 'Reverse Rumble'],
      registrationLink: 'https://forms.gle/zbmNsEWm573PfWm87'
    },
    // DESIGN COMBO
    {
      id: 9,
      name: 'DESIGN Combo',
      category: 'DESIGN',
      price: 199,
      events: ['Design-a-thon', 'GD&T Arena'],
      registrationLink: 'https://forms.gle/XyTvDXReiPk5S3tE7'
    },
    // SPECIAL COMBOS
    {
      id: 10,
      name: 'SPECIAL Combo 1',
      category: 'SPECIAL',
      price: 449,
      events: ['Paper Presentation', 'Projectopia'],
      registrationLink: 'https://forms.gle/z8mW7auTe7uUh82q9'
    },
    {
      id: 11,
      name: 'SPECIAL Combo 2',
      category: 'SPECIAL',
      price: 99,
      events: ['Bridge-Building', 'Debate Clash'],
      registrationLink: 'https://forms.gle/sdbPzP3B9xf35PMSA'
    },
    {
      id: 12,
      name: 'SPECIAL Combo 3',
      category: 'SPECIAL',
      price: 79,
      events: ['Brand-x', 'Sudoku Surge'],
      registrationLink: 'https://forms.gle/djSHsZXumQt55ahPA'
    }
  ];
  const typeOptions = ['All Types', 'Combos', 'Flagship', 'Events', 'Workshops'];
  const dayOptions = ['All Days', 'Day 1', 'Day 2'];
  const filteredEvents = events.filter((event) => {
    // Search filter
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Type filter
    const matchesType = typeFilter === 'All Types' || event.category === typeFilter;
    
    // Day filter 
    let matchesDay = true;
    if (dayFilter === 'Day 1') {
      matchesDay = event.category !== 'Workshops';
    } else if (dayFilter === 'Day 2') {
      matchesDay = event.category === 'Workshops';
    }
    
    return matchesSearch && matchesType && matchesDay;
  });
  // Combos are only for Day 1
  // When searching in 'All Types', hide combos. If 'Combos' is selected, search within combos.
  const filteredCombos = (typeFilter === 'Combos' || (typeFilter === 'All Types' && !searchQuery)) && dayFilter !== 'Day 2' 
    ? (typeFilter === 'Combos' 
        ? combos.filter(c => 
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            c.events.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
          ) 
        : combos) 
    : [];
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 animate-fade-in">
      <SEO 
        title="Events" 
        description="Explore 24+ technical events including Roborally, Drone ObstacleX, Run-O-Tron, Robo Soccer, Paper Presentation, Designathon, Code-Odyssey, Hackathon, Projectopia, Hydro Thrust, Weld Wars, Lathe Champion, and more at Mechnotron2k26."
        url="https://mechnotron2k26.citmea.in/events"
      />
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-mechanical-rise px-4">
          <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-4 industrial-text">
            Our Missions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge and showcase your skills
          </p>
        </div>
        {/* Search and Filters */}
        <div className="mb-12 animate-slide-in-left px-4 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <label htmlFor="event-search" className="sr-only">Search events</label>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <input
              id="event-search"
              name="search"
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-4 py-4 bg-card/50 backdrop-blur-lg rounded-xl border border-primary/20 focus:border-primary/50 focus:outline-none text-foreground placeholder-muted-foreground transition-all duration-300"
            />
          </div>
          
          {/* Dropdown Filters */}
          <div className="grid grid-cols-2 gap-4">
            {/* Type Filter */}
            <div>
              <label htmlFor="type-filter" className="block text-sm font-semibold text-muted-foreground mb-2 ml-1">Type</label>
              <div className="relative">
                <select
                  id="type-filter"
                  name="category"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-lg rounded-xl border border-primary/20 focus:border-primary/50 focus:outline-none text-foreground appearance-none cursor-pointer transition-all duration-300 hover:border-primary/40"
                >
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            
            {/* Day Filter */}
            <div>
              <label htmlFor="day-filter" className="block text-sm font-semibold text-muted-foreground mb-2 ml-1">Day</label>
              <div className="relative">
                <select
                  id="day-filter"
                  name="day"
                  value={dayFilter}
                  onChange={(e) => setDayFilter(e.target.value)}
                  className="w-full px-4 py-3 bg-card/50 backdrop-blur-lg rounded-xl border border-primary/20 focus:border-primary/50 focus:outline-none text-foreground appearance-none cursor-pointer transition-all duration-300 hover:border-primary/40"
                >
                  {dayOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Events Grid - Ordered: Flagship, Combos, Events, Workshops */}
        <RevealOnScroll width="100%">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Flagship Events First */}
            {filteredEvents.filter(e => e.category === 'Flagship').map((event, index) => (
              <div
                key={event.id}
                className="group relative p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-industrial)] animate-slide-in-left cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Category Badge */}
                <div className="absolute top-0 right-0 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${event.category === 'Flagship'
                      ? 'bg-accent/20 text-accent border border-accent/50'
                      : event.category === 'Workshops'
                        ? 'bg-secondary/20 text-secondary border border-secondary/50'
                        : 'bg-primary/20 text-primary border border-primary/50'
                      }`}
                  >
                    {event.category}
                  </span>
                </div>
                {/* Event Image */}
                <div
                  className="mb-4 w-full h-48 overflow-hidden rounded-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${event.prize ? 'sm:pr-32' : ''}`}>
                  {event.title}
                </h3>
                
                {/* Prize Pool Badge - Responsive Position */}
                {event.prize && (
                  <div className="flex justify-center mb-3 sm:mb-0 sm:block sm:absolute sm:right-4 sm:bottom-4 z-10">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full border border-primary/50 sm:border-2 shadow-[0_0_15px_hsl(var(--primary)/0.4)] sm:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)] sm:hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-105">
                      <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-primary-foreground animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[10px] font-medium text-primary-foreground/80 uppercase tracking-wide leading-tight">Prize Pool</span>
                        <span className="text-[10px] sm:text-sm font-bold text-primary-foreground leading-tight">₹{event.prize}</span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
            
            {/* Combo Cards After Flagship */}
            {filteredCombos.map((combo, index) => {
              const comboEventImages = combo.events.map(eventName => {
                const event = events.find(e => e.title === eventName);
                return event?.image || '/event_images/default.jpg';
              });
              const flagshipCount = filteredEvents.filter(e => e.category === 'Flagship').length;
              const isFlipped = flippedComboIds.includes(combo.id);
              
              return (
              <div
                key={combo.id}
                className="group relative min-h-[360px] animate-slide-in-left"
                style={{ 
                  animationDelay: `${(flagshipCount + index) * 0.1}s`,
                  perspective: '1000px'
                }}
              >
                <div
                  className="relative w-full h-full min-h-[360px] transition-transform duration-700 transform-style-3d"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front Side - Event Images + Price */}
                  <div
                    className="absolute inset-0 backface-hidden cursor-pointer bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-lg rounded-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] tap-highlight-transparent overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                    onClick={() => toggleComboFlip(combo.id)}
                  >
                    <div className="absolute top-3 right-3 z-20">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${
                        combo.category === 'MEGA'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : combo.category === 'CORE'
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                          : combo.category === 'DESIGN'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
                      }`}>
                        {combo.category}
                      </span>
                    </div>
                    
                    {/* Event Images Grid */}
                    <div className={`grid gap-1 h-32 sm:h-40 overflow-hidden rounded-t-2xl ${comboEventImages.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {comboEventImages.map((img, idx) => (
                        <div key={idx} className="relative overflow-hidden">
                          <img
                            src={img}
                            alt={combo.events[idx]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col items-center justify-center p-3 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-center bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        {combo.name}
                      </h3>
                      
                      <div className="mb-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl border-2 border-primary/50 shadow-[0_0_25px_hsl(var(--primary)/0.6)]">
                          <Trophy className="w-5 h-5 text-primary-foreground animate-pulse" />
                          <div>
                            <p className="text-xl sm:text-2xl font-black text-primary-foreground leading-none">
                              ₹{combo.price}
                            </p>
                            <p className="text-[10px] text-primary-foreground/80 uppercase tracking-wider font-semibold mt-0.5">
                              Combo Deal
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-3">
                        <Check className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-bold text-green-400">Save up to 30%</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground text-center sm:hidden">
                        Click to see details →
                      </p>
                    </div>
                  </div>

                  {/* Back Side - Event List + Register Button */}
                  <div
                    className="absolute inset-0 backface-hidden cursor-pointer bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-lg rounded-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 overflow-hidden"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                    onClick={() => toggleComboFlip(combo.id)}
                  >
                    <div className="flex flex-col items-center justify-center h-full p-4 sm:p-6">
                      <div className="w-full max-w-sm">
                        <div className="mb-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 text-center">
                            {combo.events.length} Events Included
                          </p>
                          <div className="space-y-1.5">
                            {combo.events.map((eventName, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                <p className="text-muted-foreground font-medium">{eventName}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mb-4 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                            <Check className="w-5 h-5 text-green-400" />
                            <span className="text-sm font-bold text-green-400">Save up to 30%</span>
                          </div>
                        </div>
                        
                        <a
                          href={(combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed" ? undefined : combo.registrationLink}
                          target={(combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed" ? "_self" : "_blank"}
                          rel="noopener noreferrer"
                          className={`block w-full py-3 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold text-base rounded-xl transition-all text-center shadow-[0_0_20px_hsl(var(--primary)/0.5)] transform duration-200 ${
                            (combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed" 
                              ? "opacity-50 grayscale cursor-not-allowed pointer-events-none" 
                              : "hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] hover:scale-105 active:scale-95"
                          }`}
                          onClick={(e) => {
                            if ((combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed") e.preventDefault();
                            e.stopPropagation();
                          }}
                        >
                          <div className="flex flex-col items-center leading-tight">
                            <span>{(combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed" ? "Registration Closed" : "Register Combo Now →"}</span>
                            {(combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) !== "Closed" && (
                              <span className="text-[10px] sm:text-xs font-medium opacity-90 mt-1">Closing in: {combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft}</span>
                            )}
                          </div>
                        </a>
                        {((combo.category === 'Flagship' ? flagshipTimeLeft : eventsTimeLeft) === "Closed" && showOnSpot) && (
                          <p className="text-[10px] sm:text-xs font-bold text-accent mt-3 animate-pulse text-center">
                            On-spot registration available
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
            
            {/* Regular Events */}
            {filteredEvents.filter(e => e.category === 'Events').map((event, index) => {
              const flagshipCount = filteredEvents.filter(e => e.category === 'Flagship').length;
              const comboCount = filteredCombos.length;
              return (
              <div
                key={event.id}
                className="group relative p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-industrial)] animate-slide-in-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ animationDelay: `${(flagshipCount + comboCount + index) * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedEvent(event);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${event.title}`}
              >
                <div className="absolute top-0 right-0 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/50">
                    {event.category}
                  </span>
                </div>
                <div
                  className="mb-4 w-full h-48 overflow-hidden rounded-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${event.prize ? 'sm:pr-32' : ''}`}>
                  {event.title}
                </h3>
                {event.prize && (
                  <div className="flex justify-center mb-3 sm:mb-0 sm:block sm:absolute sm:right-4 sm:bottom-4 z-10">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full border border-primary/50 sm:border-2 shadow-[0_0_15px_hsl(var(--primary)/0.4)] sm:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)] sm:hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-105">
                      <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-primary-foreground animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[10px] font-medium text-primary-foreground/80 uppercase tracking-wide leading-tight">Prize Pool</span>
                        <span className="text-[10px] sm:text-sm font-bold text-primary-foreground leading-tight">₹{event.prize}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
              </div>
              );
            })}
            
            {/* Workshops */}
            {filteredEvents.filter(e => e.category === 'Workshops').map((event, index) => {
              const flagshipCount = filteredEvents.filter(e => e.category === 'Flagship').length;
              const comboCount = filteredCombos.length;
              const eventsCount = filteredEvents.filter(e => e.category === 'Events').length;
              return (
              <div
                key={event.id}
                className="group relative p-6 bg-card/50 backdrop-blur-lg rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-industrial)] animate-slide-in-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ animationDelay: `${(flagshipCount + comboCount + eventsCount + index) * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedEvent(event);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${event.title}`}
              >
                <div className="absolute top-0 right-0 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/50">
                    {event.category}
                  </span>
                </div>
                <div
                  className="mb-4 w-full h-48 overflow-hidden rounded-lg"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    width="400"
                    height="200"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-primary transition-colors ${event.prize ? 'sm:pr-32' : ''}`}>
                  {event.title}
                </h3>
                {event.prize && (
                  <div className="flex justify-center mb-3 sm:mb-0 sm:block sm:absolute sm:right-4 sm:bottom-4 z-10">
                    <div className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-primary via-accent to-primary rounded-full border border-primary/50 sm:border-2 shadow-[0_0_15px_hsl(var(--primary)/0.4)] sm:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)] sm:hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-105">
                      <Trophy className="w-3 h-3 sm:w-5 sm:h-5 text-primary-foreground animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[10px] font-medium text-primary-foreground/80 uppercase tracking-wide leading-tight">Prize Pool</span>
                        <span className="text-[10px] sm:text-sm font-bold text-primary-foreground leading-tight">₹{event.prize}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500" />
              </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedEvent(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] bg-card border border-primary/20 rounded-xl shadow-2xl overflow-hidden flex flex-col mx-4 my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-20"
              >
                <X size={24} />
              </button>
              <div className="overflow-y-auto scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                <div className="h-48 sm:h-80 overflow-hidden relative">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    width="600"
                    height="400"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-40" />
                </div>
                <div className="p-5 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary">{selectedEvent.title}</h2>
                    <span className={`w-fit px-3 py-1 rounded-full text-sm font-semibold ${selectedEvent.category === 'Flagship'
                      ? 'bg-accent/20 text-accent border border-accent/50'
                      : selectedEvent.category === 'Workshops'
                        ? 'bg-secondary/20 text-secondary border border-secondary/50'
                        : 'bg-primary/20 text-primary border border-primary/50'
                      }`}>
                      {selectedEvent.category}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                    {selectedEvent.description}
                  </p>
                  {/* Quotes Section */}
                  {selectedEvent.quotes && selectedEvent.quotes.map((quote, idx) => (
                    <div key={idx} className="mb-6 p-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg border-l-4 border-primary">
                      <p className="text-lg italic text-primary font-semibold">
                        "{quote}"
                      </p>
                    </div>
                  ))}
                  {/* Event Rules Accordion */}
                   {selectedEvent.rules && (
                    <div className="mb-6 border-t border-b border-primary/20">
                      <button
                        onClick={() => setIsRulesOpen(!isRulesOpen)}
                        className="w-full flex items-center justify-between py-4 text-left hover:text-primary transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-primary uppercase tracking-wider">
                          Event Rules
                        </h4>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform duration-300 ${isRulesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isRulesOpen && (
                        <div className="pb-4 animate-slide-in-left">
                          <p className="text-sm text-muted-foreground whitespace-pre-line">
                            {selectedEvent.rules}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {/* Rule Book Button for Flagship */}
                  {selectedEvent.rulesLink && (
                    <div className="mb-6">
                      <a 
                        href={selectedEvent.rulesLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-primary/10 border-2 border-primary/50 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all shadow-[0_0_15px_hsl(var(--primary)/0.2)]"
                      >
                        <Trophy className="w-5 h-5" />
                        View Rule Book (PDF)
                      </a>
                    </div>
                  )}
                  {/* Time Section */}
                  {selectedEvent.time && (
                    <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Event Time</h4>
                        <p className="text-sm text-muted-foreground">{selectedEvent.time}</p>
                      </div>
                    </div>
                  )}
                  {/* Location Section */}
                  {selectedEvent.location && (
                    <div className="flex items-start gap-3 mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">{selectedEvent.location}</p>
                      </div>
                    </div>
                  )}
                  {/* Team Size Section */}
                  {selectedEvent.teamSize && (
                    <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Team Size</h4>
                        <p className="text-sm text-muted-foreground">{selectedEvent.teamSize} {selectedEvent.teamSize === '1' ? 'Member' : 'Members'}</p>
                      </div>
                    </div>
                  )}
                  {/* Entry Fee Section */}
                  {selectedEvent.registrationFee && (
                    <div className="flex items-center gap-3 mb-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                      <div className="p-2 bg-green-500/20 rounded-lg">
                        <Package className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-1">Entry Fee</h4>
                        <p className="text-base font-bold text-green-300">
                          ₹{selectedEvent.registrationFee}{selectedEvent.category !== 'Workshops' && ' / Team'}
                        </p>
                      </div>
                    </div>
                  )}
                  {/* Contact Details */}
                  <div className="mb-6 border-t border-primary/20 pt-6">
                    <h4 className="text-lg font-semibold text-primary uppercase tracking-wider mb-4">Contact Details</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedEvent.contacts.map((contact, index) => (
                        <div key={index} className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="font-semibold text-sm mb-1">{contact.name}</p>
                          <a 
                            href={`tel:${contact.phone}`}
                            className="text-xs text-primary hover:text-primary/80 transition-colors underline"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Registration Button */}
                  <div className="border-t border-primary/20 pt-6">
                    {(() => {
                      const categoryTimeLeft = selectedEvent.category === 'Flagship' 
                        ? flagshipTimeLeft 
                        : selectedEvent.category === 'Workshops' 
                          ? workshopsTimeLeft 
                          : eventsTimeLeft;

                      return (
                        <>
                          <a
                            href={categoryTimeLeft === "Closed" ? undefined : selectedEvent.registrationLink}
                            target={categoryTimeLeft === "Closed" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className={`block w-full px-8 py-3 sm:py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold rounded-xl transition-all text-center shadow-[0_0_20px_hsl(var(--primary)/0.4)] ${
                              categoryTimeLeft === "Closed"
                                ? "opacity-50 grayscale cursor-not-allowed pointer-events-none"
                                : "hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:scale-105"
                            }`}
                            onClick={(e) => {
                              if (categoryTimeLeft === "Closed") e.preventDefault();
                            }}
                          >
                            <div className="flex flex-col items-center leading-tight">
                              <span className="text-lg sm:text-xl">{categoryTimeLeft === "Closed" ? "Registration Closed" : "Register Now"}</span>
                              {categoryTimeLeft !== "Closed" && (
                                <span className="text-xs sm:text-sm font-medium opacity-90 mt-1">Closing in: {categoryTimeLeft}</span>
                              )}
                            </div>
                          </a>
                          {(categoryTimeLeft === "Closed" && showOnSpot) && (
                            <p className="text-sm sm:text-base font-bold text-accent mt-4 animate-pulse text-center tracking-wide">
                              On-spot registration available
                            </p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Events;
