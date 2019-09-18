import React from "react";
import { Header, Button, } from "semantic-ui-react";
import { Link, } from "react-router-dom";

const NoMatch = () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
    <Header as="h1">Oh Shit Dawg!</Header>
    <Header as="h1">ERROR: 404</Header>
    <Header as="h3">This page doesnt exist, just like your hopes and dreams..</Header>
    <Link to="/">
    <Button color="blue">
        Home
    </Button>
    </Link>
    </div>
);

export default NoMatch;