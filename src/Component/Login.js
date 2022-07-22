import { Card } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Img/logoMC.png';

const Login = () => {
    return(
        <div>
            <div className='titleLogin flex' style={{marginTop: '-60px'}}>
             <img src={Logo} style={{height: '80px', marginLeft: '500px', marginTop: '65px'}}/>
             <label className='label2'>MortalCombat <br/> Account</label>
            </div>
            <Card className='cardLogin border border-black mt-6 rounded-md' style={{width: '350px', marginLeft: '450px', height: '400px'}}>
              <h3 className='mt-5 fs-4 fw-normal' style={{fontFamily: 'Cormorant SC, serif'}}>Masuk segera</h3>
              <input placeholder='Email Anda' type='email' className='inputLogin border border-primary mt-3 rounded' style={{marginLeft: '25px', width: '300px', height: '32px', border: '1px solid blue'}}/>
              <label style={{fontSize: '10px', marginLeft: '-35px', marginTop: '5px'}}>Gunakan email dengan benar dan password yang bervariasi</label>
              <button className='bg-dark text-white rounded' type='submit'
               style={{width: '150px', marginLeft: '100px', marginTop: '30px', height: '35px'}}>
                Login
             </button>
             <label className='mt-3'>or</label>
             <div className='flex mt-1'>
               <button style={{border: '1px solid gray', width: '120px', height: '35px', borderRadius: '8px', marginTop: '25px', marginLeft: '40px'}}>
                <label style={{marginLeft: '22px', marginTop: '-10px', fontSize: '13px'}}>Google</label>
                <FcGoogle style={{height: '100px', width: '20px', marginLeft: '20px', marginTop: '-58px'}}/>
               </button>
               <button style={{border: '1px solid gray', width: '120px', height: '35px', borderRadius: '8px', marginTop: '25px', marginLeft: '40px'}}>
                <label style={{marginLeft: '30px', marginTop: '-10px', fontSize: '13px'}}>Facebook</label>
                <FaFacebook style={{color: 'blue', height: '100px', width: '20px', marginLeft: '20px', marginTop: '-58px'}}/>
               </button>
             </div>
             <Link to='' className='mt-3'>Belum memiliki account</Link>
            </Card>
        </div>
    )
}

export default Login;