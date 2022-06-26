import Image from "next/image";
import Link from "next/link";
import { navbar, Home } from "@/routes";

const NavbarLink = props => {
	return <Link href={props.href}>
		<a className="text-md font-semibold flex items-center px-2 min-h-44 lowercase">{props.children}</a>
	</Link>;
};

export default function Navbar() {
	return (
		<header className="p-4 md:p-6 fixed w-full flex justify-between items-center">
			<Link href={Home.href}>
				<a>
					<Image src="/logo.svg" alt="Logo" height={80} width={80} />
				</a>
			</Link>
			
			<nav className="font-serif flex gap-4">
				{navbar.map(route => (
					<NavbarLink
						href={route.href}
						key={route.href}
					>
						{route.displayName}
					</NavbarLink>
				))}
			</nav>
		</header>
	);
}