import React from 'react'

const Donst = ({activ}) => {
  return (
    <div app_navgiton>

{['home' ,'about','work','skills','testimonial', 'contact'].map((items, index)=>{

<a href={`#${items}`}
key = {items +index}
className ="app_dots"
style={activ === items ? {backgroundColor: '#313BAC'}:{}  }
></a>

})}


    </div>
  )
}

export default Donst