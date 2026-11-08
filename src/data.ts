// src/data.ts — all Cyril content in one place (replaces DatoCMS)
import type { ProfileBanner as PB, WorkPermit as WP, TimelineItem as TI, Project as PR, Certification as CE, ContactMe as CM, Skill as SK } from './types';

// images
import autumn from './images/p01_autumn.png';
import bluecrest from './images/p02_bluecrest.jpg';
import house from './images/p03_house.png';
import rooftop from './images/p04_rooftop.png';
import william from './images/p05_william.png';
import yayra from './images/p06_yayra.png';
import amazon from './images/p07_amazon.png';
import csirinsti from './images/p08_csirinsti.png';
import cribook from './images/p09_cribook.png';
import citation from './images/p10_citation.png';
import thouart from './images/p11_thouart.png';
import farm from './images/p12_farm.png';
import lawfirm from './images/p13_lawfirm.png';
import gym from './images/p14_gym.jpg';
import oasis from './images/p15_oasis.jpg';
import stadium from './images/p16_stadium.jpg';
import bigdate from './images/p17_bigdate.jpg';
import cyrilAvatar from './images/cyril.jpg';

export type { ProfileBanner, WorkPermit, TimelineItem, Project, Certification, ContactMe, Skill } from './types';

export const IMAGES = { autumn, bluecrest, house, rooftop, william, yayra, amazon, csirinsti, cribook, citation, thouart, farm, lawfirm, gym, oasis, stadium, bigdate, cyrilAvatar };

