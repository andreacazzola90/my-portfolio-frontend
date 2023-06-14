
import ProjectPreview from '@/components/ProjectsPreview';






export default function Home(data: any) {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between p-24">
      <ProjectPreview projects={data} />
    </main>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  const res = await fetch(`${process.env.API_HOST}/projects?populate=*`)
  const projects = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects: projects.data
    },
  }
}
