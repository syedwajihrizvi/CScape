import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../utils/clients/apiClient"

const usePhotos = (photo_reference: string, max_width: number) => {

    const fetchPhoto = () =>
        apiClient.post<Blob>('/places/photos', {photo_reference, maxwidth: max_width}, { responseType: 'blob' })
            .then(res => {
                const imgBlob = new Blob([res.data], { type: 'image/jpeg' });
                const imgURL = URL.createObjectURL(imgBlob);
                return imgURL
            })

    return useQuery<string>({
        queryKey: ['photo', photo_reference],
        queryFn: fetchPhoto
    })
}

export default usePhotos