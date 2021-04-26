import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import "./GroupSizeColors.css";

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

export default function GroupSizesColors() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button>
                    <KeyboardArrowRightRoundedIcon></KeyboardArrowRightRoundedIcon>
                    Visualize
                </Button>
                <Button>
                    <BorderColorIcon />
                    Create Maze
                </Button>
                <Button>
                    <AllInboxIcon />
                    Add Weight
                </Button>
                <Button>
                    <ClearOutlinedIcon />
                    Clear
                </Button>
            </ButtonGroup>
        </div>
    );
}
