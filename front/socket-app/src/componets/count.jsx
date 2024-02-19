import { useState } from 'react'
export default function Count() {
   const socket = new WebSocket('ws://localhost:5000')
   const [count, setCount] = useState(0)
   
   socket.addEventListener('open', (e) => {
      console.log('Socket 接続成功', e)
   })

   socket.addEventListener('message', (e) => {
      console.log('Socket 受信', e.data)
      setCount(JSON.parse(e.data))
   })
   const addCount = () => {
      socket.send(JSON.stringify(count + 1))
      setCount(count + 1)
   }
   const subCount = () => {fi
         socket.send(JSON.stringify(count - 1))
         setCount(count - 1)
   }
   return(
      <>
         <h1>Count</h1>
         <button onClick={() => addCount()}>+1</button>
         <p>{count}</p>
         <button onClick={() => subCount()}>-1</button>
      </>
   )
}