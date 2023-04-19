import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface Data {
  id: string,
  project: any
}

export default function Projets({ id, project }: Data) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      AAA {id} {JSON.stringify(project)}
      {project.name}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Contacts
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  andreacazzola90@gmail.com
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}


export async function getServerSideProps(context: any) {
  const { params } = context
  const { id } = params

  const res = await fetch(`${process.env.API_HOST}/projects/${id}`)
  const project = await res.json()


  return {
    props: {
      id,
      project: project.data.attributes
    }
  };
}
