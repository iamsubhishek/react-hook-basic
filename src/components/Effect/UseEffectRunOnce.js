import React,{useState,useEffect} from 'react'

function UseEffectRunOnce() {
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
    },
    []) //[] this sign tell to react render once in 2nd parameter
  return (
    <div>
      Hooks X -{x}  Y- {y}
    </div>
  )
}

export default UseEffectRunOnce
