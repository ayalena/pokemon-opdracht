import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Pokemon.css';

function Pokemon({pokeName}) {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function fetchPokemons() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
                    cancelToken: source.token,
                });
                console.log(result.data);
                setPokemons(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchPokemons();

        return function cleanup() {
            source.cancel();
        }

    }, []);

    return (
        <>
            <div className="poke-container">
                {Object.keys(pokemons).length > 0 &&
                <>
                    <div id="poke-item">
                        <h2>{pokemons.name}</h2>
                        <img src={pokemons.sprites.front_default} alt={pokemons.name}></img>
                        <p>Moves: {pokemons.moves.length}</p>
                        <p>Weight: {pokemons.weight}</p>
                        <p>Abilities: </p>
                        <p >{pokemons.abilities.map((pokemon) => {
                            return <ul id="abilities">{pokemon.ability.name}</ul>
                        })} </p>
                    </div>
                </>
                }
            </div>
        </>
    );
}

export default Pokemon;
