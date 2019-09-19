import React from "react";
import { Header, Button, Card } from "semantic-ui-react";
import { Link, } from "react-router-dom";
import axios from "axios";


class Items extends React.Component {
    state = { items: [], };

    componentDidMount() {
        axios.get("/api/departments/:department_id/items")
        .then( res => (
            this.setState({ items: res.data, })
        ))
        .catch( err => (
            console.log(err)
        ))
    };

    renderItems = () => {
        const { items } = this.state;
        
                return (
                    items.map( item => (
                    <Card>
                        <Card.Content>
                            <Card.Header><h1>{item.name}</h1></Card.Header>
            
                            <Card.Description>
                                <Button color="red">
                                        Delete
                                </Button>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                ))
                );
            }
            
        
        
        render() {
            return(
            <div>
                <Header as="h1">Items:</Header>
                <br />
                <Button as={Link} color="green" to="/departments/:id/new">Add Item</Button>
                <br/>
                <br/>
                <Card.Group itemsPerRow={4}>
                    { this.renderItems() }
                </Card.Group>
            </div>
            );
        };
    }
        
        export default Items;
        