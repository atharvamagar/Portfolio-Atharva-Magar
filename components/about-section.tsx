"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { GlareCard } from "@/components/ui/glare-card"
import { Code, Palette, Briefcase, Video, ImageIcon } from "lucide-react"
import Image from "next/image"

const experiences = [
  {
    title: "Frontend Developer",
    description:
      "Building responsive and interactive web applications using modern frameworks like React, Next.js, and Vue.js with focus on performance and user experience.",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-gray-900 to-black",
  },
  {
    title: "UI/UX Designer",
    description:
      "Creating intuitive and visually appealing user interfaces with strong emphasis on user research, wireframing, and prototyping.",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    gradient: "from-gray-800 to-gray-900",
  },
  {
    title: "Freelancer",
    description:
      "Working with diverse clients to deliver custom web solutions, from small business websites to complex web applications.",
    icon: Briefcase,
    skills: ["Project Management", "Client Relations", "Full-Stack Development"],
    gradient: "from-slate-800 to-slate-900",
  },
  {
    title: "Content Creator",
    description:
      "Producing educational content about web development, design trends, and technology through blogs, videos, and social media.",
    icon: Video,
    skills: ["Technical Writing", "Video Production", "Social Media"],
    gradient: "from-zinc-800 to-zinc-900",
  },
  {
    title: "Art Works",
    description:
      "Creating digital illustrations, concept art, and visual designs using various digital art tools and traditional techniques.",
    icon: ImageIcon,
    skills: ["Digital Art", "Illustration", "Concept Design", "Visual Arts"],
    gradient: "from-neutral-800 to-neutral-900",
  },
]

const skills = [
  {
    name: "HTML",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    ),
  },
  {
    name: "React",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012A11.875 11.875 0 0 0 .102 10.255c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.859 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.218-.157-.019-.014-.899-1.194-1.954-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595-.061.115-.108.162-.206.213-.075.037-.14.044-.543.044H9.369l-.08-.052a.997.997 0 0 1-.121-.12c-.014-.021-.009-1.316.019-4.286l.037-4.249.056-.069c.024-.03.08-.09.115-.12.051-.041.121-.063.27-.063.218 0 .366.082.485.263.026.041 1.091 1.681 2.365 3.644l2.317 3.568 1.843-2.758 2.426-3.692c.051-.078.115-.12.218-.12.115 0 .165.037.218.12l2.426 3.692 1.843 2.758 2.317-3.568c1.274-1.963 2.339-3.603 2.365-3.644.119-.181.267-.263.485-.263.149 0 .219.022.27.063.035.091.09.09.115.12l.056.069.037 4.249c.028 2.97.033 4.265.019 4.286a.997.997 0 0 1-.121.12l-.08.052h-.457c-.403 0-.468-.007-.543-.044-.098-.051-.145-.098-.206-.213-.042-.08-.045-.215-.052-3.595-.005-1.931-.014-3.512-.023-3.51-.009.002-1.089 1.588-2.422 3.556l-2.404 3.558-1.919 2.592c-1.055 1.426-1.935 2.606-1.954 2.62-.029.023.011.051.218.157 1.346.687 2.712 1.086 4.323 1.264.364.04 1.936.04 2.299 0 .934-.103 1.755-.274 2.534-.525 4.35-1.403 7.557-5.189 8.209-9.695.096-.659.108-.854.108-1.748s-.012-1.088-.108-1.747C23.643 4.184 20.419.346 16.331.04a19.76 19.76 0 0 0-.364-.033C15.623.001 15.489 0 15.313 0H11.572z"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.392 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019z"/>
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.568 18.172c0 .2-.1.3-.3.3H7.468c-.2 0-.3-.1-.3-.3V5.828c0-.2.1-.3.3-.3h1.8c.2 0 .3.1.3.3v12.344zm7.432-6.882c0 2.475-1.725 3.882-4.125 3.882-1.5 0-2.775-.6-3.45-1.65-.075-.15-.075-.225 0-.3l1.2-.9c.15-.075.225-.075.3.075.45.6 1.05.975 1.875.975 1.2 0 2.025-.675 2.025-1.8V12.22c-.6.675-1.35 1.05-2.25 1.05-1.95 0-3.525-1.575-3.525-3.525s1.575-3.525 3.525-3.525c.9 0 1.65.375 2.25 1.05V6.52c0-.2.1-.3.3-.3h1.575c.2 0 .3.1.3.3v4.77z"/>
      </svg>
    ),
  },
  {
    name: "Photoshop",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.85 8.42c0-.78-.02-1.45-.06-1.93h-.02c-.07.52-.17 1.1-.31 1.72l-.83 3.65h-2.08l-.83-3.65c-.14-.62-.24-1.2-.31-1.72h-.02c-.04.48-.06 1.15-.06 1.93v4.44H4.1V5.34h2.17l.98 4.39c.1.45.18.9.24 1.35h.02c.06-.45.14-.9.24-1.35l.98-4.39h2.17v7.52H9.85V8.42zm4.87-3.08c.74 0 1.32.18 1.74.54.42.36.63.86.63 1.5 0 .64-.21 1.14-.63 1.5-.42.36-1 .54-1.74.54h-.63v2.44h-1.05V5.34h1.68zm-.63 3.15h.63c.42 0 .74-.1.96-.3.22-.2.33-.48.33-.84 0-.36-.11-.64-.33-.84-.22-.2-.54-.3-.96-.3h-.63v2.28z"/>
      </svg>
    ),
  },
  {
    name: "Illustrator",
    icon: () => (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.53 10.73l1.63-4.81 1.63 4.81h-3.26zm-4.26 8.43c-.44 0-.66-.2-.66-.6 0-.13.02-.28.07-.45l.84-2.28h4.7l.84 2.28c.05.17.08.32.08.45 0 .4-.22.6-.66.6H6.27zm11.48-4.17c-.74 0-1.32-.58-1.32-1.32s.58-1.32 1.32-1.32 1.32.58 1.32 1.32-.58 1.32-1.32 1.32zm0-3.7c-.74 0-1.32-.58-1.32-1.32s.58-1.32 1.32-1.32 1.32.58 1.32 1.32-.58 1.32-1.32 1.32z"/>
      </svg>
    ),
  },
]

