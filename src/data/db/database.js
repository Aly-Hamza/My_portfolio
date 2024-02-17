import Mock from "../mock";

const database = {
  information: {
    name: 'Ali Hamza',
    aboutContent: "Aspiring Web Developer specializing in creating advanced websites and applications. Love learning new technologies and  developing high-quality websites  for businesses and users. ",
    age: 24,
    phone: '',
    nationality: 'Pakistani',
    language: 'English, Urdu',
    email: '',
    address: 'Lahore, Pakistan',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/profile.php?id=100009955691116&mibextid=LQQJ4d',
      // twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/alyhamza/',
      instagram: 'https://www.instagram.com/malik_ali469?igsh=MTc5MzFjMmhjZTVkMg%3D%3D&utm_source=qr/',
      dribbble: '',
      github: 'https://github.com/Aiiexpert'
    },
    brandImage: '/images/brnd2.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpeg',
    cvfile: '/files/MERN_Ali_Hamza.pdf'
  },
  services: [
    {
      title: "MERN Stack Development",
      icon: 'code',
      details: "I specialize in full-stack web development using the MERN stack ,building scalable and efficient web applications. My expertise lies in integrating backend technologies with React-driven frontends to create seamless, high-performance web solutions"
    },
    
  ],

  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Tailwind Css",
      value: 85
    },
    {
      title: "Node Js",
      value: 65
    },
    {
      title: "MongoDB",
      value: 70
    },
    {
      title: "PostgreSQL",
      value: 70
    }
  ],
  portfolios: [
  
    {
      id: 1,
      title: "fitclub-body",
      subtitle: "React Js fitclub body gym website",
      imageUrl: "/images/fitclub.png",
      largeImageUrl: [
        "/images/fitclub.png",
        "/images/fitclub.png"
      ],
      url: 'https://fitclub-body.netlify.app/'
    },
    {
      id: 2,
      title: "Qubitars",
      subtitle: "Based on React Js ",
      imageUrl: "/images/qubitars.png",
      largeImageUrl: [
        "/images/qubitars.png",
        "/images/qubitars.png"
      ],
      url: 'https://qubitars-figma.netlify.app/'
    },

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2023 - Present",
        position: "MERN Stack Trainee",
        company: "Knowlege Streams",
        details: "Completed intensive training in MERN stack technologies and actively collaborated with developers to design user interfaces using React.js for enhanced user experience."
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2023",
        graduation: "BS Information Technology",
        university: "University of Education",
        details: "Studied a comprehensive curriculum covering computer science fundamentals, software development, algorithms, and database management. Graduated with a solid understanding of the principles and practices in computer science."
      },
      
    ]
  },
  
  contactInfo: {
    phoneNumbers: ['+92 308 6843920'],
    emailAddress: ['alyhamza.info@gmail.com'],
    address: "Lahore, Pakistan"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});