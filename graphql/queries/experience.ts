import { gql } from '@apollo/client'

export const EXPERIENCE_QUERY = gql`
  query Experience {
    experience(id: "4agqviyf9aP88iO3BO4MYX") {
      title
      subtitle
      experiencesCollection {
        items {
          image {
            url
          }
          position
          company
          startDate
          endDate
          overview {
            json
          }
          responsibilities
        }
      }
    }
  }
`
