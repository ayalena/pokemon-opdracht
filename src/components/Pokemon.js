import React, {useEffect, useState} from 'react';
import axios from "axios";

function Pokemon() {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur`);
                console.log(result.data);
                setPokemons(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchPokemons();
    }, []);

    return (
        <>
            <div>
                {Object.keys(pokemons).length > 0 &&
                <>
                    <h2>{pokemons.name}</h2>
                    <img src={pokemons.sprites.front_default} alt={pokemons.name}></img>
                    <p>Moves: {pokemons.moves.length}</p>
                    <p>Weight: {pokemons.weight}</p>
                    <p>Abilities: </p>
                    <p>{pokemons.abilities.map((pokemon) => { return <ul>{pokemon.ability.name}</ul>})} </p>
                </>
                }
            </div>
        </>
    );
}

export default Pokemon;
