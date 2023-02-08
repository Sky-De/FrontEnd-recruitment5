import './style.scss';
import { useContext, useEffect, useState } from 'react';
import DiscussionsList from './discussionsList/DiscussionsList';
import { discussions } from '../../fakeData/data';
import UserDiscussionInput from "../discussion/userInputs/UserDiscussionInput"

const Discussion  = () => {
  const [discussInput,setDiscussInput] = useState('');
  // temperary--user data ougth to fetch or get from cookies/storage/state management
  const user = false;
  
  const handleChange = (e) => {
    setDiscussInput(e.target.value);
    console.log(discussInput);
  }

  return (
    <section className="Discussion">
      <div className="Discussion__startCon">
          <UserDiscussionInput
           user={user} 
           changeHandler={handleChange} 
           name="discussInput" 
           placeholder="Start a discussion" 
           value={discussInput}/>
      </div>
      <DiscussionsList data={discussions}/>
    </section>
  )
}

export default Discussion 