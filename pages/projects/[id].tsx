import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Data {
  id: string,
  project: any
  gallery?: []
}

export default function Projets({ id, project }: Data) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      {project.name}
      {project.description}
      {project.gallery.data.map((img: any) =>
        <div>
          <img src={img.attributes.url}></img>
        </div>
      )}

    </main>
  )
}


export async function getServerSideProps(context: any) {
  const { params } = context
  const { id } = params

  const res = await fetch(`${process.env.API_HOST}/projects/${id}?populate=*`)
  const project = await res.json()
  const gallery = project.data.gallery

  console.log(project)
  return {
    props: {
      id,
      project: project.data.attributes
    }
  };
}
