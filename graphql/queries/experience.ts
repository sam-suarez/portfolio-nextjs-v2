import { gql } from '@apollo/client'

export const EXPERIENCE_FRAGMENT = gql`
  fragment ExperienceEntry on ExperienceEntry {
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
`

export const EXPERIENCE_QUERY = gql`
  ${EXPERIENCE_FRAGMENT}

  query Experience {
    experience(id: "4agqviyf9aP88iO3BO4MYX") {
      title
      subtitle
      experiencesCollection {
        items {
          ...ExperienceEntry
        }
      }
    }
  }
`
