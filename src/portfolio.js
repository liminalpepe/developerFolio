/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Wes",
  title: "I code solutions",
  subTitle: emoji("Wes Migliorini is a full-stack developer that loves create"),
  subTitleRoles: emoji(
    "Developer, Tech Lead, DevOps, AI Meta-Heuristics Researcher, and Writer"
  ),
  subText:
    "AI and Meta-Heuristics · Combinatorial Optimization · DevOps and Cloud Architect · Online Garment CAD · Applicant Tracking System · E-signature Integration · Nylas Email Synchronization · Elastic Search · Access Level & User Role for web app · NFT project website · NFT Market Place · Ethereum dApps · Marketing Integrations · Growth Hacking",
  resumeLink:
    "https://drive.google.com/file/d/1i1Obi98uaUmedpIQ9ZGeJd6tMH0LJ71g/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/liminalpepe",
  linkedin: "https://www.linkedin.com/in/wesklei/",
  gmail: "theliminalguy@gmail.com",
  twitter: "https://twitter.com/liminalpepe",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Passionate and dedicated, I am a creative and hardworking professional who always strives for excellence. With expertise in the following services and technologies, I am constantly excited to expand my knowledge and skills",
  skillsLeft: [
    emoji("⚡ Create Defi applications for web3"),
    emoji("⚡ Develop NFT collection websites and marketplace"),
    emoji("⚡ Design and implement JSON-RPC APIs"),

    emoji("⚡ Develop highly interactive UI/UX Web Applications"),
    emoji("⚡ Working with Mysql, DynamoDB, and PostgreSQL"),
    emoji("⚡ Create serverless applications on AWS Lambda"),
    emoji("⚡ Write tests and high-quality code"),
    emoji("⚡ Write specs and plan execution")
  ],
  skillsRight: [
    emoji("⚡ Integrate gateway payment system into SaaS"),
    emoji("⚡ Design and implement Meta heuristics algorithms"),
    emoji("⚡ Database query and index optimization"),
    emoji("⚡ Perform complex database migration without downtime"),
    emoji("⚡ Integrate CRM and Marketing tools"),
    emoji("⚡ Design and implement cloud architectures that scale"),
    emoji(
      "⚡ DevOps working on Deploy automation, lib upgrades and Server maintenance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "discord",
      fontAwesomeClassname: "fab fa-discord"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "stack-overflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "microsoft",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "fedora",
      fontAwesomeClassname: "fab fa-fedora"
    },
    {
      skillName: "centos",
      fontAwesomeClassname: "fab fa-centos"
    },
    {
      skillName: "hubspot",
      fontAwesomeClassname: "fab fa-hubspot"
    },
    {
      skillName: "mailchimp",
      fontAwesomeClassname: "fab fa-mailchimp"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3"
    },

    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "bitcoin",
      fontAwesomeClassname: "fab fa-bitcoin"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineering Consultant",
      subrole: "AI Engineer",
      company: "WeSolutions",
      companylogo: require("./assets/images/wbezerra_logo.png"),
      date: "2023 - Present",
      desc: "With a decade of industry experience, I now run a consulting company, providing contracting services to digital brands. I specialize in coding and developing innovative solutions tailored to meet their unique needs"
    },
    {
      role: "Full Stack Software Engineer AI Engineer",
      subrole: "AI Engineer",
      company: "Molde.me",
      companylogo: require("./assets/images/moldeme_logo.png"),
      date: "2018 – Present",
      companyInfo:
        "Molde.me is a CAD and Nesting system on the cloud for textile companies.",
      desc: "Early co-founder (<1st year) sharing C-Level responsibilities in all departments acting mostly as Tech Lead, Full Stack Software Engineer, Artificial Intelligence Researcher, and DevOps architect"
    },
    {
      role: "Tech Lead",
      subRole: "Full Stack Software Engineer",
      company: "Jobscore",
      companylogo: require("./assets/images/jobscore_logo.png"),
      date: "2016 – 2020",
      companyInfo:
        "JobScore is an applicant tracking system helping recruiters with a fully automated hiring pipeline and efficient candidate review process",
      desc: "Joined as Full Stack Engineer (~1y) and later as Teach Lead (+3y) leading 6 devs in multiple projects."
    },
    {
      role: "Software Engineer",
      subRole: "Support Hat",
      company: "WBezerra",
      companylogo: require("./assets/images/wbezerra_logo.png"),
      date: "2012 –  2015",
      desc: "Software Engineer working mainly with Java Web for a proprietary biometric access control system. Responsible for developing new features and customer support "
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of the State of Santa Catarina",
      logo: require("./assets/images/udesc_logo.jpeg"),
      subHeader: "Bachelor in Computer Science",
      duration: "June 2010 - July 2015",
      desc: "Participated in the research of new metaheuristics and published 5 papers",
      descBullets: [
        "Meta-heurístics research group member with 5 publications",
        "Helped organize and participate at International Collegiate Programming Contest - ICPC",
        "Free Software Advocate"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/udesc_logo.jpeg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/udesc_logo.jpeg"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/udesc_logo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/udesc_logo.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/udesc_logo.jpeg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  services:
    "Full Stack Software Developer Reactjs/Angular - Nodejs/Rails/Python - Ethers.js / Hardhat",
  number: "",
  email_address: "theliminalguy@gmail.com",
  location: "Brazil",
  showGitHubAvatar: false
};

// Twitter Section

const twitterDetails = {
  userName: "liminalpepe", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable
};
