import { Feather } from "lucide-react";
import { Trees } from "lucide-react";
import { Cloudy } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { ClockArrowUp } from "lucide-react";
import { LayoutDashboard } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Working", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Reviews", href: "#" },
];

export const reviews = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Feather  />,
    text: "Light-weight",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Trees />,
    text: "Made of sustainable materials",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <Cloudy />,
    text: "Good touch and fragrence",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <ClockArrowUp />,
    text: "Real-Time data collection",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <BrainCircuit />,
    text: "Accurate AI models",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <LayoutDashboard />,
    text: "Free Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Look and get info!",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Get precise audio output",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Data updated in Dashboard in real-time!",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "NV Set-1",
    price: "$299",
    features: [
      "Private board sharing",
      "5 Gb Storage",
    ],
  },
  {
    title: "Extra Head Strap",
    price: "$19",
    features: [
      "Private board sharing",
      "5 Gb Storage",
    ],
  },
  {
    title: "Extra Power Bank",
    price: "$48",
    features: [
      "Private board sharing",
      "5 Gb Storage",
    ],
  }
];

export const contactLinks = [
  { href: "#", text: "Email us : nuvision.contact@gmail.com" },
  { href: "#", text: "Call : +65 91** **24" },
  { href: "#", text: "Tutorials" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
