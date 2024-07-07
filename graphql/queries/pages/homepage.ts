import { gql } from '@apollo/client'

export const HOMEPAGE_QUERY = gql`
  query Homepage {
    hero(id: "4mE3nWVOpzyArUndqNBpbb") {
      title
      description {
        json
      }
      skills
      summary {
        json
      }
    }
    experienceEntryCollection(limit: 10) {
      items {
        position
        company
        url
        startDate
        endDate
        location
        type
        overview {
          json
        }
        stack
      }
    }
  }
`
