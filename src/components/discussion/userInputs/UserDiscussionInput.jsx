import NoAvatar from "../../../assets/avatar.png";
import sendIcon from "../../../assets/sendIcon.png";

const UserReplyInput = ({user,changeHandler,name,placeholder,value}) => {

  // this send handler is temperary / loigic here or pass by props
  const sendHandler = () => console.log("click");
  
  return (<div className="Discussion__userDiscuss">
          <img className="userAvatar" src={user ? user.avatar : NoAvatar} alt="user Avatar" />
          <div className="Discussion__inputControl">
            <input value={value} name={name} onChange={changeHandler} className='Discussion__input' type="text" placeholder={placeholder} />
            <button onClick={sendHandler} className="Discussion__userDiscuss--sendBtn"><img src={sendIcon} alt="send btn"/></button>
          </div>       
  </div>)
}

export default UserReplyInput