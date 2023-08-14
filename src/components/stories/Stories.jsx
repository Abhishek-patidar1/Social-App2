import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Abhishek",
      img: "https://images.pexels.com/photos/17211591/pexels-photo-17211591/free-photo-of-bicycle-parked-under-building-painted-blue.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 2,
      name: "Sumit",
      img: "https://images.pexels.com/photos/17239874/pexels-photo-17239874/free-photo-of-fashion-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 3,
      name: "Kosal",
      img: "https://images.pexels.com/photos/12430192/pexels-photo-12430192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 4,
      name: "Shivam",
      img: "https://images.pexels.com/photos/4133391/pexels-photo-4133391.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories