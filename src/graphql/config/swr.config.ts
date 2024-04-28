import { GraphQLClient } from "graphql-request";
import useSWR from "swr";

const env: string = process.env.NEXT_PUBLIC_API_URL as string;

const createClient = () => new GraphQLClient(env);

const fetcherQuery = async (query: string, variables = {}) => {
  const client = createClient();
  return client.request(query, variables);
};

const fetcherMutation = async (mutation: string, variables = {}) => {
  const client = createClient();
  return client.request(mutation, variables);
};

export const useQuery = (query: string, variables = {}) => {
  return useSWR(query, (query) => fetcherQuery(query, variables));
};

export const useMutation = (mutation: string, variables = {}) => {
  return useSWR(mutation, (mutation) => fetcherMutation(mutation, variables));
};
