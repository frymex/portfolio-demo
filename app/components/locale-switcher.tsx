"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../i18n-config";

export default function LocaleSwitcher() {
	const pathname = usePathname();

	// Извлекаем текущую локаль из пути (например, /en-US/products -> en-US)
	const currentLocale = pathname?.split("/")[1];

	// Функция для построения нового пути с выбранной локалью
	const redirectedPathname = (locale: Locale) => {
		if (!pathname) return "/";
		const segments = pathname.split("/");
		segments[1] = locale; // Заменяем текущую локаль на новую
		return segments.join("/");
	};

	return (
		<div>
			<ul>
				{/* Отображаем все локали, кроме текущей */}
				{i18n.locales
					.filter((locale) => locale !== currentLocale) // Исключаем текущую локаль
					.map((locale) => {
						return (
							<li key={locale}>
								<Link href={redirectedPathname(locale)}>{locale}</Link>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
