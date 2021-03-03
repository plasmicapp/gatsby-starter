import * as React from "react"
import { Link, graphql } from "gatsby"
import PlasmicLoader from "@plasmicapp/loader";

const BlogIndex = (props) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const containerContents = posts.length === 0 ? (
    <p>
      No blog posts found. Add markdown posts to "content/blog" (or the
      directory you specified for the "gatsby-source-filesystem" plugin in
      gatsby-config.js).
    </p>
  ) : posts.map(post => (
    <PlasmicLoader 
      component={"ListItem"}
      componentProps={{
        title: post.frontmatter.title || post.fields.slug,
        date: post.frontmatter.date,
        description: post.frontmatter.description || post.excerpt,
        href: post.fields.slug,
      }}
    />
  ));

  return (
    <PlasmicLoader
      component={"Home"}
      componentProps={{
        container:{
          children: containerContents,
        }
      }}
    />
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
