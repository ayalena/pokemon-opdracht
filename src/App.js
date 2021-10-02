import React, {useEffect} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./components/Pokemon";

function App() {

    return (
        <>
            <Pokemon number={1}/>
            <Pokemon number={2}/>
            <Pokemon number={3}/>
            <Pokemon number={4}/>
            <Pokemon number={5}/>
            <Pokemon number={6}/>
            <Pokemon number={7}/>
            <Pokemon number={8}/>
            <Pokemon number={9}/>
        </>
    );
}

export default App;
