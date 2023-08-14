import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17552526/pexels-photo-17552526/free-photo-of-city-road-man-person.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>Kuldeep Patidar</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/10310745/pexels-photo-10310745.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <span>Vivek Patidar</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/13939388/pexels-photo-13939388.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <p>
                <span>Ranjit Patidar</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <p>
                <span>Vishnu patidar</span> changed their cover picture
              </p>
            </div>
            <span>45 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16075175/pexels-photo-16075175/free-photo-of-portrait-of-a-man-with-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <p>
                <span>Ram Patidar</span> changed their cover picture
              </p>
            </div>
            <span>2 hour ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17444394/pexels-photo-17444394/free-photo-of-soviet-chic.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <p>
                <span>Mayank Patidar</span> changed their cover picture
              </p>
            </div>
            <span>1 day ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14944868/pexels-photo-14944868.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Balram Khandel</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/14207351/pexels-photo-14207351.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Kundan Mahajan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/8417647/pexels-photo-8417647.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Anand Patidar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16886454/pexels-photo-16886454/free-photo-of-wood-summer-garden-animal.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Nirmal Patidar</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17211693/pexels-photo-17211693/free-photo-of-city-road-man-people.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Jaydeep Patil</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17281224/pexels-photo-17281224/free-photo-of-young-man-in-hoodie-posing-in-nature.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Mohit Kumravat</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/16446072/pexels-photo-16446072/free-photo-of-woman-taking-a-picture-on-a-sidewalk-in-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Anjali Bhamoriya</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/17224260/pexels-photo-17224260/free-photo-of-cup-of-coffee-with-chamomile-flower-next-to-cut-up-strawberries.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Ritik Patidar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;