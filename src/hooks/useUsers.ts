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
        .catch((err) => err)


    return useQuery<User>({
        queryKey: ["me"],
        queryFn: fetchUser
    })
}