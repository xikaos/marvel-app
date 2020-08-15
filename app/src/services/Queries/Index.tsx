import { gql } from '@apollo/client';

export const FIRST_CHARACTERS = gql`
  query {
    characters {
      id
      name
      thumbnail
    }
    searchTerm @client
  }`;

export const SPECIFIC_CHARACTERS = gql`
  query Characters($searchTerm : String!) {
    characters(where: {nameStartsWith: $searchTerm}) {
      id
      name
      thumbnail
    }
    searchTerm @client
  }`;

