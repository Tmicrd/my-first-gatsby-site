import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        // src="https://img.freepik.com/free-vector/cute-bunny-holding-carrot-cartoon-illustration_403370-193.jpg?w=2000"
        src="../images/rabbit.jpeg"
        alt="a little rabbit"
      />
    </Layout>
  );
};

export default IndexPage;
