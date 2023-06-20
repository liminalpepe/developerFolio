/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1200 // Set animation duration as per your animation
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

const workWithMe = {
  username: "Wes",
  title: "Work with me",
  subTitle: emoji(
    "As a senior software engineer, I bring technical expertise and valuable soft skills."
  ),
  subTitleSoftSkills: emoji(
    "If you're seeking a software engineer who embodies these traits, let's discuss how we can drive success together. "
  ),
  softSkilss: [
    emoji("⚡ Self managed and disciplined"),
    emoji("⚡ Dedicated about my work and committed to my goals"),
    emoji("⚡ Accountable, reliable and trustworthy - I keep my word"),
    emoji("⚡ Patience to wait, nurture and keep going"),
    emoji("⚡ Resilient and persistent to achieve my goals "),
    emoji("⚡ Humble and open to learning from others"),
    emoji("⚡ Proactive and organized")
  ],
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
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "apple",
      fontAwesomeClassname: "fab fa-apple"
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
      company: "WeSolutions",
      companylogo: require("./assets/images/wes_codes.png"),
      date: "2023 - Present",
      desc: "With a decade of industry experience, I now run a consulting company, providing contracting services to digital brands. I specialize in coding and developing innovative solutions tailored to meet their unique needs"
    },
    {
      role: "AI Engineer",
      subrole: "Full Stack Software Engineer",
      company: "Molde.me",
      companylogo: require("./assets/images/moldeme_logo.png"),
      date: "2018 – Present",
      companyInfo:
        "Molde.me is a CAD and Nesting system on the cloud for textile companies.",
      desc: "Early co-founder (<1st year) sharing C-Level responsibilities in all departments acting mostly as Tech Lead, Full Stack Software Engineer, Artificial Intelligence Researcher, and DevOps architect"
    },
    {
      role: "Tech Lead",
      subrole: "Full Stack Software Engineer",
      company: "Jobscore",
      companylogo: require("./assets/images/jobscore_logo.png"),
      date: "2016 – 2020",
      companyInfo:
        "JobScore is an applicant tracking system helping recruiters with a fully automated hiring pipeline and efficient candidate review process",
      desc: "Joined as Full Stack Engineer (~1y) and later as Teach Lead (+3y) leading 6 devs in multiple projects."
    },
    {
      role: "Software Engineer",
      subrole: "Support Hat",
      company: "WBezerra",
      companylogo: require("./assets/images/wbezerra_logo.png"),
      date: "2012 –  2015",
      companyInfo:
        "The company offers web solutions specialized in industrial automation",
      desc: "Major projects involved Php and Java Web for a proprietary biometric access control system for hospitals and private commercial buildings. I was responsible for developing new features and customer support for this project and other on demand"
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

const projects = {
  title: "Projects",
  lightboxCards: [
    {
      title: "Cloud Nesting Optimization to reduce fabric waste",
      softwareSkills: [
        {
          skillName: "css3",
          fontAwesomeClassname: "fab fa-css3"
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
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
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription: "Metaheuristic optimisation for textile industries",
      description: [
        "Cloud Nesting Optimization project at Molde.me tackled a crucial issue within the textile industry by reducing fabric waste and optimizing production processes. As the project leader, I played a key role in developing the core algorithm and harnessing a comprehensive technology stack.",
        "To address this challenge, I closely collaborated with a team of computer graphics and geometric operations specialists. Together, we conducted thorough research and analysis to devise an efficient algorithm capable of analyzing fabric patterns, identifying optimal cutting strategies, and minimizing waste during the nesting process.",
        "Using Angular for the frontend, Rails for the backend, and AWS Lambda for serverless computing, we constructed a robust and user-friendly interface. This interface allowed textile industry professionals to input their specific requirements, thereby enabling our algorithm to generate customized cutting plans.",
        "The Cloud Nesting Optimization project at Molde.me marked a major advancement for both the company and the textile industry. Through innovative technology and algorithms, we streamlined production, optimized resource usage, and achieved positive financial and environmental outcomes."
      ],
      links: [
        {
          text: "Molde.me Homepage",
          url: "https://www.molde.me/"
        }
      ],
      images: [
        {
          alt: "Nesting",
          src: require("./assets/images/projects/auto_nesting.gif"),
          subtitle: "Molde.me help page about nesting",
          source_url: "https://www.molde.me/ajuda/encaixe-automatico"
        }
      ]
    },
    {
      title: "Offer Automation for candidate hiring",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "html5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "microsoft",
          fontAwesomeClassname: "fab fa-microsoft"
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "fab fa-yarn"
        }
      ],
      shortDescription: "Automating personalized offers for seamless hiring",
      description: [
        "As the tech lead and team lead, I led the offer project, building on the experience and collaboration of the same team that worked on the signature projects. ",

        "The problem we aimed to solve was the manual and time-consuming process of creating personalized offers for candidates. We addressed this by allowing users to upload custom docx files containing identified placeholders, which were dynamically populated with candidate information. This not only streamlined the process but also ensured accuracy and consistency in the offers.",

        "To achieve this, we leverage Ruby on Rails and many Gems to handle documents and custom fields. Leveraging their capabilities to handle offer fields of various types such as number, text, boolean, signature, date, and linked fields mapped to system attributes. We also implemented confidentiality features, audit logs for field changes and document edits, and offer validation rules customized for each candidate stage in the hiring pipeline.",

        "As the tech lead, my responsibilities included writing detailed specifications, architecting the solution, and collaborating closely with the product owner and CEO. I worked alongside the same team of developers and designers who were involved in the signature projects, ensuring seamless collaboration and iterative development.",

        "To learn more about the offer template and candidate offers in Jobscore, please refer to the following resource links:"
      ],
      links: [
        {
          text: "How do offers work in JobScore?",
          url: "https://support.jobscore.com/hc/en-us/articles/360012530552-How-do-offers-work-in-JobScore-"
        },
        {
          text: "How do I create offer templates?",
          url: "https://support.jobscore.com/hc/en-us/articles/360012529972-How-do-I-create-offer-templates-"
        },
        {
          text: "How do I use the DocuSign e-signature integration?",
          url: "https://support.jobscore.com/hc/en-us/articles/360013038451"
        },
        {
          text: "How do I use the Adobe Sign e-signature integration?",
          url: "https://support.jobscore.com/hc/en-us/articles/360012764511"
        }
      ],
      images: [
        {
          alt: "Jobscore screenshot showing the candidate page and offer creating menu",
          src: require("./assets/images/projects/offer_menu.jpeg"),
          subtitle:
            "Jobscore screenshot showing the candidate page and offer creating menu",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360012530552-How-do-offers-work-in-JobScore-"
        },
        {
          alt: "Jobscore screenshot showing the offer creating dialog",
          src: require("./assets/images/projects/make_offer.jpeg"),
          subtitle: "Jobscore screenshot showing the offer creating dialog",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360012530552-How-do-offers-work-in-JobScore-"
        },
        {
          alt: "Jobscore screenshot showing a view of the offer details lightbox",
          src: require("./assets/images/projects/view_offers.jpeg"),
          subtitle:
            "Jobscore screenshot showing a view of the offer details lightbox",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360012530552-How-do-offers-work-in-JobScore-"
        },
        {
          alt: "Jobscore screenshot showing the offer signature field",
          src: require("./assets/images/projects/offer_signature.jpeg"),
          subtitle: "Jobscore screenshot showing the offer signature field",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360013038451"
        }
      ]
    },
    {
      title: "Front-end code defense and obfuscation",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription: "Obfucation and source mapping on Angular project ",
      description: [
        "The Source Code Obfuscation project involved the implementation of front-end code defense and obfuscation techniques to safeguard the proprietary Angular application source code. The primary objective of the company was to shield its proprietary features from easy reverse engineering by competitors, ensuring the protection of their intellectual property.",
        "To achieve this, robust measures were taken to obfuscate and conceal the underlying source code of the Angular application. By employing advanced obfuscation techniques, the code was transformed into a highly convoluted and unreadable form, making it significantly challenging for unauthorized parties to decipher and understand the logic behind the proprietary features.",
        "During the deployment process, an additional step was taken to preserve the accuracy of error messages and error stack traces. The application sent a source map to Honeybadger, a comprehensive error monitoring and support platform. This ensured that despite the obfuscation, the correct error messages and stack traces were retained, facilitating efficient support and troubleshooting when issues arose."
      ],
      links: [
        {
          text: "Wikipedia: Obfuscation",
          url: "https://en.wikipedia.org/wiki/Obfuscation_(software)"
        },
        {
          text: "Honeybadger",
          url: "https://www.honeybadger.io/"
        }
      ]
    },
    {
      title: "Lambda code optimization with WebAssembly",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription: "Improving code performance and run time",
      description: [
        "The project involved collaborating with two computer graphics engineers to optimize geometric operations by porting them from JavaScript to C++ and compiling them into native executables and WebAssembly.",
        "As the project lead, my responsibilities encompassed researching and implementing WebAssembly integration, coordinating the porting process with the computer graphics engineers, and overseeing the setup of the cloud environment.",
        "Together, we significantly improved the execution time of the algorithms and computer operations, resulting in reduced AWS Lambda costs."
      ],
      links: [
        {
          text: "AWS Lambda and Custom Binaries",
          url: "https://medium.com/@mayanknayyar95/aws-lambda-and-custom-binaries-ead12ca5c62e"
        },
        {
          text: "WebAssembly serverless functions in AWS Lambda",
          url: "https://www.cncf.io/blog/2021/08/25/webassembly-serverless-functions-in-aws-lambda/"
        }
      ],
      images: []
    },
    {
      title: "Enhancing AWS Lambda performance by reducing boot time",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription: "Improving AWS Lambda boot time",
      description: [
        "AWS Lambdas often face the challenge of prolonged boot time due to the initialization process of their host virtual server, which is managed by AWS and cannot be directly improved. Research led us to implement a range of effective techniques to mitigate cold start issues.",
        "To tackle this challenge, we utilized custom lambda layers, web pack optimization, and intelligent scaling strategies. By implementing custom lambda layers, we successfully reduced initialization time, while leveraging web pack optimization to ensure that Lambdas remained small and quickly loaded. Additionally, we employed intelligent scaling techniques that dynamically adjusted concurrency and allocated resources based on workload patterns.",
        "By prioritizing Lambda cold start optimization, we were able to significantly improve the performance of serverless applications while optimizing resource utilization."
      ],
      links: [
        {
          text: "Operating Lambda: Performance optimization",
          url: "https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/"
        }
      ],
      images: [
        {
          alt: "BEFORE: Mean and Worst of 15 parallel execution in ms for 35 runs",
          src: require("./assets/images/projects/old_cold_start_time.png"),
          subtitle:
            "BEFORE: Mean and Worst of 15 parallel execution in ms for 35 runs"
        },
        {
          alt: "AFTER: Mean and Worst of 15 parallel execution in ms for 35 runs",
          src: require("./assets/images/projects/improved_cold_start.png"),
          subtitle:
            "AFTER: Mean and Worst of 15 parallel execution in ms for 21 runs"
        }
      ]
    },
    {
      title: "Biometric access control for comercial buildings",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "fab fa-linux"
        },
        {
          skillName: "php",
          fontAwesomeClassname: "fab fa-php"
        },
        {
          skillName: "windows",
          fontAwesomeClassname: "fab fa-windows"
        }
      ],
      shortDescription:
        "Integrate biometrics into a cloud server for hospitals and private buildings",
      description: [
        "The project aimed to provide secure and efficient access control systems using biometric technology. In this project, I worked closely with the CTO, assisting in coding new features, integrating new biometric devices, and also troubleshooting and providing direct support whenever issues arose with the biometric controls.",
        "The interface was in Java Web using a custom component system based on RichFaces, Hibernate, PostgreSQL, and Maven for the core product. Other projects included PHP, WordPress, and C#.",
        "Major projects include using Wine on Linux to expose a proprietary DLL. I worked coding a C# integration to expose the proprietary DLL used by biometric devices on a Linux server. This architecture allowed the running of a proprietary integration to multiple biometric devices for face and fingerprint recognization used in hospital, commercial, and residential building",
        "One of my key responsibilities also involved handling support and server-related maintenance. I worked remotely setting up new server, doing maintenance, and analyzing the system logs for errors. The system logs contained output from all biometric sensor states and the logs were quite verbose, I utilized SCP to download the logs and carefully parsed them to identify any communication or sensor-related issues. This hands-on support role allowed me to gain deep insights into the intricacies of the biometric control system.",
        "In addition to my support duties, I also worked as a software engineer, developing custom projects sold by the company"
      ],
      links: [
        {
          text: "",
          url: "#"
        }
      ],
      images: []
    },
    {
      title: "Server Log rotation and Kibana dashboard",
      softwareSkills: [
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "fab fa-linux"
        }
      ],
      shortDescription:
        "Server logging with AWS Elastic Search, Log Rotation and Kibana",
      description: [
        "The company Rails API was generating too many logs for the growing access. The server disk space became full often and the project proposed a server log rotation to solve the problem. I implemented a solution that utilized Elasticsearch, Logstash, and Kibana to index, rotate and visualize the server logs remotely.",
        "By leveraging Elasticsearch, the logs were indexed and stored in a centralized location, allowing for easy querying and analysis.",
        "Using Elastic Beats, I established a seamless data pipeline to Logstash, transporting the logs from the server to Elasticsearch for indexing.",
        "This enabled data visualization and analysis of the logs in Kibana, empowering the team to generate insightful reports and dashboards.",
        "With the implemented system, the company gained the ability to effectively monitor and investigate API logs, enabling them to identify and resolve issues promptly.",
        "The Kibana platform provided a user-friendly interface for running queries, visualizing data, and creating customized dashboards."
      ],
      links: [
        {
          text: "What is ELK?",
          url: "https://aws.amazon.com/what-is/elk-stack/"
        }
      ],
      images: []
    },
    {
      title: "Sharing code between angular and rails through nodejs interface",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription:
        "Components reduce redundancy and facilitate code changes",
      description: [
        "The project focused on achieving code sharing between Angular apps, Rails, and Node.js, resulting in a modular stack that promoted code reusability across the front end and back end.",
        "To facilitate code sharing between front-end applications, a new Angular Library was developed. This library contained reusable components built with Storybook, allowing for easy integration and reuse across five different Angular apps.",
        "This approach significantly streamlined development efforts and ensure consistent user experiences across the applications.",
        "To enable the sharing of TypeScript code from the front end with the Ruby backend, a Node.js interface was implemented. This interface acted as a bridge between the two technologies, allowing the Rails backend to invoke Node.js code and retrieve the necessary output when any shared operation from the Angular codebase was required. This approach facilitated seamless communication and collaboration between the front-end and back-end teams.",
        "By implementing this code-sharing strategy, the project achieved increased development efficiency, reduced duplication of code, and enhanced maintainability. Updates made to shared components in the Angular Library could be easily propagated to all the dependent applications, ensuring consistency and reducing the overall development effort."
      ],
      links: [
        {
          text: "Angular libraries & Storybook",
          url: "https://rubenr.dev/angular-libraries-storybook/"
        }
      ],
      images: []
    },
    {
      title: "Error tracking system and uptime alert monitoring",
      softwareSkills: [
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "fab fa-linux"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription: "Monitoring production uptime and errors",
      description: [
        "The error tracking system project involved the implementation of Honeybadger across multiple components, including 5 Angular projects, AWS Lambda functions, a Node.js application, a Rails API, and backend processing workers.",
        "The primary objective of the system was to effectively track and report errors occurring within the various components of the application stack. Honeybadger was integrated to capture detailed error information such as the stack trace and error message across all systems.",
        "Additionally, source mapping was utilized to ensure accurate error identification and debugging.",
        "To monitor the uptime of the applications, recurring checks were performed every minute.",
        "If three consecutive checks failed, indicating a potential downtime or instability, alerts were triggered to promptly notify the development team. This proactive approach helped in minimizing service disruptions and ensuring the overall reliability of the system.",
        "The implementation of Honeybadger and the continuous monitoring of the applications' health significantly improved error tracking and facilitated the timely resolution of issues.",
        "The detailed error reports and alerts allowed the development team to quickly identify, investigate, and address any potential problems, ultimately enhancing the stability and performance of the entire system."
      ],
      links: [
        {
          text: "",
          url: "#"
        }
      ],
      images: [
        {
          alt: "Status Page",
          src: require("./assets/images/projects/status_page.png"),
          subtitle: "Molde.me status page",
          source_url: "https://status.molde.me"
        }
      ]
    },
    {
      title: "AWS Server cost reduction",
      softwareSkills: [
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "fab fa-linux"
        }
      ],
      shortDescription:
        "Server cost reduction by 50% by cloud architecture optimization",
      description: [
        "The AWS Server cost reduction project focused on optimizing the cloud architecture to achieve significant cost savings. By implementing various strategies and leveraging the capabilities of the AWS platform, we were able to reduce server costs by virtually 50%.",

        "One of the key approaches involved using metrics to properly determine resource allocation for memoria, disk, and CPU over all servers. Another key point was moving low-latency servers to cheaper regions. By strategically selecting regions with lower pricing structures, we were able to maintain optimal performance while significantly reducing infrastructure costs. This geographical optimization played a crucial role in achieving substantial savings.",

        "Additionally, we made architectural changes by adopting a serverless approach. This involved restructuring the stack and system architecture to leverage serverless computing resources provided by AWS. By eliminating the need for continuously running and managing dedicated servers, we achieved a significant reduction in costs. Moreover, this transition to a serverless architecture also brought scalability benefits and improved overall performance.",

        "The combined efforts of smart resource allocation, geographical optimization, and embracing serverless computing resulted in a cost reduction of 50%. The project not only helped to optimize expenses but also ensured that scalability and performance were not compromised. By fine-tuning the cloud architecture, we struck a balance between cost efficiency and the ability to scale as per demand."
      ],
      links: [
        {
          text: "",
          url: "#"
        }
      ],
      images: ["#.webp"]
    },
    {
      title: "Zoom, Google Meet and Microsoft Teams Integration",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "google",
          fontAwesomeClassname: "fab fa-google"
        },
        {
          skillName: "microsoft",
          fontAwesomeClassname: "fab fa-microsoft"
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "fab fa-yarn"
        }
      ],
      shortDescription:
        "Integrate the major video conference platforms for recruiters ",
      description: [
        "The project involved integrating Zoom, Google Meet, and Microsoft Teams into a unified recruiter pipeline, providing seamless collaboration and enhanced productivity for recruiting.",
        "During the interview, several meetings need to be scheduled. Passwords and access options must be shared between several candidates among multiple job positions. To systemize and facilitate the project aimed to provide a seamless experience during recruiting workflow integrating with video conference providers and automatically fetching link access to meetings and adding any extra access information needed.",
        "Users could conveniently schedule, join, and manage video meetings, regardless of the platform being used by participants.",
        "To achieve this integration, we utilized the official APIs and SDKs provided by Zoom, Google Meet, and Microsoft Teams.",
        "As part of my responsibilities, I worked as a Tech Lead and closely with the development team to design and implement the integration architecture. This involved handling authentication and authorization mechanisms, studying each API, and proposing a unified architecture. I was also in direct alignment with the product and design team iteratively reviewing each sprint commitment to achieve the project deadlines.",
        "Collaboration played a crucial role in this project. I collaborated with experts from Zoom, Google, Microsoft. By establishing effective communication channels, we were able to address any technical challenges and ensure a robust and reliable integration."
      ],
      links: [
        {
          text: "Jobscore oficial help article about the project",
          url: "https://support.jobscore.com/hc/en-us/articles/360045825652-How-to-schedule-interviews-with-video-conferencing"
        }
      ],
      images: [
        {
          alt: "Jobscore screenshot showing conference links on meetings",
          src: require("./assets/images/projects/zoom_integration.gif"),
          subtitle: "Jobscore screenshot showing conference links on meetings",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360045825652-How-to-schedule-interviews-with-video-conferencing"
        }
      ]
    },
    {
      title: "Lambda Multi-cache system",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "fab fa-docker"
        },
        {
          skillName: "npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        }
      ],
      shortDescription:
        "Speeding up serverless lambda with a multi cache system ",
      description: [
        "Repetitive lambda calls were optimized using caching in many levels inside Lambda. To fast reading the transient In-Memory cache from lambda container was used, with an LRU cache expiration. For bigger objects, the /tmp was used freeing memory as necessary. For persistent caching S3 was used along with DynamoDB when reading time was crucial.",
        "The Lambda Multi-cache system was implemented to optimize repetitive Lambda calls by introducing caching mechanisms at multiple levels. This efficient caching approach significantly improved the performance and reduced the response time of Lambda functions.",
        "To accelerate data retrieval, an In-Memory cache was integrated into the Lambda container's persistent memory. This memory preserver among lambda calls. This transient cache leveraged a Least Recently Used (LRU) expiration policy, enabling fast access to frequently accessed data. For larger objects, the /tmp directory was utilized, effectively freeing up memory as needed. The /tmp still persistent between lambda calls for a while. No official estimate is given for how long it's stored but it was enought for the duration of our experiments.",
        "In addition to transient caching, persistent caching was implemented using Amazon S3 when necessary. This allowed for storing and retrieving frequently accessed data, further reducing the computational load on the Lambda functions. In scenarios where reading time was critical, DynamoDB was utilized in conjunction with S3 to ensure quick and efficient data retrieval.",
        "The Lambda Multi-cache system played a crucial role in optimizing the performance and efficiency of Lambda functions. By reducing redundant calls and leveraging various caching mechanisms, it enhanced the overall responsiveness and scalability of the system. The gain in performance reflects in the billing cost of Lambda calls since it charges based on usage and resource allocation.",
        "Throughout the project, I was responsible for designing and implementing the caching architecture. This involved configuring the In-Memory cache, managing cache expiration policies, and integrating the appropriate caching strategies based on object sizes and access patterns.",
        "By reducing the computational load and leveraging different caching layers, it enabled faster data retrieval, enhanced the scalability and reduced costs of the serverless architecture."
      ],
      links: [
        {
          text: "Serverless Run time Cache Strategy",
          url: "https://levelup.gitconnected.com/serverless-caching-strategies-part-3-lambda-runtime-b3d21250927b"
        },
        {
          text: "Least Recently Used cache replacement - LRU",
          url: "https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)"
        }
      ]
    },
    {
      title: "CRM data synchronization using background jobs and webhooks",
      softwareSkills: [
        {
          skillName: "aws",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "hubspot",
          fontAwesomeClassname: "fab fa-hubspot"
        },
        {
          skillName: "node",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          skillName: "mailchimp",
          fontAwesomeClassname: "fab fa-mailchimp"
        }
      ],
      shortDescription:
        "Integrating CRM and SaaS to assist the sales team improve conversion with real-time data feedback",
      description: [
        "To facilitate the sales and marketing team a two-way data synchronization was implemented. Inside the app several places were integrated with CRM events, sending data to CRM by backend workers to not impact user navigation performance. When on the CRM side updates were made, several webhooks receive the updates and synchronize the information accordingly",
        "The CRM data synchronization project involved the implementation of a robust and efficient two-way data synchronization system. This system enabled seamless communication and synchronization between the CRM platform and various components within the application.",
        "To ensure smooth performance and optimal user experience, backend workers were utilized to handle data synchronization from different parts of the application to the CRM platform. By offloading this task to background jobs, the navigation performance for users was not impacted. These backend workers processed CRM events and transmitted the relevant data to the CRM platform, ensuring that the sales and marketing team had access to real-time information.",
        "Furthermore, to achieve a complete two-way synchronization, webhooks were employed on the CRM side. Whenever updates or modifications were made in the CRM platform, the respective webhooks were triggered, allowing the received data to be synchronized and updated accordingly in the application.",
        "This bidirectional data flow ensured that the information remained consistent and up-to-date across both the application and the CRM platform.",
        "Throughout the project, my responsibilities included designing and implementing the data synchronization workflow, integrating backend workers for data transmission to the CRM, and setting up and configuring the necessary webhooks on the CRM side.",
        "The CRM data synchronization project significantly enhanced the efficiency and accuracy of data exchange between the application and the CRM platform. By utilizing background jobs and webhooks, the sales and marketing team benefited from real-time and synchronized data, enabling them to make informed decisions and streamline their processes."
      ],
      links: [
        {
          text: "HubStop Webhooks documentation",
          url: "https://developers.hubspot.com/docs/api/webhooks"
        },
        {
          text: "Bitrix24 Webhooks documentation",
          url: "https://helpdesk.bitrix24.com/open/12357038/"
        }
      ]
    },
    {
      title: "E-signature integration with DocuSign and AdobeSign",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "html5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "fab fa-yarn"
        }
      ],
      shortDescription:
        "Integrating two major e-signature provider into hiring pipeline workflow",
      description: [
        "The e-signature integration project focused on seamlessly incorporating electronic signature functionality into the existing workflow of the application. By integrating e-signature capabilities, the project aimed to streamline document signing processes, enhance efficiency, and eliminate the need for manual handling of physical documents.",
        "As the tech lead and team lead of the e-signature integration, I worked directly with the product owner and CEO. I collaborated closely to define the project's functionality and specifications. Together, we outlined the requirements and intricacies of the integration, ensuring that the resulting solution aligned with Jobscore's vision and objectives.",
        "My responsibilities encompassed writing comprehensive technical specifications, planning the migration process, and architecting the codebase. This involved delving into the API documentation of DocuSign, Adobe Sign, and other relevant platforms. Through proof-of-concept exercises, I verified the feasibility of integrating these systems and designed the technical infrastructure accordingly.",
        "The integration was accomplished using Docusign and Adobe Sign, but due to the absence of an official Ruby gem for Adobe Sign, our team felt the need to develop one. This initiative facilitated smoother integration across endpoints, further enhancing the overall functionality.",
        "The e-signature integration project significantly streamlined document signing processes, reducing manual efforts, and expediting workflows. By eliminating the need for physical signatures and paper documents, the project not only improved efficiency but also contributed to a more environmentally friendly approach."
      ],
      links: [
        {
          text: "Public Ruby Gem for AdobeSign",
          url: "https://github.com/jobscore/adobe_sign"
        },
        {
          text: "Jobscore help article: How do I use the Adobe Sign e-signature integration?",
          url: "https://support.jobscore.com/hc/en-us/articles/360012764511"
        },
        {
          text: "Jobscore help article: How do I use the DocuSign e-signature integration?",
          url: "https://support.jobscore.com/hc/en-us/articles/360013038451"
        }
      ],
      images: [
        {
          alt: "Jobscore screenshot sending offer for signature",
          src: require("./assets/images/projects/send_offer_docusign.jpeg"),
          subtitle: "Jobscore screenshot sending offer for signature",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360013038451"
        },
        {
          alt: "Jobscore screenshot showing the offer signature field",
          src: require("./assets/images/projects/offer_signature.jpeg"),
          subtitle: "Jobscore screenshot showing the offer signature field",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360013038451"
        }
      ]
    },
    {
      title: "User's access level and role permissions",
      softwareSkills: [
        {
          skillName: "javascript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "html5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "yarn",
          fontAwesomeClassname: "fab fa-yarn"
        }
      ],
      shortDescription: "Granular permissions for seamless hiring management",
      description: [
        "The Access Level Project played a crucial role in Jobscore by providing granular permissions for hiring roles such as recruiters, interviewers, and hiring managers. By extending the existing access level system, we were able to introduce features like candidate offers and job and offer approvals.",
        "To solve this challenge, we utilized a stack consisting of Ruby on Rails for the backend, PostgreSQL for the database, and JavaScript for frontend interactions. I took on the roles of Tech Lead and Developer, working closely with the product owner and CEO to define the project requirements.",
        "My responsibilities included architecting the access level system, implementing role-based permissions, and designing the approval workflow for jobs and offers. I collaborated with the development team to integrate the access level system into various features and ensure seamless functionality.",
        "This project required close collaboration with the product owner, CEO, and other team members to understand the specific access needs of each role and create a robust permission structure. By implementing the enhanced access level system, we provided a secure and controlled environment for managing hiring processes within Jobscore."
      ],
      links: [
        {
          text: "How do Approvals work in JobScore?",
          url: "https://support.jobscore.com/hc/en-us/articles/360040312792-How-do-Approvals-work-in-JobScore-"
        },
        {
          text: "How do I get an offer approved?",
          url: "https://support.jobscore.com/hc/en-us/articles/360037963311-How-do-I-get-an-offer-approved-"
        },
        {
          text: "How do I get a job approved?",
          url: "https://support.jobscore.com/hc/en-us/articles/360037963191-How-do-I-get-a-job-approved-"
        },
        {
          text: "What are the different user access levels in JobScore?",
          url: "https://support.jobscore.com/hc/en-us/articles/212930463-What-are-the-different-user-access-levels-in-JobScore-"
        },
        {
          text: "What are confidential fields and how do they work?",
          url: "https://support.jobscore.com/hc/en-us/articles/214624563-What-are-confidential-fields-and-how-do-they-work-"
        }
      ],
      images: [
        {
          alt: "Jobscore user access levels and its features available",
          src: require("./assets/images/projects/access_level_table.jpeg"),
          subtitle: "Jobscore user access levels and its features available",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/212930463-What-are-the-different-user-access-levels-in-JobScore-"
        },
        {
          alt: "Ask questions during the approval process using the comment area on the approval page",
          src: require("./assets/images/projects/comments_approval.gif"),
          subtitle:
            "Ask questions during the approval process using the comment area on the approval page",
          source_url:
            "https://support.jobscore.com/hc/en-us/articles/360040312792-How-do-Approvals-work-in-JobScore-"
        }
      ]
    }
  ]
};

