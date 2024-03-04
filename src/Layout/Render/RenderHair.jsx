import React from 'react'

function RenderHair(props) {
    const renderHair=()=>{
        return props.isThayDo.map((item,index)=>{
          if(item.type==='hairstyle'){
            return <img src={item.imgSrc_png} alt="" key={index}/>
      
          }
        })
      }
  return (
    renderHair()
  )
}

export default RenderHair
