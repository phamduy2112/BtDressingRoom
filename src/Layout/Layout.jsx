import React, { useEffect, useState } from 'react'
import '../assets/css/style.css'
import data from '../Data/database.json'
import RenderDanhMuc from './Render/RenderDanhMuc';
import RenderSanPham from './Render/RenderSanPham';
import RenderQuanAo from './Render/RenderQuanAo';
import RenderHair from './Render/RenderHair';
import RenderBackground from './Render/RenderBackground';




function Layout() {
const [active,setActive]=useState(0);
const [isType,setIsType]=useState(['topclothes'])
const [isThayDo,setIsThayDo]=useState([]);


useEffect(()=>{

  <RenderSanPham isType={isType}></RenderSanPham>
 
},[isType])

const handleClick=(type,index)=>{
  setActive(index);

    setIsType(type)
   
}



const thayQuanAo=(id,type)=>{
  const selectItem= data.tabPanes.find((itemSP) => itemSP.id == id)
  const updateItem=[...isThayDo];
  const itemIndex=updateItem.findIndex((item)=>item.id==id);
  const itemType=updateItem.findIndex((item)=>item.type==type)
  if(itemIndex!==-1){
    updateItem.splice(itemIndex,1)
    

  }else{
   if(itemType!==-1){
    updateItem.splice(itemType,1)

   }
 
   updateItem.push(selectItem)
    
  }

  setIsThayDo(updateItem);
}




    return (
   <div className="container-fluid">
  <div className="row">
    <div className="col-sm-12">
      <div className="card">
        <div className="text-center">
          <img src="./../images/cybersoft.png" alt="Card image" />
        </div>
        <div className="card-body">
          <h4 className="card-title text-center">
            CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
            - Virtual Dressing Room
          </h4>
        </div>
      </div>
      <hr />
    </div>
  </div>
  <div className="row">
    <div className="col-md-8">
      <ul className="nav nav-pills">
    

       
            <RenderDanhMuc data={data.navPills} active={active} handleClick={handleClick} />
      </ul>
      <div className="well">
        {/* Tab panes */}
      <div className="tab-content">

     <RenderSanPham data={data.tabPanes} isType={isType} thayQuanAo={thayQuanAo}/>
</div>

      </div>
    </div>
    <div className="col-md-4">
      <div className="contain">
        <div className="body">


{/* {renderQuanAo()} */}
      <RenderQuanAo isThayDo={isThayDo} />
        </div>
        <div className="model" />
        <div className="hairstyle">
      
         <RenderHair isThayDo={isThayDo} />
        </div>
        <div className="necklace">
        </div>
        <div className="bikinitop" />
        <div className="bikinibottom" />
                  
        <div className="handbag">
      
        </div>
        <div className="feet">

  
        </div>
        <div className="background" />

      <RenderBackground isThayDo={isThayDo}/>
      </div>
    </div>
  </div>
</div>

  )
}

export default Layout
