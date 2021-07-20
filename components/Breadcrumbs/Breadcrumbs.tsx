import Link from "next/link";
import { Post } from "../../shared/types";
import { Container } from "./style";

type BreadcrumbsProps = {
	post: Post;
};

export const Breadcrums = ({ post }: BreadcrumbsProps) => {
	return (
		<Container>
			<Link href="/">
				<a>Front</a>
			</Link>
			<span>0</span>
			<Link href={`/categories/${post.category}`}>
				<a>{post.category}</a>
			</Link>
		</Container>
	);
};