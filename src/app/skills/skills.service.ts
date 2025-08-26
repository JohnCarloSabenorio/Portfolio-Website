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
    },
    {
      title: 'CSS',
      image: 'images/icons/css-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'CSS Icon',
    },
    {
      title: 'HTML',
      image: 'images/icons/html-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'HTML5 Icon',
    },
    {
      title: 'Java',
      image: 'images/icons/java-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Java Icon',
    },
    {
      title: 'JavaScript',
      image: 'images/icons/js-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'JavaScript Icon',
    },
    {
      title: 'PHP',
      image: 'images/icons/php-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'PHP Icon',
    },
    {
      title: 'Python',
      image: 'images/icons/python-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Python Icon',
    },
    {
      title: 'Ruby',
      image: 'images/icons/ruby-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'Ruby Icon',
    },
    {
      title: 'TypeScript',
      image: 'images/icons/ts-icon.png',
      category: 'Programming Languages',
      subCategory: '',
      alt: 'TypeScript Icon',
    },

    // ⚙️ Frameworks & Libraries → Frontend
    {
      title: 'Angular.js',
      image: 'images/icons/angular-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Angular.js Icon',
    },
    {
      title: 'Bootstrap',
      image: 'images/icons/bootstrap-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Bootstrap Icon',
    },
    {
      title: 'Chart.js',
      image: 'images/icons/chartjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Chart.js Icon',
    },
    {
      title: 'React',
      image: 'images/icons/react-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'React Icon',
    },
    {
      title: 'React Router',
      image: 'images/icons/reactrouter-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'React Router Icon',
    },
    {
      title: 'Redux',
      image: 'images/icons/redux-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'Redux Icon',
    },
    {
      title: 'TailwindCSS',
      image: 'images/icons/tailwind-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
      alt: 'TailwindCSS Icon',
    },

    // ⚙️ Frameworks & Libraries → Backend
    {
      title: 'Express.js',
      image: 'images/icons/expressjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Express.js Icon',
    },
    {
      title: 'Flask',
      image: 'images/icons/flask-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Flask Icon',
    },
    {
      title: 'Socket.io',
      image: 'images/icons/socket-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
      alt: 'Socket.io Icon',
    },

    // ⚙️ Frameworks & Libraries → Fullstack / Meta-frameworks
    {
      title: 'Next.js',
      image: 'images/icons/nextjs-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
      alt: 'Next.js Icon',
    },
    {
      title: 'Vite',
      image: 'images/icons/vite-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
      alt: 'Vite Icon',
    },

    // ⚙️ Frameworks & Libraries → Utilities
    {
      title: 'JWT',
      image: 'images/icons/jwt-icon.png',
      category: 'Frameworks & Libraries',
      subCategory: 'Utilities',
      alt: 'JWT Icon',
    },

    // 🗄️ Databases & Storage
    {
      title: 'MongoDB',
      image: 'images/icons/mongodb-icon.png',
      category: 'Databases & Storage',
      subCategory: 'NoSQL',
      alt: 'MongoDB Icon',
    },
    {
      title: 'MySQL',
      image: 'images/icons/mysql-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Relational',
      alt: 'MySQL Icon',
    },
    {
      title: 'Postgres',
      image: 'images/icons/postgres-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Relational',
      alt: 'Postgres Icon',
    },
    {
      title: 'Supabase',
      image: 'images/icons/supabase-icon.png',
      category: 'Databases & Storage',
      subCategory: 'Backend as a Service',
      alt: 'Supabase Icon',
    },

    // 🚀 Deployment & Hosting
    {
      title: 'Render',
      image: 'images/icons/render-icon.png',
      category: 'Deployment & Hosting',
      subCategory: 'Cloud Hosting',
      alt: 'Render Icon',
    },
    {
      title: 'Vercel',
      image: 'images/icons/vercel-icon.png',
      category: 'Deployment & Hosting',
      subCategory: 'Cloud Hosting',
      alt: 'Vercel Icon',
    },

    // 📊 Data Science & Machine Learning
    {
      title: 'Matplotlib',
      image: 'images/icons/matplotlib-icon.png',
      category: 'Data Science & Machine Learning',
      subCategory: 'Visualization',
      alt: 'Matplotlib Icon',
    },
    {
      title: 'NumPy',
      image: 'images/icons/numpy-icon.png',
      category: 'Data Science & Machine Learning',
      subCategory: 'Mathematics / Arrays',
      alt: 'NumPy Icon',
    },
    {
      title: 'Pandas',
      image: 'images/icons/pandas-icon.png',
      category: 'Data Science & Machine Learning',
      subCategory: 'Data Analysis',
      alt: 'Pandas Icon',
    },
    {
      title: 'scikit-learn',
      image: 'images/icons/scikit-learn-icon.png',
      category: 'Data Science & Machine Learning',
      subCategory: 'Machine Learning',
      alt: 'scikit-learn Icon',
    },

    // 🎨 Design & UI/UX
    {
      title: 'Canva',
      image: 'images/icons/canva-icon.png',
      category: 'Design & UI/UX',
      subCategory: 'Graphic Design',
      alt: 'Canva Icon',
    },
    {
      title: 'Figma',
      image: 'images/icons/figma-icon.png',
      category: 'Design & UI/UX',
      subCategory: 'Prototyping',
      alt: 'Figma Icon',
    },
    {
      title: 'Dribbble',
      image: 'images/icons/dribbble-icon.png',
      category: 'Design & UI/UX',
      subCategory: 'Inspiration',
      alt: 'Dribbble Icon',
    },

    // 📂 Collaboration & Productivity Tools
    {
      title: 'PowerShell',
      image: 'images/icons/powershell-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Scripting / Automation',
      alt: 'PowerShell Icon',
    },
    {
      title: 'Git',
      image: 'images/icons/git-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Version Control',
      alt: 'Git Icon',
    },
    {
      title: 'GitHub',
      image: 'images/icons/github-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Version Control Hosting',
      alt: 'GitHub Icon',
    },
    {
      title: 'Notion',
      image: 'images/icons/notion-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Documentation / Notes',
      alt: 'Notion Icon',
    },
    {
      title: 'Postman',
      image: 'images/icons/postman-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'API Testing',
      alt: 'Postman Icon',
    },
    {
      title: 'Trello',
      image: 'images/icons/trello-icon.png',
      category: 'Collaboration & Productivity Tools',
      subCategory: 'Project Management',
      alt: 'Trello Icon',
    },
  ];

  getCategories(): String[] {
    return [...new Set(this.skills.map((skill) => skill.category))];
  }

  getCategorizedSkills(): { [key: string]: Skill[] } {
    let skillsObj: { [key: string]: Skill[] } = {};

    this.skills.forEach((skill) => {
      if (skill.category in skillsObj) {
        skillsObj[skill.category].push(skill);
      } else {
        skillsObj[skill.category] = [skill];
      }
    });

    return skillsObj;
  }

  getFilteredCategory(category: string) {
    return this.skills.filter((skill) => skill.category == category);
  }
  getFilteredSubcategory(subCategory: string) {
    return this.skills.filter((skill) => skill.subCategory == subCategory);
  }
}
