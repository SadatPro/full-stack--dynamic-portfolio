
import { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  home: {
    name: "Sadat Mahmud",
    taglines: ["Software Engineer.", "Robotics & Embedded Systems.", "UI/UX Designer."],
    professionalFocus: [
      {
        id: 1,
        title: "Web Development (React/Next.js & Laravel)",
        description: "Crafting modern, scalable, and high-performance web applications using the latest technologies. Specializing in full-stack solutions with a focus on seamless user experiences."
      },
      {
        id: 2,
        title: "Mobile Development (Flutter/Dart)",
        description: "Building robust, beautiful, and performant cross-platform applications for Android and iOS, focusing on clean architecture and state management (Riverpod)."
      },
      {
        id: 3,
        title: "IoT & Embedded Systems",
        description: "Designing and prototyping smart devices, integrating mobile interfaces with hardware using microcontrollers (ESP32, Arduino) for practical solutions."
      }
    ]
  },
  about: {
    imageUrl: "https://avatars.githubusercontent.com/u/66432898?v=4",
    bio: "I am a 4th-year student at Daffodil International University and the General Secretary of the Embedded System Research Center. I specialize in robotics, embedded systems, 3D modeling, and UI/UX design. I have contributed to industry-focused R&D, international competitions like the NASA Space Apps Challenge, and the University Rover Challenge. With strong technical and leadership experience, I am passionate about mentoring and inspiring the next generation of innovators.",
    skills: [
      { name: "Robotics & Embedded Systems (Arduino, ESP32, STM32)", level: 95 },
      { name: "Flutter & Dart", level: 90 },
      { name: "Python (Django, Django REST API)", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "UI/UX Design (Figma)", level: 88 },
      { name: "3D Modeling (SolidWorks, Fusion 360, Blender)", level: 80 },
      { name: "C & C++", level: 90 },
      { name: "Database (PostgreSQL, MySQL, MongoDB)", level: 80 },
    ],
    experience: [
      {
        id: 1,
        role: "Genarel secretary (GS)",
        company: "Embedded System Research Center, DIU",
        period: "07/2022 – Present",
        responsibilities: [
          "Led research and development in robotics and IoT.",
          "Managed team projects for competitions like NASA HERC and URC.",
          "Designed and prototyped products using 3D modeling and embedded systems."
        ]
      },
      {
        id: 2,
        role: "Cofounder & Vice President",
        company: "Sopno Sarathi",
        period: "09/2017 – 07/2019",
        responsibilities: [
          "Led social initiatives to combat illiteracy and promote Bangla literature among youth.",
          "Worked with nearly 10,000 children and collaborated with indigenous communities.",
          "Organized educational workshops and community outreach programs."
        ]
      }
    ],
    collaborations: [
      {
        id: 1,
        organization: "Gobeshona Learning Academy & Globe Fisheries",
        role: "R&D Collaborator",
        description: "A joint R&D initiative to develop an IoT-based monitoring system for aquaculture, improving efficiency and sustainability."
      },
      {
        id: 2,
        organization: "NASA Space Apps Challenge",
        role: "Team Member (T-minus 1)",
        description: "Participated as a finalist in the prestigious global hackathon, contributing to a project tackling space exploration challenges."
      }
    ],
    education: [
      { id: 1, degree: "Computer Science and Engineering", institution: "Daffodil International University", period: "2022 – Present" },
      { id: 2, degree: "Higher Secondary School Certificate", institution: "Rajshahi Cantonment Board School and College", period: "2019 – 2021" },
      { id: 3, degree: "Secondary School Certificate", institution: "Janakollyan Model High School", period: "– 2019" }
    ],
    languages: [
      { id: 1, name: "Bangla", proficiency: "Native" },
      { id: 2, name: "English", proficiency: "Professional Working" },
      { id: 3, name: "Hindi", proficiency: "Conversational" },
      { id: 4, name: "Urdu", proficiency: "Basic" },
      { id: 5, name: "Japanese", proficiency: "A1 Level" },
    ]
  },
  projects: [
    {
      id: 1,
      title: "University Rover Challenge (CSA)",
      description: "Designed and developed a Mars rover prototype whose design was officially accepted for the University Rover Challenge.",
      longDescription: "This project involved the end-to-end design, fabrication, and testing of a Mars rover prototype for the prestigious University Rover Challenge. My role focused on the mechanical design using SolidWorks and the implementation of autonomous navigation systems with ROS. The rover was built to withstand harsh terrains and perform complex tasks like soil sample collection and equipment servicing, showcasing a blend of mechanical engineering, robotics, and software development.",
      images: [
        "https://placehold.co/800x600/1E293B/94A3B8?text=Rover+Prototype",
        "https://placehold.co/800x600/1E293B/94A3B8?text=CAD+Model",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Navigation+System"
      ],
      techStack: ["Embedded C++", "STM32", "ROS", "SolidWorks", "Python"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "NASA Human Exploration Rover Challenge",
      description: "Contributed to the design and fabrication of a human-powered rover for NASA’s HERC under the Artemis program.",
      longDescription: "As part of the DIU Black Mamba team, I was involved in the design and fabrication of a human-powered rover for NASA’s Human Exploration Rover Challenge. This challenge required creating a lightweight, foldable rover capable of traversing simulated extraterrestrial terrain. My contributions included 3D modeling of key components and system integration, ensuring the rover met NASA's stringent design and safety specifications.",
      images: [
        "https://placehold.co/800x600/1E293B/94A3B8?text=HERC+Rover",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Team+Working",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Fabrication"
      ],
      techStack: ["Mechanical Design", "3D Modeling", "System Integration", "Fabrication"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "IoT for Aquaculture R&D",
      description: "A joint R&D initiative to develop an IoT-based monitoring system for aquaculture, improving efficiency and sustainability.",
      longDescription: "In collaboration with Gobeshona Learning Academy and Globe Fisheries, I worked on an R&D project to create an IoT-based water quality monitoring system. The system utilizes various sensors connected to an ESP32 microcontroller to collect real-time data on parameters like pH, temperature, and dissolved oxygen. This data is then sent to a cloud platform for analysis, enabling farmers to optimize feeding and maintain ideal conditions, thus improving yield and sustainability.",
      images: [
        "https://placehold.co/800x600/1E293B/94A3B8?text=IoT+Device",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Dashboard",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Sensor+Array"
      ],
      techStack: ["ESP32", "Sensors", "IoT Platform", "Data Analytics"],
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Cross-Platform Messaging App",
      description: "A real-time chat application built using Flutter and Firebase, featuring secure authentication and state management with Riverpod.",
      longDescription: "This is a feature-rich, cross-platform messaging application developed using Flutter for the frontend and Firebase for backend services. It includes real-time messaging with Firestore, secure user authentication, and cloud storage for media sharing. I implemented Riverpod for efficient and scalable state management, ensuring a smooth and responsive user experience on both Android and iOS devices.",
       images: [
        "https://placehold.co/800x600/1E293B/94A3B8?text=Chat+UI",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Login+Screen",
        "https://placehold.co/800x600/1E293B/94A3B8?text=Profile+Page"
      ],
      techStack: ["Flutter", "Dart", "Firebase", "Riverpod"],
      liveUrl: "#",
      repoUrl: "#"
    }
  ],
  achievements: [
    { 
      id: 1, 
      icon: 'Trophy', 
      title: "Joy Bangla Youth Award 2018", 
      date: "October 2018", 
      description: "Recognized as a co-founder of Sapnasarothi Public Library, a social initiative to combat illiteracy, by the Young Bangla platform." 
    },
    { 
      id: 2, 
      icon: 'Certificate', 
      title: "NASA Space Apps Challenge Finalist", 
      date: "October 2024", 
      description: "Participated as a member of Team T-minus 1, reaching the final rounds of the prestigious global hackathon." 
    },
    { 
      id: 3, 
      icon: 'Award', 
      title: "4th Position, IoT Project Competition", 
      date: "June 2023", 
      description: "Secured the 4th position in the 'Big Data IoT Machine Learning 2023' event for an innovative IoT project." 
    }
  ],
  galleryImages: [
    { id: 1, url: "https://placehold.co/600x400/1E293B/94A3B8?text=Robotics+Lab", alt: "A view of the robotics lab with a rover prototype." },
    { id: 2, url: "https://placehold.co/600x400/1E293B/94A3B8?text=3D+Model", alt: "A render of a 3D model of a rover component in Blender." },
    { id: 3, url: "https://placehold.co/600x400/1E293B/94A3B8?text=UI/UX+Design", alt: "A screenshot of a mobile app UI design in Figma." },
    { id: 4, url: "https://placehold.co/600x400/1E293B/94A3B8?text=Team+Photo", alt: "A group photo of the project team at a competition." },
    { id: 5, url: "https://placehold.co/600x400/1E293B/94A3B8?text=Embedded+System", alt: "A close-up of a complex circuit board with an ESP32 microcontroller." },
    { id: 6, url: "https://placehold.co/600x400/1E293B/94A3B8?text=Presentation", alt: "Presenting a project to judges at a tech event." },
  ],
  skillsAndTools: [
    { id: 1, name: 'Python', iconUrl: 'https://skillicons.dev/icons?i=python', category: 'Languages' },
    { id: 2, name: 'Java', iconUrl: 'https://skillicons.dev/icons?i=java', category: 'Languages' },
    { id: 3, name: 'C++', iconUrl: 'https://skillicons.dev/icons?i=cpp', category: 'Languages' },
    { id: 4, name: 'C', iconUrl: 'https://skillicons.dev/icons?i=c', category: 'Languages' },
    { id: 5, name: 'Dart', iconUrl: 'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg', category: 'Languages' },
    { id: 6, name: 'JavaScript', iconUrl: 'https://skillicons.dev/icons?i=js', category: 'Languages' },
    { id: 36, name: 'TypeScript', iconUrl: 'https://skillicons.dev/icons?i=ts', category: 'Languages' },
    { id: 7, name: 'Arduino', iconUrl: 'https://skillicons.dev/icons?i=arduino', category: 'Languages' },
    { id: 8, name: 'Flutter', iconUrl: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg', category: 'Frameworks & Libraries' },
    { id: 9, name: 'PHP', iconUrl: 'https://skillicons.dev/icons?i=php', category: 'Frameworks & Libraries' },
    { id: 10, name: 'Django', iconUrl: 'https://skillicons.dev/icons?i=django', category: 'Frameworks & Libraries' },
    { id: 37, name: 'Laravel', iconUrl: 'https://skillicons.dev/icons?i=laravel', category: 'Frameworks & Libraries' },
    { id: 34, name: 'React', iconUrl: 'https://skillicons.dev/icons?i=react', category: 'Frameworks & Libraries' },
    { id: 35, name: 'NextJS', iconUrl: 'https://skillicons.dev/icons?i=nextjs', category: 'Frameworks & Libraries' },
    { id: 11, name: 'HTML', iconUrl: 'https://skillicons.dev/icons?i=html', category: 'Frameworks & Libraries' },
    { id: 12, name: 'Tailwind CSS', iconUrl: 'https://skillicons.dev/icons?i=tailwind', category: 'Frameworks & Libraries' },
    { id: 13, name: 'Bootstrap', iconUrl: 'https://skillicons.dev/icons?i=bootstrap', category: 'Frameworks & Libraries' },
    { id: 14, name: 'CSS', iconUrl: 'https://skillicons.dev/icons?i=css', category: 'Frameworks & Libraries' },
    { id: 15, name: 'PostgreSQL', iconUrl: 'https://skillicons.dev/icons?i=postgresql', category: 'Databases' },
    { id: 16, name: 'MySQL', iconUrl: 'https://skillicons.dev/icons?i=mysql', category: 'Databases' },
    { id: 17, name: 'MongoDB', iconUrl: 'https://skillicons.dev/icons?i=mongodb', category: 'Databases' },
    { id: 18, name: 'SQLite', iconUrl: 'https://skillicons.dev/icons?i=sqlite', category: 'Databases' },
    { id: 19, name: 'Scikit-learn', iconUrl: 'https://skillicons.dev/icons?i=scikitlearn', category: 'Frameworks & Libraries' },
    { id: 20, name: 'TensorFlow', iconUrl: 'https://skillicons.dev/icons?i=tensorflow', category: 'Frameworks & Libraries' },
    { id: 21, name: 'Blender', iconUrl: 'https://skillicons.dev/icons?i=blender', category: 'Design & Tools' },
    { id: 22, name: 'Illustrator', iconUrl: 'https://skillicons.dev/icons?i=ai', category: 'Design & Tools' },
    { id: 23, name: 'Figma', iconUrl: 'https://skillicons.dev/icons?i=figma', category: 'Design & Tools' },
    { id: 24, name: 'Adobe XD', iconUrl: 'https://skillicons.dev/icons?i=xd', category: 'Design & Tools' },
    { id: 25, name: 'Git', iconUrl: 'https://skillicons.dev/icons?i=git', category: 'Design & Tools' },
    { id: 26, name: 'GitHub', iconUrl: 'https://skillicons.dev/icons?i=github', category: 'Design & Tools' },
    { id: 27, name: 'Kali Linux', iconUrl: 'https://skillicons.dev/icons?i=kali', category: 'Design & Tools' },
    { id: 28, name: 'Ubuntu', iconUrl: 'https://skillicons.dev/icons?i=ubuntu', category: 'Design & Tools' },
    { id: 29, name: 'Postman', iconUrl: 'https://skillicons.dev/icons?i=postman', category: 'Design & Tools' },
    { id: 30, name: 'IntelliJ IDEA', iconUrl: 'https://skillicons.dev/icons?i=idea', category: 'Design & Tools' },
    { id: 31, name: 'VSCode', iconUrl: 'https://skillicons.dev/icons?i=vscode', category: 'Design & Tools' },
    { id: 32, name: 'PyCharm', iconUrl: 'https://skillicons.dev/icons?i=pycharm', category: 'Design & Tools' },
    { id: 33, name: 'Android Studio', iconUrl: 'https://skillicons.dev/icons?i=androidstudio', category: 'Design & Tools' },
  ],
  contact: {
    email: "sadatmahmud.bd@gmail.com",
    socials: [
      { platform: "Blog", url: "https://sadatmahmud.blogspot.com" },
      { platform: "GitHub", url: "https://github.com/sadatpro" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/sadatmahmud1/" },
      { platform: "Instagram", url: "https://www.instagram.com/sadat.mahmud_/" },
      { platform: "Telegram", url: "https://t.me/SadatMahmud" },
    ]
  }
};
