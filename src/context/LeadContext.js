import React, { useReducer, createContext } from 'react'

export const LeadContext = createContext()

const initialState = {
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    leadDetail: '',
    roomNames: ['Bathroom', 'Lounge', 'Bedroom', 'Lobby', 'Drawing', 'Dining', 'Kitchen', 'Porch', 'Stairs', 'Lawn', 'Addons'],
    deviceNames: ['Switch', 'Motion', 'Dimmer', 'Socket', 'Curtain', 'Door Lock', 'Door Sensor', 'Gas Leak', 'Window', 'Breaker', 'Scene Switch', 'Fire Sensor', 'Meter'],
    roomsCount: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    matrix: new Array(11).fill(0).map(() => new Array(13).fill(2)),
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "UPDATE_LEAD_NAME":
            newState.leadName = action.val
            console.log("Check", newState.leadName)
            break
        case "UPDATE_LEAD_EMAIL":
            newState.leadEmail = action.val
            console.log("Check", newState.leadEmail)
            break
        case "UPDATE_LEAD_PHONE":
            newState.leadPhone = action.val
            console.log("Check", newState.leadPhone)
            break
        case "UPDATE_LEAD_DETAIL":
            newState.leadDetail = action.val
            console.log("Check", newState.leadDetail)
            break
        case "SUB_ROOM_COUNT":
            newState.roomsCount[action.val] -= 1
            break
        case "ADD_ROOM_COUNT":
            newState.roomsCount[action.val] += 1
            break
        case "SUB_DEVICE_COUNT":
            newState.matrix[action.val.room_id][action.val.device_id] -= 1
            break
        case "ADD_DEVICE_COUNT":
            newState.matrix[action.val.room_id][action.val.device_id] += 1
            break
    }

    return newState
}

export const LeadContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <LeadContext.Provider value={[state, dispatch]}>
            {props.children}
        </LeadContext.Provider>
    )
}