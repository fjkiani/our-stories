import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import PostList from "../components/PostList"
import SEO from "../components/SEO"
const getPosts = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMMM, Do, YYYY")
            author
          }
          excerpt
        }
      }
    }
  }
`
export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} />
    </Layout>
  )
}
