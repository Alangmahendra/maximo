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
import renderField from './defaultFieldInput'
import telRenderField from './telFieldInput'

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
        // console.log('====>',this.state.tanggal)
    }

    submit = (e) =>{
        e.preventDefault()
        const {nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam} = this.state
        this.props.orderEventAction(nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam)
        this.toggle()
    }
render() {
    const {nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam} = this.state
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
    <Form className="form" onSubmit={handleSubmit}> 
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
            <Field
                name="email"
                type="email"
                label="Email"
                placeholder="zankpuremail@samsung.com"
                component={renderField}
            />
                </Col>
            <Col>
            <Field
                name="nama"
                type="text"
                label="Nama"
                placeholder="Zank Purnama"
                component={renderField}
            />
            </Col>
            </Row>
            <Row>
            <Col>
            <Field
                name="jumlah"
                type="tel"
                label="Jumlah Peserta"
                placeholder="100"
                mask="99999999999999999999"
                maskChar={null}
                component={telRenderField}
                tag={InputMask}
            />
            </Col>
            <Col>
            <Field
                name="telepon"
                type="tel"
                label="No Telpon"
                placeholder="+62"
                mask="+6\2999 9999 99999"
                maskChar={null}
                component={telRenderField}
                tag={InputMask}
            />
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