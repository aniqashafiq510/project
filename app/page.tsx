
import UserProfile from '@/state management/Profile'
import Reducer from '@/state management/Reducer'
import React from 'react'



{/*const Fruits = [
  {name: "Apple", id : 1 },
  {name: "Mango", id : 2 },
  {name: "Grapes", id : 3 }
]*/}

// const user = {
//   name: 'Aniqa',
//   age: 21,
//   height : '5-3'
// }
export default function page() {
  // const isLoggedin = true;
  
  
  return (
    <div> 

      
      <UserProfile/>
      <Reducer/>

      {/* <ProfileCard
      name=  "Aniqa"
      age = {21}
      onlineStatus = {true}
      
      /> */}
{/* key is given to track that which element is changed or called, it should be unique */}
      {/* {Fruits.map(fruit => (
        <div key={fruit.id}>
          <p>
            {fruit.name}
          </p>
        </div>
      ))} */}
      {/* <Button/> */}
      {/* {<p>{user.name}</p>
      } */}

     {/* {isLoggedin?  <Button/>: 'Please Login to continue!'} */}



    </div>
    
  )
}



// rfc shortcut for making this function