export const profileBanner: PB = {
  backgroundImage: { url: autumn },
  headline: 'I build things people remember.',
  resumeLink: { url: '/resume.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/cyril-nyarko-tawiah-229060151',
  profileSummary:
    "Cyril Nyarko Tawiah — Designer · 3D Visualizer · Developer based in Accra, Ghana. At Ghana's CSIR-Institute for Scientific and Technological Information I craft brand identities, publications, hyperreal 3D visualization and animation — and I help digitalize knowledge and information systems. From THOU ART and Farm Academy identities to an exhibited 'Best of the Best' render at DCDA 2024 (California State University, Long Beach). I also ship: my two-player web game Duo Blocks is live, and Android apps are on the way. MPhil Information Systems @ UPSA."
};

export const workPermit: WP = {
  visaStatus: 'full work rights in Ghana',
  expiryDate: new Date('2026-12-31'),
  summary: "I'm a Ghanaian with full rights to live and work anywhere in Ghana — and I take freelance design & 3D clients worldwide.",
  additionalInfo: 'Open to stronger full-time creative/tech roles in Ghana, remote-friendly freelance work, and collaborations. Languages: English & Twi.'
};

export const timeline: TI[] = [
  { timelineType: 'work', name: 'CSIR — Institute for Scientific and Technological Information (INSTI)', title: 'Senior Graphic Designer / Technical Officer', techStack: 'Adobe · CorelDRAW · Figma · SketchUp Pro · Lumion · Lightroom · Filmora · Motion graphics', summaryPoints: 'Brochures, annual reports, banners, flyers, social-media graphics and branding for institutional communication — always consistent with CSIR corporate identity. Plus 3D modeling, rendering, animation and digitization / information-systems work (CSIR-CRI Book of Abstracts, institute citations).', dateRange: 'Aug 2022 – Present' },
  { timelineType: 'work', name: 'Ghana Revenue Authority — Head Office', title: 'IT Management (National Service)', techStack: 'Whiteboard animation · Software troubleshooting · Training', summaryPoints: 'Created whiteboard animations for advertisements. Troubleshot daily office software issues and mitigated them. Conducted training sessions on design and animation software for team members.', dateRange: '2021 – 2022' },
  { timelineType: 'work', name: 'Glover Limited, Suhum & William and Co., Airport Hills', title: 'Architectural Animator (3D Modeling)', techStack: 'SketchUp Pro · Lumion · 3D rendering', summaryPoints: 'Produced intricate 3D renderings and animations for major construction-project proposals. Created and animated a full estate visualization with final rendered building designs; designed physical products, mailers and packaging.', dateRange: '2019 – 2020' },
  { timelineType: 'work', name: 'Spring Consult — Asylum Down, Accra', title: 'Graphic Designer', techStack: 'Brand identity · Print · Packaging', summaryPoints: 'Presented design ideas to customers and managers; produced business cards, flyers, banners, product designs and packaging.', dateRange: '2019 – 2020' },
  { timelineType: 'education', name: 'University of Professional Studies, Accra (UPSA)', title: 'MPhil, Information Systems', techStack: '', summaryPoints: 'Currently reading for an MPhil in Information Systems — because design, code and data are one craft.', dateRange: 'Current' },
  { timelineType: 'education', name: 'BlueCrest University College, Accra', title: 'BSc Information Technology', techStack: '', summaryPoints: 'Final-year project: a full 3D visualization of the campus (SketchUp Pro → Lumion 10 → Lightroom → Filmora) — featured on the blog, intranet and YouTube, and the college\'s all-time Instagram Live record.', dateRange: '2017 – 2021' },
  { timelineType: 'education', name: 'St. Thomas Aquinas Senior High School', title: 'Visual Art', techStack: '', summaryPoints: 'Where the creative foundation was laid.', dateRange: '2015 – 2017' }
];

export const projects: PR[] = [
  { title: 'Apex Legends — Autumn Estates Reimagined', description: 'Speculative architectural remodeling of Autumn Estates — a "Best of the Best" exhibit at the DCDA Long Beach International Design Invitation Exhibition, California State University, Long Beach, representing Ghana.', techUsed: 'SketchUp Pro, Lumion 10, Adobe Lightroom', image: { url: autumn } },
  { title: 'BlueCrest Campus 3D Visualization', description: 'Final-year flagship: the entire BlueCrest campus modeled and rendered — featured on the college blog, intranet and YouTube.', techUsed: 'SketchUp Pro, Lumion 10, Lightroom, Filmora', image: { url: bluecrest } },
  { title: 'Modern One-Storey House (Open Floor Plan)', description: 'Concept residential design with open-plan living — my most-viewed Behance project.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: house } },
  { title: 'Christiansburg Hotel Rooftop Bar', description: 'Commercial concept design — rooftop bar for Christiansburg Hotel, Labone, Accra.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: rooftop } },
  { title: 'William & Co: 4-Storey Apartment', description: 'Interior design and full 3D visualization of a four-storey residential apartment.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: william } },
  { title: 'Yayra Glover: 3 Apartments', description: 'Residential apartment visualization set from the 2019–2020 architectural animation era.', techUsed: 'SketchUp Pro, 3D Modeling', image: { url: yayra } },
  { title: 'Concept: Office in the Amazon', description: 'What if there was an office in the middle of the Amazon? Concept environment modeling.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: amazon } },
  { title: 'Project CSIR-INSTI: Modeling & Animation', description: 'Institute walkthrough — modeling and animation for CSIR-INSTI.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: csirinsti } },
  { title: 'CSIR-CRI Book of Abstracts 2018', description: 'Book design and print layout for the CSIR-Crops Research Institute\'s Book of Abstracts.', techUsed: 'Adobe, Print Design', image: { url: cribook } },
  { title: 'Citation Design for CSIR Institutes', description: 'Citation graphics design and printing for CSIR institutes — consistency with CSIR branding.', techUsed: 'Adobe, Print Design, Branding', image: { url: citation } },
  { title: 'THOU ART — Brand Identity & Guidelines', description: 'Complete brand identity system with full guidelines.', techUsed: 'Adobe, CorelDRAW, Branding', image: { url: thouart } },
  { title: 'Farm Academy — Logo, Identity & Guidelines', description: 'Farm Academy visual identity: logo, brand identity system and guidelines.', techUsed: 'CorelDRAW, Figma, Branding', image: { url: farm } },
  { title: 'Owusu Aduome Law Firm — Brand Identity', description: 'Identity and brand guidelines for a law firm — serious, trustworthy, memorable.', techUsed: 'CorelDRAW, Figma, Branding', image: { url: lawfirm } },
  { title: 'Concept Rooftop Gym & Rock Climbing', description: 'Concept recreation space — rooftop gym fused with rock climbing.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: gym } },
  { title: 'Oasis Resort — Modelling & Animation', description: 'Resort concept modelled and animated.', techUsed: 'SketchUp Pro, Lumion 10', image: { url: oasis } },
  { title: 'Soccer Stadium', description: 'Stadium concept modeling.', techUsed: 'SketchUp Pro, 3D Modeling', image: { url: stadium } },
  { title: 'Concept: The Big Date', description: 'A stylized concept piece.', techUsed: '3D Modeling, Concept Design', image: { url: bigdate } }
];

export const certifications: CE[] = [
  { title: '"Best of the Best" Exhibitor — DCDA Long Beach', issuer: 'DCDA International Design Invitation Exhibition · CSULB, USA', issuedDate: 'Jan 2024', link: 'https://fliphtml5.com/jikuw/jgyz/DCDA2024_LA_1-compressed1/', iconName: 'award' },
  { title: 'BSc, Information Technology', issuer: 'BlueCrest University College, Accra', issuedDate: '2021', link: 'https://bluecrest.edu.gh/BSC-Information-Technology.php', iconName: 'university' },
  { title: 'Student Spotlight — Campus 3D Visualization', issuer: 'BlueCrest University College (blog, intranet & YouTube feature)', issuedDate: '2021', link: 'https://blog.bluecrest.edu.gh/2021/05/25/bluecrest-college-student-creates-3d-visuals-of-the-campus/', iconName: 'spotlight' },
  { title: 'Most-watched BlueCrest Instagram Live record', issuer: 'BlueCrest Intranet feature', issuedDate: 'Jun 2021', link: 'https://intranet.bluecrest.edu.gh/2021/06/30/massive-ig-views-of-final-year-it-students-project/', iconName: 'spotlight' }
];

export const contactMe: CM = {
  profilePicture: { url: cyrilAvatar },
  name: 'Cyril Nyarko Tawiah',
  title: 'Designer · 3D Visualizer · Developer',
  summary: 'I design, model, animate and build — brand identities, hyperreal architectural renders, shipped games and apps. "I build things people remember."',
  companyUniversity: 'CSIR-INSTI · MPhil Information Systems @ UPSA',
  linkedinLink: 'https://www.linkedin.com/in/cyril-nyarko-tawiah-229060151',
  email: 'cyriltawiah9@gmail.com',
  phoneNumber: '+233 550 292 767'
};

export const skills: SK[] = [
  { name: 'Adobe Creative Suite', category: 'Design', description: 'Everyday driver for print, identity and publication work — Photoshop, Illustrator and friends.', icon: 'SiAdobe' },
  { name: 'CorelDRAW', category: 'Design', description: 'CMS design and brand guideline production. Can draw exactly what clients see.', icon: 'SiCoreldraw' },
  { name: 'Figma', category: 'Design', description: 'UI and digital product design, wireframes and collaborative design.', icon: 'SiFigma' },
  { name: 'Brand Identity Systems', category: 'Design', description: 'Logos, guidelines, stationery and full visual identity systems (THOU ART, Farm Academy, Owusu Aduome).', icon: 'FaPencilRuler' },
  { name: 'Publication & Print Layout', category: 'Design', description: 'Brochures, annual reports, citation graphics and book design (CSIR-CRI Book of Abstracts).', icon: 'FaBookOpen' },
  { name: 'SketchUp Pro', category: '3D & Rendering', description: 'Precision 3D modeling of buildings, interiors and concept environments.', icon: 'FaDraftingCompass' },
  { name: 'Lumion 10', category: '3D & Rendering', description: 'Hyperreal architectural rendering with day/night lighting, reflections and shadows. DCDA-2024 exhibited.', icon: 'SiLumion' },
  { name: 'Adobe Lightroom', category: '3D & Rendering', description: 'Color grading and post-render correction — the final polish pass.', icon: 'SiAdobe' },
  { name: 'Motion Graphics & Video', category: '3D & Rendering', description: 'Filmora editing, whiteboard animation, walkthroughs and promo reels.', icon: 'FaFilm' },
  { name: 'Web Development', category: 'Code', description: 'Responsive web apps and games — Duo Blocks (React-first experience with Supabase backend) lives live.', icon: 'FaCode' },
  { name: 'Android Development', category: 'Code', description: 'Mobile apps created — next landing on this portfolio.', icon: 'FaAndroid' },
  { name: 'Supabase / Realtime Backend', category: 'Code', description: 'Auth, database and realtime sync for shipped experiences (Duo Blocks mutiplayer).', icon: 'SiSupabase' },
  { name: 'Game Development', category: 'Code', description: 'Two-player browser game design and shipping — interaction, state, feel.', icon: 'FaGamepad' },
  { name: 'Information Systems & Digitization', category: 'Professional', description: 'Digitization of institutional knowledge in CSIR-INSTI; MPhil IS @ UPSA.', icon: 'FaDatabase' },
  { name: 'Client Communication', category: 'Professional', description: 'From brief to delivery — presented design ideas customers and managers have bought into since 2019.', icon: 'FaComments' },
  { name: 'Training & Teamwork', category: 'Professional', description: 'Trained GRA teammates on design & animation software; the team player type.', icon: 'FaUsers' }
];

export const recommendations = [
  {
    name: 'BlueCrest University College',
    role: 'Institutional testimonial (bluecrest.edu.gh)',
    date: 'Featured on BSc & MSc IT pages',
    quote:
      '"As an IT student in BlueCrest University College, I developed the abilities and confidence to utilize a range of quantitative techniques intelligently in my work. The programming, networking, web development, and other courses were vital assets that I continue to utilize daily […] Information Technology is a great curriculum that has completely transformed my perspective on technology and its future!" — Cyril Tawiah'
  },
  {
    name: 'BlueCrest Intranet',
    role: 'Feature: "Massive IG Views of Final Year IT Student\'s Project"',
    date: 'June 30, 2021',
    quote:
      '"We were ecstatic to see the project of Cyril Tawiah, a final year student of the BlueCrest School of Technology. […] his video recorded over 400 views on our Instagram account which is the highest ever recorded on any of our Instagram Live videos."'
  },
  {
    name: 'DCDA Long Beach 2024',
    role: 'Exhibition selection · CSULB, California, USA',
    date: 'Jan 30 – Feb 1, 2024',
    quote:
      '"Best of the Best" — Cyril Nyarko Tawiah, Technical Officer at CSIR-INSTI, exhibited alongside designers from Korea, China, Germany and the USA with "Apex Legends – Autumn Estates Reimagined".'
  }
];

// Music page → "My Tools in Action"
export const favoriteGenres = ['Identity Design', 'Architectural Renders', 'Motion & Animation', 'Web & Apps', 'Print & Publication'];
export const favoriteAlbums = [
  { title: 'Adobe Creative Suite', artist: 'My main suite for print, identity & imaging', imgSrc: thouart },
  { title: 'CorelDRAW', artist: 'Brand guidelines & production work', imgSrc: citation },
  { title: 'Figma', artist: 'UI & digital product design', imgSrc: bigdate },
  { title: 'Google SketchUp', artist: '3D modeling of buildings & concepts', imgSrc: gym },
  { title: 'Lumion', artist: 'Hyperreal rendering — my DCDA piece', imgSrc: autumn },
  { title: 'Lightroom + Filmora', artist: 'Color grade & final edit', imgSrc: bluecrest }
];

// Reading → featured MPhil/IS reading & research themes
export const books = [
  { title: 'Implementing Digitization Projects', author: 'MSIS607 · UPSA', imgSrc: cribook, description: 'How institutions like CSIR-INSTI move knowledge into the digital era.' },
  { title: 'Business Intelligence in Data Science', author: 'MSIS605 · UPSA', imgSrc: gym, description: 'Turning data into decisions — the analytic side of my IS practice.' },
  { title: 'Information Security', author: 'MSIS609 · UPSA', imgSrc: lawfirm, description: 'Securing information systems I help build.' },
  { title: 'IT Entrepreneurship & Innovation', author: 'MSIS601 · UPSA', imgSrc: farm, description: 'Venture thinking behind products like Duo Blocks.' },
  { title: 'IS Research Methods', author: 'MSIS603 · UPSA', imgSrc: citation, description: 'The method-powered study of how we know what we know.' },
  { title: 'AI in Business', author: 'MSIS613 · UPSA', imgSrc: amazon, description: 'Where AI meets enterprise — and where my next builds are going.' }
];

// Blogs → press & features
export const blogs = [
  { title: 'BlueCrest College Student Creates 3D Visuals of the Campus', platform: 'BlueCrest Blog', icon: 'FaYoutube', link: 'https://blog.bluecrest.edu.gh/2021/05/25/bluecrest-college-student-creates-3d-visuals-of-the-campus/', description: 'The 4-app story: SketchUp Pro → Lumion 10 → Lightroom → Filmora.' },
  { title: 'Massive IG Views of Final Year IT Student\'s Project', platform: 'BlueCrest Intranet', icon: 'FaStar', link: 'https://intranet.bluecrest.edu.gh/2021/06/30/massive-ig-views-of-final-year-it-students-project/', description: 'My livestream set the college\'s all-time Instagram Live record.' },
  { title: 'BlueCrest Campus 3D Visualization (full video)', platform: 'YouTube · BlueCrest College', icon: 'FaYoutube', link: 'https://www.youtube.com/watch?v=iyi_-ffGGCY', description: 'Watch the full render — day/night sequences, reflections, shadows.' },
  { title: 'DCDA 2024 Long Beach Exhibition Catalogue', platform: 'DCDA (FlipHTML5)', icon: 'FaAward', link: 'https://fliphtml5.com/jikuw/jgyz/DCDA2024_LA_1-compressed1/', description: '"Best of the Best" — Autumn Estates Reimagined, page 16.' }
];
