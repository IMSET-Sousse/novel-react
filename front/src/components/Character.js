import React, { useEffect, useState } from "react";
import "../styles/characters.css";

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/api/characters") // Backend API URL
            .then((response) => response.json())
            .then((data) => setCharacters(data))
            .catch((error) => console.error("Error fetching characters:", error));
    }, []);

    return (
        <div className="content-box">
            <h3>Characters</h3>
            <div className="space"></div>
            <div className="ch-images">
                {characters.map((character, index) => (
                    <div
                        key={index}
                        className="ch-box"
                        data-name={`Name: ${character.name}`}
                        data-true-name={`True Name: ${character.true_name}`}
                        data-age={`Age: ${character.age}`}
                        data-status={`Vital Status: ${character.status}`}
                        data-rank={`Rank: ${character.rank}`}
                        data-class={`Class: ${character.class}`}
                        data-aspect={`Aspect Rank: ${character.aspect}`}
                        data-flaw={`Flaw: ${character.flaw}`}
                    >
                        <img
                            src={character.image}
                            alt={character.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Character;
