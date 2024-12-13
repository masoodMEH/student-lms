import React from "react";

import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCard } from "./course-card";

export type CourseCardListProps = {
  courses: CourseSummary[];
};

export const CourseCardList: React.FC<CourseCardListProps> = ({
  courses,
}: CourseCardListProps) => {
  return (
    <div>
      <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-10">
        {courses.map((course) => (
          <CourseCard key={`course-${course.slug}`} {...course} />
        ))}
      </div>
    </div>
  );
};
