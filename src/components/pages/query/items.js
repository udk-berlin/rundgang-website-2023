import { useQuery, gql } from '@apollo/client';

const GET_ITEMS = gql`
  query GetItems {
    items {
        type
        template
  }
}
`;

export default function Items() {
    const {loading, error, data} = useQuery(GET_ITEMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.entries.map(({ type, template }) => (
        <div>
            <b>{type}</b>
            <p>{template}</p>
            <br />
        </div>
    ));
}