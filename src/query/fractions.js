import {gql} from "@apollo/client";

export const GET_FRACTIONS = gql`
    query Fractions {
        fractions {
            id
            name
        }
    }
`;