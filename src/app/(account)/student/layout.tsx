import { ReactNode } from "react";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <aside className="bg-base-75 w-80 flex justify-center items-center self-stretch text-3xl">
        STUDENT SIDEBAR
      </aside>
      <main className="flex justify-center items-center flex-1 text-5xl">
        {children}
      </main>
    </>
  );
}
