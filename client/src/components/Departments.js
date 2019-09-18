import React from "react";
import { Header, Button, Card } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import axios from "axios";


class Departments extends React.Component {
    state = { departments: [], };

    componentDidMount() {
        //TODO make GET request with axios
        axios.get("/api/departments")
        .then( res => (
            this.setState({ departments: res.data, })
        ))
        .catch( err => (
            console.log(err)
        ))
        //TODO update state

    };

    renderDepartments = () => {
        const { departments } = this.state;

        return (departments.map( department => (
            <Card>
                <Card.Content>
                    <Card.Header><h1>{department.name}</h1></Card.Header>

                    <Card.Description>
                        <Link to={`/departments/${department.id}`}>
                        <Button color="blue">
                            View
                        </Button>
                        </Link>
                        <Button color="red">
                                Delete
                        </Button>
                    </Card.Description>
                </Card.Content>
            </Card>
        ))
        );
    };


    render() {
        return(
        <div>
            <Header as="h1">Departments:</Header>
            <br />
            <Button as={Link} color="green" to="/departments/new">Add Department Store</Button>
            <br/>
            <br/>
            <Card.Group itemsPerRow={4}>
                { this.renderDepartments() }
            </Card.Group>
        </div>
        );
    };
};

export default Departments;