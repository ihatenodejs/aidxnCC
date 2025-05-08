import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import featuredProjects from '@/public/data/featured.json'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GitHubFeatured({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      {featuredProjects.map((project) => (
        <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-md min-h-[200px] flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              <FontAwesomeIcon icon={project.github ? faGithub : faGitAlt} className="mr-2" /> {project.name}
            </h3>
            <p className="text-gray-300 grow">{project.description}</p>
          </div>
          <div className="pt-4 border-t border-gray-700 flex justify-between items-center mt-auto">
            <Link href={project.url} className="text-blue-400 hover:underline">View Repo</Link>
            <div className="flex items-center text-gray-400">
              <FontAwesomeIcon icon={faStar} className="mr-1" /> {project.stars}
              <FontAwesomeIcon icon={faCodeBranch} className="ml-4 mr-1" /> {project.forks}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}