const skillImages = [
  { src: "/images/skills/html.png", alt: "HTML" },
  { src: "/images/skills/css.png", alt: "CSS" },
  { src: "/images/skills/javascript.png", alt: "Tailwind CSS" },
  { src: "/images/skills/typescript.png", alt: "JavaScript" },
  { src: "/images/skills/react.png", alt: "React" },
  { src: "/images/skills/next.js.png", alt: "MongoDB" },
  { src: "/images/skills/python.png", alt: "Figma" },
  { src: "/images/skills/figma.png", alt: "Webflow" },
  { src: "/images/skills/photoshop.png", alt: "Git" },
  { src: "/images/skills/illustrator.png", alt: "Java" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-8">
            <div className="flex-shrink-0 mb-6 md:mb-0">
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                width={240}
                height={320}
                className="rounded-2xl shadow-lg object-cover w-48 h-64 md:w-60 md:h-80 border-4 border-white dark:border-gray-800"
                priority
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Hello! I'm a passionate <span className="font-semibold text-primary">full-stack developer</span> and <span className="font-semibold text-primary">designer</span> with over 3 years of experience crafting digital experiences that make a difference. My expertise lies in building modern, high-performance web applications using technologies like React, Next.js, and Node.js, while always keeping user experience and design at the forefront.<br/><br/>
                I thrive on solving complex problems, collaborating with diverse teams, and turning ideas into reality. Beyond coding, I love creating digital art, exploring new design trends, and sharing knowledge through content creation. Let's build something amazing together!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills & Technologies</h3>

          {/* Skill images row */}
          <div className="flex flex-wrap justify-center gap-7 mb-10">
            {skillImages.map((img) => (
              <Image
                key={img.alt}
                src={img.src}
                alt={img.alt}
                width={90}
                height={90}
                className="h-30 w-30 object-contain"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <skill.icon />
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 xl:gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full max-w-xs mx-auto"
              >
                <GlareCard className="flex flex-col justify-between p-4 h-full relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-30`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex flex-col items-center mb-3 text-center">
                      <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm mb-2">
                        <experience.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight">{experience.title}</h4>
                    </div>

                    <p className="text-gray-200 text-xs mb-4 leading-relaxed flex-grow text-center line-clamp-4">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-1 justify-center">
                      {experience.skills.slice(0, 2).map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-white/20 text-white border-white/30 backdrop-blur-sm px-2 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
