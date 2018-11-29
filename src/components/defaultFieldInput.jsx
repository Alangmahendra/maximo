import React from 'react'
import { FormGroup, Input, Label, Col } from "reactstrap";

const renderField = ({ input, label,placeholder, type, meta: { touched, error } }) => {
    if (touched && error) {
    return (
        <FormGroup row>
        <Label sm={2} style={{color:"#4A1419"}}>
            {label}
        </Label>
        <Col sm={10} >
            <Input
            className="errorStyle"
            {...input}
            placeholder={placeholder}
            type={type}
            /> <br/>
            {touched && error && <span className="errorStyle">{error}</span>}
        </Col>
        </FormGroup>
    );
    } else {
    return (
        <FormGroup row>
        <Label sm={2} >
            {label}
        </Label>
        <Col sm={10} >
            <Input {...input} placeholder={placeholder} type={type} />
          {/* {touched && error && <span>{error}</span>} */}
        </Col>
        </FormGroup>
    );
    }
};

export default renderField;