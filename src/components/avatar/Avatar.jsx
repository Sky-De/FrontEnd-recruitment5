import stringAvatar from "../../func/stringAvatar";
import stringToColor from "../../func/stringToColor";
import "./style.scss";
export const Avatar = ({user}) => {
  const {bgColor,textColor} = stringToColor(user.name);

  if(user.avatar) return <img className="userAvatar" src={user.avatar} alt="User Avatar" />
  else return <div className="userAvatar string" style={{background:bgColor,color:textColor}}>{stringAvatar(user.name)}</div>    
}
