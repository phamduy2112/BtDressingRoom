import React from 'react'

function RenderQuanAo(props) {
    const renderQuanAo=()=>{

        return props.isThayDo.map((item,index)=>{
        if(item.type!=="hairstyle"&&item.type!=="background"){
          return <img src={item.imgSrc_png} alt="" key={index}/>
      
        }
        })
      }
  return (
    renderQuanAo()
  )
}

export default RenderQuanAo
