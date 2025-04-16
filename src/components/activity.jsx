<div className='center'>
  <div style={{margin:"auto",color:"green"}}>
   <div className="white">
   <h3>Setting Questions</h3>
  <div className="white2">
      <h5>Question: {value1}</h5>
        <textarea style={{outlineColor:"yellowgreen"}} cols={39} rows={5} placeholder='type question....'  onChange={(e)=>setValue1(e.target.value)}/> 
       </div> 
  </div>
<div className="white2">
    <h5>Option value for {key}</h5>
    <h5>value: {value2} </h5>
     <input type="text" onChange={(e)=>setValue2(e.target.value)} placeholder="value...."/> 
    </div>
   
    <div className="white2">
        <h5>Option value for {key}</h5>
        <h5>value: {value3} </h5>
         <input type="text" onChange={(e)=>setValue3(e.target.value)} placeholder="value...."/> 
       </div>
        
       <div className="white2">
        <h5>Option value for {key}</h5>
        <h5>value: {value4} </h5>
         <input type="text" onChange={(e)=>setValue4(e.target.value)} placeholder="value...."/> 
       </div>
       
  <div className="white2">
      <h5>Option value for {key}</h5>
      <h5>value: {value5} </h5>
       <input type="text" onChange={(e)=>setValue5(e.target.value)} placeholder="value...."/> 
       </div>
        

 <div className="white2">
    
      <h5>Answer: {value6} </h5>
      <div className="twoA">
      <input type="text" className="input" placeholder="write ans..."  onChange={(e)=>setValue6(e.target.value)}/>
      <button className="click1" onClick={()=>handleSave()}>UPLOAD</button>
  </div>
     </div>
     </div>
  </div>
 