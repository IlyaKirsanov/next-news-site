import { Post } from "../Post";
import { Post as PostType } from '../../shared/types'
import { Grid, MoreLink, Title } from "./style";
import Link from 'next/link'


type SectionProps = {
	title: string;
	posts: PostType[];
	isCompact?: boolean;
};

export const Section = ({ title, posts, isCompact = false }: SectionProps) => {

	return (
		<section>
			<Title>{title}</Title>
			<Grid>
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</Grid>
			{isCompact && (
				<Link href={`/categories/${title}`} passHref>
					<MoreLink>More in {title}</MoreLink>
				</Link>
			)}
		</section>
	);
};
