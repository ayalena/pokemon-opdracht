import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {
    const [twenty, setTwenty] = useState([]);

    useEffect(() => {
        async function fetchTwenty() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`);
                console.log(result.data.results);
                setTwenty(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }

        fetchTwenty();

    }, []);

    let twentyNames = twenty.map((pokemonName) => {
        return <Pokemon pokeName={pokemonName.name}/>;
    })

    return (
        <>
            <div>
                {twentyNames}
            </div>
        </>
    );
}

export default App;
