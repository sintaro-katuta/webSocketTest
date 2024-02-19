import { useEffect, useState } from 'react'
export default function Chat() {
   const [message, setMessage] = useState('')
   const [messageList, setMessageList] = useState([])
   const socket = new WebSocket('ws://localhost:5000')

   const onSubmit = (e) => {
      e.preventDefault()
      socket.send(JSON.stringify(message))
   }

   useEffect(() => {
      socket.addEventListener('message', (e) => {
         console.log('Socket 受信', e.data)
         setMessageList([...messageList, e.data])
      })
   },[])
      return (
         <>
            <form onSubmit={(e) => {onSubmit(e)}}>
               <input
                  type="text"
                  onChange={(e) => {setMessage(e.target.value)}}
               />
               <button
                  type='button'
                  onClick={() => {
                     socket.send(JSON.stringify(message))
                  }}
               >
                  送信
               </button>
            </form>
            {messageList.length === 0 && <p>メッセージはありません</p>}
            {messageList.length !== 0 && 
               <>
                  {messageList.map((message, index) => {
                        return <p key={index}>{message}</p>
                  })}
               </>
            }
         </>
      )
}