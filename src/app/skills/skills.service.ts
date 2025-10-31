import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
@Injectable({ providedIn: 'root' })
export class SkillsService {
  skills = [
    // 🖥 Languages
    {
      title: 'C#',
      image: 'images/icons/csharp-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'C# Icon',
      categoryIndex: 1,
    },
    {
      title: 'CSS',
      image: 'images/icons/css-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'CSS Icon',
      categoryIndex: 1,
    },
    {
      title: 'HTML',
      image: 'images/icons/html-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'HTML5 Icon',
      categoryIndex: 1,
    },
    {
      title: 'Java',
      image: 'images/icons/java-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'Java Icon',
      categoryIndex: 1,
    },
    {
      title: 'JavaScript',
      image: 'images/icons/js-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'JavaScript Icon',
      categoryIndex: 1,
    },
    {
      title: 'PHP',
      image: 'images/icons/php-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'PHP Icon',
      categoryIndex: 1,
    },
    {
      title: 'Python',
      image: 'images/icons/python-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'Python Icon',
      categoryIndex: 1,
    },
    {
      title: 'Ruby',
      image: 'images/icons/ruby-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'Ruby Icon',
      categoryIndex: 1,
    },
    {
      title: 'TypeScript',
      image: 'images/icons/ts-icon.png',
      category: 'Languages',
      subCategory: '',
      alt: 'TypeScript Icon',
      categoryIndex: 1,
    },

    // ⚙️ Frameworks → Frontend
    {
      title: 'Angular.js',
      image: 'images/icons/angular-icon.png',
      category: 'Frameworks',
      subCategory: 'Frontend',
      alt: 'Angular.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Bootstrap',
      image: 'images/icons/bootstrap-icon.png',
      category: 'Frameworks',
      subCategory: 'Frontend',
      alt: 'Bootstrap Icon',
      categoryIndex: 2,
    },
    {
      title: 'Chart.js',
      image: 'images/icons/chartjs-icon.png',
      category: 'Libraries',
      subCategory: 'Frontend',
      alt: 'Chart.js Icon',
      categoryIndex: 3,
    },
    {
      title: 'Node.js',
      image: 'images/icons/node-icon.png',
      category: 'Frameworks',
      subCategory: 'Backend',
      alt: 'Node.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'React.js',
      image: 'images/icons/react-icon.png',
      category: 'Frameworks',
      subCategory: 'Frontend',
      alt: 'React Icon',
      categoryIndex: 2,
    },
    {
      title: 'React Router',
      image: 'images/icons/reactrouter-icon.png',
      category: 'Libraries',
      subCategory: 'Frontend',
      alt: 'React Router Icon',
      categoryIndex: 3,
    },
    {
      title: 'Redux',
      image: 'images/icons/redux-icon.png',
      category: 'Libraries',
      subCategory: 'Frontend',
      alt: 'Redux Icon',
      categoryIndex: 3,
    },
    {
      title: 'TailwindCSS',
      image: 'images/icons/tailwind-icon.png',
      category: 'Frameworks',
      subCategory: 'Frontend',
      alt: 'TailwindCSS Icon',
      categoryIndex: 2,
    },

    // ⚙️ Frameworks → Backend
    {
      title: 'Express.js',
      image: 'images/icons/expressjs-icon.png',
      category: 'Frameworks',
      subCategory: 'Backend',
      alt: 'Express.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Flask',
      image: 'images/icons/flask-icon.png',
      category: 'Frameworks',
      subCategory: 'Backend',
      alt: 'Flask Icon',
      categoryIndex: 2,
    },
    {
      title: 'ASP.NET',
      image: 'images/icons/aspnet-icon.png',
      category: 'Frameworks',
      subCategory: 'Backend',
      alt: 'ASP.net Icon',
      categoryIndex: 2,
    },
    {
      title: 'Socket.io',
      image: 'images/icons/socket-icon.png',
      category: 'Libraries',
      subCategory: 'Backend',
      alt: 'Socket.io Icon',
      categoryIndex: 3,
    },

    // ⚙️ Frameworks → Fullstack / Meta-frameworks
    {
      title: 'Next.js',
      image: 'images/icons/nextjs-icon.png',
      category: 'Frameworks',
      subCategory: 'Fullstack / Meta-frameworks',
      alt: 'Next.js Icon',
      categoryIndex: 2,
    },

    // ⚙️ Frameworks → Utilities

    // 🗄️ Databases
    {
      title: 'MongoDB',
      image: 'images/icons/mongodb-icon.png',
      category: 'Databases',
      subCategory: 'NoSQL',
      alt: 'MongoDB Icon',
      categoryIndex: 4,
    },
    {
      title: 'MySQL',
      image: 'images/icons/mysql-icon.png',
      category: 'Databases',
      subCategory: 'Relational',
      alt: 'MySQL Icon',
      categoryIndex: 4,
    },
    {
      title: 'Postgres',
      image: 'images/icons/postgres-icon.png',
      category: 'Databases',
      subCategory: 'Relational',
      alt: 'Postgres Icon',
      categoryIndex: 4,
    },
    {
      title: 'MS SQL',
      image: 'images/icons/mssql-icon.png',
      category: 'Databases',
      subCategory: 'Relational',
      alt: 'MS SQL Icon',
      categoryIndex: 4,
    },
    {
      title: 'Supabase',
      image: 'images/icons/supabase-icon.png',
      category: 'Databases',
      subCategory: 'Backend as a Service',
      alt: 'Supabase Icon',
      categoryIndex: 4,
    },

    // 🚀 Deployment & Hosting
    {
      title: 'Render',
      image: 'images/icons/render-icon.jpg',
      category: 'Deployment',
      subCategory: 'Cloud Hosting',
      alt: 'Render Icon',
      categoryIndex: 5,
    },
    {
      title: 'Vercel',
      image: 'images/icons/vercel-icon.png',
      category: 'Deployment',
      subCategory: 'Cloud Hosting',
      alt: 'Vercel Icon',
      categoryIndex: 5,
    },
    {
      title: 'Netlify',
      image: 'images/icons/netlify-icon.png',
      category: 'Deployment',
      subCategory: 'Cloud Hosting',
      alt: 'Netlify Icon',
      categoryIndex: 5,
    },
    {
      title: 'Docker',
      image: 'images/icons/docker-icon.png',
      category: 'Deployment',
      subCategory: 'Containerization',
      alt: 'Docker Icon',
      categoryIndex: 5,
    },

    // 📊 Data Science & Machine Learning
    {
      title: 'Matplotlib',
      image: 'images/icons/matplotlib-icon.png',
      category: 'Libraries',
      subCategory: 'Utilities',
      alt: 'Matplot Icon',
      categoryIndex: 3,
    },
    {
      title: 'NumPy',
      image: 'images/icons/numpy-icon.png',
      category: 'Libraries',
      subCategory: 'Utilities',
      alt: 'Numpy Icon',
      categoryIndex: 3,
    },
    {
      title: 'Pandas',
      image: 'images/icons/pandas-icon.png',
      category: 'Libraries',
      subCategory: 'Utilities',
      alt: 'Pandas Icon',
      categoryIndex: 3,
    },

    // 🎨 Design
    {
      title: 'Canva',
      image: 'images/icons/canva-icon.png',
      category: 'Design',
      subCategory: 'Graphic Design',
      alt: 'Canva Icon',
      categoryIndex: 6,
    },
    {
      title: 'Figma',
      image: 'images/icons/figma-icon.png',
      category: 'Design',
      subCategory: 'Prototyping',
      alt: 'Figma Icon',
      categoryIndex: 6,
    },

    // 📂 Collaboration & Productivity Tools
    {
      title: 'PowerShell',
      image: 'images/icons/powershell-icon.png',
      category: 'Tools',
      subCategory: 'Scripting / Automation',
      alt: 'PowerShell Icon',
      categoryIndex: 7,
    },
    {
      title: 'Git',
      image: 'images/icons/git-icon.png',
      category: 'Tools',
      subCategory: 'Version Control',
      alt: 'Git Icon',
      categoryIndex: 7,
    },
    {
      title: 'GitHub',
      image: 'images/icons/github-icon.png',
      category: 'Tools',
      subCategory: 'Version Control Hosting',
      alt: 'GitHub Icon',
      categoryIndex: 7,
    },
    {
      title: 'Notion',
      image: 'images/icons/notion-icon.png',
      category: 'Tools',
      subCategory: 'Documentation / Notes',
      alt: 'Notion Icon',
      categoryIndex: 7,
    },
    {
      title: 'Postman',
      image: 'images/icons/postman-icon.png',
      category: 'Tools',
      subCategory: 'API Testing',
      alt: 'Postman Icon',
      categoryIndex: 7,
    },
    {
      title: 'Trello',
      image: 'images/icons/trello-icon.png',
      category: 'Tools',
      subCategory: 'Project Management',
      alt: 'Trello Icon',
      categoryIndex: 7,
    },
    {
      title: 'Stripe',
      image: 'images/icons/stripe-icon.png',
      category: 'Tools',
      subCategory: 'Payment Processing',
      alt: 'Stripe Icon',
      categoryIndex: 7,
    },
    {
      title: 'Swagger',
      image: 'images/icons/swagger-icon.png',
      category: 'Tools',
      subCategory: 'API Testing',
      alt: 'Stripe Icon',
      categoryIndex: 7,
    },
  ];

  getCategories(): { [key: number]: String } {
    let categoriesObj: { [key: number]: String } = {};

    this.skills.forEach((skill) => {
      if (!(skill.categoryIndex in categoriesObj)) {
        categoriesObj[skill.categoryIndex] = skill.category;
      }
    });

    return categoriesObj;
  }

  getCategorizedSkills(): { [key: number]: Skill[] } {
    let skillsObj: { [key: number]: Skill[] } = {};

    this.skills.forEach((skill) => {
      if (skill.categoryIndex in skillsObj) {
        skillsObj[skill.categoryIndex].push(skill);
      } else {
        skillsObj[skill.categoryIndex] = [skill];
      }
    });

    return skillsObj;
  }

  getFilteredCategory(category: String) {
    return this.skills.filter((skill) => skill.category == category);
  }
  getFilteredSubcategory(subCategory: String) {
    return this.skills.filter((skill) => skill.subCategory == subCategory);
  }
}
