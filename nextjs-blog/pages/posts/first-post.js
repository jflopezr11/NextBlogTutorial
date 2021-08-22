import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>Hello World!</title>
			</Head>
			<h1>Hello World! :D </h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</Layout>
	);
};

export default FirstPost;
