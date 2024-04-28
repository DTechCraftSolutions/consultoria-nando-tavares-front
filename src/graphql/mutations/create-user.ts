import { gql } from "graphql-request";

export const CREATE_USER = gql`
  mutation Mutation($createUserInput: CreateUserInput!) {
    registerUser(createUserInput: $createUserInput) {
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
