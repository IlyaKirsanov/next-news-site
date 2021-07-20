import Link from 'next/link'
import { Post } from '../../shared/types'
import { Title, Figure, Content, Meta } from './PostBodyStyle'

type PostBodyProps = {
	post: Post
}

export const PostBody = ({ post }: PostBodyProps) => {
	return (
		<div>
			<Title>{post.title}</Title>
			<Figure>
				<img src={post.image} alt={post.title} />
			</Figure>
			<Content dangerouslySetInnerHTML={{ __html: post.content }} />
			<Meta>
				<Link href={`/category/${post.category}`}>
					<a>{post.category}</a>
				</Link>
				<span>{post.date}</span>
				<span>&middot;</span>
				<a href={post.source}>Source</a>
			</Meta>
		</div>
	)
}