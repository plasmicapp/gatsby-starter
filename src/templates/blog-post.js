import * as React from "react"
import { Link, graphql } from "gatsby"
import PlasmicLoader from "@plasmicapp/loader";

const BlogPostTemplate = (props) => {
  const { data, location } = props;
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  return (
    <PlasmicLoader
      component={"Post"}
      componentProps={{
        postHeader: {
          postTitle: post.frontmatter.title,
          date: post.frontmatter.date,
        },
        container: {
          render: () => (
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
            />
          )
        },
        previousPost: {
          style: {
            visibility: !previous ? "hidden" : "visible",
          },
          href: previous?.fields?.slug,
        },
        nextPost: {
          style: {
            visibility: !next ? "hidden" : "visible",
          },
          href: next?.fields?.slug,
        },
      }}
    />
  );

}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
