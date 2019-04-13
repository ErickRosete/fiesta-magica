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
        shortDescription
        subcategories {
        name
        }
        _id
    }
}`;   
export const GET_CATEGORIES= gql`
query Subcategories{
    subcategories{
        name
        description
        _id
    }
}`;   