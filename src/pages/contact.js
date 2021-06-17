import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"

function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              libero sequi reprehenderit repellendus inventore iste eaque ullam
              accusantium odio mollitia?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              quidem rerum, voluptate eius provident sed qui odit obcaecati
              ducimus quod!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              neque excepturi expedita? Qui voluptatem quia quod minus at?
              Culpa, aliquam!
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="Email">Your Email</label>
                <input type="text" name="Email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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
export default Contact
