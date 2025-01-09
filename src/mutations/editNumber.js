import { gql } from "@apollo/client"

const EDIT_NUMBER = gql`
  mutation edutNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone) {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`

export default EDIT_NUMBER