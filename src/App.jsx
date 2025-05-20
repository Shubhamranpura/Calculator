import { useRef, useEffect, useState } from 'react';
import './App.css';
import { FaBackspace } from 'react-icons/fa';

function App() {
  const CalculateAreaRef = useRef();
  const [Value, setValue] = useState('')
  const [getAnswer , setGetanswer] = useState(false)

  useEffect(() => {
    if (!CalculateAreaRef.current.innerText) {
      CalculateAreaRef.current.innerText = Value;
    }
   else if (CalculateAreaRef.current.innerText.length === 0) {
      CalculateAreaRef.current.innerText = '0';
    }
  }, [Value]);

  const handleButtonClick = (e) => {
    const digit = e.target.innerText.toLocaleString('en-In')
    setValue((Value) => Value + digit)
    // console.log(Value)
  }

  const handleSymbolClick = (e) => {
    const symbole = e.target.innerText
    // console.log(symbole)
    // console.log(typeof symbole)
    if (symbole === undefined || symbole === 'AC' || symbole === "=" ) {
      return null
    }
    else { // console.log(Value)
      setValue((Value) => Value + symbole)
      // console.log(Value)
    }
  }

  const handleBackspace = () => {
    setValue((value) => value = value.slice(0, -1))
  }

  const handleAllClear = () => {
    // console.log(Value)
    setValue("")
    // console.log(Value)
    }

  const handleAnswer = () =>{
    // console.log(Value)
    if (Value.includes('%')){
      const expression = Value.split("%").join("") + '/100'
      console.log(expression)
      const answer = eval(expression)
      setValue(answer.toLocaleString('en-IN'))
      setGetanswer(prev => !prev)
    }
    else{
      const answer = eval(Value)
      setValue(answer.toLocaleString('en-IN'))
      setGetanswer(prev => !prev)

    }
  }  
  return (
    <section className="flex justify-center items-center h-[100vh]">
      <div className="p-5 rounded-3xl bg-gradient-to-bl from-[#1d3a7c] to-[#1a1d24] shadow-inner backdrop-blur text-white w-[75%] h-[80%]">
        <div
          className=" p-3 text-[40px] text-[#000000] w-[90 %] mr-[44px]  ml-3 text-left bg-[#b1dfe9] rounded-lg h-[100px]"
          ref={CalculateAreaRef}
          > 
          {getAnswer && <span> = </span>}
          {Value}
        </div>
        <div className='flex gap-5'>
          <div className='list-none mt-6  w-[55%] grid-cols-3 grid h-[50%] p-3 numbers gap-5 '
            onClick={handleButtonClick}>
            <li ><button>9</button></li>
            <li ><button>8</button></li>
            <li ><button>7</button></li>
            <li ><button>6</button></li>
            <li ><button>5</button></li>
            <li ><button>4</button></li>
            <li ><button>3</button></li>
            <li ><button>2</button></li>
            <li ><button>1</button></li>
            <li ><button>0</button></li>
            <li ><button>.</button></li>
            <li ><button>00</button></li>
          </div>

          {/* for numbers */}
          <div className='symbols w-auto gap-5 grid grid-cols-2 list-none p-3 mt-6 h-[50%]'
            onClick={handleSymbolClick}>
            <li><button>+</button></li>
            <li><button>-</button></li>
            <li><button>/</button></li>
            <li><button>*</button></li>
            <li><button>%</button></li>
            <li><button onClick={handleBackspace}><FaBackspace /></button></li>
             
             {/* answer button */}
            <li ><button className='text-[50px]'
            onClick={handleAnswer}
            >=</button></li>

            <li className='text-[#1d3a7c]'><button
            onClick={handleAllClear}>AC</button></li>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;