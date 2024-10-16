import { projects } from '@/app/_data';
import { Parsed } from '@/components/shared/parsed/parsed';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Manik | Details",
  description: "project show details",
};

type TProps = {
  params: { projectId: string };
};

export default function ProjectDetailsPage({ params: { projectId } }: TProps) {
  const projectDetails = projects.find((project) => project._id === projectId);

  if (!projectDetails)
    return <p className="my-6 text-center font-semibold">No Project Found</p>;

  const { name, description, coverUrl, technologies, links, _id } =
    projectDetails;

  return (
    <main className="container flex flex-col-reverse gap-12 py-6 lg:flex-row px-2">
      <section className="w-full bg-white p-5 rounded-md">
        <h1 className="mb-4 text-2xl font-semibold text-black">{name}</h1>
        <Parsed className="text-black" data={description} />
      </section>
      <section className="w-full bg-white p-5 rounded-md">
        <Image
          width={600}
          height={600}
          alt="cover-image"
          className="rounded-lg"
          src={coverUrl}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              className="flex-1 whitespace-nowrap rounded-md bg-slate-500 text-white px-3 py-1 text-center text-xs font-semibold"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-end gap-3">
          <Link href={links.client} target="_blank">
            <Button className="w-full" variant={'outline'}>
              Client
            </Button>
          </Link>

          <Link href={links.server} target="_blank">
            <Button className="w-full" variant={'outline'}>
              Server
            </Button>
          </Link>

          <Link href={links.live} target="_blank">
            <Button className="w-full">Live Site</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}