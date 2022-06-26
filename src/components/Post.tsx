import Head from "next/head";
import { websiteName } from "../config";

interface PostProps extends React.PropsWithChildren {
	title: string;
}

const Post: React.FC<PostProps> = props => (
	<>
		<Head>
			<title>{`${props.title} - ${websiteName}`}</title>
		</Head>
		<div className="max-w-md md:max-w-lg m-auto">
			<div className="mx-4 pt-64">
				{props.title && <h1 className="font-serif text-5xl font-bold tracking-tight mb-4">
					{props.title}
				</h1>}
				{props.children}
			</div>
		</div>
	</>
);

export default Post;