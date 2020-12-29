import React, { useReducer, createContext } from 'react'

export const LeadContext = createContext()

const initialState = {
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    leadDetail: ''
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
        case "AGE_DOWN":
            newState.age -= action.val
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