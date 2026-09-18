/* eslint-disable @typescript-eslint/no-explicit-any */
// mockData.js
type ProductData = {
  heading: string;
  wordsToHighlight: { text1: string[]; text2: string[] };

  subheading: string;
  images: string[];
  sectionHeader: string;
  ceoComment: string;
  ceoName: string;
  ceoPosition: string;
  companyName: string;
  features_data: {
    section1: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        video?: any;
      }[];
    };
    section2?: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        video?: any;
      }[];
    };
    section3?: {
      heading: string;
      subheading: string;
      centerImage: string;
    };
    hardware_precision?: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    };
    software_experience: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    }[];
    cirriculum: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
      steps?: {
        heading: string;
        subheading: string;
        step: {
          title: string;
          desc: string;
        }[];
      }[];
    };
  };
  legofun?: {
    heading: string;
    subheading: string;
    centerImage: string;
  };
  futureProff?: {
    heading: string;
    subheading: string;
    centerImage: string;
  };
  working?: {
    heading: string;
    subheading: string;
    section1: {
      image: string;
      heading: string;
      description: string;
    };
    section2: {
      image: string;
      heading: string;
      description: string;
    };
  };
  components: {
    shared: string[];
    unique: string[];
  };
  jumppingButton?: {
    text1: string;
    text2: string;
    text3?: string;
    bgColor: string;
    textColor: string;
    link: string;
  }[];
  plugandplay?: {
    title: string;
    heading: string;
    wordsToHighlight: {
      text1: string[];
    };
    subheading: string;
    tableData: {
      title: string;
      desc: string;
      video?: string;
    }[];
  };
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  adaptive?: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  versatile?: any;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  plodeDifference?: any;
};
// interface PlugAndPlayAccessory {
//   title: string;
//   desc: string;
// }
type BlogData = {
  title: string;
  description: string;
  image: string;
  content: string;
  topic: string;
  tag: string;
  timeToRead: string;
  writter: {
    name: string;
    avatar: string;
    date: Date;
  };
}[];

export const products = [
  {
    name: "TED",
    description:
      "TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
    image: "/assets/roboki/Ted8.webp",
    category: "Codable",
    type: "Hardware",
    ageGroup: "9-12",
    link: "/peecee",
    features: [
      "Built in 9 Sensors and 4 Outputs",
      "Technic Building Block Compatible",
      "A.I and IoT Enabled",
    ],
  },
  {
    name: "AI-1",
    description:
      "An intelligent camera powered by AI for dynamic object detection, tracking, and insights.",
    image: "/assets/roboki/AI-I-8.webp",
    category: "Codable",
    type: "Hardware",
    ageGroup: "9-12",
    link: "",
  },
  {
    name: "Roboki",
    description:
      "A durable and upgradable kit packed with everything you need to build, learn and explore robotics.",
    image: "/assets/roboki/roboki8.webp",
    category: "Codable",
    type: "Hardware",
    ageGroup: "9-12",
    link: "/roboki",
    features: [
      "Wireless Code and Control",
      "Smart Plug Sensors",
      "Solid Plastic Chasis Blocks",
    ],
  },
  {
    name: "Toki",
    description:
      "Affordable alternative to Arduino, offering superior customization options and advanced capabilities to unleash your creativity.",
    image: "/assets/roboki/Toki8.webp",
    category: "Codable",
    type: "Hardware",
    ageGroup: "9-12",
    link: "",
    features: [
      "Wireless Code and Control",
      "23 GPIO ports for easy expansion (14 directly usable)",
      "Dual motor drivers supporting up to 2A current each",
    ],
  },
  // {
  //   name: "Toki",
  //   description:
  //     "Affordable alternative to Arduino, offering superior customization options and advanced capabilities to unleash your creativity.",
  //   image: "/assets/roboki/Toki8.svg",
  //   category: "Micro-controller",
  //   type: "Hardware",
  //   ageGroup: "9-12",
  //   link: "",
  //   features: [
  //     "Wireless Code and Control",
  //     "23 GPIO ports for easy expansion (14 directly usable)",
  //     "Dual motor drivers supporting up to 2A current each"
  //   ],
  // },

  {
    name: "Plode",
    description:
      "The one-stop-shop to interact with your devices and learn more about robotics and logic.",
    image: "/assets/roboki/Plode0.webp",
    category: "Software",
    type: "Software",
    ageGroup: "12+",
    link: "",
  },
  {
    name: "Play Trons",
    description:
      "Big Ideas for Little Hands ! This beginner-friendly kit introduces kids to electronics with plug-and-play modules for endless creative projects.",
    image: "/assets/roboki/Playtrons6.webp",
    category: "Electronics",
    type: "Hardware",
    ageGroup: "Age 5-8",
    link: "",
    features: [
      "9 Input and 7 Output Modules",
      "Simulation for Ease of Construction",
      "Open-ended and Flexible",
    ],
  },
  {
    name: "Zing",
    description:
      "Advanced humanoid robot designed for interactive learning, companionship, and play.",
    image: "/assets/zing/zing2.webp",
    category: "Animatronics",
    type: "Hardware",
    ageGroup: "12+",
    link: "/zing",
    features: [
      "17 Degrees of Freedom",
      "Bluetooth and Wi-Fi Enabled",
      "4m Ultrasonic Sensor & 3W Speaker Support",
    ],
  },

  {
    name: "Tinker Bunker",
    description:
      "Experience hands-on learning with engaging courses and projects that inspire creativity and innovation.",
    image: "/assets/roboki/TinkerBunker0.webp",
    category: "Curriculum",
    type: "Curriculum",
    ageGroup: "12+",
    link: "",
  },
  /* {
    name: "Firepen 3D",
    description:
      "High-precision 3D printer for creative, customizable, and rapid prototyping solutions.",
    image: "/assets/zing/Firepen3d.svg",
    category: "Micro-controller",
    type: "Hardware",
    ageGroup: "12+",
    link: "",
    features: ["Spool Break Detection", "Removable Magnetic Bed", "Display Screen: Color with Touch Screen", "Maximum Printing size: 200mm x 200mm x 190mm"]
  }, */
  {
    name: "Play Dynamex",
    description:
      "Colorful plastic blocks inspiring creativity, imagination, and hands-on building fun.",
    image: "/assets/products/Playdynamics1.webp",
    category: "Mechanical",
    type: "Hardware",
    ageGroup: "9-12",
    link: "",
    features: [
      "110+ Unique High-quality Blocks",
      "Simulation for Ease of Construction",
      "PeeCee Computational Kit -2 Compatible",
    ],
  },
  {
    name: "Crawl-e",
    description:
      "A 6-legged marvel with 18 motors which brings the thrill of robotic exploration to life.",
    image: "/assets/zing/cral-e.webp",
    category: "Animatronics",
    type: "Hardware",
    ageGroup: "12+",
    link: "/crawl_e",
    features: [
      "18 Degrees of Freedom",
      "Bluetooth and Wi-Fi Enabled",
      "A.I and IoT Enabled",
    ],
  },
  // {
  //   name: "Klaw-b",
  //   description:
  //     "A versatile robotic arm with a built-in gripper, perfect for hands-on learning and creative projects.",
  //   image: "/assets/roboki/Klaw-b10.svg",
  //   category: "Animatronics",
  //   type: "Hardware",
  //   ageGroup: "Age 9-12",
  //   link: "/klaw_b",
  // },
  {
    name: "Klaw-b",
    description:
      "A versatile robotic arm with a built-in gripper, perfect for hands-on learning and creative projects.",
    image: "/assets/roboki/Klaw-b10.webp",
    category: "Animatronics",
    type: "Hardware",
    ageGroup: "12+",
    link: "/klaw_b",
    features: [
      "5 Degrees of Freedom",
      "Bluetooth and Wi-Fi Enabled",
      "Durable Aluminium Chassis",
    ],
  },
  // {
  //   name: "Playtrons-b",
  //   description:
  //     "A versatile robotic arm with a built-in gripper, perfect for hands-on learning and creative projects.",
  //   image: "/assets/zing/ProductImage1.svg",
  //   category: "Animatronics",
  //   type: "Hardware",
  //   ageGroup: "Age 12+",
  //   link: "/klaw_b",
  // },
];

