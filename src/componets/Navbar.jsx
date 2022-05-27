import React,{useState} from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [togglemenu, settogglemenu ] = useState(false)
  return (
    
    <div className='gpt3_navbar gradient__bg' >
    <div className='gpt3_navbar-links'>
    <div className='gpt3_navbar-link_logo' >
    <h2>Sheta</h2>
    
    </div>
    
    <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


    </div>
     
    <div className= "gpt3_navbar_menu"  >
   {togglemenu ? <RiCloseLine color='#fff' size={26} onClick= {()=> settogglemenu(false)} />
    :<RiMenu3Line color='#fff' size={26} onClick= {()=> settogglemenu(true)} />
    } 
            <div className= {`${togglemenu ?"gpt3_navbar_menu_conrainer scale-up-center":"gpt3_navbar_menu_none"}`} >
              <div className="gpt3_navbar_menu_conrainer-links">
              <ul className="app__navbar-links_mnue">
      
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text " key={`link-${item}`}>
            <div />
            <a className='p-mnue' href={`#${item}`}>{item}</a>
          </li>
        ))}


      </ul>
             
              </div>
           



            </div>
           
    
    
    
    </div>
        </div>
     
  )
}

export default Navbar