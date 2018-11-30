import React,{Component} from 'react'
import { FormGroup, Input, Label } from "reactstrap";
import {MdError} from 'react-icons/md'

class telRenderField extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    render (){
    const { tag, maskChar,mask,input, label,placeholder, type, meta: { touched, error } } = this.props
    return (
        <FormGroup>
        <Label  style={{color:"#4A1419"}}>
            {label} {touched && error && <span className="notifErr">{error} <MdError/></span>}
        </Label>
            <Input
            {...input}
            placeholder={placeholder}
            type={type}
            tag={tag}
            mask={mask}
            maskChar={maskChar}
            />
        </FormGroup>
    )
    }
};

export default telRenderField;