import './App.css';
import { useQuery, gql} from "@apollo/client";

const GET_FRACTIONS = gql`
  query Fractions {
    fractions {
        id
        name
    }
  }
`;

function DisplayFractions() {
  const { loading, error, data } = useQuery(GET_FRACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.fractions.map(({ id, name }) => (
     <div key={id}>
       <h3>{name}</h3>
     </div>
  ));
}

function App() {
  return (
      <div>
        <h2>Fractions</h2>
        <br/>
        <DisplayFractions/>
      </div>
  );
}

export default App;
