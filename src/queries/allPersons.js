import { gql } from "@apollo/client"

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`

export default ALL_PERSONS