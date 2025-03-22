import Link from "next/link";
import { projects } from "./project-data"; // Импортируем локализированные данные

import type { Metadata } from "next";

import { Locale } from 'i18n-config';
import { getDictionary } from 'get-dictionary';

export const metadata: Metadata = {
  title: "Projects",
  description: "My Last Projects",
};

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">{dictionary.my_projects_title}</h1>
      <div>
        {projects[lang].map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col mb-5 transition-opacity duration-200 hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Блок с названием проекта */}
            <div className="w-full mb-2">
              <h2 className="text-black dark:text-white text-lg">{project.title}</h2>
            </div>

            {/* Блок с описанием проекта */}
            <div className="w-full">
              <p className="text-neutral-600 dark:text-neutral-400 text-[15px]">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
