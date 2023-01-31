export type UserType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

type dialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
}

export type StateType = {
    dialogsPage: dialogsPageType
}

export const state: StateType = {
    dialogsPage: {
        users: [
            {id: 1, name: 'Игорь'},
            {id: 2, name: 'Марселин'},
            {id: 3, name: 'Чуча'}
        ],

        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Wazzap'},
            {id: 3, message: 'U r hot'},
            {id: 4, message: 'I love u'}
        ]
    }
}