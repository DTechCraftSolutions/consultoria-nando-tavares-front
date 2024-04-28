import { gql } from "graphql-request";

export const FIND_ALL_USER = gql`
  query FindAll {
    findAll {
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
