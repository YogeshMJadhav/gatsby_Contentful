import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"


const BlogPost = ({node}) => (
  <li>
    <Link to={node.slug}>{node.title} </Link>
    <div>{node.body.childMarkdownRemark.excerpt}</div>
    <img src={node.heroImage.resize.src} style={{mariginTop:"50"}}/>
  </li>
)

const IndexPage = ({data}) => (
  <ul>
    {data.allContentfulBlogPost.edges.map((edge, index) => <BlogPost  node = {edge.node} />)}
  </ul>
)

export default IndexPage

export const PageQuery = graphql`
  query queryPage {
    allContentfulBlogPost (filter :{
      node_locale: {eq: "en-US"}
    }
    sort: { fields : [publishDate], order: DESC}
    ){
      edges {
        node{
          id
          title
          slug
          body {
            childMarkdownRemark{
              excerpt
            }
          }
          heroImage {
            resize(width:500, height:500){
               src
           }
          }
        }
      }
    }
  }
`