import {UserType} from "../state/reducers/usersReducer";

export const updateOnbjectInArray = (items: UserType[], itemId: number, objPropName: string, newObjProps: {}) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
}
