import React from "react"
import {
  Code,
  PenTool,
  Database,
  Smartphone,
  BookOpen,
  TrendingUp,
  Briefcase,
  Camera,
  Music,
  Globe,
} from "lucide-react"
import image1 from '../images/React.jpeg'
import image2 from '../images/aws.webp'
import image3 from '../images/digital.jpeg'
import image4 from '../images/flutter.jpeg'
import image5 from '../images/fullstack.jpeg'
import image7 from '../images/machine.png'
import image8 from '../images/photography.jpg'
import image9 from '../images/python.jpeg'
import image10 from '../images/ui.png'

export const categories = [
  {
    id: "1",
    name: "Web Development",
    slug: "web-development",
    icon: React.createElement(Code, { className: "h-6 w-6" }),
  },
  {
    id: "2",
    name: "Design",
    slug: "design",
    icon: React.createElement(PenTool, { className: "h-6 w-6" }),
  },
  {
    id: "3",
    name: "Data Science",
    slug: "data-science",
    icon: React.createElement(Database, { className: "h-6 w-6" }),
  },
  {
    id: "4",
    name: "Mobile Development",
    slug: "mobile-development",
    icon: React.createElement(Smartphone, { className: "h-6 w-6" }),
  },
  {
    id: "5",
    name: "Education",
    slug: "education",
    icon: React.createElement(BookOpen, { className: "h-6 w-6" }),
  },
  {
    id: "6",
    name: "Business",
    slug: "business",
    icon: React.createElement(TrendingUp, { className: "h-6 w-6" }),
  },
  {
    id: "7",
    name: "Marketing",
    slug: "marketing",
    icon: React.createElement(Briefcase, { className: "h-6 w-6" }),
  },
  {
    id: "8",
    name: "Photography",
    slug: "photography",
    icon: React.createElement(Camera, { className: "h-6 w-6" }),
  },
  {
    id: "9",
    name: "Music",
    slug: "music",
    icon: React.createElement(Music, { className: "h-6 w-6" }),
  },
  {
    id: "10",
    name: "Languages",
    slug: "languages",
    icon: React.createElement(Globe, { className: "h-6 w-6" }),
  },
]

export const popularCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    image: image5,
    price: 89.99,
    rating: 4.8,
    reviewCount: 45892,
    level: "Beginner",
    category: "Web Development",
    slug: "complete-web-development-bootcamp",
  },
  {
    id: "2",
    title: "Machine Learning A-Z: Hands-On Python & R",
    instructor: "Kirill Eremenko",
    image: image7,
    price: 94.99,
    rating: 4.6,
    reviewCount: 32451,
    level: "Intermediate",
    category: "Data Science",
    slug: "machine-learning-a-z",
  },
  {
    id: "3",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    image: image1,
    price: 84.99,
    rating: 4.7,
    reviewCount: 28976,
    level: "Intermediate",
    category: "Web Development",
    slug: "react-complete-guide",
  },
  {
    id: "4",
    title: "UI/UX Design Bootcamp",
    instructor: "Daniel Walter Scott",
    image: image10,
    price: 79.99,
    rating: 4.5,
    reviewCount: 18432,
    level: "Beginner",
    category: "Design",
    slug: "ui-ux-design-bootcamp",
  },
]

export const allCourses = [
  ...popularCourses,
  {
    id: "5",
    title: "Flutter & Dart - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    image: image4,
    price: 89.99,
    rating: 4.6,
    reviewCount: 12543,
    level: "Intermediate",
    category: "Mobile Development",
    slug: "flutter-dart-complete-guide",
  },
  {
    id: "6",
    title: "Python for Data Science and Machine Learning",
    instructor: "Jose Portilla",
    image: image9,
    price: 94.99,
    rating: 4.5,
    reviewCount: 23456,
    level: "Intermediate",
    category: "Data Science",
    slug: "python-data-science-machine-learning",
  },
  {
    id: "7",
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    image: image3,
    price: 84.99,
    rating: 4.4,
    reviewCount: 17865,
    level: "Beginner",
    category: "Marketing",
    slug: "complete-digital-marketing-course",
  },
  {
    id: "8",
    title: "AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    image: image2,
    price: 109.99,
    rating: 4.7,
    reviewCount: 19876,
    level: "Advanced",
    category: "Web Development",
    slug: "aws-certified-solutions-architect",
  },
  {
    id: "9",
    title: "Photography Masterclass",
    instructor: "Phil Ebiner",
    image: image8,
    price: 69.99,
    rating: 4.6,
    reviewCount: 14532,
    level: "All Levels",
    category: "Photography",
    slug: "photography-masterclass",
  },
]

