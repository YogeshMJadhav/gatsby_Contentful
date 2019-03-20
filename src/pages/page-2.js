import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// const SecondPage = (props) => {
class SecondPage extends React.Component {
  constructor(){
    super();
    this.state = {
      data : null
    }
  }

componentDidMount = () => {
  const data = this.props.allContentfulAsset;
  this.setState({data});
}
  
  render(){
    console.log(this.state.data);
      return(
        <Layout>
          <SEO title="Page two" />
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
        </Layout>
      )
  }
}

export default SecondPage

export const contentdata = `graphql
{
  allContentfulAsset {
    edges {
      node {
        id
        file {
          url
        }
      }
    }
  }
}
`