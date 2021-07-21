import Link from 'next/link'
import Image from "next/image"
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
				<Image
					alt={post.title}
					src={post.image}
					loading="lazy"
					layout="responsive"
					objectFit="cover"
					objectPosition="center"
					width={960}
					height={340}
					sizes="(min-width: 1000px) 320px, 100vw"
				/>
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