import { gql } from "graphql-request";

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UserUpdateInput!) {
    updateUser(updateUserInput: $updateUserInput) {
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
