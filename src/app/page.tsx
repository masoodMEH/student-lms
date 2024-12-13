import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCardList } from "./(courses)/courses/_components/course-card-list";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60, //86400 seconds - 1 day,
      },
    }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  console.log(newestCourses[0].title);
  return (
    <>
      <HomeHeroSection />

      <section className="container pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p>برای به روز ماندن ، یاد گرفتن نکنه های تازه ضروریه!</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
