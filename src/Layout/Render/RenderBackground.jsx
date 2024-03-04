import React from 'react'

function RenderBackground(props) {
    const renderBackground=()=>{
        return props.isThayDo.map((item,index)=>{
          if(item.type==='background'){
            return <img src={item.imgSrc_png} alt="" key={index}/>
      
          }
        })
      }
  return (
    renderBackground()
  )
}

export default RenderBackground
