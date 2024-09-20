
import { Heading } from '@/components/shared/heading';
import { Metadata } from 'next';

import { projects } from '../_data';
import { ProjectCard } from '@/components/shared/project-card';


export const metadata: Metadata = {
  title: "Manik | Project",
  description: "project show details",
};

type TProject = {
  _id: string;
  name: string;
  coverUrl: string;
  description: string;
  links: {
    client: string;
    server: string;
    live: string;
  };
  technologies: (string | undefined)[]; // Allow string or undefined
};


export default function ProjectsPage() {
  return (
    <main className="container my-12">
      <Heading>My Works.</Heading>
      <div className="mt-6 grid gap-12 md:grid-cols-2">
        {projects.map((project:TProject) => (
          <ProjectCard key={project.name} {...project} technologies={project.technologies.filter((tech): tech is string => !!tech)}/>
        ))}
      </div>
    </main>
  );
}