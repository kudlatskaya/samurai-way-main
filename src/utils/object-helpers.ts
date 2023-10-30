import {UserType} from "../state/reducers/usersReducer";

export const updateOnbjectInArray = (items: UserType[], itemId: number, objPropName: string , newObjProps: {}) => {
    return items.map(item => {
        if (item[objPropName as keyof UserType] === itemId) {
            return {...item, ...newObjProps}
        }
        return item
    })
}


export const isObject = (value: any): boolean => {
    return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value)
    );
}

