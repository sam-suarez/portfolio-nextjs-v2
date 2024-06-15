import { gql } from '@apollo/client'
import { IMAGE_FRAGMENT } from '../fragment/image'

export const SKILLS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  query Skills {
    skills(id: "1yp3dQOGAciC9Vs7Ih12LC") {
      title
      subtitle
      skillsCollection {
        items {
          title
          image {
            ...ImageFragment
          }
        }
      }
    }
  }
`
