import React from 'react'
import type { FC } from 'react'
import useSiteMetadata from '@/hooks/useSiteMetadata'

type SeoProps = {
  pagetitle?: string
  description?: string
}

const SEO: FC<SeoProps> = ({ pagetitle, description }) => {
  const meta = useSiteMetadata()

  const seo = {
    title: pagetitle || meta?.title,
    description: description || meta?.description,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description || ''} />
    </>
  )
}

export default SEO
