import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import "./GroupSizeColors.css";
import { createGrid, createMaze, addWeights } from "../../redux/grid/gridActions";
import { connect } from "react-redux";
import { openModal } from "../../redux/modal/ModalActions";
import { findPath, resetVisitedAndSP } from "../../redux/grid/gridActions";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

function GroupSizesColors(props) {
    const classes = useStyles();
    const {
        createGrid,
        createMaze,
        enableVisualizeButton,
        addWeight,
        algorithms,
        currentAlg,
        modalOpen,
        findPath,
        resetVisitedAndSPCells
    } = props;

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button
                    className="visualize-btn"
                    disabled={!enableVisualizeButton}
                    onClick={() => {
                        resetVisitedAndSPCells();
                        findPath();
                    }}
                >
                    <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
                    Visualize
                </Button>
                <Button
                    m={20}
                    size="large"
                    disabled={!enableVisualizeButton}
                    // className="create-maze"
                    onClick={() => {
                        createGrid();
                        createMaze();
                    }}
                >
                    <BorderColorIcon />
                    Create Maze
                </Button>
                <Button
                    size="large"
                    disabled={!enableVisualizeButton || algorithms[currentAlg].type === "unweighted"}
                    // className="create-weights"
                    onClick={() => {
                        addWeight();
                    }}
                >
                    <AllInboxIcon />
                    Add Weight
                </Button>
                <Button
                    size="large"
                    disabled={!enableVisualizeButton}
                    // className="clear-board"
                    onClick={() => {
                        createGrid();
                    }}
                >
                    <ClearOutlinedIcon />
                    Clear
                </Button>
            </ButtonGroup>
        </div>
    );
}

const mapStateToProps = state => ({
    enableVisualizeButton: state.grid.enableVisualizeButton,
    algorithms: state.filter.algorithms,
    currentAlg: state.filter.currentAlg
});

const mapDispatchToProps = dispatch => ({
    createGrid: () => dispatch(createGrid()),
    createMaze: () => dispatch(createMaze()),
    addWeight: () => dispatch(addWeights()),
    modalOpen: body => dispatch(openModal(body)),
    findPath: () => dispatch(findPath(false)),
    resetVisitedAndSPCells: () => dispatch(resetVisitedAndSP())
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupSizesColors);
