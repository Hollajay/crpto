import './nav.css'
import { FaBitcoin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";


export const Crypto = () => {
  return (
    <div className='nav_section'>
     <div className='nav_logo'>
     <FaBitcoin size={30}/>
     <h1>coins</h1>

     </div>
<div className='about_section'>
    <div className='about_text'><h2>About</h2><FaArrowRight /></div>
    <div className='auth_text'><h2>Auth coin</h2><FaArrowRight /></div>
   
</div>
<div>
{<TfiMenuAlt size={25}/>}
</div>

    </div>
  )
}
