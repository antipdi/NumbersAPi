import React from 'react';
import Header from '../Layout/Header'
import Year from '../Layout/Year'
import { makeStyles, Container } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    numbersapi: {
        backgroundColor: theme.palette.info.light,
        marginTop: theme.spacing(4),
        borderRadius: 10,
        width: "100vh"
    }
}));

export default function Main(props) {
    const classes = useStyles();
    return (<div className={classes.bg}>
        <Header />
        <Container className={classes.numbersapi}>
            <Year />
        </Container>
    </div>);
}
