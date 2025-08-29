import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
@Injectable({ providedIn: 'root' })
export class SkillsService {
  skills = [
    // 🖥 Programming Languages
    {
      title: 'C#',
      image: 'images/icons/csharp-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'C# Icon',
      categoryIndex: 1,
    },
    {
      title: 'CSS',
      image: 'images/icons/css-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'CSS Icon',
      categoryIndex: 1,
    },
    {
      title: 'HTML',
      image: 'images/icons/html-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'HTML5 Icon',
      categoryIndex: 1,
    },
    {
      title: 'Java',
      image: 'images/icons/java-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Java Icon',
      categoryIndex: 1,
    },
    {
      title: 'JavaScript',
      image: 'images/icons/js-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'JavaScript Icon',
      categoryIndex: 1,
    },
    {
      title: 'PHP',
      image: 'images/icons/php-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'PHP Icon',
      categoryIndex: 1,
    },
    {
      title: 'Python',
      image: 'images/icons/python-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Python Icon',
      categoryIndex: 1,
    },
    {
      title: 'Ruby',
      image: 'images/icons/ruby-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Ruby Icon',
      categoryIndex: 1,
    },
    {
      title: 'TypeScript',
      image: 'images/icons/ts-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'TypeScript Icon',
      categoryIndex: 1,
    },

    // ⚙️ Frameworks & Libraries → Frontend
    {
      title: 'Angular.js',
      image: 'images/icons/angular-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Angular.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Bootstrap',
      image: 'images/icons/bootstrap-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Bootstrap Icon',
      categoryIndex: 2,
    },
    {
      title: 'Chart.js',
      image: 'images/icons/chartjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Chart.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Node.js',
      image: 'images/icons/node-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Node.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'React.js',
      image: 'images/icons/react-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'React Icon',
      categoryIndex: 2,
    },
    {
      title: 'React Router',
      image: 'images/icons/reactrouter-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'React Router Icon',
      categoryIndex: 2,
    },
    {
      title: 'Redux',
      image: 'images/icons/redux-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Redux Icon',
      categoryIndex: 2,
    },
    {
      title: 'TailwindCSS',
      image: 'images/icons/tailwind-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'TailwindCSS Icon',
      categoryIndex: 2,
    },

    // ⚙️ Frameworks & Libraries → Backend
    {
      title: 'Express.js',
      image: 'images/icons/expressjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Express.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Flask',
      image: 'images/icons/flask-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Flask Icon',
      categoryIndex: 2,
    },
    {
      title: 'Socket.io',
      image: 'images/icons/socket-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Socket.io Icon',
      categoryIndex: 2,
    },

    // ⚙️ Frameworks & Libraries → Fullstack / Meta-frameworks
    {
      title: 'Next.js',
      image: 'images/icons/nextjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
      alt: 'Next.js Icon',
      categoryIndex: 2,
    },
    {
      title: 'Vite',
      image: 'images/icons/vite-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
      alt: 'Vite Icon',
      categoryIndex: 2,
    },

    // ⚙️ Frameworks & Libraries → Utilities
    {
      title: 'JWT',
      image: 'images/icons/jwt-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Utilities',
      alt: 'JWT Icon',
      categoryIndex: 2,
    },

    // 🗄️ Databases & Storage
    {
      title: 'MongoDB',
      image: 'images/icons/mongodb-icon.png',
      category: 'Databases & Storage',
      subCategory: 'NoSQL',
      alt: 'MongoDB Icon',
      categoryIndex: 3,
    },
    {
      title: 'MySQL',
      image: 'images/icons/mysql-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Relational',
      alt: 'MySQL Icon',
      categoryIndex: 3,
    },
    {
      title: 'Postgres',
      image: 'images/icons/postgres-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Relational',
      alt: 'Postgres Icon',
      categoryIndex: 3,
    },
    {
      title: 'Supabase',
      image: 'images/icons/supabase-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Backend as a Service',
      alt: 'Supabase Icon',
      categoryIndex: 3,
    },

    // 🚀 Deployment & Hosting
    {
      title: 'Render',
      image: 'images/icons/render-icon.jpg',
      category: 'Deployment & Hosting',
      subCategory: 'Cloud Hosting',
      alt: 'Render Icon',
      categoryIndex: 4,
    },
    {
      title: 'Vercel',
      image: 'images/icons/vercel-icon.png',
      category: 'Deployment & Hosting',
      subCategory: 'Cloud Hosting',
      alt: 'Vercel Icon',
      categoryIndex: 4,
    },

    // 📊 Data Science & Machine Learning
    {
      title: 'Matplotlib',
      image: 'images/icons/matplotlib-icon.png',
      category: 'Data Science',
      subCategory: 'Visualization',
      alt: 'Matplotlib Icon',
      categoryIndex: 5,
    },
    {
      title: 'NumPy',
      image: 'images/icons/numpy-icon.png',
      category: 'Data Science',
      subCategory: 'Mathematics / Arrays',
      alt: 'NumPy Icon',
      categoryIndex: 5,
    },
    {
      title: 'Pandas',
      image: 'images/icons/pandas-icon.png',
      category: 'Data Science',
      subCategory: 'Data Analysis',
      alt: 'Pandas Icon',
      categoryIndex: 5,
    },

    // 🎨 Design & UI/UX
    {
      title: 'Canva',
      image: 'images/icons/canva-icon.png',
      category: 'Design & UI/UX',
      subCategory: 'Graphic Design',
      alt: 'Canva Icon',
      categoryIndex: 6,
    },
    {
      title: 'Figma',
      image: 'images/icons/figma-icon.png',
      category: 'Design & UI/UX',
      subCategory: 'Prototyping',
      alt: 'Figma Icon',
      categoryIndex: 6,
    },

    // 📂 Collaboration & Productivity Tools
    {
      title: 'PowerShell',
      image: 'images/icons/powershell-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Scripting / Automation',
      alt: 'PowerShell Icon',
      categoryIndex: 7,
    },
    {
      title: 'Git',
      image: 'images/icons/git-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Version Control',
      alt: 'Git Icon',
      categoryIndex: 7,
    },
    {
      title: 'GitHub',
      image: 'images/icons/github-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Version Control Hosting',
      alt: 'GitHub Icon',
      categoryIndex: 7,
    },
    {
      title: 'Notion',
      image: 'images/icons/notion-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Documentation / Notes',
      alt: 'Notion Icon',
      categoryIndex: 7,
    },
    {
      title: 'Postman',
      image: 'images/icons/postman-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'API Testing',
      alt: 'Postman Icon',
      categoryIndex: 7,
    },
    {
      title: 'Trello',
      image: 'images/icons/trello-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Project Management',
      alt: 'Trello Icon',
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
