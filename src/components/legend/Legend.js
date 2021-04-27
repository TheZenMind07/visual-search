import React from "react";
import player from "../../assets/player/right-arrow.png";
import target from "../../assets/player/rec.png";
import wall from "../../assets/tiles/fence.png";
import weight from "../../assets/tiles/dumbbell.png";
import "./Legend.scss";

import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

// export default function SimplePaper() {
//     return (
//         <Box
//             sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 "& > :not(style)": {
//                     m: 1,
//                     width: 128,
//                     height: 128
//                 }
//             }}
//         >
//             <Paper elevation={0} />
//             <Paper />
//             <Paper elevation={3} />
//         </Box>
//     );
// }

const Legend = () => {
    return (
        <Paper style={{ padding: "1px", color: "red" }} className="legend">
            <ul>
                <li>
                    <img src={player} alt="player" /> - Source
                </li>
                <li>
                    <img src={target} alt="target" /> - Destination
                </li>
                <li>
                    <img src={wall} alt="wall" /> - Wall
                </li>
                <li>
                    <img src={weight} alt="weight" /> - Weight
                </li>
                <li>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="visited-box"></div>
                        <div>&nbsp;- Visited</div>
                    </div>
                </li>
                <li>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div className="sp-box"></div>
                        <div>&nbsp;- Shortest Path</div>
                    </div>
                </li>
            </ul>
        </Paper>
    );
};

export default Legend;
