import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sahil",
  initials: "S",
  url: "https://sahil-portfolio-beta.vercel.app/",
  location: "Kangra, Himachal Pradesh",
  locationLink: "https://www.google.com/maps/place/kangra",
  description:
    "Full-Stack Developer with a Proven Track Record in Problem-Solving and Cutting-Edge Technologies. Very active on LeetCode.",
  summary:
    "As a Jr. Data Engineer Trainee at [64 Squares LLC](/#work), I work on developing generative AI models, fine-tuning large language models, and completing data annotation tasks. I have completed my [Master of Computer Applications (MCA)](/#education) from the [Central University of Himachal Pradesh](/#education) with a CGPA of 9.18, building on a strong academic foundation in Data Structure. Passionate about problem-solving, I have solved over 350 problems on [LeetCode](/#hackathons) and ranked 1st at my university on [GeeksforGeeks](/#hackathons). Some of my projects are [SHARE NEXT](/#projects), a secure content-sharing app, and [CUHP APP](/#projects), an Android application for the university. I am focused on advancing my [skills](/#skills) in AI, machine learning, and full-stack development, with the goal of contributing to impactful, scalable solutions in the tech industry.",
  avatarUrl: "/me.jpg",
  skills: [
    "C++", "Java", "C", "Javascript", "Python", "MySQL", "Fire Base", "SQL", "React", "Next", "Bootstrap", "Tailwind", "DSA", "Android Studio", "PHP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "sharmasahil1832@gmail.com",
    tel: "+91 78762 02496",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sahil-1832",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahil1832",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SahilSharma1832?t=0-7Un7SwkMpTxyq-K2f48g&s=09",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sharmasahil1832@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "64 Square Apex LLP",
      href: "https://www.64-squares.com/",
      badges: [],
      location: "UNA, Himachal Pradesh",
      title: "Jr. Data Engineer Trainee",
      logoUrl: "/64squares-logo.jpg",
      start: "May 2024",
      end: "Jan 2025",
      description:
        "Worked on generative AI models and fine-tuning large language models (LLMs). Conducted AI model training and data preparation to ensure high-quality model output. Complete over 800+ data annotation tasks using Label Studio,focusing on data labeling, image processing, and bug detection.",
    },
  ],
  education: [
    {
      school: "Central University of Himachal Pradesh",
      href: "https://www.cuhimachal.ac.in/",
      degree: "Master of  Computer Applications",
      logoUrl: "/CUHP-logo.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Himachal Pradesh University",
      href: "https://gcdharamshala.in/",
      degree: "Bachelor's of Science (BSc)",
      logoUrl: "/GDC-logo.jpg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Share Next App",
      href: "https://share-next-app.vercel.app/",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "Share Next is a user-friendly platform for easy content sharing and collaboration. It allows seamless uploading, sharing, and discovering of resources with a focus on privacy and security. The app offers customizable sharing options to meet various needs, ensuring a smooth experience for all users.",
      technologies: [
        "Next.js",
        "Typescript",
        "JavaScript",
        "TailwindCSS",
        "Clerk",
        "Razorpay",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://share-next-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sahil-1832/Share-Next-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sharenext.svg",
      video: "",
    },
    {
      title: "CUHP APP",
      href: "https://www.amazon.com/gp/product/B0DGDGQ2DJ",
      dates: "Feb 2024 - June 2024",
      active: true,
      description:
        "CUHP APP is an Android app developed with Java, Android Studio, and Firebase. It features custom authentication and allows users to share content with all other users in real-time. The app ensures secure access and seamless content sharing within a user-friendly interface.",
      technologies: [
        "Java",
        "Android Studio",
        "Firebase",
      ],
      links: [
        {
          type: "App",
          href: "https://www.amazon.com/gp/product/B0DGDGQ2DJ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sahil-1832/CUHP-APP-v1.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cuhp.svg",
      video:"",
    },

  ],
  hackathons: [
    {
      title: "December Badge 2024",
      dates: "31 December 2024",
      location:"",
      description:
        "The December 2024 month badge from LeetCode for solving all POTD in Novermber month.",
      image:
        "/Dec2024.png",
      links: [],
    },
    {
      title: "Annual Badge 2024",
      dates: "09 December 2024",
      location:"",
      description:
        "The Annual Badge of 2024 for frequently being active on LeetCode.",
      image:
        "/2024badge.png",
      links: [],
    },
    {
      title: "Novermber Badge",
      dates: "30 November 2024",
      location:"",
      description:
        "The November 2024 month badge from LeetCode for solving all POTD in Novermber month.",
      image:
        "/Nov2024.png",
      links: [],
    },
    {
      title: "October Badge",
      dates: "31 October 2024",
      location:"",
      description:
        "The October 2024 month badge from LeetCode for solving all POTD in October month.",
      image:
        "/Oct2024.png",
      links: [],
    },
    {
      title: "Rank 1 on GFG",
      dates: "16 October 2024",
      location:"",
      description:
        "Reached Rank 1 on GFG from Central University of Himachal Pradesh by scoring the highest coding score.",
      image:
        "/gfg.png",
      links: [],
    },
    {
      title: "September Badge",
      dates: "30 September 2024",
      location:"",
      description:
        "The September 2024 month badge from LeetCode for solving all POTD in September month.",
      image:
        "/Sep2024.png",
      links: [],
    },
    {
      title: "August Badge",
      dates: "31 August 2024",
      location:"",
      description:
        "The August 2024 month badge from LeetCode for solving all POTD in August month.",
      image:
        "/Aug2024.png",
      links: [],
    },
    {
      title: "200 Days Badge",
      dates: "30 August 2024",
      location:"",
      description:
        "The 200 Days badge from LeetCode for being active for more than 200 days.",
      image:
        "/200days.png",
      links: [],
    },
    {
      title: "July Badge",
      dates: "31 July 2024",
      location:"",
      description:
        "The July 2024 month badge from LeetCode for solving all POTD in July month.",
      image:
        "/July2024.png",
      links: [],
    },
    {
      title: "June Badge",
      dates: "30 June 2024",
      location:"",
      description:
        "The June 2024 month badge from LeetCode for solving all POTD in June month.",
      image:
        "/Jun2024.png",
      links: [],
    },
    {
      title: "May Badge",
      dates: "31 May 2024",
      location:"",
      description:
        "The May 2024 month badge from LeetCode for solving all POTD in May month.",
      image:
        "/May2024.png",
      links: [],
    },
    {
      title: "100 Days Badge",
      dates: "22 May 2024",
      location:"",
      description:
        "The 100 Days badge from LeetCode for being active for more than 100 days.",
      image:
        "/100days.png",
      links: [],
    },
    {
      title: "50 Days Badge",
      dates: "04 April 2024",
      location:"",
      description:
        "The 50 Days badge from LeetCode for being active for more than 50 days.",
      image:
        "/50days.png",
      links: [],
    },
  ],
} as const;
