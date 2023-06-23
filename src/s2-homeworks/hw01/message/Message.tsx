import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    id: number,
    author: string,
    text: string

}
// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}
let arrMessages : MessageType[]= [
    {
        id: 1, author: "First", text: "Hello"
    },
    {
        id: 2, author: "Second", text: "Hallo"
    },
    {
        id: 3, author: "Third", text: "Привет"
    }
]
// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default Message
