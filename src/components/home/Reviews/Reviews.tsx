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

const UserReviews: CScapeReview[] = [
    {
       profile_photo: avatar_a,
       first_name: "Jorge",
       last_name: "Alvarez",
       city: "Paris",
       year: "2023",
       review: `I was able to travel Paris with so much ease using CScape.
                It recommended me so many great cafes and bars and also scheduled
                my trips so I avoid the bad weather. I saved hundreds of dollars and I'm
                definetly going to use it again to travel to more places.` 
    },
    {
        profile_photo: avatar_b,
        first_name: "Curtis",
        last_name: "Neilson",
        city: "Sydney",
        year: "2024",
        review: `Sydney has so many great places to vist. CScape scheduled my trip using its algorithm.
                 It planned my trip to I was able to visit the best places on the coolest days to avoid the
                 Australian heat. It also found me the best deals for AirBnb and Hotels. I was able to get the most
                 out of my trip and learned so much about Sydney. I give it a 10/10.` 
     },
     {
        profile_photo: avatar_e,
        first_name: "Emily",
        last_name: "Gibson",
        city: "Dallas",
        year: "2023",
        review: `As someone from Germany, I was very excited to explore an iconic city in the United States. Dallas
                 was the perfect place to get more customed with American culture. CScape recommended my the best trip
                 plans including authentic American cuisine places, various sport games to attend, and also ways to get
                 around the city.` 
     },
     {
        profile_photo: avatar_d,
        first_name: "Ria",
        last_name: "Shultz",
        city: "Shangai",
        year: "2024",
        review: `Shangai is such a difficult place to navigate with its many people and destinations. I was able to
                easily visit the best places in Shangai within my 3 day trip. CScape planned my entire trip and I did
                not have to miss out on anything. I explore over 70 different places in just 3 days.` 
     },
     {
        profile_photo: avatar_c,
        first_name: "Jo",
        last_name: "Prince",
        city: "Mexico City",
        year: "2024",
        review: `I had not been back to Mexico since I was a child, so I was a bit overwhelmed with it. However, CSCape
                made my trip so much easier with its planning. I was able to browse several different places and really get
                back to my roots and heritage.` 
     },
     {
        profile_photo: avatar_f,
        first_name: "Erin",
        last_name: "Veenaman",
        city: "Amsterdam",
        year: "2023",
        review: `I enjoyed my trip so much using CScape, I become an affiliate. Now I get to enjoy all my trips while making money.
                This has made all my trips so much affordable and enjoyable. Over the last year, I made 3 different trips to 3 different
                cities and actually made over $800 from the affiliate programs. This covered most of my travel and hotel experiences!` 
     },
     {
        profile_photo: avatar_g,
        first_name: "Klay",
        last_name: "Moreno",
        city: "Johannesburg",
        year: "2022",
        review: `I met my wife through CScape. True story. My wife also uses CScape and our trips aligned and luckly, CScape
                 put us in the same cafe at the same time. Using the CScape app, I was notified about the other tourists in the area
                 and me and my wife connected. 3 years later and we are still using CScape! Not just a travel app, but also a love finder!` 
     },
     {
        profile_photo: avatar_h,
        first_name: "Anna",
        last_name: "Stacy",
        city: "Mumbai",
        year: "2024",
        review: `I was told by many of my friends to use CScape to travel. I decided to give it a try on my trip to Mumbai and it was great.
                 CScape was able to find my the best places to enjoy authentic Indian cuisine and also found me the best hotels to stay at. I
                 was only there for 2 days, but in 2 days I was able to explore so much. I enjoyed my experience so much, I'm using it for my 
                 next trip as well.` 
     },
     {
        profile_photo: avatar_i,
        first_name: "Loraine",
        last_name: "Wu",
        city: "New York City",
        year: "2023",
        review: `The city that never sleeps was one of the best trips of my life. CScape helped me explore New York City and I made
                good money doing it as well. I stayed in New York for over 1 month and for the whole month CScape helped me learn so much.
                Through the affiliate program I was making enough money to eat out everyday and made my trip so much more affordable.` 
     },
     {
        profile_photo: avatar_j,
        first_name: "Mark",
        last_name: "Miller",
        city: "Lucerne",
        year: "2024",
        review: `I went to Lucerne, Switzerland for my honeymoon. My wife loved the trip so much we officially moved here 2 months later.
                 I do not think we would have made this life changing decision without CScape. We fell in love with the city due to CScape's
                 amazing planning algorithm. We saved so much money and enjoyed so much. Soon we will be travel to Dublin, Ireland as CScape
                 affiliates.` 
     }
]
function Reviews() {
    return (
        <Box className="reviews-grid">
            {UserReviews.map(review => <Review review={review}/>)}
        </Box>
    )
}

export default Reviews