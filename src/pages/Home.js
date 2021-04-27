import React, { Component } from "react";
import { connect } from "react-redux";
import { createGrid, createMaze, addWeights } from "../redux/grid/gridActions";
import Grid from "../components/grid/Grid";
import Filter from "../components/filter/Filter";
import Tutorial from "../components/tutorial/Tutorial";
import Legend from "../components/legend/Legend";
import idea from "../assets/buttons/idea.png";
import { openModal } from "../redux/modal/ModalActions";
import github from "../assets/other/github.png";
import "./Home.scss";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PrimaryAppBar from "../components/appbar/PrimaryAppBar";

class Home extends Component {
    componentDidMount() {}

    render() {
        const {
            createGrid,
            createMaze,
            enableVisualizeButton,
            addWeight,
            algorithms,
            currentAlg,
            modalOpen
        } = this.props;

        return (
            <div className="home">
                <div className="top">
                    {/* <div>
                        <h1 className="title">Pathfinding Visualizer</h1>
                    </div> */}
                    <PrimaryAppBar></PrimaryAppBar>
                    {/* <div className="top-button-container">
                        <ButtonGroup>
                            <Button
                                m={20}
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={!enableVisualizeButton}
                                className="create-maze"
                                onClick={() => {
                                    createGrid();
                                    createMaze();
                                }}
                            >
                                Create Maze
                            </Button> */}
                    {/* <button></button> */}

                    {/* <button
                                disabled={!enableVisualizeButton || algorithms[currentAlg].type === "unweighted"}
                                className="create-weights"
                                onClick={() => {
                                    addWeight();
                                }}
                            >
                                <span className="squirk">Add Weights</span>
                            </button> */}
                    {/* <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={!enableVisualizeButton || algorithms[currentAlg].type === "unweighted"}
                                className="create-weights"
                                onClick={() => {
                                    addWeight();
                                }}
                            >
                                Add Weights
                            </Button> */}

                    {/* <button
                                disabled={!enableVisualizeButton}
                                className="clear-board"
                                onClick={() => {
                                    createGrid();
                                }}
                            >
                                <span className="squirk">Clear Board</span>
                            </button> */}
                    {/* <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                disabled={!enableVisualizeButton}
                                className="clear-board"
                                onClick={() => {
                                    createGrid();
                                }}
                            >
                                Clear Board
                            </Button>
                        </ButtonGroup>
                    </div> */}
                </div>
                <div className="middle"></div>
                <div className="bottom">
                    <div style={{ width: "20%", height: "fit-content" }}>
                        {/* <div className="filter-container">
                            <Filter></Filter>
                        </div> */}
                        {/* <div className="show-tutorial">
                            <button
                                onClick={() =>
                                    modalOpen(
                                        <div
                                            style={{
                                                backgroundColor: "#2f2f2f",
                                                border: "5px solid white",
                                                borderRadius: "40px"
                                            }}
                                        >
                                            <Tutorial></Tutorial>
                                        </div>
                                    )
                                }
                            >
                                <img src={idea} alt="idea" className="idea-icon" /> Show Tutorial
                            </button>
                        </div> */}
                        <div className="github">
                            <a
                                href="https://github.com/abhijith94/graph-visualization"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={github} alt="github" />
                                <br />
                                Code
                            </a>
                        </div>
                    </div>
                    <div className="grid-container-parent">
                        <div className="grid-container">
                            <Grid></Grid>
                        </div>
                        <div>
                            <Legend></Legend>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Home.propTypes = {
//     classes: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
    enableVisualizeButton: state.grid.enableVisualizeButton,
    algorithms: state.filter.algorithms,
    currentAlg: state.filter.currentAlg
});

const mapDispatchToProps = dispatch => ({
    createGrid: () => dispatch(createGrid()),
    createMaze: () => dispatch(createMaze()),
    addWeight: () => dispatch(addWeights()),
    modalOpen: body => dispatch(openModal(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
