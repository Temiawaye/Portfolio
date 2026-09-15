import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-bg-secondary card-lift">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Open ${title}`}
              className="no-underline text-link hover:text-link-hover active:text-link-active transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-code-bg text-text-secondary rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

