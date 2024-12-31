import pic1 from "../assets/Images/pic1.jpg"
import pic2 from "../assets/Images/pic2.jpg"
import pic3 from "../assets/Images/pic3.jpg"


export const Images = [
    pic1,
    pic2,
    pic3
]

import project1 from '../assets/Images/project1.jpg'
import project2 from '../assets/Images/project2.jpg'
import project3 from '../assets/Images/project3.jpg'
import project4 from '../assets/Images/project4.jpg'
import project5 from '../assets/Images/project5.jpg'
import project6 from '../assets/Images/project6.jpg'

export const Projects = [
    { image: project1 },
    { image: project2 },
    { image: project3 },
    { image: project4 },
    { image: project5 },
    { image: project6 },
  ].map((project, index) => ({ index: index + 1, ...project }));



  