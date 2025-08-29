export interface Project {
  name: string;
  description: string;
  summary: string;
  dateAccomplished: Date;
  imageLinks: string[];
  technologies: { name: string; image: string }[];
  iconLink: string;
  repoLink: string;
}
