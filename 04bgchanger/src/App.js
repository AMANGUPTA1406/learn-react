import {useState} from "react"

function App() {
  let [color, setColor] = useState("Olive");

  return (
   <>
   <div className="w-screen h-screen" style={{backgroundColor: color }}>
    <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2 ">
      <div className="rounded flex flex-wrap justify-center gap-2  px-3 py-2 shadow-lg" style={{backgroundColor: "white"}}>
        <button className="rounded p-1 shadow-lg" style={{backgroundColor: "red", color: "white"}} onClick={()=>setColor("red")}>Red</button>
        <button className="rounded p-1 shadow-lg" style={{backgroundColor: "black", color: "white"}} onClick={()=>setColor("black")}>Black</button>
        <button className="rounded p-1 shadow-lg" style={{backgroundColor: "Blue", color: "white"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className="rounded p-1 shadow-lg" style={{backgroundColor: "orange", color: "black"}} onClick={()=>setColor("orange")}>Orange</button>
        <button className="rounded p-1 shadow-lg" style={{backgroundColor: "yellow", color: "black"}} onClick={()=>setColor("yellow")}>Yellow</button>
      </div>
    </div>
    </div>
   </>
  );
}

export default App;
