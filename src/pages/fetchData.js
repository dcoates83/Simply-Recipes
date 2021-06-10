import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          complexData {
            age
            name
          }
          description
          person {
            age
            name
          }
          simpleData
          title
        }
      }
    }
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map(e => {
          return (
            <p key={e.name}>
              {e.name}:{e.age}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
