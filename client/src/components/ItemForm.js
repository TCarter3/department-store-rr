import React from "react";
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class ItemForm extends React.Component {
    defaultValue = { name: "", price: null }
    state = { ...this.defaultValue, }

    handleSubmit = (e) => {
        e.preventDefault();
        const item = { ...this.state, };
        axios.post("/api/departments/:department_id/items", item)
        .then( res => {
            this.props.history.push("/departments/:id")
        })
        this.setState({ ...this.defaultValues, });
      }
    
      handleChange = (e) => {
        const { target: { name, value, } } = e;
        this.setState({ [name]: value, });
      }

    render() {
        const { name, price } = this.state

        return(
            <>
            <Header as="h1">New Item!</Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label="Name"
                    name="name"
                    placeholer="Name"
                    value={name}
                    onChange={this.handleChange}
                    required
                 />
                 <Form.Input
                    label="Price"
                    name="price"
                    placeholer="Price"
                    value={price}
                    type="number"
                    onChange={this.handleChange}
                    required
                 />
                 <Form.Button 
                 onClick={this.props.history.goBack}
                 color="blue">Submit</Form.Button>
            </Form>
            </>
        );
    };
};

export default ItemForm;