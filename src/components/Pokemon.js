import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Pokemon.css';

function Pokemon({pokeName}) {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
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
            <div className="poke-container">
                {Object.keys(pokemons).length > 0 &&
                <>
                    <div id="poke-item">
                        <h2>{pokemons.name}</h2>
                        <img src={pokemons.sprites.front_default} alt={pokemons.name}></img>
                        <p><b>Moves:</b> {pokemons.moves.length}</p>
                        <p><b>Weight:</b> {pokemons.weight}</p>
                        <p><b>Abilities:</b> </p>
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
