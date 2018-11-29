import React, { Component } from 'react'
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,Row
} from 'reactstrap'
import InputMask from 'react-input-mask'
import {orderEventAction} from '../actions/orderEventAction'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
class FormComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            nama:'',
            telepon:'',
            tanggal:new Date(),
            lokasi:'',
            jumlah:'',
            konsumsi:'',
            email:'',
            counter:0
        }
    }

    handleOnChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        counter:this.state.counter + 1
        })
    }

    componentDidMount(){
        console.log(this.props)
    }

    submit = (e) =>{
        e.preventDefault()
        const {nama,telepon,tanggal,lokasi,jumlah,konsumsi} = this.state
        this.props.orderEventAction(nama,telepon,tanggal,lokasi,jumlah,konsumsi)
    }
render() {
    const {nama,telepon,tanggal,lokasi,jumlah,konsumsi,counter} = this.state
    return (
    <Container>
        <Form className="form" >
            <Row>
                <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Nama
                </Label>
                <Input type="text"
                name="nama"
                id="nama"
                placeholder="Zank Purnama"
                onChange={this.handleOnChange}
                value={nama}
                required
                />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    No Telpon
                </Label>
                <Input type="tel"
                name="telepon"
                id="telepon"
                mask="+6\2999 9999 99999"
                maskChar=" "
                tag={InputMask}
                placeholder="+62"
                onChange={this.handleOnChange}
                value={telepon}
                required
                />
            </FormGroup>
            </Col>
            </Row>
            <Row>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Lokasi Acara
                </Label>
                <Input type="text"
                name="lokasi"
                id="lokasi"
                placeholder="jl.nama jalan kelurahan kecamatan kota"
                onChange={this.handleOnChange}
                value={lokasi}
                required
                />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Tipe Konsumsi
                </Label>
                <Input type="textarea"
                name="konsumsi"
                id="konsumsi"
                placeholder="Makan siang,Coffee/Tea dll"
                onChange={this.handleOnChange}
                value={konsumsi}
                required
                />
            </FormGroup>
            </Col>
           
            </Row>
            <Row>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Tanggal Acara
                </Label>
                <Input type="datetime-local"
                name="tanggal"
                id="tanggal"
                onChange={this.handleOnChange}
                value={tanggal}
                required
                />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Jumlah Peserta
                </Label>
                <Input type="text"
                name="jumlah"
                id="jumlah"
                placeholder="100"
                onChange={this.handleOnChange}
                value={jumlah}
                required
                />
            </FormGroup>
            </Col>
            </Row>
            {
                counter > 20 &&<center><Button type="submit" color="warning" onClick={this.submit}>PESAN</Button></center>
            }
        </Form>
    </Container>
    )
}
}


const mapStateToProps = state => {
    return {
      orderEvent: state.orderEvent
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      orderEventAction
    },dispatch);
  };
  

export default connect(mapStateToProps,mapDispatchToProps)(FormComponent)