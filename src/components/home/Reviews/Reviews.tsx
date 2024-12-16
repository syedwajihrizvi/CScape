import { Box } from "@mui/material"
import Review from "./Review"

import avatar_a from "../../../assets/images/home/profile_1.jpg"
import avatar_b from "../../../assets/images/home/profile_2.jpg"
import avatar_c from "../../../assets/images/home/profile_3.jpg"
import avatar_d from "../../../assets/images/home/profile_4.jpg"
import avatar_e from "../../../assets/images/home/profile_5.jpg"
import avatar_f from "../../../assets/images/home/profile_6.jpg"
import avatar_g from "../../../assets/images/home/profile_7.jpg"
import avatar_h from "../../../assets/images/home/profile_8.jpg"
import avatar_i from "../../../assets/images/home/profile_9.jpg"
import avatar_j from "../../../assets/images/home/profile_10.jpg"
import { CScapeReview } from "../../../interfaces/interfaces"

import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const UserReviews: CScapeReview[] = [
    {
       profile_photo: avatar_a,
       first_name: "Jorge",
       last_name: "Alvarez",
       city: "Paris, France",
       year: "2023",
       money_saved: 95,
       rating: 4.7
    },
    {
        profile_photo: avatar_b,
        first_name: "Curtis",
        last_name: "Neilson",
        city: "Sydney, Australia",
        year: "2024",
        money_saved: 64,
        rating: 4.6
     },
     {
        profile_photo: avatar_e,
        first_name: "Emily",
        last_name: "Gibson",
        city: "Dallas, United States",
        year: "2023",
        money_saved: 129,
        rating: 4.9
     },
     {
        profile_photo: avatar_d,
        first_name: "Ria",
        last_name: "Shultz",
        city: "Shangai, China",
        year: "2024",
        money_saved: 18,
        rating: 4.3
     },
     {
        profile_photo: avatar_c,
        first_name: "Jo",
        last_name: "Prince",
        city: "Mexico City, Mexico",
        year: "2024",
        money_saved: 63,
        rating: 4.7
     },
     {
        profile_photo: avatar_f,
        first_name: "Erin",
        last_name: "Veenaman",
        city: "Amsterdam, Netherlands",
        year: "2023",
        money_saved: 745,
        rating: 4.9 
     },
     {
        profile_photo: avatar_g,
        first_name: "Klay",
        last_name: "Moreno",
        city: "Johannesburg, South Africa",
        year: "2022",
        money_saved: 711,
        rating: 4.4 
     },
     {
        profile_photo: avatar_h,
        first_name: "Anna",
        last_name: "Stacy",
        city: "Mumbai, India",
        year: "2024",
        money_saved: 36,
        rating: 4.2 
     },
     {
        profile_photo: avatar_i,
        first_name: "Loraine",
        last_name: "Wu",
        city: "New York City, United States",
        year: "2023",
        money_saved: 320,
        rating: 4.3
     },
     {
        profile_photo: avatar_j,
        first_name: "Mark",
        last_name: "Miller",
        city: "Lucerne, Switzerland",
        year: "2024",
        money_saved: 130,
        rating: 4.97
     }
]
function Reviews() {
   useGSAP(() => {
      gsap.to('.review', {
         scrollTrigger: {
            trigger: '.reviews-grid',
            toggleActions: 'play none none reverse'
         },
         opacity: 1,
         top: 0,
         duration: 1,
         stagger: 0.1
      })
   }, [])

    return (
        <Box className="reviews-grid">
            {UserReviews.map(review => <Review review={review}/>)}
        </Box>
    )
}

export default Reviews