import Cursor from "@/components/Cursor";
import { singleProject } from "@/data/data";
import Image from "next/image";
import ProjectPageClient from "./ProjectPageClient";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const project = singleProject.find((p) => p.slug === slug);

  if (!project) return <p>There&apos;s no such thing!</p>;

  return (
    <>
      
        <ProjectPageClient project={project} />
      
    </>
  );
}
