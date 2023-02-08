import "./style.scss";
import { useState } from "react";
import { timeRange } from "../../../func/timeRange";
import LikeIcon from "../../likeIcon/LikeIcon";
import TagMarker from "../../tagMarker/TagMarker";
import { Avatar } from "../../avatar/Avatar";

const InteractTemplate = ({data,showReplyHandler}) => {
  const isReply = !data.replies;
  const [likeActive,setLikeActive] = useState(data.iLikedIt);
  const [discussData,setDiscussData] = useState(data);
  
    // takes date and return [time for show,label related to time]
    const [time,label] = timeRange(discussData.date);

    const likeHandle = (id) => {
      setLikeActive(pre => !pre);
      // Temperary
      // instead of this, depend on the state management system adopted for app ough to update data
      if(likeActive) setDiscussData({...discussData,likes: discussData.likes -1})
      else setDiscussData({...discussData,likes: discussData.likes +1})
    }

      
   
  return (
    <li className="InteractTemplate">
          <Avatar user={data.user}/>
          <div className="InteractTemplate__Content">
              <div className="InteractTemplate__title">
                  <p className="InteractTemplate__title--name">{discussData.user.name}</p>
                  <span className="InteractTemplate__title--date">{time}{label} ago</span>
              </div>
              <div className="InteractTemplate__text">
                <TagMarker text={discussData.text}/>
              </div>
              <div className="InteractTemplate__action">
                  <div onClick={()=>likeHandle(discussData.id)}  className={`InteractTemplate__action--likeBtn ${likeActive ? "active" : ""}`}>
                    <LikeIcon   className="likeIcon"/><b>{discussData.likes}</b>
                  </div>
                 {discussData.replies && 
                 <button onClick={()=>showReplyHandler(discussData.id)} className="InteractTemplate__action--replyBtn">
                  {discussData.replies.length > 0 ? discussData.replies.length : null } 
                  {discussData.replies.length < 2 ? " Reply" : " Replies"}
                  </button>}
              </div>
          </div>
    </li>
  )
}

export default InteractTemplate