import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Quick and Simple Recipes.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              quae.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              suscipit minus labore voluptatem, fuga tenetur?
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in a bowl"
            className="about-img"
            placeholder="tracedSVG"
          ></StaticImage>
        </section>
        <section className="featured-recipes">
          <h5>Take a look at these!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
