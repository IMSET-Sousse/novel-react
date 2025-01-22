import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/characters.css";

const Character = () => {
    const [characters, setCharacters] = useState([]);

    // Fetch characters from the Flask API
    useEffect(() => {
        axios.get("http://localhost:5000/api/characters") // Adjust the URL if needed
            .then((response) => {
                setCharacters(response.data);
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
            });
    }, []); // Run this effect once on component mount

    return (
        <div className="content-box">
            <h3>Characters</h3>
            <div className="space"></div>
            <div className="ch-images">
                {characters.map((character, index) => (
                    <div
                        className="ch-box"
                        key={index}
                        data-name={`Name: ${character.name}`}
                        data-true-name={`True Name: ${character.true_name}`}
                        data-age={`Age: ${character.age}`}
                        data-status={`Vital Status: ${character.status}`}
                        data-rank={`Rank: ${character.rank}`}
                        data-class={`Class: ${character.class}`}
                        data-aspect={`Aspect Rank: ${character.aspect}`}
                        data-flaw={`Flaw: ${character.flaw}`}
                    >
                        <img src={character.image} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Character;
