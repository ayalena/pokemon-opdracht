import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {
    const [twenty, setTwenty] = useState([]);
    const [offsetNumber, setOffsetNumber] = useState(0);

    useEffect(() => {
        async function fetchTwenty() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetNumber}`);
                console.log(result.data.results);
                setTwenty(result.data.results);

            } catch (e) {
                console.error(e);
            }
        }

        fetchTwenty();
    }, []);

    function handleNextTwenty() {
        setOffsetNumber(offsetNumber + 20);
    }

    function handlePreviousTwenty() {
        if (offsetNumber > 20) {
            setOffsetNumber(offsetNumber - 20);
        } else {
            setOffsetNumber(0);
        }

    }

    useEffect(() => {
        async function fetchNextTwenty() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offsetNumber}`);
                console.log(result.data.results);
                setTwenty(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }

        if (offsetNumber) {
            fetchNextTwenty();
        }
    }, [offsetNumber]);

    let twentyNames = twenty.map((pokemonName) => {
        return <Pokemon pokeName={pokemonName.name}/>;
    })

    return (
        <>
            <div id="container">
                <img src="https://cdn.mos.cms.futurecdn.net/nJqzZf3iyhawJfofUMicFV-970-80.jpg.webp" alt="logo"
                     id="logo"/>
                <div id="button-container">
                <button
                    className="button"
                    type="button"
                    onClick={handlePreviousTwenty}
                >
                    Previous
                </button>
                <button
                    className="button"
                    type="button"
                    onClick={handleNextTwenty}
                >
                    Next
                </button>
                </div>
                <div key={offsetNumber} className="poke-container">
                    {twentyNames}
                </div>
            </div>
        </>
    );
}

export default App;
