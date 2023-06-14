import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const inter = Inter({ subsets: ['latin'] })

interface Data {
  id: string,
  project: any
  gallery?: []
}

export default function Projets({ id, project }: Data) {

  return (
    <>
      <section className="h-screen bg-center bg-no-repeat v bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 flex items-center justify-center h-screen mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-9xl">
            {project.name}
          </h1>
        </div>
      </section>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-zinc-900">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Description
                  </h2>
                  <p className="text-white text-base md:text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
              {project.gallery.data.map((img: any, i: number) =>
                <div key={i}>
                  <Image src={img.attributes.url} alt={''}></Image>
                </div>
              )}
            </div>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
              <Image
                alt="logo"
                width={450}
                height={450}
                src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                    Technologies
                  </h2>
                  <p className="text-white text-base md:text-lg">
                    Lorem Ipsum is so cool and awesome to act and so cool to think. And
                    very awesome to eat and talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" text-right mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-9xl">
          Screenshot
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper max-w-full"
        >
          <SwiperSlide><Image src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg" className="rounded-box max-w-md" alt={''} /></SwiperSlide>
          <SwiperSlide><Image src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg" className="rounded-box max-w-md" alt={''} /></SwiperSlide>
          <SwiperSlide><Image src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg" className="rounded-box max-w-md" alt={''} /></SwiperSlide>
          <SwiperSlide><Image src="https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg" className="rounded-box max-w-md" alt={''} /></SwiperSlide>
        </Swiper>



      </main>
    </>
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
