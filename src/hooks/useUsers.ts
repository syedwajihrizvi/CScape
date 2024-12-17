import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"
import { User } from "../interfaces/interfaces"

export const useUser = () => {

    const fetchUser = () =>
        apiClient.get('/users/me', {
            headers: {
                'x-auth-token': localStorage.getItem('x-auth-token')
            }
        })
        .then(res => res.data)
        .catch(() => console.log("An error occured"))


    return useQuery<User>({
        queryKey: [localStorage.getItem('x-auth-token')],
        queryFn: fetchUser
    })
}