import axios from 'axios';

export function orderEventAction(nama,telepon,tanggal,lokasi,jumlah,konsumsi,email,hari,jam){
  return dispatch => {
    dispatch(loading())
    axios.post('http://neoal.xyz:3003/pesan',{
        nama:nama,
        telepon:telepon,
        tanggal:tanggal,
        lokasi:lokasi,
        jumlah:jumlah,
        konsumsi:konsumsi,
        email:email,
        hari:hari,
        jam:jam
    })
      .then(response=>{
        alert('pesanan anda akan segera kami proses')
        dispatch(success(response))
    })
    .catch(err=>{
      dispatch(error(err))
    })
  }
}

export function loading(){
  return {
    type:'LOADING'
  }
}

export function success(payload){
  return{
    type:'SUCCESS',
    payload:payload
  }
}

export function error(){
  return{
    type:'ERROR'
  }
}