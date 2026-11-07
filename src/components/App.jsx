import { useState } from "react";
import {
  ArrowRight,
  Search,
  Menu,
  X,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const navigation = [
  "Home",
  "About",
  "Books",
  "Articles",
  "Podcast",
  "Teaching",
  "Contact",
];

const features = [
  {
    eyebrow: "BOOKS",
    title: (
      <>
        Ideas
        <br />
        in Print
      </>
    ),
    description: "Books on architecture, branding and the built environment.",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=700&q=85",
    imageAlt: "A carefully arranged architecture book",
    imageClass: "object-cover object-center",
  },
  {
    eyebrow: "ARTICLES",
    title: (
      <>
        Research
        <br />
        for Practice
      </>
    ),
    description: "Essays, journal articles and opinion pieces.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Contemporary architectural facade",
    imageClass: "object-cover object-center",
  },
  {
    eyebrow: "PODCAST",
    title: (
      <>
        Conversations
        <br />
        on Place
      </>
    ),
    description: "Interviews and discussions with creative minds.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Podcast microphone in a studio",
    imageClass: "object-cover object-center",
  },
  {
    eyebrow: "COURSES",
    title: (
      <>
        Teach
        <br />
        and Learn
      </>
    ),
    description: "Current courses, lectures and resources for students.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=85",
    imageAlt: "Bright contemporary learning space",
    imageClass: "object-cover object-center",
  },
];

const sessions = [
  {
    month: "OCT",
    day: "14",
    title: "Branding the City",
    type: "Guest Lecture",
    place: "School of Architecture",
  },
  {
    month: "NOV",
    day: "03",
    title: "Architecture and Identity",
    type: "Fall Semester",
    place: "Graduate Studio",
  },
  {
    month: "NOV",
    day: "18",
    title: "The Business of Place",
    type: "Public Talk",
    place: "Online",
  },
];

export default function App() {
 
const names = ["Saeed", "Alex", "John"];
  return (
  <div>
    {names}
  </div>
  );
}
