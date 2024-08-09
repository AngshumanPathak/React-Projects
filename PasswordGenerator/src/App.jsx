import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {
  const [sliderValue,setSliderValue] = useState(8);
  const [numericals, setNumericals] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null);


  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password])

  const passwordGenerator = useCallback(() => {
      
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numericals) {
          
      str += "1234567890"

     }
     if(specialChar){

      str += "!@#$%^&*-_+=[]{}~`"
     }

     for (let i =1; i <= sliderValue; i++) {
        
         let char = Math.floor(Math.random() * str.length + 1)

         pass += str.charAt(char);

         
     }
        setPassword(pass);
     

  }, [sliderValue,numericals,specialChar, setPassword])


  useEffect(() =>{
        
    passwordGenerator();


   }, [sliderValue,numericals,specialChar, passwordGenerator] )





  return (
    <div>
      <h1 className="text-3xl text-white">
       Password Generator
      </h1>
      <div>
        <div className=' justify-center space-x-2'> 
          <input type="text" value = {password} readOnly className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' ref={passwordRef}/>
          <button className='text-white bg-blue-500 rounded-lg px-4 py-3 my-8 hover:bg-blue-600 active:bg-blue-700' onClick={copyToClipboard}>Copy</button>
        </div>
        <div className='flex justify-center space-x-4'> 
             <div>
                 <input type="range" min={6} max={100} value={sliderValue} onChange={(e) => {setSliderValue(e.target.value)}} />
                 <label className='text-white'> Length: {sliderValue}</label>
             </div>
             <div>
                <input type="checkbox" value={numericals} onChange={()=> {setNumericals((prev) => !prev)}}/>
                <label className='text-white'>Numericals</label>
             </div>
             <div>
                <input type="checkbox" value={specialChar} onChange={()=> {setSpecialChar((prev) => !prev)}}/>
                <label className='text-white'>Special Characters</label>
             </div>
             
             
             
        </div>
      </div>
    </div>
  )
}

export default App
