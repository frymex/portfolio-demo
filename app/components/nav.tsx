import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import LocaleSwitcher from './locale-switcher';
import { Locale } from 'i18n-config';

import { getDictionary } from "../../get-dictionary";



interface NavbarProps {
  language: Locale;
}

export async function Navbar({ language }: NavbarProps) {
  const dictionary = await getDictionary(language);

  const navItems = {
    "/projects": { name: dictionary.projects },
  };

  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href={`/${language}`} className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={`/${language}${path}`}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
