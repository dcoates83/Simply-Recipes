import React from "react"
import { useStaticQuery, graphql } from "gatsby"

/*
assign graphql to a variable
- Must be a capital case
ie:
const data = graphql`
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
  `
----
  static query needs to be invoked in the component tho 
  SomeComponent =()=>{
  somthing = useStaticQuery(data)
  return(stuff)
  }
 ---
 ###Field Alias
myName:siteMetadata
to access it is now {myName}


*/

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
