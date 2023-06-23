import React from 'react'
import s from './FriendMessage.module.css'

export type FriendMessageType = {
    id: number,
    author: string,
    text: string

}

export type FriendMessagePropsType = {
    message: FriendMessageType
}
let arrMessages : FriendMessageType[]= [
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

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
