import "../global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-switch";
import { metaData } from "../config";

import { i18n, type Locale } from "../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL(metaData.baseUrl),
	title: {
		default: metaData.title,
		template: `%s | ${metaData.title}`,
	},
	description: metaData.description,
	openGraph: {
		title: metaData.title,
		description: metaData.description,
		url: metaData.baseUrl,
		siteName: metaData.name,
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: metaData.name,
		card: "summary_large_image",
	},
	icons: {
		icon: "/favicon.ico",
	},
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout(props: {
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}) {
	const params = await props.params;
	const { children } = props;
	return (
		<html lang={params.lang} className={`${inter.className}`}>
			<body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[624px] w-full">
						<Navbar language={params.lang} />
						{children}
						<Footer />
						<Analytics />
						<SpeedInsights />
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
