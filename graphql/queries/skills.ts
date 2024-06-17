import { gql } from '@apollo/client'

export const SKILLS_QUERY = gql`
  query Skills {
    skills(id: "1yp3dQOGAciC9Vs7Ih12LC") {
      title
      subtitle
      skillsCollection {
        items {
          title
          image {
            url
            height
            width
          }
        }
      }
    }
  }
`
