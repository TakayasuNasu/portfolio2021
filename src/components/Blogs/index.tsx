import React from 'react'
import type { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// components
import { H3, H4 } from '@/components/reusable/Headlines'

// style
import { StyledBlogs, StyledPostCard } from './styles'

const Blogs: FC = (): JSX.Element => {
  const {
    allContentfulPost: { nodes },
  } = useStaticQuery<Queries.ContentfulPostsQuery>(graphql`
    query ContentfulPosts {
      allContentfulPost {
        nodes {
          name
          slug
          publishedDate
          featured
          excerpt
          hashtags {
            name
          }
          heroImage {
            title
            description
            width
            height
            gatsbyImageData
          }
        }
      }
    }
  `)

  const maped = nodes.map((p, i) => ({
    i,
    value: p.featured,
    date: p.publishedDate || Date(),
  }))

  const posts = maped
    .sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) return 1
      if (new Date(a.date) > new Date(b.date)) return -1
      return 0
    })
    .sort(a => {
      if (a.value) return -1
      return 0
    })
    .map(v => nodes[v.i])
    .slice(0, 3) as Array<Queries.ContentfulPost>

  return (
    <StyledBlogs className="Blogs">
      <H3>Blog</H3>

      <ul className="grid">
        {posts.map((p, i) => {
          return (
            <li key={i}>
              <PostCard {...p} />
            </li>
          )
        })}
      </ul>
    </StyledBlogs>
  )
}

export default Blogs

type PostCardProp = Pick<
  Queries.ContentfulPost,
  'name' | 'slug' | 'excerpt' | 'hashtags' | 'heroImage' | 'publishedDate'
>

const PostCard: FC<PostCardProp> = ({
  name,
  slug,
  excerpt,
  hashtags,
  heroImage,
  publishedDate,
}) => {
  const image = getImage(heroImage?.gatsbyImageData || null)
  const alt = heroImage?.title || heroImage?.description || 'blog hero'
  const tag = hashtags?.at(0)

  return (
    <StyledPostCard>
      <figure>{image && <GatsbyImage image={image} alt={alt} />}</figure>

      <ul className="text">
        <li>
          <aside>{tag?.name}</aside>
        </li>

        <li>
          <H4>{name}</H4>
        </li>

        <li>
          <p>{excerpt}</p>
        </li>

        <li className="time">
          <time>{publishedDate}</time>
        </li>
      </ul>

      <a
        href={`https://weblog.i-nasu.com/taka7beckham/${slug}`}
        target="_blank"
        rel="noreferrer"
      ></a>
    </StyledPostCard>
  )
}
