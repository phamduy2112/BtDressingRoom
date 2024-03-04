import React from 'react'

function RenderDanhMuc(props) {
    const renderDanhMuc=()=>{
    return  props.data.map((itemDanhMuc,index)=>{
      let isActive=index==props.active;
  
      return <li className="nav-item" key={index}>
       
      <button className={`nav-link ${isActive ? 'active' :''}`} onClick={()=>{props.handleClick(itemDanhMuc.type,index)}}>{itemDanhMuc.showName}</button>
      </li>
     })
   }
  return (
    renderDanhMuc()
  )
}

export default RenderDanhMuc