const academicProjects = {
  title: "Academic Publications and Projects",
  lightboxCards: [
    {
      title:
        "Population-based approach to the Variable Neighbourhood Search algorithm",
      shortDescription:
        "New meta-heuristic algorithm using population approach to the VNS algorithm",
      description: [
        "This work presents a population-based variable neighbourhood search approach for unconstrained continuous optimisation, called PRVNS. The main contributions of the proposed algorithm are to evolve a population of individuals (i.e., candidate solutions) and to allow each individual adapts its own neighbourhood search area accordingly to its performance. The adaptive amplitude control allows individuals to autonomously exploit and explore promising regions in the search space. Several unconstrained continuous benchmark functions with a high number of dimensions (d = 250) are used to evaluate the algorithm’s performance. The PRVNS results are compared with the results obtained by some well known population-based approaches: differential evolution (DE), particle swarm optimisation (PSO) and artificial bee colony (ABC). Also, the standard VNS algorithm is considered in the experiments. The results and analyses suggest that the PRVNS approach is a promising and competitive algorithm for unconstrained continuous optimisation."
      ],
      links: [
        {
          text: "Publication",
          url: "https://www.researchgate.net/publication/315890056_Population-based_Variable_Neighborhood_Search_Algorithm_Applied_to_Unconstrained_Continuous_Optimization"
        }
      ],
      images: [
        {
          alt: "Screenshot from publication showing neighbourhood structures and RVNS",
          subtitle:
            "Screenshot from publication showing neighbourhood structures and RVNS",
          src: require("./assets/images/projects/screenshot_of_the_prvns_article.png")
        }
      ]
    },
    {
      title: "Analysis of convergence in Symbiotic Organisms Search",
      shortDescription:
        "Nature-inspired optimization for complex problems using bio-inspiration to improve results",
      description: [
        "Nature is an endless source of inspiration for the development of new technologies. Among different natural phenomena, symbiotic relationships have recently inspired the development of an approach for optimizing complex problems. Called Symbiotic Organisms Search (SOS), this approach draws inspiration from mutualism, commensalism, and parasitism. It is known that for an algorithm to be successful in the optimization process, it must efficiently balance the use of intensification and diversification routines during the search process. This work aims to analyze the impact of the symbiotic components of SOS on its performance and, consequently, identify which components contribute to intensification and which contribute to diversification. To achieve this, the performance of the SOS algorithm was compared with different combinations of symbiotic components. Experiments were conducted with 17 high-dimensional continuous mathematical functions (30 and 200 dimensions). The results indicate that, instead of using all the relationships proposed by the canonical SOS, the utilization of commensalism and parasitism relationships provides a better balance between intensification and diversification, leading to improved results."
      ],
      links: [
        {
          text: "Publication (PT-br)",
          url: "https://drive.google.com/file/d/1-GOhnDfCQFawLmEtp9ABJSczYSFiIUpb/view?usp=sharing"
        }
      ],
      images: [
        {
          alt: "Screenshot from publication showing algorithms convergence for Rosenbrock problem in a high dimensional problem",
          subtitle:
            "Screenshot from publication showing algorithms convergence for Rosenbrock problem in a high dimensional problem",
          src: require("./assets/images/projects/rosenbrock_200dim.png")
        }
      ]
    },
    {
      title: "Bioinspired Algorithms for Constrained Continuous Optimization",
      shortDescription:
        "Undergraduate thesis on optimization problems with constraints and in continuous space",
      description: [
        "Undergraduate thesis analyzing evolutionary algorithms for constrained optimization problems in continuous space. The analysis focused understanding on how to build evolutionary algorithms using the populational and penalization information to guide the search. Constrained problems in high dimensions are hard to optimize and find the global optima in the search space. To solve that we investigated and implemented an adaptative strategy based on the diversification and penalization factors in the population for each iteration. The work conducted several benchmark experiments and analyses of optimization metaheuristics like Differential Evolution, Symbiotic Optimization Search, Particle Swarm Optimization, and Artificial Bee Colony algorithms. Using adaptative strategies to guide the optimization it is possible to enhance the existing metaheuristics to solve complex real-world problems in many scientific areas"
      ],
      links: [
        {
          text: "Publication",
          url: "https://drive.google.com/file/d/1DhNeHOLPH3QNuuDzkqFpMmDfEW647Nhb"
        },
        {
          text: "Source Codes",
          url: "https://drive.google.com/file/d/0B2bVFvvQgpOmeE5MR25UQjlGWVE/view?usp=sharing&resourcekey=0-cltHCL6GxeB9FFTwI26bNQ"
        }
      ],
      images: ["#.webp"]
    },
    {
      title:
        "Developer at university research group helping to create an Android App for bike enthusiasts",
      shortDescription:
        "Android app that aims to encourage the use of bicycles for sport",
      description: [
        "Android app that aims to encourage the use of bicycles for sport. It shares bike paths, rural trails and cycle tourism routes . The application was developed as an initiative of the extension program NEMOBIS, from the University of the State of Santa Catarina - UDESC. Android app that aims to encourage the use of bicycles for sport. It shares bike paths, rural trails and cycle tourism routes . The application was developed as an initiative of the extension program NEMOBIS, from the University of the State of Santa Catarina - UDESC."
      ],
      links: [
        {
          text: "Play Store: Bike Trilhas app",
          url: "https://play.google.com/store/apps/details?id=br.udesc.bdes.biketrilhas"
        }
      ],
      images: [
        {
          alt: "Bike Trilhas App",
          src: require("./assets/images/projects/bike_trilhas_app.png")
        }
      ]
    }
  ]
};

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
  description: [
    "Hello! I'm thrilled to hear from you. If you're interested in working together or have any inquiries, please feel free to reach out to me using the form below.",
    "Looking forward to hearing from you and exploring potential collaborations!"
  ],
  considerations:
    "Note: All information shared with me will be treated with utmost confidentiality"
};

// Twitter Section

const twitterDetails = {
  userName: "liminalpepe", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const footer = {
  title: emoji("Made with ❤️ by Wes"),
  subTitle: "Solving problems one line of code at a time",
  subQuote: "Your Trusted Software Developer"
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
  footer,
  isHireable,
  projects,
  academicProjects,
  workWithMe
};
