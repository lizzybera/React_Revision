// import React, { useEffect, useState } from 'react'
import pics from "../assets/image-stand-out.jpg"

// const UseEffect = () => {
//     const [count, setCounter] = useState(0)

//     // useEffect(() =>{
//     //     setCounter((el) =>
//     //         el + 1
//     //     )
//     // }, [])

//     // useEffect(()=>{

//     //     setTimeout(()=>{
//     //             setCounter((el) => el + 1)
//     //     }, 1000)

//     // } )

//     useEffect(()=>{
//         console.log("hello");
        
//     }, [count])

//   return (
//     <div style={{margin : "30px"}}>
//         <h1>UseEffect Class</h1>
//         <p>{count}</p>    
//         <p onClick={()=>{
//             setCounter(count + 1)
//         }} style={{cursor : "pointer"}}>Click Me</p>
//     </div> 
//   )
// }

// export default UseEffect


import React, { useEffect, useState } from 'react'
import pics2 from "../assets/image-graphic-design.jpg"
import pics3 from "../assets/image-gallery-milkbottles.jpg"
import pics4 from "../assets/image-gallery-orange.jpg"


const UseEffect = () => {

    const [counter, setCounter] = useState(0)

    let image = [pics, pics2, pics3, pics4]

    useEffect(()=>{

        setInterval(()=>{
                setCounter((el) => el + 1)
        }, 5000)

    }, [] )


  return (
    <div style={{margin : "50px"}}>
        <img style={{width : "200px", height : "200px"}} src={image[counter % image.length]} alt='images'/>
        {/* <p>{counter}</p> */}
    </div>
  )
}

export default UseEffect