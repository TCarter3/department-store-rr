import React from "react";
import { Form, Header, } from "semantic-ui-react";
import axios from "axios";

class DepartmentForm extends React.Component {
    defaultValue = { name: "" }
    state = { ...this.defaultValue, }

    handleSubmit = (e) => {
        e.preventDefault();
        const department = { ...this.state, };
        axios.post("/api/departments", department)
        .then( res => {
            this.props.history.push("/departments")
        })
        this.setState({ ...this.defaultValues, });
      }
    
      handleChange = (e) => {
        const { target: { name, value, } } = e;
        this.setState({ [name]: value, });
      }

    render() {
        const { name } = this.state

        return(
            <>
            <Header as="h1">New Department Store!</Header>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label="Name"
                    name="name"
                    placeholer="Name"
                    value={name}
                    onChange={this.handleChange}
                    required
                 />
                 <Form.Button color="green">Submit</Form.Button>
            </Form>
            </>
        );
    };
};

export default DepartmentForm;