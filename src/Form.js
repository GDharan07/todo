import "./App.css"
import {useState} from 'react';
function Form(){
       
const [value,setValue]=useState('');
const [iscolor,SetColor]=useState(false);
const [error,setError]=useState(false);
const [text,setText]=useState([]);
// const[data,setData]=useState(true);

const textChange=e=>{
setValue(e.target.value)
SetColor(false)
setError(false)
}

function add(e){
    e.preventDefault();
    if(value.length === 0){
        SetColor(true)
        setError(true)
        return 
    }

let obj={

    id:Math.floor(Math.random()*100),
    name:value}
setText((data)=> {return [obj,...data] })
setValue('')

// SetColor(false)
// setData(false)

}
const delet=(id)=>{

setText((dat)=>{

return dat.filter((dt)=>dt.id !== id)


})
// setData(true)
}
    return(
        <div>
         <form>
            <label htmlFor="inputbox"  style= {{color : iscolor ? 'red' : 'black'}} >Enter Text Here!</label><br/>
            <input id="inputbox" style= {{borderColor : iscolor ? 'red' : 'black'}} type="text" onChange={textChange} value={value} />  
           
            <button  id="add"  onClick={add} >Add</button>  
            {error ? (<p>Ooops! Text Box is Empty </p>):""}
         </form>
        {text.length===0 ? (<p>Data Not Found</p>) : ( text.map((dda,index)=><div id="map" key={index} ><p> {dda.name}</p><button onClick={()=>delet(dda.id)}>Delete</button></div>)
)}
{/* {text.map((dda,index)=><div id="map"><p key={index}> {dda.name}</p><button onClick={()=>delet(dda.id)}>Delete</button></div>)} */}
        </div>
    )
}
export default Form;