import Tilt from 'react-parallax-tilt';
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
  return (
    <Tilt className='Tilt br2 shadow-2' style={{ height: '150px', width: '150px' }}>
      <div className='pa2'>
        <h1><img src={brain} alt="logo" /></h1>
      </div>
    </Tilt>
  )
}

export default Logo;