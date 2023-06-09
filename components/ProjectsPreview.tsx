import React from "react";
import Link from "next/link";
import Image from 'next/image'
const ProjectPreview = (props: any) => {

    return (
        <>
            <div className="max-w-full">
                <main className="grid grid-cols-3 gap-10">
                    {props.projects.projects.map((project: any, i: number) => (
                        <>
                            <div className="card card-compact w-96 bg-base-100 shadow-xl">

                                {project.attributes.gallery.data.map((img: any, i: number) => {
                                    return <figure key={i}>
                                        <Image src={img.attributes.url} alt={''} width={500} height={500} />
                                    </figure>;
                                }
                                )}

                                <div className="card-body">
                                    <Link href={`/projects/${project.id}`} key={i}  >
                                        <h2 className="card-title">{project.attributes.name}</h2>
                                    </Link>
                                    <p>{project.attributes.description}</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/projects/${project.id}`} key={i}  >
                                            <button className="btn btn-primary">Show more</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </main>
            </div>
        </>
    );
};
export default ProjectPreview;