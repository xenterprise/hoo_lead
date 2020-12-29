import React, { useReducer, createContext } from 'react'

export const LeadContext = createContext()

const initialState = {
    leadName: '',

}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "UPDATE_USER_INFO":
            newState.leadName = action.val
            break
        case "AGE_DOWN":
            newState.age -= action.val
            break
    }

    return newState
}

export const LeadContextProvider = props=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <LeadContext.Provider value={[state, dispatch]}>
            {props.children}
        </LeadContext.Provider>
    )
}