const getWhatsAppLink = (productName: string) => {
  return `https://wa.me/917975705131?text=Hi,%20I%20want%20to%20buy%20${encodeURIComponent(
    productName
  )}`;
};

export const mockData: { [key: string]: ProductData } = {
  home: {
    heading: "From Playful Robots and Drones to Precision 3D Printers",
    wordsToHighlight: {
      text1: ["Playful Robots and Drones", "3D Printers"],
      text2: ["Zing"],
    },
    subheading:
      "Unleash the power of creative robotics. Yudu makes the impossible fun, helping you build, play, and explore with groundbreaking tech.",
    images: ["/assets/peecee/peecee.webp", "/images/home2.jpg"],
    sectionHeader: "headerSection",
    ceoComment: "",
    ceoName: "",
    ceoPosition: "",
    companyName: "",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "/assets/peecee/peeceehardware1.webp",
        features: [
          {
            icon: "/assets/peecee/Featured icon.png",
            heading: "Power-Packed and Portable",
            description:
              "With a built-in battery, PeeCee TED is always ready to roll—no need to worry about recharging during those epic coding sessions.",
          },
          {
            icon: "/assets/peecee/Featured icon (1).png",
            heading: "Brainy 3-Core Processor",
            description:
              "PeeCee TED's got the brains to handle anything you throw at it, making your ideas come to life without a hitch.",
          },
          {
            icon: "/assets/peecee/Featured icon (2).png",
            heading: "Buzz-worthy",
            description:
              "PeeCee TED's buzzer gives you instant audio feedback, making your projects not just fun to see, but fun to hear too!",
          },
          {
            icon: "/assets/peecee/Featured icon (3).png",
            heading: "Sensors Galore",
            description:
              "From color and light to touch and temperature, PeeCee TED's built-in sensors give you the power to interact with the world around you in all kinds of cool ways.",
          },
          {
            icon: "/assets/peecee/Featured icon (4).png",
            heading: "Expressive LEDs",
            description:
              "Let PeeCee TED show off with customizable LED displays—whether it's a smiley face or a light show, the possibilities are endless.",
          },
          {
            icon: "/assets/peecee/Featured icon (5).png",
            heading: "Rainbow Bright",
            description:
              "With 12 RGB LEDs, you can add a splash of color to your projects—because everything's better in color, right?",
          },
        ],
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ContactForm"],
      unique: ["HomeBanner", "ProductOverview"],
    },
    jumppingButton: [
      {
        text1: "Lemme",
        text2: "Explore",
        bgColor: "#FF0000",
        textColor: "#FAF9FE",
        link: "#footer-contact-form-component",
      },
      {
        text1: "Lemme",
        text2: "Explore",
        bgColor: "#FF0000",
        textColor: "#FAF9FE",
        link: "#footer-contact-form-component",
      },
      {
        text1: "Lemme",
        text2: "Explore",
        bgColor: "#FF0000",
        textColor: "#FAF9FE",
        link: "#footer-contact-form-component",
      },
      {
        text1: "Lemme",
        text2: "Explore",
        bgColor: "#00FFA3",
        textColor: "#FAF9FE",
        link: "#footer-contact-form-component",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#00FFA3",
        textColor: "#000000",
        link: "/partner",
      },
    ],
  },
  peecee: {
    heading: "PeeCee: Your Cute Codable Computer",
    wordsToHighlight: {
      text1: ["PeeCee"],
      text2: ["Zing"],
    },
    subheading:
      "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
    images: [
      "/assets/peecee/peecee.webp",
      "/assets/peecee/peeceehardware1.webp",
    ],
    sectionHeader: "headerSection",
    ceoComment:
      "PeeCee's innovative design and seamless plastic building block integration make it a game-changer for our tech projects.",
    ceoName: "Mr Murugappan Vishwanath",
    ceoPosition: "Founder",
    companyName: "iThink",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "/assets/peecee/peeceehardware1.webp",
        features: [
          {
            icon: "/assets/peecee/Featured icon.png",
            heading: "Power-Packed and Portable",
            description:
              "With a built-in battery, PeeCee TED is always ready to roll—no need to worry about recharging during those epic coding sessions.",
            video: "power",
          },
          {
            icon: "/assets/peecee/Featured icon (1).png",
            heading: "Brainy 3-Core Processor",
            description:
              "PeeCee TED's got the brains to handle anything you throw at it, making your ideas come to life without a hitch.",
            video: "brainy",
          },
          {
            icon: "/assets/peecee/Featured icon (2).png",
            heading: "Buzz-worthy",
            description:
              "PeeCee TED's buzzer gives you instant audio feedback, making your projects not just fun to see, but fun to hear too!",
            video: "buzz",
          },
          {
            icon: "/assets/peecee/Featured icon (3).png",
            heading: "Sensors Galore",
            description:
              "From color and light to touch and temperature, PeeCee TED's built-in sensors give you the power to interact with the world around you in all kinds of cool ways.",
            video: "sensors",
          },
          {
            icon: "/assets/peecee/Featured icon (4).png",
            heading: "Expressive LEDs",
            description:
              "Let PeeCee TED show off with customizable LED displays—whether it's a smiley face or a light show, the possibilities are endless.",
            video: "expressive",
          },
          {
            icon: "/assets/peecee/Featured icon (5).png",
            heading: "Rainbow Bright",
            description:
              "With 12 RGB LEDs, you can add a splash of color to your projects—because everything's better in color, right?",
            video: "rainbow",
          },
        ],
      },
      section2: {
        heading: "Effortless Connectivity",
        subheading:
          "PeeCee TED is all about making connections easy and fun, so kids can dive right into the world of coding and creativity.",
        centerImage: "/assets/peecee/peeceehardware2.webp",
        features: [
          {
            icon: "iot",
            heading: "IoT Magic via the Cloud",
            description:
              "Connect PeeCee TED to the cloud and unlock a world of IoT possibilities. Smart projects? Data at your fingertips? It's all just a tap away!",
            video: "iot",
          },

          {
            icon: "plug",
            heading: "Plug and Power",
            description:
              "Need extra juice? Hook up PeeCee TED to an external power bank through USB and keep those big ideas running as long as you need.",
            video: "plug",
          },
          {
            icon: "wifi",
            heading: "Wire-Free Wonder",
            description:
              "Program PeeCee TED from anywhere—whether you're on the cloud or on your phone. No wires, no limits—just pure creative freedom.",
            video: "wire",
          },
          {
            icon: "liveData",
            heading: "Live Data Fun",
            description:
              "Watch PeeCee TED come to life as it relays real-time sensor data, making your projects interactive and exciting.",
            video: "live",
          },
        ],
      },
      section3: {
        heading: "Team Play!",
        subheading:
          "Got more than one PeeCee TED? Let them chat and collaborate on projects together—because teamwork makes the dream work!",
        centerImage: "/assets/peecee/peeceehardware3.webp",
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
        steps: [
          {
            heading: "7-Step Quest for Older Kids",
            subheading: "Projects follow a structured path",
            step: [
              {
                title: "The Challenge",
                desc: "Define the mission and set the stage for discovery.",
              },
              {
                title: "Guided Exploration",
                desc: "Follow along with a video guide to start your journey.",
              },
              {
                title: "Collaborate and Reflect",
                desc: "Share your progress and insights with others to gain feedback.",
              },
              {
                title: "Research and Innovate",
                desc: "Enhance your project with independent research and creative improvements.",
              },
              {
                title: "Gear Up",
                desc: "Gather the components you'll need for the project.",
              },
              {
                title: "Test and Tweak",
                desc: "Experiment, adjust, and perfect your creation.",
              },
              {
                title: "Discuss and Explore",
                desc: "Dive deeper into the concepts and expand your understanding.",
              },
            ],
          },
          {
            heading: "4-Step Path for Younger Explorers",
            subheading: "Projects follow a structured path",
            step: [
              {
                title: "Guided Exploration",
                desc: "Follow along with an engaging video to kickstart the project.",
              },
              {
                title: "Adaptive LMS",
                desc: "The Adaptive LMS streamlines resource management, including videos, activity sheets, materials, and assessments. This tool helps students, teachers, and parents stay organized and track progress effectively.",
              },
              {
                title: "Gear Up",
                desc: "Collect the components needed.",
              },
              {
                title: "Test and Tweak",
                desc: "Play around, make adjustments, and see what works.",
              },
            ],
          },
        ],
      },
    },
    legofun: {
      heading: "Building Fun",
      subheading:
        "PeeCee TED is best buddies with colourful building block kits, so you can build, expand, and create to your heart's content.",
      centerImage: "/assets/other/lego-fun.webp",
    },
    futureProff: {
      heading: "Future-Proof with Edge Connectors",
      subheading:
        "As your skills grow, so does PeeCee TED! Expand with edge connector capabilities and take on even bigger challenges.",
      centerImage: "/assets/peecee/peecee-future.webp",
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["PeeCeeSpecs", "UserReviews"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("PeeCee TED"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
    plugandplay: {
      title: "Hardware",
      heading: "Plug and Play Accessories",
      wordsToHighlight: {
        text1: ["Plug and Play "],
      },
      subheading:
        "PeeCee TED comes with a treasure trove of accessories—from sensors and switches to motors and displays, the possibilities are endless!",
      tableData: [
        {
          title: "Plug and Play Accessories",
          desc: "PeeCee TED comes with a treasure trove of accessories—from sensors and switches to motors and displays, the possibilities are endless!",
          video: "plugandplay",
        },
        {
          title: "IR Distance and Ultrasonic Sensors",
          desc: "Measure distances like a pro.",
          video: "ird",
        },
        {
          title: "Joysticks and Switches",
          desc: "Get hands-on with controls that put you in charge.",
          video: "Joystickandswitches",
        },
        // {
        //   title: "Lasers, LEDs, and Displays",
        //   desc: "Add some pizzazz with lasers, RGB lights, and OLED screens.",
        // },
        // {
        //   title: "Motors and Rotors",
        //   desc: "Make your projects move with servo and DC motors.",
        // },
        // {
        //   title: "Sound and More",
        //   desc: "Pump up the volume with an audio module and 3W speaker, or go high-tech with metal geared motors and propellers.",
        // },
      ],
    },
  },
  roboki: {
    heading: "Roboki: The Ultimate Fun-Packed Robotics Kit",
    wordsToHighlight: {
      text1: ["Roboki"],
      text2: ["Zing"],
    },
    ceoName: "Mr Srikanth Sridharan",
    ceoPosition: "Co-Founder",
    companyName: "Think Pro Academy",
    subheading:
      "A durable and upgradable kit packed with everything you need to build, learn, and explore robotics. Perfect for kids, hobbyists, and budding engineers alike.",
    images: [
      "/assets/roboki/roboki.webp",
      "/assets/roboki/robokihardware1.webp",
    ],
    sectionHeader: "middleHeaderSection",
    ceoComment:
      "Roboki's seamless integration and flexibility have made learning and creating so much more engaging for our users.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "Roboki is your go-to companion, always ready to learn, play, and create with you. Whether it's coding or hands-on projects, Roboki is packed with powerful features and endless possibilities.",
        centerImage: "/assets/roboki/robokihardware1.webp",
        features: [
          {
            icon: "/assets/roboki/Featured icon (6).png",
            heading: "Powerful and Versatile",
            description:
              "Equipped with a RISC-V 32 Bit processor for fast performance, Roboki is the perfect platform to kickstart your robotics journey.",
            video: "powerful",
          },
          {
            icon: "/assets/roboki/Featured icon (7).png",
            heading: "Long-Lasting Fun",
            description:
              "Enjoy hours of exploration with the rechargeable 1200mAh Li-Ion battery.",
            video: "long",
          },
          {
            icon: "/assets/roboki/Featured icon (8).png",
            heading: "Playful, Upgradable Design",
            description:
              "From coding to mechanics, Roboki evolves with you. Upgrade it with additional sensors, robotic arms, or even AI cameras to push the boundaries of what's possible. Perfect for non-stop learning and action.",
            video: "playful",
          },
          {
            icon: "/assets/roboki/Featured icon (9).png",
            heading: "Wireless & Easy-to-Control",
            description:
              "Connect via Bluetooth 5.0, Zigbee, or USB Type C, and control your robot effortlessly.",
            video: "wireless",
          },
          {
            icon: "/assets/roboki/Featured icon (10).png",
            heading: "Interactive & Fun Learning",
            description:
              "With plug-and-play sensors, big sturdy wheels, and a durable plastic chassis, Roboki is built for both creativity and hands-on fun. Its 15 starter projects will keep you busy for hours!",
            video: "iteractivero",
          },
          {
            icon: "/assets/roboki/Featured icon (11).png",
            heading: "Advanced Motor Control",
            description:
              "Roboki comes with dual motor drivers and servo motor ports, enabling smooth and precise movements for a variety of fun robotic tasks.",
          },
        ],
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },

          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    legofun: {
      heading: "Building Fun",
      subheading:
        "Combine Roboki with colorful building block kits to create fun, interactive projects. Build, code, and bring your ideas to life with endless possibilities.",
      centerImage: "/assets/other/lego-fun.webp",
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["RobokiFeatures", "PerformanceChart"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("Roboki"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
  },
  zing: {
    heading: "Meet Zing: The Fun and Lively Humanoid Robot",
    wordsToHighlight: {
      text1: ["Zing"],
      text2: ["Zing"],
    },
    ceoName: "Mr Srikanth Sridharan",
    ceoPosition: "Co-Founder",
    companyName: "Think Pro Academy",
    subheading:
      "A 30 cm marvel with 17 degrees of freedom, crafted for endless exploration and creativity.",
    images: ["/assets/zing/zing.webp", "/assets/zing/zinghardware1.webp"],
    sectionHeader: "sideHeaderSection",
    ceoComment:
      "Zing's lifelike movements and intuitive controls have redefined interactive robotics for our team.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "Zing is your ultimate robotic companion, ready to engage and entertain whenever you are. With advanced features and lifelike movement, Zing brings your ideas to life with ease.",
        centerImage: "/assets/zing/zinghardware1.webp",
        features: [
          {
            icon: "/assets/zing/Featured icon (12).png",
            heading: "Power-Packed and Portable",
            description:
              "Zing's 12V Li-Ion battery delivers up to 2 hours of action-packed fun. Lightweight and durable, it's designed for adventure and learning.",
            video: "powerzing",
          },
          {
            icon: "/assets/zing/Featured icon (13).png",
            heading: "Smart Movements",
            description:
              "With 17 degrees of freedom, Zing can walk, squat, turn its head, and more. Explore its expressive capabilities and integrated ultrasonic sensor.",
            video: "smartzing",
          },
          {
            icon: "/assets/zing/Featured icon (14).png",
            heading: "Interactive Fun",
            description:
              "Features a high-quality 3W speaker for audio feedback and options for plug-and-play sensors, AI cameras, and laser cannons.",
            video: "Interactivezing",
          },
          {
            icon: "/assets/zing/Featured icon (15).png",
            heading: "Interactive Sensors",
            description:
              "Equipped with accelerometer, gyroscope, and ultrasonic sensors to make every interaction engaging.",
            video: "sensorzing",
          },
          {
            icon: "/assets/zing/Featured icon (16).png",
            heading: "Versatile Connectivity",
            description:
              "Enjoy WiFi, Bluetooth 5.0, and USB support. Program and control Zing using Plode for a full-featured experience.",
            video: "versatilezing",
          },
          // {
          //   icon: "/assets/zing/Featured icon (17).png",
          //   heading: "DIY-Friendly Design",
          //   description:
          //     "Built to be repair-friendly with replaceable servos. A 3D simulator is coming soon to enhance your programming adventures.",
          // },
        ],
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Connect Zing to the Plode app to program lifelike movements and interactive behaviors. Easily control its actions with user-friendly coding tools.",
      section1: {
        image: "/assets/zing/zingwork.webp",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Zing.",
      },
      section2: {
        image: "/assets/zing/zing-plode.webp",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ContactForm"],
      unique: ["ZingSpeedChart", "DeliveryOptions"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("Zing"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
  },
  crawl_e: {
    heading: "Meet Crawl-e: The Agile Hexapod Robot",
    wordsToHighlight: {
      text1: ["Crawl-e"],
      text2: ["Zing"],
    },
    ceoName: "Mr. Abhishek Reddy",
    ceoPosition: "Director",
    companyName: "Magnum School Solutions",
    subheading:
      "This 6-legged marvel with 18 motors brings the thrill of robotic exploration to life with nimble moves and high-tech features.",
    images: ["/assets/crawle/crawle.webp", "/assets/crawle/crawlehard1.png"],
    sectionHeader: "middleHeaderSection",
    ceoComment:
      "Crawl-E's versatile design and reliable performance have been key to our exploration projects.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "Crawl-E is your versatile hexapod explorer, designed to tackle diverse terrains with ease. Its six-legged movement ensures stability and adaptability, making every adventure exciting and dynamic.",
        centerImage: "/assets/crawle/crawlehardware1.webp",
        features: [
          {
            icon: "/assets/zing/Featured icon (12).png",
            heading: "Spider-Like Agility",
            description:
              "With 18 motors and 6 legs, Crawl-e moves with the precision and versatility of a spider. Perfect for intricate tasks and dynamic movements.",
            video: "spider",
          },
          {
            icon: "/assets/zing/Featured icon (13).png",
            heading: "Flexible Movement",
            description:
              "From crawling to turning, Crawl-e handles a variety of actions with smooth, coordinated movements.",
            video: "flexible",
          },
          {
            icon: "/assets/zing/Featured icon (14).png",
            heading: "Interactive Fun",
            description:
              "Features a high-quality 3W speaker for audio feedback and options for plug-and-play sensors, AI cameras, and laser cannons.",
            video: "interactive",
          },
          {
            icon: "/assets/zing/Featured icon (15).png",
            heading: "Tech-Packed Sensors",
            description:
              "Includes an ultrasonic sensor for obstacle detection and a range of other sensors to enhance interaction.",
            video: "tech",
          },
          {
            icon: "/assets/zing/Featured icon (16).png",
            heading: "Versatile Connectivity",
            description:
              "Supports WiFi, Bluetooth 5.0, and USB connections. Program and control Crawl-e using Plode for a comprehensive robotic experience.",
            video: "versatile",
          },
          /* {
            icon: "/assets/zing/Featured icon (17).png",
            heading: "DIY-Friendly Design",
            description:
              "Designed with replaceable parts and a 3D simulator coming soon, making it easy to customize and repair.",
            video: "friendly",
          }, */
        ],
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Pair Crawl-e with the Plode app for seamless navigation across any terrain. Customize its movements and exploration patterns with simple coding features.",
      section1: {
        image: "/assets/crawle/crawle-work.webp",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Crawl-e.",
      },
      section2: {
        image: "/assets/crawle/crawle-plode.webp",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["CrawlENavigation", "TerrainMapping"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("Crawl-E"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
  },
  klaw_b: {
    heading: "Meet Klaw-b: The Dynamic 5-DOF Robotic Arm",
    wordsToHighlight: {
      text1: ["Klaw-b"],
      text2: ["Zing"],
    },
    ceoName: "Sachin Srivastav",
    ceoPosition: "Director",
    companyName: "Dabotics India Pvt Ltd",
    subheading:
      "A versatile robotic arm with a built-in gripper, perfect for hands-on learning and creative projects. Control it manually or program its movements with ease.",
    images: ["/assets/klawb/klawb.webp", "/assets/klawb/klawbhardware1.webp"],
    sectionHeader: "headerSection",
    ceoComment:
      "Klaw-b's accuracy and ease of use have made it an essential tool in our automation process.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "Klaw-b is your precision robotic arm, engineered for accuracy and flexibility. With its advanced mechanics, Klaw-b handles intricate tasks effortlessly, making it ideal for both complex projects and hands-on experiments.",
        centerImage: "/assets/klawb/klawbhardware1.webp",
        features: [
          {
            icon: "/assets/klawb/Featured icon (24).png",
            heading: "Advanced Connectivity",
            description:
              "Equipped with WiFi, Bluetooth 5.0, and USB for seamless integration with your devices. Supports battery operation with a DC adapter included.",
          },
          {
            icon: "/assets/klawb/Featured icon (25).png",
            heading: "Expandable Capabilities",
            description:
              "The control board offers extensive expandability options, making Klaw-b adaptable for a wide range of projects and accessories",
          },
          {
            icon: "/assets/klawb/Featured icon (26).png",
            heading: "Degrees of Freedom",
            description:
              "5 DOF allowing for a wide range of motion and flexibility.",
          },
          {
            icon: "/assets/klawb/Featured icon (27).png",
            heading: "Programmable Fun",
            description:
              "Retains all Plode functionalities, allowing you to program and control Claw-b with ease. Compatible with AI cameras and external accessories for enhanced interaction.",
          },
          {
            icon: "/assets/klawb/Featured icon (28).png",
            heading: "Movement Capabilities",
            description:
              "Precise articulation for various tasks including grabbing, lifting, and rotating.",
          },
          {
            icon: "/assets/klawb/Featured icon (29).png",
            heading: "Lift Capacity",
            description: "Capable of lifting up to 100 grams.",
          },
        ],
      },
      hardware_precision: {
        heading: "Precision Redefined",
        subheading:
          "With advanced mechanics and flexible reach, Klaw-b handles complex tasks effortlessly. Its robust build ensures reliable performance, while intuitive controls make integration seamless.",
        centerImage: "/assets/klawb/klaw-2.webp",
        features: [
          {
            icon: "strong",
            heading: "Robust Design",
            description:
              "Klaw-b features a sturdy metal body and a built-in gripper for precise handling and manipulation of objects. With a lift capacity of up to 100 grams, it's designed to tackle a range of tasks.",
          },
          {
            icon: "dimension",
            heading: "Dimensions",
            description:
              "Compact and efficient,Klaw-b measures [Length: 24cm Width: 13cm Height: 34cm] and offers a range of motion that suits various applications.",
          },
          {
            icon: "flexibleControl",
            heading: "Flexible Control",
            description:
              "Switch between manual mode and programmable control to suit your project needs. Easily connect to additional accessories for expanded functionality.",
          },
          {
            icon: "tech",
            heading: "Tech-Packed Features",
            description:
              "Includes digital servos with clutch protection to prevent damage and ensure long-lasting performance.",
          },
        ],
      },
      software_experience: [
        {
          heading: "Effortless Experience",
          subheading:
            "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
          centerImage: "/assets/other/monitor-phone.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "User-Friendly and Fun",
              description:
                "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
            },
            {
              icon: "virtual",
              heading: "Virtual Simulator",
              description:
                "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
            },

            {
              icon: "instaLink",
              heading: "InstaLink Real-Time Magic",
              description:
                "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
            },
            {
              icon: "data",
              heading: "Data Capture and Visualization Mode",
              description:
                "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Link Klaw-b to the Plode app for precise control over tasks and automation. Program its movements and operations effortlessly with intuitive coding.",
      section1: {
        image: "/assets/klawb/klawb-work.webp",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Zing.",
      },
      section2: {
        image: "/assets/klawb/klawb-plode.webp",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["PlodeEntertainmentFeatures", "UserFeedback"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("Klaw-B"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://edu.plode.org",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
  },

  plode: {
    heading: "Plode: The Playful Coding Platform",
    wordsToHighlight: {
      text1: ["Plode:"],
      text2: ["Zing"],
    },
    ceoName: "Mr Srikanth Sridharan",
    ceoPosition: "Co-Founder",
    companyName: "Think Pro Academy",
    subheading:
      "The one-stop-shop to interact with your devices and learn more about coding and robotics. Play with your device or write a creative code of your own.",
    images: [
      "/assets/plode/plodeHomeImg.webp",
      "/assets/crawle/crawlehard1.png",
    ],
    sectionHeader: "headerSection",
    ceoComment:
      "Plode simplifies coding with its user-friendly interface, making it perfect for beginners and experienced coders alike.",
    features_data: {
      section1: {
        heading: "Data Mode - Explore, Measure, and Visualise",
        subheading:
          "Plode's Data Mode provides a powerful way to monitor, measure, and visualise data from both internal sensors and external accessories. Tailored to your kit's capabilities, it offers a seamless step-by-step setup for precise data capture and analysis.",
        centerImage: "/assets/crawle/crawlehardware1.webp",
        features: [
          {
            icon: "/assets/partner/icon/selector.png",
            heading: "Select Sensor",
            description:
              "Choose from built-in sensors such as Microphone, Temperature, Battery, and various Touch or Gesture Sensors.",
          },
          {
            icon: "/assets/partner/icon/settime.png",
            heading: "Set Time Interval",
            description:
              "Customise the frequency for data readings, ensuring your measurements align with your experiment's needs.",
          },
          {
            icon: "/assets/partner/icon/plot.png",
            heading: "Plot Data",
            description:
              "Monitor real-time data with dynamic plotting, keeping you informed with every reading.",
          },
          {
            icon: "/assets/partner/icon/select.png",
            heading: "Select Port",
            description:
              "Configure external accessories using available Digital and Analog ports, which differ based on the kit in use.",
          },
          {
            icon: "/assets/partner/icon/setgraph.png",
            heading: "Set Graph Type",
            description:
              " Visualise your data with Line or Bar Graphs to spot trends or analyse patterns effortlessly.",
          },
        ],
      },
      software_experience: [
        {
          heading: "Dynamic Play Mode - Tailored to Your Kit",
          subheading:
            "With Plode, the Play mode adapts to the unique features of each kit, delivering an intuitive and interactive experience. No coding required—just one-tap actions designed for seamless control and fun exploration.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Joystick",
              description:
                "Customizable control interface, varying by kit capabilities, allowing you to unlock unique behaviours like gestures, musical tones, or movement patterns.",
            },
            {
              icon: "virtual",
              heading: "Speech",
              description:
                "Speak commands directly to your kit with a simple tap—empowering voice interaction for hands-free control.",
            },

            {
              icon: "data",
              heading: "Music",
              description:
                "Play with sound by interacting with virtual instruments like a piano, triggering real-time responses from your device.",
            },
            {
              icon: "instaLink",
              heading: "Camera",
              description:
                "Use vision-based control to see your kit react to movements or gestures detected through the camera.",
            },
          ],
        },
        {
          heading: "App Mode - Smart Control with Minimal Coding",
          subheading:
            "Enable smart features through the app and design custom logic to control the kit with your phone.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Interact via Phone Sensors",
              description:
                "Use the phone's camera, mic, or Bluetooth remote to send inputs and trigger actions.",
            },
            {
              icon: "virtual",
              heading: "Define Logic with Simple IF-THEN Rules",
              description:
                "For example, if the camera detects an object (like a backpack), display a message or send a command to the kit.",
            },

            {
              icon: "data",
              heading: "Bluetooth Remote Control",
              description:
                "Configure the remote to send numbers or commands to the kit for dynamic, hands-on control.",
            },
            {
              icon: "instaLink",
              heading: "Adaptive Mode",
              description:
                "The phone seamlessly integrates with the hardware, ensuring all features are relevant to the connected kit.",
            },
          ],
        },
        {
          heading:
            "Block-Based Programming - Play with Logic, Master the Basics",
          subheading:
            "In block-based programming, users assemble pre-defined code blocks that connect like puzzle pieces. It's a fun and intuitive way to learn the fundamentals of coding.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Error-Free Coding",
              description:
                "Blocks fit together only in ways that make sense, eliminating syntax errors.",
            },
            {
              icon: "virtual",
              heading: "Instant Feedback",
              description:
                "See the result of each change immediately, helping learners understand logic on the go.",
            },

            {
              icon: "data",
              heading: "Modular Design",
              description:
                "Combine blocks to build larger, more complex solutions over time.",
            },
          ],
        },
        {
          heading: "Python Programming - Simple Syntax, Powerful Control",
          subheading:
            "Python programming provides an easy entry point into text-based coding. It's focused on controlling hardware with accessible syntax and pre-configured libraries.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Clean, Simple Code",
              description:
                "Focus on what matters—controlling hardware with intuitive commands.",
            },
            {
              icon: "virtual",
              heading: "Built-In Libraries",
              description:
                "All essential libraries for device control come pre-loaded, ensuring a smooth experience.",
            },

            {
              icon: "data",
              heading: "Instant Execution",
              description:
                "See the impact of your code in real-time, perfect for prototyping and quick testing.",
            },
          ],
        },
        {
          heading: "Project-Based Programming - Create Real-World Solutions",
          subheading:
            "Take your learning to the next level by building your own projects. With project-based programming, you can design, assemble, and control your hardware, experiencing how ideas take shape through hands-on experimentation.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Design Custom Projects",
              description:
                "Use the drag-and-drop interface to assign inputs and outputs.",
            },
            {
              icon: "virtual",
              heading: "Use Live Sensor Input",
              description:
                "Utilise the live input button for real-time sensor readings to fine-tune and verify your setup.",
            },

            {
              icon: "data",
              heading: "Conditional Logic Simplified",
              description:
                "Program actions based on sensor triggers, device inputs, or timed events without complex code.",
            },
            {
              icon: "data",
              heading: "Prototyping Made Simple",
              description:
                "Build, test, and iterate your ideas, seeing them come to life instantly.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Pair Crawl-e with the Plode app for seamless navigation across any terrain. Customize its movements and exploration patterns with simple coding features.",
      section1: {
        image: "/assets/crawle/crawle-work.webp",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Crawl-e.",
      },
      section2: {
        image: "/assets/crawle/crawle-plode.webp",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["CrawlENavigation", "TerrainMapping"],
    },
    jumppingButton: [
      {
        text1: "Own One",
        text2: "Now!",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: getWhatsAppLink("Plode"),
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "https://play.google.com/store/apps/details?id=com.bibox.bisoftsuite&hl=en_IN&pli=1",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#602CF7",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
    plugandplay: {
      title: "Features",
      heading: "Seamlessly Unlock Kit-Specific Experiences",
      wordsToHighlight: {
        text1: ["Seamlessly Unlock Kit-Specific Experiences"],
      },
      subheading:
        "Plode is ready for anything, handling everything from your first coding steps to your wildest ideas.",
      tableData: [
        {
          title: "A.I.",
          desc: "Experience intelligent responses and behaviours specific to your selected kit.",
        },
        {
          title: "Play Mode",
          desc: "Instantly interact with your kit using intuitive one-tap buttons. Control movements, trigger actions, or explore pre-set behaviours—no coding required!",
        },
        {
          title: "Code Mode",
          desc: "Dive deeper with hands-on coding experiences. Different kits unlock various programming challenges, from beginner-friendly scripts to advanced logic.",
        },
        {
          title: "App Mode",
          desc: "Explore extended features and tools customised for each kit, ensuring seamless control, project management, and creative possibilities.",
        },
        {
          title: "Data Mode",
          desc: "Monitor real-time performance and insights, giving you a deeper understanding of your projects and progress.",
        },
        {
          title: "Learn Mode",
          desc: "Access videos, tutorials, and lessons tailored to your kit to level up your skills at every step.",
        },
      ],
    },
    adaptive: {
      title: "Features",
      heading: "Playfully Adaptive",
      subHeading:
        "Plode adjusts itself to suit anyone, whether you're just starting out or ready to tackle big projects.",
      features: [
        {
          src: "device",
          title: "Discover the Perfect Kit",
          desc: "Easily browse through categories like Codable Kits and Animatronics to find the right tools for your learning journey. Use the search feature to quickly locate specific kits or tap Auto to dive straight into the app. Explore options like Roboki and PeeCee under Codable Kits or advanced animatronics like Klaw-b, Crawl-e, and Zing. Plode ensures you find what you need effortlessly.",
        },
        {
          src: "rocket",
          title: "Effortless Device Pairing",
          desc: "With Plode, connecting to your kit is quick and seamless. Select a specific kit or tap Auto to let the app do the work for you. The app instantly scans for the appropriate device, ensuring you're ready to jump into action without delays. Whether you're working with a specific kit or exploring, Plode keeps things smooth and connected.",
        },
      ],
      img: "zigzag",
    },
    versatile: [
      {
        title: "Visual Programming - Build, Experiment, and Learn Visually",
        colorTitle: "Visual Programming -",
        desc: "Visual programming takes the complexity out of syntax, allowing users to focus on logic and design. With easy-to-use drag-and-drop interfaces, learners can build working prototypes while gaining a solid understanding of coding concepts.",
        subheading: "What Makes Visual Programming Different?",
        features: [
          {
            title: "Drag-and-Drop Assembly",
            desc: "Quickly connect sensors, motors, and other accessories to hardware ports using the visual interface—no code required.",
          },
          {
            title: "Real-Time Interaction",
            desc: "See results instantly by interacting with the hardware as you build, modify, and experiment.",
          },
          {
            title: "Logic using Flowcharts and Blocks",
            desc: "Create custom workflows with flowcharts or dive into block-based programming with pre-built commands that fit together like puzzle pieces.",
          },
        ],
      },
      {
        title: "Flowchart-Based Programming - Visualise Your Code",
        colorTitle: "Flowchart-Based Programming - ",
        desc: "Flowchart programming offers a clear and logical approach to building workflows. Arrange visual blocks like decisions, loops, and actions to structure your code.",
        subheading: "",
        features: [
          {
            title: "Simplify Complex Logic",
            desc: "Flowcharts break down tasks step-by-step, making them easy to understand.",
          },
          {
            title: "Interactive Blocks",
            desc: "Modify or rearrange flowcharts to explore different logic paths.",
          },
          {
            title: "Built-in Debugging",
            desc: "Quickly identify and fix errors without touching any code.",
          },
        ],
      },
      {
        title: "C Programming - Power in Your Hands",
        colorTitle: "C Programming -",
        desc: "C programming offers low-level control, giving users the ability to manage hardware directly.",
        subheading: "",
        features: [
          {
            title: "Full Control",
            desc: "Write code to operate sensors, motors, and accessories.",
          },
          {
            title: "Use System-Level Commands",
            desc: "Build functions and implement logic through loops, conditions, and more.",
          },
          {
            title: "Immediate Results",
            desc: "Upload your code and test it live on the hardware to see it in action.",
          },
        ],
      },
    ],
    plodeDifference: {
      title: "The Plode Difference – Learning by Doing",
      desc: "Code Mode is built on the principle of hands-on learning, providing users with the freedom to experiment, create, and iterate. Whether you start with visual programming or jump into script coding, every feature is designed to bridge the gap between theory and practice.",
      features: [
        {
          src: "fixable",
          title: "Flexible Learning Paths",
          desc: "Choose between visual interfaces or dive straight into scripting languages.",
        },
        {
          src: "real",
          title: "Real-World Applications",
          desc: "Build practical projects and see your code come to life on real hardware.",
        },
        {
          src: "instant",
          title: "Instant Feedback",
          desc: "Get live results with every change, empowering you to learn through trial and error.",
        },
      ],
    },
  },
  partner: {
    heading: "Plode: The Playful Coding Platform",
    wordsToHighlight: {
      text1: ["Plode:"],
      text2: ["Zing"],
    },
    ceoName: "Mr Srikanth Sridharan",
    ceoPosition: "Co-Founder",
    companyName: "Think Pro Academy",
    subheading:
      "The one-stop-shop to interact with your devices and learn more about coding and robotics. Play with your device or write a creative code of your own.",
    images: [
      "/assets/plode/plodeHomeImg.webp",
      "/assets/crawle/crawlehard1.png",
    ],
    sectionHeader: "headerSection",
    ceoComment:
      "Plode simplifies coding with its user-friendly interface, making it perfect for beginners and experienced coders alike.",
    features_data: {
      section1: {
        heading: "Data Mode - Explore, Measure, and Visualise",
        subheading:
          "Plode's Data Mode provides a powerful way to monitor, measure, and visualise data from both internal sensors and external accessories. Tailored to your kit's capabilities, it offers a seamless step-by-step setup for precise data capture and analysis.",
        centerImage: "/assets/crawle/crawlehardware1.webp",
        features: [
          {
            icon: "/assets/partner/icon/selector.png",
            heading: "Select Sensor",
            description:
              "Choose from built-in sensors such as Microphone, Temperature, Battery, and various Touch or Gesture Sensors.",
          },
          {
            icon: "/assets/partner/icon/settime.png",
            heading: "Set Time Interval",
            description:
              "Customise the frequency for data readings, ensuring your measurements align with your experiment's needs.",
          },
          {
            icon: "/assets/partner/icon/plot.png",
            heading: "Plot Data",
            description:
              "Monitor real-time data with dynamic plotting, keeping you informed with every reading.",
          },
          {
            icon: "/assets/partner/icon/select.png",
            heading: "Select Port",
            description:
              "Configure external accessories using available Digital and Analog ports, which differ based on the kit in use.",
          },
          {
            icon: "/assets/partner/icon/setgraph.png",
            heading: "Set Graph Type",
            description:
              " Visualise your data with Line or Bar Graphs to spot trends or analyse patterns effortlessly.",
          },
        ],
      },
      software_experience: [
        {
          heading: "Dynamic Play Mode - Tailored to Your Kit",
          subheading:
            "With Plode, the Play mode adapts to the unique features of each kit, delivering an intuitive and interactive experience. No coding required—just one-tap actions designed for seamless control and fun exploration.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Joystick",
              description:
                "Customizable control interface, varying by kit capabilities, allowing you to unlock unique behaviours like gestures, musical tones, or movement patterns.",
            },
            {
              icon: "virtual",
              heading: "Speech",
              description:
                "Speak commands directly to your kit with a simple tap—empowering voice interaction for hands-free control.",
            },

            {
              icon: "data",
              heading: "Music",
              description:
                "Play with sound by interacting with virtual instruments like a piano, triggering real-time responses from your device.",
            },
            {
              icon: "instaLink",
              heading: "Camera",
              description:
                "Use vision-based control to see your kit react to movements or gestures detected through the camera.",
            },
          ],
        },
        {
          heading: "App Mode - Smart Control with Minimal Coding",
          subheading:
            "Enable smart features through the app and design custom logic to control the kit with your phone.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Interact via Phone Sensors",
              description:
                "Use the phone's camera, mic, or Bluetooth remote to send inputs and trigger actions.",
            },
            {
              icon: "virtual",
              heading: "Define Logic with Simple IF-THEN Rules",
              description:
                "For example, if the camera detects an object (like a backpack), display a message or send a command to the kit.",
            },

            {
              icon: "data",
              heading: "Bluetooth Remote Control",
              description:
                "Configure the remote to send numbers or commands to the kit for dynamic, hands-on control.",
            },
            {
              icon: "instaLink",
              heading: "Adaptive Mode",
              description:
                "The phone seamlessly integrates with the hardware, ensuring all features are relevant to the connected kit.",
            },
          ],
        },
        {
          heading:
            "Block-Based Programming - Play with Logic, Master the Basics",
          subheading:
            "In block-based programming, users assemble pre-defined code blocks that connect like puzzle pieces. It's a fun and intuitive way to learn the fundamentals of coding.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Error-Free Coding",
              description:
                "Blocks fit together only in ways that make sense, eliminating syntax errors.",
            },
            {
              icon: "virtual",
              heading: "Instant Feedback",
              description:
                "See the result of each change immediately, helping learners understand logic on the go.",
            },

            {
              icon: "data",
              heading: "Modular Design",
              description:
                "Combine blocks to build larger, more complex solutions over time.",
            },
          ],
        },
        {
          heading: "Python Programming - Simple Syntax, Powerful Control",
          subheading:
            "Python programming provides an easy entry point into text-based coding. It's focused on controlling hardware with accessible syntax and pre-configured libraries.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Clean, Simple Code",
              description:
                "Focus on what matters—controlling hardware with intuitive commands.",
            },
            {
              icon: "virtual",
              heading: "Built-In Libraries",
              description:
                "All essential libraries for device control come pre-loaded, ensuring a smooth experience.",
            },

            {
              icon: "data",
              heading: "Instant Execution",
              description:
                "See the impact of your code in real-time, perfect for prototyping and quick testing.",
            },
          ],
        },
        {
          heading: "Project-Based Programming - Create Real-World Solutions",
          subheading:
            "Take your learning to the next level by building your own projects. With project-based programming, you can design, assemble, and control your hardware, experiencing how ideas take shape through hands-on experimentation.",
          centerImage: "/assets/other/imagePlaceholder2.webp",
          features: [
            {
              icon: "userFriendly",
              heading: "Design Custom Projects",
              description:
                "Use the drag-and-drop interface to assign inputs and outputs.",
            },
            {
              icon: "virtual",
              heading: "Use Live Sensor Input",
              description:
                "Utilise the live input button for real-time sensor readings to fine-tune and verify your setup.",
            },

            {
              icon: "data",
              heading: "Conditional Logic Simplified",
              description:
                "Program actions based on sensor triggers, device inputs, or timed events without complex code.",
            },
            {
              icon: "data",
              heading: "Prototyping Made Simple",
              description:
                "Build, test, and iterate your ideas, seeing them come to life instantly.",
            },
          ],
        },
      ],
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "/assets/other/circulamImage.webp",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "",
      subheading: "",
      section1: {
        image: "",
        heading: "",
        description: "",
      },
      section2: {
        image: "",
        heading: "",
        description: "",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["CrawlENavigation", "TerrainMapping"],
    },
    jumppingButton: [
      {
        text1: "I'm ready to",
        text2: "Join Forces",
        bgColor: "#2CF7A4",
        textColor: "#0A4029",
        link: "#footer-contact-form-component",
      },
      {
        text1: "Learn",
        text2: "More",
        bgColor: "#2CF7A4",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Download",
        text2: "Plode App",
        bgColor: "#2CF7A4",
        textColor: "#FAF9FE",
        link: "https://play.google.com/store/apps/details?id=com.bibox.bisoftsuite&hl=en_IN&pli=1",
      },
      {
        text1: "Start",
        text2: "Learning",
        bgColor: "#2CF7A4",
        textColor: "#FAF9FE",
        link: "#",
      },
      {
        text1: "Lemme",
        text2: "Learn ",
        text3: "More",
        bgColor: "#2CF7A4",
        textColor: "#FAF9FE",
        link: "/partner",
      },
    ],
  },
};

export const blogData: BlogData = [
  {
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "/assets/blog/Image1.webp",
    content:
      "Artificial Intelligence (AI) has become a key player in shaping the future of technology. From self-driving cars to intelligent personal assistants, AI is pushing the boundaries of what machines can do...",
    topic: "Technology",
    tag: "Design",
    timeToRead: "5 min",
    writter: {
      name: "Jane Doe",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-01"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description: "Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
    image: "/assets/blog/Image2.webp",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description: "Everything you need to know to get started with JavaScript.",
    image: "/assets/blog/Image2.webp",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "/assets/peecee/Avatar.png",
      date: new Date("2024-09-10"),
    },
  },
];

export const positions = [
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We're looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We're looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We're looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We're looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We're looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We're looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
];
