import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
const profilePicture = require("./assets/images/yourPhoto.jpg");


const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Chiranjeevi K",
  title: "Hi all, I'm Chiranjeevi",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having experience building web applications with JavaScript and Java."
  ),
  profilePicture: require("./assets/images/yourPhoto.jpg"), // <-- add this
  resumeLink: "https://drive.google.com/file/d/1wIw4nVztphXrynpnFiy7vZ8auD9i9j3S/view?usp=sharing",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/Chiranjeevi555",
  linkedin: "https://www.linkedin.com/in/chiranjeevi-k-206b33328/",
  gmail: "chiranju05@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
  emoji("⚡ Skilled in building web pages using HTML, CSS, and JavaScript"),
  emoji("⚡ Experience creating simple games and projects using Java and Arduino"),
  emoji("⚡ Interested in learning more about full-stack web development and embedded systems")
],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
     schoolName: "Don Bosco Higher Secondary School",
     logo: require("./assets/images/donBoscoLogo.jpg"),
     subHeader: "Higher Secondary Schooling (HSC)",
     duration: "2008 - 2022"
    },
    {
      schoolName: "Velammal Engineering College",
      logo: require("./assets/images/velammalLogo.png"),
      subHeader: "Bachelor of Engineering in Electronics and Communication",
      duration: "2022 - 2026"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "70%" },
    { Stack: "Programming", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/memoryGame.jpg"),
      projectName: "Memory Game in Java",
      projectDesc: "A simple but fun matching memory game built using Java Swing.",
      footerLink: []
    },
    {
      image: require("./assets/images/pingPongGame.webp"),
      projectName: "Ping Pong Game (Arduino Uno)",
      projectDesc: "A physical ping pong simulation game using sensors and Arduino.",
      footerLink: []
    },
    {
      image: require("./assets/images/smartIrrigationSystem.webp"),
      projectName: "Smart Irrigation System",
      projectDesc: "An automated system that uses sensors to irrigate based on soil moisture.",
      footerLink: []
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "I like writing sometimes...",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Learning and sharing!"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I love to talk about myself and tech.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "chiranju05@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
