import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import ProjectPreview from '@/components/ProjectsPreview'
import Projets from './[id]';

const inter = Inter({ subsets: ['latin'] })

interface Project {
  id: string
  name: string
  description: string
  attributes: {
    name: string
    description: string
    gallery: any

  }
}
interface Projects {
  projects: any
}
export default function Home({ projects }: Projects) {

  return (
    <main className="flex  flex-col items-center justify-between ">
      {projects.map((project: any, i: number) => (
        <Link href={`/projects/${project.id}`} key={i} className='project-preview' >
          {project.attributes.name}
          {project.attributes.description}
          {console.log(JSON.stringify(project))}
          {project.id}
        </Link>
      ))}
    </main>
  )
}

export async function getServerSideProps() {

  const res = await fetch(`${process.env.API_HOST}/projects`)
  const projects = await res.json()

  return {
    props: {
      projects: projects.data
    }
  };
}
