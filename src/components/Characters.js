import React from "react";
import "../styles/Style.css";

const Characters = () => {
    return (
        <>
            <div class="content-box">

                <h3>
                    Characters
                </h3>

                <div class="space"></div>

                <div class="ch-images">
                    <div class="ch-box">
                        <p>Sunless</p>
                        <img src="../assets/sunny_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Nephis</p>
                        <img src="../assets/nephis_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Cassia</p>
                        <img src="../assets/cassie_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Athena</p>
                        <img src="../assets/effie_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Jet</p>
                        <img src="../assets/jet_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Kai</p>
                        <img src="../assets/kai_illustration.png" />
                    </div>
                    <div class="ch-box">
                        <p>Mordret</p>
                        <img src="../assets/mordret_illustration.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Characters;
