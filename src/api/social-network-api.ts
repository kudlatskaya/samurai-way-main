import axios from 'axios'
import {UserType} from "../redux/usersReducer";
import {ProfileType} from "../components/Profile/ProfileContainer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b9ace853-ae17-4a5e-a99d-6f5715c5c1fe'
    }
})


// api
export const socialNetworkApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`);
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getAuth() {
         return instance.get<ResponseType<AuthResponse>>(`auth/me`);
    },
}

// types

export type UsersType = {
    items: UserType[]
    totalCount: number
    error: string | null
}

type AuthResponse = {
    id: number,
    login: string,
    email: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

