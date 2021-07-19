import { Card, Title, Figure, Content } from "./style";
import Link from "next/link";

export const Post = () => {
  return (
		<Link href="/post/example" passHref>
			<Card>
				<Figure>
					<img alt="post image" src="/image1.jpg"/>
				</Figure>
				<Title>Post title</Title>
				<Content>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nulla a laboriosam aperiam ab repudiandae aliquam itaque cumque, aspernatur dolorum expedita quod vero ratione nam pariatur corporis doloribus optio quisquam?</p>
				</Content>
			</Card>
		</Link>);
};
