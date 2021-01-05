import React, { useReducer, createContext } from 'react'

export const LeadContext = createContext()

const initialState = {
    leadName: '',
    leadEmail: '',
    leadPhone: '',
    leadDetail: '',
    roomNames: ['Bathroom', 'Lounge', 'Bedroom', 'Lobby', 'Drawing', 'Dining', 'Kitchen', 'Porch', 'Stairs', 'Lawn', 'Hallway', 'Addons'],
    deviceNames: ['Switch', 'Motion', 'Dimmer', 'Socket', 'Curtain', 'Door Lock', 'Door Sensor', 'Gas Leak', 'Window', 'Breaker', 'Scene Switch', 'Fire Sensor', 'Meter', 'Occupancy Sensor', 'Siren'],
    roomsCount: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    matrix: new Array(12).fill(0).map(() => new Array(15).fill(1)),
    check_ambiance: true,
    check_security: true,
    check_energy: true,
    check_health: true,
    //Studio Apartment
    //1 Bed Apartment
    //2 Bed Apartment
    //3 Bed Apartment
    //2 Bed House
    //3 Bed House
    //4 Bed House
    //5 Bed House
    property_class: 2,//Custom Class
    property_type: 8,//Custom Type
    matrix_custom: new Array(12).fill(0).map(() => new Array(15).fill(1)),
    matrix_SA: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    matrix_1BA: [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ],
    matrix_2BA: [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    ],
    matrix_3BA: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    matrix_2BH: [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    ],
    matrix_3BH: [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    ],
    matrix_4BH: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],
    matrix_5BH: [
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ],

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
        case "SELECT_PROPERTY_CLASS":
            newState.property_class = action.val
            if(action.val===0){
                newState.property_type=0
                newState.matrix = initialState.matrix_SA.slice()
            }
            else if(action.val===1){
                newState.property_type=4
                newState.matrix = initialState.matrix_2BH.slice()
            }
            else if(action.val===2){
                newState.property_type=8
                newState.matrix = initialState.matrix_custom.slice()
            }
            break
        case "SELECT_PROPERTY_TYPE":
            newState.property_type = action.val
            if(action.val===0){
                newState.matrix = initialState.matrix_SA.slice()
            }
            else if(action.val===1){
                newState.matrix = initialState.matrix_1BA.slice()
            }
            else if(action.val===2){
                newState.matrix = initialState.matrix_2BA.slice()
            }
            else if(action.val===3){
                newState.matrix = initialState.matrix_3BA.slice()
            }
            else if(action.val===4){
                newState.matrix = initialState.matrix_2BH.slice()
            }
            else if(action.val===5){
                newState.matrix = initialState.matrix_3BH.slice()
            }
            else if(action.val===6){
                newState.matrix = initialState.matrix_4BH.slice()
            }
            else if(action.val===7){
                newState.matrix = initialState.matrix_5BH.slice()
            }
            else if(action.val===8){
                newState.matrix = initialState.matrix_custom.slice()
            }
                break
        case "REMOVE_SERVICE":
            // 0 Ambiance
            // 1 Security
            // 2 Energy
            // 3 Health
            if (action.val === 0) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][0] = 0;
                    newState.matrix[x][2] = 0;
                    newState.matrix[x][10] = 0;
                    newState.matrix[x][13] = 0;
                }
                newState.check_ambiance = false
            }
            else if (action.val === 1) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][1] = 0;
                    newState.matrix[x][5] = 0;
                    newState.matrix[x][6] = 0;
                    newState.matrix[x][8] = 0;
                    newState.matrix[x][14] = 0;
                }
                newState.check_security = false
            }
            else if (action.val === 2) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][3] = 0;
                    newState.matrix[x][9] = 0;
                    newState.matrix[x][12] = 0;
                }
                newState.check_energy = false
            }
            else if (action.val === 3) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][4] = 0;
                    newState.matrix[x][7] = 0;
                    newState.matrix[x][11] = 0;
                }
                newState.check_health = false
            }
            break;
        case "ADD_SERVICE":
            if (action.val === 0) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][0] = 1;
                    newState.matrix[x][2] = 1;
                    newState.matrix[x][10] = 1;
                    newState.matrix[x][13] = 1;
                }
                newState.check_ambiance = true
            }
            else if (action.val === 1) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][1] = 1;
                    newState.matrix[x][5] = 1;
                    newState.matrix[x][6] = 1;
                    newState.matrix[x][8] = 1;
                    newState.matrix[x][14] = 1;
                }
                newState.check_security = true
            }
            else if (action.val === 2) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][3] = 1;
                    newState.matrix[x][9] = 1;
                    newState.matrix[x][12] = 1;
                }
                newState.check_energy = true
            }
            else if (action.val === 3) {
                for (var x = 0; x < 12; x++) {
                    newState.matrix[x][4] = 1;
                    newState.matrix[x][7] = 1;
                    newState.matrix[x][11] = 1;
                }
                newState.check_health = true
            }
            break;
    }

    console.log(newState.matrix)
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