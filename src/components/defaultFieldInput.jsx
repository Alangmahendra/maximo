import React,{Component} from 'react'
import { FormGroup, Input, Label } from "reactstrap";
import {MdError} from 'react-icons/md'

export default class defaultFieldInput extends Component {
    render() {
        const { input, label,placeholder, type, meta: { touched, error } } = this.props
    return (
        <FormGroup>
        <Label  style={{color:"#4A1419"}}>
            {label} {touched && error &&<span className="notifErr">{error} <MdError/></span>}
        </Label>
            <Input
            {...input}
            placeholder={placeholder}
            type={type}
            />
        </FormGroup>
    )
    }
}
