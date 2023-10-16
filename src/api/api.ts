import {UserType} from "../state/reducers/usersReducer";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {EmailType, PasswordType, RememberMeType} from "../state/reducers/authReducer";
import axios from "axios";
import {PhotosType} from "../state/reducers/profileReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b9ace853-ae17-4a5e-a99d-6f5715c5c1fe'
    }
})


// api
export const userAPI = {
    getUsers(currentPage: number, pageSize: number, term: string, friend: null | boolean = null) {
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '' : `&friend=${friend}`))
            .then(res => res.data)
    },
    follow(id: number) {
        return instance.post<ResponseType>(`follow/${id}`);
    },
    unfollow(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get<any>(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status});
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)

        return instance.put<ResponseType<PhotosType>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthResponse>>(`auth/me`);
    },
    login(email: EmailType, password: PasswordType, rememberMe: RememberMeType) {
        return instance.post<ResponseType<{userId: number}>>(`auth/login`, {email, password, rememberMe} );
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
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

