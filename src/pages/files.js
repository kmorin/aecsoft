import React from 'react';
import {graphql} from 'gatsby';
import Layout from "../components/layout";

export default function files({data}){
  console.log(data);
  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  )
}

export const query = graphql`
query{
  allFile{
    edges{
      node{
        relativePath
        prettySize
        extension
      }
    }
  }
}
`