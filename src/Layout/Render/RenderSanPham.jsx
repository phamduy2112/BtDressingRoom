import React from 'react'

function RenderSanPham(props) {
    const renderSanPham=()=>{
        return props.data.filter((itemSP) => itemSP.type == props.isType)
        .map((itemSP, index) => {
         return (
          <div className="card text-left" key={index}>
            <img className="card-img-top" src={itemSP.imgSrc_jpg} />
            <div className="card-body">
        <button className='btn btn-success' onClick={()=>{props.thayQuanAo(itemSP.id,itemSP.type)}}>Thử Đồ Ngay </button>
            </div>
          </div>
         )  
      })
      
       
      
          
         
      
      
        
      }
      
  return (
    renderSanPham()
  )
}

export default RenderSanPham
