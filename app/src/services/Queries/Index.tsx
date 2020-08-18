import { gql } from '@apollo/client';

export const FIRST_CHARACTERS = gql`
  query {
    characters {
      id
      name
      thumbnail
    }
    searchTerm @client
  }
`;

export const CHARACTERS_BY_NAME = gql`
  query Characters($searchTerm : String!) {
    characters(where: {nameStartsWith: $searchTerm}) {
      id
      name
      thumbnail
    }
    searchTerm @client
  }
`;

export const CHARACTER_BY_ID = gql`
  query CharacterById($id: Int!){
    characters(where: {id: $id}, limit: 1) {
      id
      name
      description
      thumbnail,
      series {
        resourceURI
        name
      }
    }
  }
`;

//  
