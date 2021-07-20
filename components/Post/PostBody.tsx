import Link from 'next/link'
import { Post } from '../../shared/types'
import { Breadcrums } from '../Breadcrumbs/Breadcrumbs'
import { Title, Figure, Content, Meta } from './PostBodyStyle'

type PostBodyProps = {
	post: Post
}

export const PostBody = ({ post }: PostBodyProps) => {
	return (
		<div>
			<Breadcrums post={post} />
			<Title>{post.title}</Title>
			<Figure>
				<img src={post.image} alt={post.title} />
			</Figure>
			<Content dangerouslySetInnerHTML={{ __html: post.content }} />
			<Meta>
				<Link href={`/categories/${post.category}`}>
					<a>{post.category}</a>
				</Link>
				<span>&middot;</span>
				<span>{post.date}</span>
				<span>&middot;</span>
				<a href={post.source}>Source</a>
			</Meta>
		</div>
	)
}