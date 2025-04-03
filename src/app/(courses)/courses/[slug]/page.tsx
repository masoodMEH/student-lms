import { API_URL } from "@/configs/global";
import * as courseDetailsInterface from "@/types/course-details.interface";

export async function generateStaticParams() {
  const slugs = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slugs as string[]).map((slug) => ({
    slug: slug
  }))
}

async function getCourse(slug: string): Promise<courseDetailsInterface.CourseDetails> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json()
}

export default async function CourseDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const courseData = await getCourse(slug);
  return (
    <div className="text-5xl flex justify-center items-center">
      <h1>{courseData.title}</h1>
    </div>
  );
}
