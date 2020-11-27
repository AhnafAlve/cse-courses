import React, { useState } from 'react';
import './Course.css';
import fakeData from '../../data/fakeData';
import Topic from '../Topic/Topic';
import Cart from '../Cart/Cart';


const Course = () => {
   const data = fakeData;
   const [courses, setCourses] = useState(data);
   const [cart,setCart] = useState([]);

   const addCourse = (topic) => {
     
      const newCart = [...cart, topic];
      setCart(newCart);
   }
    return (
       <div className='course-container'>
            <div className='Courses'>

                  {
                     courses.map(course => <Topic 
                        addCourse = {addCourse}
                        topic={course} ></Topic>)
                  }
            
            </div>
             <div className="Cart">
                <Cart cart={cart}></Cart>
             </div>
       </div>
    );
};

export default Course;