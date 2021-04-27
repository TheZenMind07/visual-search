import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { chooseAlg } from "../../redux/filter/filterActions";
import { findPath, resetVisitedAndSP } from "../../redux/grid/gridActions";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
        "&:before": {
            borderColor: "white"
        },
        "&:after": {
            borderColor: "white",
            color: "white"
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    icon: {
        fill: "white"
    },
    input: {
        color: "white",
        fill: "white"
    }
}));

const theme = createMuiTheme({
    palette: {
        action: {
            selected: "#fff"
        }
    }
});

function SimpleSelect(props) {
    const classes = useStyles();
    const [algo, setAlgo] = React.useState("");
    const { algorithms, chooseAlg, enableVisualizeButton, findPath, resetVisitedAndSPCells, currentAlg } = props;

    const handleChange = event => {
        setAlgo(event.target.value);
        chooseAlg(event.target.value);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label" style={{ color: "white" }}>
                        Algorithm
                    </InputLabel>
                    <Select
                        name="algorithm"
                        // className="form-control"
                        disabled={!enableVisualizeButton}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={algo}
                        onChange={handleChange}
                        label="Algorithm"
                        labelStyle={{ color: "white" }}
                        classes={{ select: classes.input }}
                        // inputProps={{
                        //     classes: {
                        //         icon: classes.icon,
                        //         input: classes.input
                        //     }
                        // }}
                    >
                        {algorithms.map(alg => (
                            <MenuItem
                                value={alg.id}
                                key={alg.id}
                                inputProps={{
                                    classes: {
                                        input: classes.input
                                    }
                                }}
                            >
                                {alg.name}
                            </MenuItem>
                        ))}
                        {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                </FormControl>
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = state => ({
    algorithms: state.filter.algorithms,
    currentAlg: state.filter.currentAlg,
    enableVisualizeButton: state.grid.enableVisualizeButton
});

const mapDispatchToProps = dispatch => ({
    chooseAlg: id => dispatch(chooseAlg(parseInt(id))),
    findPath: () => dispatch(findPath(false)),
    resetVisitedAndSPCells: () => dispatch(resetVisitedAndSP())
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleSelect);
