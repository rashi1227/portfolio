import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Files Hub",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Firebase", "Vercel", "NextAuth"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Hoobank",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Vercel"],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Number Crunch",
    href: "/projects",
    tags: ["HTML", "CSS", "Javascript", "React"],
    image: {
      LIGHT: "/images/projects/kanbanDark.webp",
      DARK: "/images/projects/kanbanCardLight.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Files Hub",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "A files manager app helps users organize, navigate, and manage their files on devices like computers and smartphones. Provides organization features like creating folders and navigating directories",
    sourceCodeHref: "https://github.com/rashi1227/firebase-files-app",
    liveWebsiteHref: "https://firebase-files-app-six.vercel.app/Login",
  },
  {
    name: "Number Crunch",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      // "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanCardLight.webp",
      "/images/projects/kanbanDark.webp",
    ],
    description:
      "The Number Crunch game gives challenges to solve the mathematical operations for cognitive development.",
    sourceCodeHref: "https://github.com/rashi1227/Number-crunch-challenge",
    liveWebsiteHref: "https://number-crunch-chaleenge.vercel.app",
  },
  {
    name: "HooBank",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Hoobank is a user-friendly banking app offering account management, transfers, bill pay, mobile deposit, budgeting tools, robust security, customer support, and personalization options. It empowers users to conveniently and securely manage their finances anytime, anywhere.",
    sourceCodeHref: "https://github.com/rashi1227/HooBank",
    liveWebsiteHref: "https://hoo-bank-eosin.vercel.app",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/rashi1227/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
