import Chat from "./chat"
import Count from "./count"
import { useState } from 'react'
export default function Socket() {
    const menuList = ['chat', 'count']
    const [page, setPage] = useState('chat')

    return (
        <>
            <h1>Socket</h1>
            {/* <button onClick={() => setPage('chat')}>Chat</button>
            <button onClick={() => setPage('count')}>Count</button> */}
            {menuList.map((menu, index) => {
                return (
                    <button key={index} onClick={() => setPage(menu)}>{menu}</button>
                )
            })}
            {page === 'chat' && <Chat />}
            {page === 'count' && <Count />}
        </>
    )
}