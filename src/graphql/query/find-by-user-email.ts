import { gql } from "graphql-request";

export const FIND_BY_USER_EMAIL = gql`
  query FindByUserEmail($email: String!) {
    findByUserEmail(email: $email) {
      id
      name
      email
      planId
      recorrent
      payment
      phone
    }
  }
`;
