import { useLayoutEffect,useState} from 'react';
import rough from 'roughjs/bundled/rough.esm';
import './draw.css';
import Guess from '../Guess/guess-component';
const generator=rough.generator();

function createElement(x1,y1,x2,y2,type){
  const roughElement=
  type==="line"
  ?generator.line(x1,y1,x2,y2):generator.rectangle(x1,y1,x2-x1,y2-y1)
  return{x1,y1,x2,y2,roughElement};
}

export default function Draw() {
  const [elements,setElements]=useState([]);
  const [drawing,setDrawing]=useState();
  const [elementType,setElementType]=useState("line");
let {rightWord, setrightWord}=useState({});
  useLayoutEffect(()=>{
    const canvas= document.getElementById("canvas");
    const context=canvas.getContext("2d");
    // context.clearReact(0,0,canvas.width,canvas.height);

    const roughCanvas=rough.canvas(canvas);
// const rect=generator.rectangle(10,10,100,100);
    // const line=generator.line(10,10,110,110);
    // roughCanvas.draw(rect);
    // roughCanvas.draw(line);
    elements.forEach(({roughElement})=>roughCanvas.draw(roughElement));
  },[elements]);
   
  const handleMouseDown=(event)=>{
    setDrawing(true);

    const {clientX,clientY}=event;

const element=createElement(clientX,clientY,clientX,clientY,elementType);
setElements((prevState)=>[...prevState,element]); 
 };

  const handleMouseMove=(event)=>{
    if(!drawing) return;
    
    const {clientX,clientY}=event;
    const index=elements.length-1;
    const{x1,y1}=elements[index];
    const updateElement=createElement(x1,y1,clientX,clientY,elementType);

    const elementsCopy=[...elements];
    elementsCopy[index]=updateElement;
    setElements(elementsCopy);
  } ;
  const handleMouseUp=(event)=>{
    setDrawing(false);
  };
  let [contactGuess , setContactGuess] = useState(true) ;

   const changeComponent = () => {
    setContactGuess(!contactGuess);
   }
   
  return (
    <div>
      <h1>drawwwwwwwwww</h1>
      <input type={String} onChange={(e)=>setrightWord(e.target.value)}/>
      <button className="cntcToggleBtn" onClick={changeComponent}> {contactGuess ? "click if you finish" : "click to guess"}  </button>
       {
           contactGuess ? "" :  <Guess/>
       }
      {/* <Guess/> */}
      <div style={{position:"fixed"}}>
        <input
        type="radio"
        id='line'
        checked={elementType==="line"}
        onChange={()=>setElementType("line")}
        />
        <label htmlFor='line'>line</label>
        <input
        type="radio"
        id='rectangle'
        checked={elementType==="rectangle"}
        onChange={()=>setElementType("rectangle")}
        />
        <label htmlFor='rectangle'>rectangle</label>
        
      </div>
      <canvas 
      id="canvas" 
      width={window.innerWidth} 
      height={window.innerHeight} 
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      >

        Canvas</canvas>
      {/* <h1>Draw guess</h1>
<input type={String}/>
<button>click</button> */}

    </div>
  )
}
