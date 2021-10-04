import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {
    const [twenty, setTwenty] = useState([]);
    const [offsetNumber, setOffsetNumber] = useState(0);
    // let [nextTwenty, setNextTwenty] = useState([]);

    useEffect(() => {
        async function fetchTwenty() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offsetNumber}`);
                console.log(result.data.results);
                setTwenty(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }
        fetchTwenty();
    }, []);


    useEffect(() => {
        async function fetchNextTwenty() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${offsetNumber}`);
                console.log(result.data.results);
                setTwenty(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }
        fetchNextTwenty();
    }, [offsetNumber]);

    function handleNextTwenty() {
        setOffsetNumber(offsetNumber + 20);

    }

    function handlePreviousTwenty() {
        setOffsetNumber(offsetNumber - 20);

    }

    let twentyNames = twenty.map((pokemonName) => {
        return <Pokemon pokeName={pokemonName.name}/>;
    })

    return (
        <>
            <button
                type="button"
                onClick={handlePreviousTwenty}
            >
                Previous
            </button>
            <button
                type="button"
                onClick={handleNextTwenty}
            >
                Next
            </button>
            <div>
                {twentyNames}
            </div>

        </>
    );
}

export default App;
