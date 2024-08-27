import { useState } from 'react'
import { Input } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const {to, setTo} = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  
  const currencyInfo = useCurrencyInfo(from);

  


  const options = currencyInfo ? Object.keys(currencyInfo) : [];


  const swap = () => {

    setFrom(to),
    setTo(from),
    setConvertedAmount(amount),
    setAmount(convertedAmount)
  }

  const convert = () => {

    setConvertedAmount (amount* useCurrencyInfo[to]);
    const URL = 'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }


  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat p-0 mr-auto"
         style={{backgroundImage:`url("https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?t=st=1723613871~exp=1723617471~hmac=d17940db96426063848d7c02ebf45d1a89b3fa02d1fb9bfce20841534affd4fd&w=740")`}}>


<div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                 >

             <Input 
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
             />


      <div className="relative w-full h-0.5">
        <button
          type="button"
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
          onClick={swap}
        >
            swap
        </button>
        </div>
            <div className="w-full mt-1 mb-4">
                <Input
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={from}
                    amountDisable
                />
            </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                </button>
                </form>
            </div>
        </div>
       
    
        
    </div>
  )
}

export default App
