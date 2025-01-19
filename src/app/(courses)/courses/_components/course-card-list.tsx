import React from "react";

import { API_URL } from "@/configs/global";
import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";

export type CourseCardListProps = { courses: CourseSummary[]; };

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60, //86400 seconds - 1 day,
      },
    }
  );
  return res.json();
}

export const CourseCardList: React.FC<CourseCardListProps> = async () => {
  const newestCoursesData = await getNewestCourses(4);

  await Promise.all([
    newestCoursesData,
  ]);

  return (
    <div>
      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-10">
        {newestCoursesData.map((course) => (
          <CourseCard key={`course-${course.slug}`} {...course} />
        ))}
      </div>
    </div>
  );
};
