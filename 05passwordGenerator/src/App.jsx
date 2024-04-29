import { useState, useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed===true){
      str+="0123456789";
    }
    if(charAllowed===true){
      str+="!@#$%^&*";
    }
    let pass="";
    for(let i=0; i<length; i++){
        let idx = Math.floor(Math.random()*str.length);
        pass+=str[idx];
    }

    setPassword(pass);

  }, [length,numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password,passwordRef]);

  useEffect(()=>{
    passwordGenerator()
  }
    , [length,numAllowed,charAllowed,passwordGenerator]) 
  
    

  return (
    <>
      
      <div className='flex justify-center w-full mt-10'>
      <div className='bg-slate-300 rounded-lg p-6'>
        <div>
        <h1 className='text-xl text-center text-black pb-4'>Password Generator</h1>
        </div>
        <div className='flex flex-wrap '>
        <input type="text" 
        placeholder='password' 
        value={password} 
        className='outline-none text-orange-500 grow rounded-l p-1'
        readOnly
        ref={passwordRef}
        />

        <button className='bg-blue-700	text-white rounded-r p-1'
        onClick={copyPasswordToClipBoard}
        >Copy</button>
        </div>
        <div className='text-orange-500 p-4'>
          <input
          type="range"
          min="6" max="100"
          value={length}
          className="cursor-pointer"
          onChange={(e)=>{
            setLength(e.target.value)
          }}
          />
          <label className='pr-3'>Length: {length}</label>

          <input type="checkbox" id='numChange' value={numAllowed} 
            onChange={(e)=>{
              setnumAllowed(prev=>!prev);
            }}
          />
          <label htmlFor='numChange' className='pr-3'> Numbers</label>
          <input type="checkbox" 
          id='charChange'
          value={charAllowed} 
          onChange={(e)=>{
            setcharAllowed(prev=>!prev);
          }}
          />
          <label htmlFor='charChange' className='pr-3'
          > Symbols</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
