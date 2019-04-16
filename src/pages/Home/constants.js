import gql from "graphql-tag";

export const GET_PRODUCTS= gql`
query Products{
    products{
        name
        description
        price
        quantity
        imageLinks
        height
        width
        long
        popular
        shortDescription
        subcategories {
        name
        }
        _id
    }
}`;   