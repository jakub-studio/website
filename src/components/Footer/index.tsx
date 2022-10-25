import Link from "next/link";
import React, { PropsWithChildren } from "react";

import {
	Route,
	Colophon,
	Privacy,
	Legal,
	WorksIndex,
	About,
	Contact
} from "@/routes";

import { isProd } from "@/utils";
import SocialIcons from "./SocialIcons";
import ThemePicker from "./ThemePicker";

const TextLink: React.FC<{ route: Route }> = props => {
	return <Link href={props.route.href}>
		<a className="min-w-44 min-h-44 flex items-center opacity-70 hover:opacity-100 hover:underline ease transition-opacity duration-150">
			{props.route.displayName}
		</a>
	</Link>;
};

const FooterColumn: React.FC<PropsWithChildren> = props => {
	return <div className="flex flex-col w-16">
		{props.children}
	</div>;
};

const Footer: React.FC = () => {
	return (
		<footer className="font-sans text-sm items-center mt-12 pb-6 print:pb-2 select-none mx-10">
			<hr className="opacity-30 mb-4" />
			<div className="flex justify-between">
				<div>
					<div className="flex flex-row gap-4 mb-6 print:hidden">
						<FooterColumn>
							<TextLink route={WorksIndex} />
							<TextLink route={Privacy} />
						</FooterColumn>

						<FooterColumn>
							<TextLink route={About} />
							<TextLink route={Legal} />
						</FooterColumn>

						<FooterColumn>
							<TextLink route={Contact} />
						</FooterColumn>

						<FooterColumn>
							<TextLink route={Colophon} />
						</FooterColumn>
					</div>

					<div className="opacity-70 mb-6 mt-4 print:mb-0 flex flex-col gap-10">
						<ThemePicker />
						Copyright © {new Date().getFullYear()} Jakub Staniszewski. All rights reserved.
					</div>
				</div>
				<SocialIcons />
			</div>

			{(!isProd) && false && <div className=" px-4 py-2 bg-foreground text-background tracking-wide max-w-2xl mx-auto">
				This is a development version of my website which is <strong>not intended</strong> for public viewing. If you believe you are here by mistake, click <a className="underline min-h-44 min-w-44" href="https://jakub.studio">here</a> to go to my public website.
			</div>}
		</footer>
	);
};

export default Footer;