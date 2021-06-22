import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import Layout from "../components/Layout"
const TagTemplate = ({ data }) => {
  const recipes = data.allContentfulRecipe
  return (
    <Layout>
      <main className="page">
        <h2>Tag name</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipe} />
          // error will be fixed in next vid
        </div>
      </main>
      <h2>Tag Template Page</h2>
    </Layout>
  )
}
export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        cookTime
        id
        prepTime
        title
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default TagTemplate
