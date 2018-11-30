import React,{Component} from 'react'
import { FormGroup, Label } from "reactstrap";
import DatePicker from 'react-date-picker'

export default class dateFieldInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            tanggal: new Date()
        }
    }

    dateOnChange = (tanggal) =>{
        this.setState({tanggal})
        this.props.input.onChange(this.state.tanggal)
    }
    
render() {
    const {input, label, meta: { touched, error } } = this.props
    return (
        <FormGroup row>
            <Label sm={2}>
                {label}
            </Label>
                <DatePicker {...input} value={tanggal} minDate={new Date()} name="tanggal" id="tanggal" clearIcon={null} locale="id-ID" onChange={this.dateOnChange} />
        </FormGroup>
    )
}
}
