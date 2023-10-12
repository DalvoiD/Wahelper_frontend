import './App.css';
import { useQuery } from "@apollo/client";

import { GET_FRACTIONS } from './query/fractions'

function DisplayFractions() {
  const { loading, error, data } = useQuery(GET_FRACTIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const fractions  = data.fractions.map(({ id, name }) => (
     <div key={id}>
       <h3>{name}</h3>
     </div>
  ));

    return <div >
        {fractions}
    </div>
}

function App() {
  return (
      <div className='container'>
        <h2>Fractions</h2>
        <br/>
        <DisplayFractions/>
      </div>
  );
}

export default App;
