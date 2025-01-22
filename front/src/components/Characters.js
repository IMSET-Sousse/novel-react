import React from "react";
import "../styles/characters.css";

const Characters = () => {
    return (
        <>
            <div class="content-box">
                <h3>Characters</h3>
                <div class="space"></div>
                <div class="ch-images">
                    <div class="ch-box"
                        data-name="Name: Sunless"
                        data-true-name="True Name: Lost From Light"
                        data-age="Age: 26(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: Terror"
                        data-aspect="Aspect Rank: Divine"
                        data-flaw="Flaw: Clear Conscience"
                    >
                        {/* <p>Sunless</p> */}
                        <img src="../assets/sunny_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Nephis"
                        data-true-name="True Name: Changing Star"
                        data-age="Age: 26(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: Titan"
                        data-aspect="Aspect Rank: Divine"
                        data-flaw="Flaw: Pristine Soul"
                    >
                        {/* <p>Nephis</p> */}
                        <img src="../assets/nephis_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Cassia"
                        data-true-name="True Name: Song of the Fallen"
                        data-age="Age: 26(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: ――"
                        data-aspect="Aspect Rank: Sacred"
                        data-flaw="Flaw: Blindness">
                        {/* <p>Cassia</p> */}
                        <img src="../assets/cassie_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Athena"
                        data-true-name="True Name: Raised by Wolves"
                        data-age="Age: 28(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: ――"
                        data-aspect="Aspect Rank: Transcendent"
                        data-flaw="Flaw: Glutton">
                        {/* <p>Athena</p> */}
                        <img src="../assets/effie_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Jet"
                        data-true-name="True Name: ――"
                        data-age="Age: 35(current)"
                        data-status="Vital Status: Active"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: ――"
                        data-aspect="Aspect Rank: Supreme"
                        data-flaw="Flaw: You are dead">
                        {/* <p>Jet</p> */}
                        <img src="../assets/jet_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Kai"
                        data-true-name="True Name: Nightingale"
                        data-age="Age: 28(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: ――"
                        data-aspect="Aspect Rank: Ascended"
                        data-flaw="Flaw: Lie Sense">
                        {/* <p>Kai</p> */}
                        <img src="../assets/kai_illustration.png" />
                    </div>
                    <div class="ch-box"
                        data-name="Name: Mordret"
                        data-true-name="True Name: ――"
                        data-age="Age: 30(current)"
                        data-status="Vital Status: Alive"
                        data-rank="Rank: Saint(Transcendent)"
                        data-class="Class: Titan"
                        data-aspect="Aspect Rank: Divine"
                        data-flaw="Flaw: ――">
                        {/* <p>Mordret</p> */}
                        <img src="../assets/mordret_illustration.png" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Characters;
