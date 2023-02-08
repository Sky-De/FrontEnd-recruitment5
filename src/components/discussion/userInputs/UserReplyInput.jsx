import NoAvatar from "../../../assets/avatar.png";
import sendIcon from "../../../assets/sendIcon.png";
import "./style.scss"

const UserReplyInput = ({user,changeHandler,name,value}) => {

  // this send handler is temperary / loigic here or pass by props
  const sendHandler = () => {
    console.log("click");
  };

  return (
    <div className="Discussion__userReply">
        <img className="userAvatar" src={user ? user.avatar : NoAvatar} alt="user Avatar" />
        <div className="Discussion__replyInputControl">
           <input value={value} name={name} onChange={changeHandler} className='Discussion__replyInput' type="text" placeholder='Reply' />
           <button onClick={sendHandler} className="Discussion__userDiscuss--sendBtn"><img src={sendIcon} alt="send btn"/></button>
        </div>
    </div>
  )
}

export default UserReplyInput