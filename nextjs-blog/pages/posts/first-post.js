import Link from 'next/link';

const FirstPost = () => {
	return (
		<div>
			<h1>Hello World!</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</div>
	);
};

export default FirstPost;