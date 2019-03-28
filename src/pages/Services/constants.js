import gql from "graphql-tag";

export const GET_SERVICES= gql`
query Services
    {services
        {
        _id
        name
        description
        shortDescription
        imageLinks
        }
    }
`