import {UserType} from "../state/reducers/usersReducer";
import {ContactsType, ProfileType} from "../components/Profile/ProfileContainer";
import {PhotosType} from "../state/reducers/profileReducer";

export const updateOnbjectInArray = (items: UserType[], itemId: number, objPropName: string, newObjProps: {}) => {
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

export const createErrorsObject = (profile: ProfileType) => {
    let fieldsError: string[] = []

    Object.keys(profile).map((key) => {
        if (isObject(profile[key as keyof ProfileType])) {
            Object.keys(profile[key as keyof (ContactsType | PhotosType)]).map((_key) => {
                // fieldsError[_key as keyof (ContactsType | PhotosType)] = ''
                fieldsError.push(_key)
            })
            // console.log( Object.keys(profile[key as keyof (ContactsType | PhotosType)]))
        }
        fieldsError.push(key)
        // fieldsError[key as keyof ProfileType] = ''

        // console.log(e)
        // console.log(key)
    })

    return fieldsError
}
