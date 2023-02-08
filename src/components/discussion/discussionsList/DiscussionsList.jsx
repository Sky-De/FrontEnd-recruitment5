import { useState } from "react";
import InteractTemplate from "../interactTemplate/InteractTemplate";
import UserReplyInput from "../userInputs/UserReplyInput";
import "./style.scss";

const DiscussionsList = ({data}) => {
      const user = false;
      const [replyClick,setReplyClick] = useState({});
      const [userInput,setUserInput] = useState({replyInput:''});

      
      const handleChange = (e) => {
        setUserInput({...userInput,[e.target.name]:e.target.value})
        console.log(userInput);
      }
      //click on reply btn  
      const showReplyHandler = (id) => {
        setReplyClick(replyClick => ({
            ...replyClick,
            [id] : !replyClick[id]
        }))
      }

  return (
    <ul className="Discussion__list">
        { data && data.map( item => 
        <div className={`Discussion__list--item ${replyClick[item.id] ? "active": ""}`} key={item.id}>

            <InteractTemplate  data={item} showReplyHandler={showReplyHandler}/>      

            { replyClick[item.id] && ( <> { item.replies.length > 0 && (
              <ul className='Discussion__replies'>
                {item.replies.map(reply => <InteractTemplate key={reply.id} data={reply}/>)}
              </ul>
            )}
            
            <UserReplyInput value={userInput.replyInput} user={user} changeHandler={handleChange} name="replyInput"/>
            </>)}
        </div>)
        }
    </ul>
  )
}

export default DiscussionsList