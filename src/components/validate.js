const validate = values =>{
    const errors = {}
    if(!values.nama){
        errors.nama = 'Harus Di Isi!!'
    }
    if(!values.email){
        errors.email = 'Harus Di Isi!!'
    }
    if(!values.telepon){
        errors.telepon = 'Harus Di Isi!!'
    }
    if(!values.lokasi){
        errors.lokasi = 'Harus Di Isi!!'
    }
    if(!values.jumlah){
        errors.jumlah = 'Harus Di Isi!!'
    }
    if(!values.konsumsi){
        errors.konsumsi = 'Harus Di Isi!!'
    }
    return errors
}

export default validate 