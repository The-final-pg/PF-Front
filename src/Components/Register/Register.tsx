import React from 'react'
import { Link } from 'react-router-dom';
import HeaderRegister from './HeaderRegister/HeaderRegister';
import './Register.css'

const Register = () => {
  return (
    <div className='Register_component'>
        <HeaderRegister/>
        <div className='Register_divclientWorker'>
          <div className='Register_Worker'>
            <p className='Register_orTitle'>Registrate como <span className='Register_orTitleOrange'>FreeLancer</span></p>
            <p className='Register_PortOrPublic'>Edita tu portfolio</p>
            <p className='Register_OrDescript'>Aplica a los mejores trabajos para ti</p>
            <div className='Register_divImage'>
              <img src='' alt='Register'/>
            </div>
            <Link className='Register_button' to="/register/worker" >Registrate</Link>        
          </div>
            <div className='Register_Client'>
              <p className='Register_orTitle'>Registrate como <span className='Register_orTitleOrange'>Cliente</span></p>
              <p className='Register_PortOrPublic'>Realiza publicaciones</p>
              <p className='Register_OrDescript'>Recibe las mejores ofertas para tu trabajo</p>
              <div className='Register_divImage'>
                <img src='' alt='Register'/>
              </div>
              <Link className='Register_button' to="/register/client">Registrate</Link>
            </div>
        </div>

    </div>
  )
}

export default Register