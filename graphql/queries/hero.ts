import { gql } from '@apollo/client'

export const HERO_QUERY = gql`
  query Hero {
    hero(id: "3tKmN9T2tf8zoJJxha7Y8u") {
      title
      subtitle
    }
  }
`
