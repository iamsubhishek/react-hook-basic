import {React,useState, useEffect} from 'react'

function UseEffectWithCleanUp() {
  const [display, setDisplay]=useState(true)
  const [x,setX]= useState(0)
    const [y,setY]=useState(0)

    const logMousePosition =e=> {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener('mousemove',logMousePosition)

        return () =>{
          console.log('Component unmounting code')
          window.removeEventListener('mousemove',logMousePosition)
        }
    },
    []) //[] this sign tell to react render once in 2nd parameter

  return (
    <div>
     
      <button onClick={()=> setDisplay(!display)}>Toggle display</button>
      {display &&  x}
    </div>
    )
}

export default UseEffectWithCleanUp
