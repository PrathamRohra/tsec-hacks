import React from 'react'
// import Cards from '../../components/Cards/Cards'
import './homepage.css'

const cardData = [
   {
      id: 1,
      name: "Altaf",
      company: "Tsec coders",
      image: "https://www.google.com/search?q=image&rlz=1C1RXQR_enIN1021IN1021&oq=image&aqs=chrome..69i57j0i67l2j0i131i433i512j0i67j0i131i433i512j69i61j69i60.1392j0j7&sourceid=chrome&ie=UTF-8#arec=JoR7JNzGko0S6M",
      homeImage: "https://image.com",
      money: "300$",
      description: "Pvt Room 3BR Appartment"
   },
   {
      id: 2,
      name: "Altaf",
      company: "Tsec coders",
      image: "https://www.google.com/search?q=image&rlz=1C1RXQR_enIN1021IN1021&oq=image&aqs=chrome..69i57j0i67l2j0i131i433i512j0i67j0i131i433i512j69i61j69i60.1392j0j7&sourceid=chrome&ie=UTF-8#imgrc=JoR7JNzGko0S6M",
      homeImage: "https://image.com",
      money: "300$",
      description: "Pvt Room 3BR Appartment"
   },
   {
      id: 3,
      name: "Altaf",
      company: "Tsec coders",
      image: "https://www.google.com/search?q=image&rlz=1C1RXQR_enIN1021IN1021&oq=image&aqs=chrome..69i57j0i67l2j0i131i433i512j0i67j0i131i433i512j69i61j69i60.1392j0j7&sourceid=chrome&ie=UTF-8#imgrc=JoR7JNzGko0S6M",
      homeImage: "https://image.com",
      money: "300$",
      description: "Pvt Room 3BR Appartment"
   },
]

const HomePage = () => {
   return (
      <div className='home-cards-container'>
         <div className='cards'>
            {
               cardData.map((props) => {
                  return (
                     <article key={props.id} className="card">
                        <div className='card-top'>
                           <img src={props.image} alt="Businessman Img" className='card-img' />
                           <div className="card-top-details">
                           <h3>{props.name}</h3>
                           <h3>{props.company}</h3>
                           </div>
                        </div>
                        <img src={props.homeImage} alt="Home Img" className='card-home-img' />
                        <div className='card-bottom'>
                           <h4>{props.money}</h4>
                           <h5>{props.description}</h5>
                        </div>
                     </article>
                  )
               }
               )
            }
         </div>

      </div>
   )
}

export default HomePage