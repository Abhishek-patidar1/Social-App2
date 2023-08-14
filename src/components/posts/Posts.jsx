import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  
  const posts = [
    {
      id: 1,
      name: "Abhishek patidar",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Devendra Patidar",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
     img: "https://images.pexels.com/photos/17391414/pexels-photo-17391414/free-photo-of-acapulco.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 3,
      name: "Sumit Patidar",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
     img: "https://images.pexels.com/photos/17027706/pexels-photo-17027706/free-photo-of-wood-landscape-sunset-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 4,
      name: "Kosal Patidar",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
     img: "https://images.pexels.com/photos/17491560/pexels-photo-17491560/free-photo-of-blonde-woman-in-t-shirt-lying-down.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;