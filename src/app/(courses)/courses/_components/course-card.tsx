import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Badge } from "@/app/_components/badge";
import { Price } from "@/app/_components/price/price";

import { CourseSummary } from "@/types/course-summary.interface";

export type CourseCardProps = CourseSummary & {};

export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="flex mt-2 gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`}>{title}</Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between mt-3">
          <Badge variant="warning">{duration}</Badge>
          <Price price={basePrice} />
        </div>
      </div>
      <Link href={`/courses/${slug}`} className="card-footer justify-center">
        مشاهده جزئیات دوره
      </Link>
    </div>
  );
};
