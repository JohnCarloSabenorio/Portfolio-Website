import { Injectable } from '@angular/core';
import { Skill } from './skill.model';
@Injectable({ providedIn: 'root' })
export class SkillsService {
  skills = [
    {
      title: 'C#',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'CSS3',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'HTML5',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'Java',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'JavaScript',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'PHP',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'PowerShell',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'Python',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'Ruby',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },
    {
      title: 'TypeScript',
      image: '',
      category: 'Programming Languages',
      subCategory: '',
    },

    // ⚙️ Frameworks & Libraries → Frontend
    {
      title: 'Angular.js',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'Bootstrap',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'Chart.js',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'React',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'React Router',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'Redux',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },
    {
      title: 'TailwindCSS',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Frontend',
    },

    // ⚙️ Frameworks & Libraries → Backend
    {
      title: 'Express.js',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
    },
    {
      title: 'Flask',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
    },
    {
      title: 'Socket.io',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Backend',
    },

    // ⚙️ Frameworks & Libraries → Fullstack / Meta-frameworks
    {
      title: 'Next.js',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
    },
    {
      title: 'Vite',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Fullstack / Meta-frameworks',
    },

    // ⚙️ Frameworks & Libraries → Utilities
    {
      title: 'JWT (JSON Web Token)',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Utilities',
    },
    {
      title: 'Nodemon',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Utilities',
    },
    {
      title: 'NPM',
      image: '',
      category: 'Frameworks & Libraries',
      subCategory: 'Utilities',
    },

    // 🗄️ Databases & Storage
    {
      title: 'MongoDB',
      image: '',
      category: 'Databases & Storage',
      subCategory: '',
    },
    {
      title: 'MySQL',
      image: '',
      category: 'Databases & Storage',
      subCategory: '',
    },
    {
      title: 'Postgres',
      image: '',
      category: 'Databases & Storage',
      subCategory: '',
    },
    {
      title: 'Supabase',
      image: '',
      category: 'Databases & Storage',
      subCategory: '',
    },

    // 🚀 Deployment & Hosting
    {
      title: 'Render',
      image: '',
      category: 'Deployment & Hosting',
      subCategory: '',
    },
    {
      title: 'Vercel',
      image: '',
      category: 'Deployment & Hosting',
      subCategory: '',
    },

    // 📊 Data Science & Machine Learning
    {
      title: 'Matplotlib',
      image: '',
      category: 'Data Science & Machine Learning',
      subCategory: '',
    },
    {
      title: 'NumPy',
      image: '',
      category: 'Data Science & Machine Learning',
      subCategory: '',
    },
    {
      title: 'Pandas',
      image: '',
      category: 'Data Science & Machine Learning',
      subCategory: '',
    },
    {
      title: 'scikit-learn',
      image: '',
      category: 'Data Science & Machine Learning',
      subCategory: '',
    },

    // 🎨 Design & UI/UX
    { title: 'Canva', image: '', category: 'Design & UI/UX', subCategory: '' },
    { title: 'Figma', image: '', category: 'Design & UI/UX', subCategory: '' },
    {
      title: 'Dribbble',
      image: '',
      category: 'Design & UI/UX',
      subCategory: '',
    },

    // 📂 Collaboration & Productivity Tools
    {
      title: 'Git',
      image: '',
      category: 'Collaboration & Productivity Tools',
      subCategory: '',
    },
    {
      title: 'GitHub',
      image: '',
      category: 'Collaboration & Productivity Tools',
      subCategory: '',
    },
    {
      title: 'Notion',
      image: '',
      category: 'Collaboration & Productivity Tools',
      subCategory: '',
    },
    {
      title: 'Postman',
      image: '',
      category: 'Collaboration & Productivity Tools',
      subCategory: '',
    },
    {
      title: 'Trello',
      image: '',
      category: 'Collaboration & Productivity Tools',
      subCategory: '',
    },
  ];

  getCategories(): String[] {
    return [...new Set(this.skills.map((skill) => skill.category))];
  }

  getFilteredCategory(category: string) {
    return this.skills.filter((skill) => skill.category == category);
  }
  getFilteredSubcategory(subCategory: string) {
    return this.skills.filter((skill) => skill.subCategory == subCategory);
  }
}
