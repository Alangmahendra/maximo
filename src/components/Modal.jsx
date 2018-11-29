import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody,Form, Col,
    FormGroup, Label, Input,
    Row} from 'reactstrap';
import InputMask from 'react-input-mask'
import {orderEventAction} from '../actions/orderEventAction'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import {Field,reduxForm} from 'redux-form'
import validate from './validate'

class ModalComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal:false,
            nama:'',
            telepon:'',
            tanggal:new Date(),
            jam:new Date(),
            lokasi:'',
            jumlah:'',
            konsumsi:'',
            email:'',
            hari:'',
        }
        this.toggle = this.toggle.bind(this)
        this.dateOnChange = this.dateOnChange.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.jumlahOnchange = this.jumlahOnchange.bind(this)
    }

    toggle(){
        this.setState({
            modal:!this.state.modal
        })
    }

    handleOnChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        counter:this.state.counter + 1
        })
    }

    jumlahOnchange = () => {
        this.setState({
            jumlah:this.state.jumlah
        })
    }
    jamOnChange = (jam) => this.setState({jam})
    dateOnChange = (tanggal) => {
        this.setState({ tanggal })
        var result;
        const date = tanggal
        const string = date.toString()
            const split = string.split(' ')
            const hari = split[0]
            switch (hari) {
                case 'Sun':
                result =  'Minggu'
                break;
                case 'Mon':
                result =  'Senin'
                break;
                case 'Tue':
                result =   'Selasa'
                break;
                case 'Wed':
                result =  'Rabu'
                break;
                case 'Thu':
                result =  'Kamis'
                break;
                case 'Fri':
                result =  `Jum'at`
                break;
                case 'Sat':
                result =  'Sabtu'
                break;
            }
        this.setState({
            hari: result
        })
    }

    componentDidMount(){
        console.log('====>',this.state.tanggal)
    }

    submit = (e) =>{
        e.preventDefault()
        const {nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam} = this.state
        this.props.orderEventAction(nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam)
        this.toggle()
    }
render() {
    const {nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam} = this.state
    return (
    <Form className="form"> 
        <div className="clearfix fix">
        <Button outline color="warning" id="fix" onClick={this.toggle}  >Order Event</Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} contentClassName="gradient">
        <ModalHeader toggle={this.toggle}>
        <h2 style={{color:"#c3a33a"}}>
        𝓜𝓪𝔁𝓲𝓶𝓸
        </h2>
        <h4 style={{color:"#c3a33a"}}>
            Event Order Form
        </h4>
        </ModalHeader>
        <ModalBody>
            <Row>
                <Col>
                <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Email
                </Label>
                <Input type="email"
                name="email"
                id="email"
                placeholder="zankpuremail@samsung.com"
                onChange={this.handleOnChange}
                value={email}
                required={true}
                />
            </FormGroup>
                </Col>
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
            </Row>
            <Row>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Jumlah Peserta
                </Label>
                <Input
                type="tel"
                name="jumlah"
                id="jumlah"
                placeholder="100"
                onChange={this.handleOnChange}
                value={jumlah}
                mask="99999999999999999999"
                maskChar={null}
                tag={InputMask}
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
                <DatePicker value={tanggal} minDate={new Date()} name="tanggal" id="tanggal" clearIcon={null} locale="id-ID" onChange={this.dateOnChange} />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label style={{color:"#4A1419"}}>
                    Waktu Acara
                </Label>
                <TimePicker value={jam} name="jam" id="jam" onChange={this.jamOnChange} />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
            <Label for="hari">Hari Acara</Label>
                <Input value={hari} disabled/>
        </FormGroup>
            </Col>
            </Row>
        </ModalBody>
        {
            nama&&telepon&&tanggal&&lokasi&&jumlah&&konsumsi&&email&&hari&&jam &&<center><Button type="submit" color="warning" onClick={this.submit}>PESAN</Button></center>
            }
        </Modal>
    </Form>
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

ModalComponent = connect(mapStateToProps,mapDispatchToProps)(ModalComponent) 

export default reduxForm({
    form:'maximo',
    validate
})(ModalComponent)