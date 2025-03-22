import Image from "next/image";
import { socialLinks } from "../config";

import { Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";


export default async function IndexPage(props: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await props.params;

	const dictionary = await getDictionary(lang);

	return (
		<section>
			<a href={socialLinks.tg} target="_blank">
				<Image
					src="/profile.jpg"
					alt=""
					className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
					unoptimized
					width={160}
					height={160}
					priority
				/>
			</a>
			<h1 className="mb-8 text-2xl font-medium tracking-tight">
				{dictionary.aboutMe}
			</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>
					{dictionary.introduction}
				</p>
				<p>
					{dictionary.mainexplanatiton_0} {""}
					<a
						target="_blank"
						href="https://core.telegram.org/tdlib"
					>
						TDLib (Telegram Database Library)
					</a> {" "}

					{dictionary.mainexplanatiton_1}
				</p>
				<p>
					{dictionary.conclusion_0}
					{" "}
					<a
						target="_blank"
						href="https://t.me/DatyBot"
					>
						{dictionary.conclusion_1}
					</a> {" "}
					{dictionary.conclusion_2}
				</p>

			</div>
		</section>
	);
}
