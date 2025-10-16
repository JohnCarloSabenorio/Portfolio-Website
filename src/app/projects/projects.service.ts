import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects = [
    {
      name: 'PartnAR',
      description:
        'An Augmented Reality business card system with a CMS for dynamic updates and interactive employee information.',
      summary:
        'PartnAR is a thesis project at LPU-Cavite that combines Augmented Reality and Content Management Systems to create interactive business cards. The AR cards display employee information, media, and university details through a smartphone app. The CMS allows administrators to update content dynamically, ensuring data accuracy. The project also integrates computer vision techniques such as Kalman filtering to improve marker stability and tracking.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'Node.js', image: 'images/icons/node-icon.png' },
        { name: 'Express.js', image: 'images/icons/express.png' },
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'Postman', image: 'images/icons/postman-icon.png' },
        { name: 'Supabase', image: 'images/icons/supabase-icon.png' },
        { name: 'Unity', image: 'images/icons/unity-icon.png' },
        { name: 'C#', image: 'images/icons/csharp-icon.png' },
        { name: 'Vuforia', image: 'images/icons/vuforia-icon.jpg' },
      ],
      iconLink: 'images/logos/partnar-logo.jpeg',
      repoLink: 'https://github.com/JohnCarloSabenorio/PartnAR-CMS',
    },
    {
      name: 'Voce',
      description:
        'A multilingual audio-to-text translator powered by OpenAI Whisper, Google Translate, and PyDictionary.',
      summary:
        'Voce is a multilingual audio-to-text translator web application developed collaboratively. It accepts audio files or recorded audio, converts them into text using OpenAI Whisper, and translates the results into over 100 supported languages via Google Translate. To support learning, it integrates PyDictionary for word definitions when translating into English. My main role was focused on backend and database implementation, ensuring efficient handling of audio files, translations, and dictionary lookups.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'PHP', image: 'images/icons/php-icon.png' },
        { name: 'Python', image: 'images/icons/python-icon.png' },
        { name: 'Flask', image: 'images/icons/flask-icon.png' },
        { name: 'MySQL', image: 'images/icons/mysql-icon.png' },
      ],
      iconLink: 'images/logos/voce-logo.jpg',
      repoLink: 'https://github.com/JohnCarloSabenorio/voce',
    },
    {
      name: 'AIris',
      description:
        'An AI chatbot platform with specialized personas, DALL·E image generation, and stored chat history.',
      summary:
        'AIris is an AI-powered chatbot platform created within a three-week rapid development cycle by a team of five developers. It offers multiple AI personas tailored to different needs, including a Marketing Specialist, HR Assistant, Education Tutor, and Intern Advisor. The system also supports image generation through the DALL·E model and maintains persistent chat history in a database for future reference. I contributed as a backend developer, handling database integration, API design, and persona routing logic.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'Next.js', image: 'images/icons/nextjs-icon.png' },
        { name: 'React.js', image: 'images/icons/react-icon.png' },
        { name: 'PostgreSQL', image: 'images/icons/postgres-icon.png' },
      ],
      iconLink: 'images/logos/airis-logo.png',
      repoLink: 'https://github.com/JohnCarloSabenorio/Airis',
    },
    {
      name: 'Natours',
      description:
        'A Node.js/Express.js tour booking system with authentication, RESTful APIs, and MVC architecture.',
      summary:
        'Natours is a tour reservation and booking application developed as part of a Node.js and Express.js bootcamp project. It allows users to explore available tours, view detailed information, make reservations, and manage bookings. The system implements RESTful APIs, user authentication, secure data handling, and follows the MVC architecture for maintainability. This project served as a practical exercise to strengthen backend web development skills in building scalable applications.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'Express.js', image: 'images/icons/expressjs-icon.png' },
        { name: 'Node.js', image: 'images/icons/node-icon.png' },
        { name: 'MongoDB', image: 'images/icons/mongodb-icon.png' },
        { name: 'Postman', image: 'images/icons/postman-icon.png' },
      ],
      iconLink: 'images/logos/natours-logo.png',
      repoLink: 'https://github.com/JohnCarloSabenorio/Natours',
    },
    {
      name: 'JConnect',
      description:
        'A real-time chat app with private/group messaging and live presence powered by WebSockets.',
      summary:
        'JConnect is a real-time chat application designed for instant and seamless communication. It supports one-on-one and group conversations, as well as live user presence indicators. Built with WebSockets, it ensures low-latency message delivery and synchronized communication across devices. The platform demonstrates knowledge in socket-based programming and real-time systems, with features aimed at delivering a smooth messaging experience.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'Express.js', image: 'images/icons/expressjs-icon.png' },
        { name: 'Node.js', image: 'images/icons/node-icon.png' },
        { name: 'React.js', image: 'images/icons/react-icon.png' },
        { name: 'MongoDB', image: 'images/icons/mongodb-icon.png' },
        { name: 'Postman', image: 'images/icons/postman-icon.png' },
        { name: 'TailwindCSS', image: 'images/icons/tailwind-icon.png' },
        { name: 'Redux', image: 'images/icons/redux-icon.png' },
      ],
      iconLink: 'images/logos/jconnect-logo.png',
      repoLink: 'https://github.com/JohnCarloSabenorio/JConnect',
    },
    {
      name: 'GameVault (In Development)',
      description:
        'A full-stack web app that lets users catalog, rate, and discuss video games with other people who share similar interests.',
      summary:
        'JConnect is a real-time chat application designed for instant and seamless communication. It supports one-on-one and group conversations, as well as live user presence indicators. Built with WebSockets, it ensures low-latency message delivery and synchronized communication across devices. The platform demonstrates knowledge in socket-based programming and real-time systems, with features aimed at delivering a smooth messaging experience.',
      dateAccomplished: new Date(),
      imageLinks: [],
      technologies: [
        { name: 'HTML', image: 'images/icons/html-icon.png' },
        { name: 'CSS', image: 'images/icons/css-icon.png' },
        { name: 'JavaScript', image: 'images/icons/js-icon.png' },
        { name: 'React.js', image: 'images/icons/react-icon.png' },
        { name: 'TailwindCSS', image: 'images/icons/tailwind-icon.png' },
        { name: 'ASP.Net', image: 'images/icons/aspnet-icon.png' },
        { name: 'MS SQL Server', image: 'images/icons/mssql-icon.png' },
        { name: 'Swagger', image: 'images/icons/swagger-icon.png' },
      ],
      iconLink: 'images/logos/gamevault-logo.png',
      repoLink: 'https://github.com/JohnCarloSabenorio/JConnect',
    },
  ];

  getAllProjects() {
    return this.projects;
  }
}
