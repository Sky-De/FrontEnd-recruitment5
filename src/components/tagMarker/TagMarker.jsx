import "./style.scss";
const TagMarker = ({text}) => {
  
  const taggedWords = text
  .split(" ")
  .reduce((result, word) => {
    if(word.startsWith("@")) result.push(<a className="tagMarked" key={word}>{word}</a>);
    else result.push(word + " ");
    return result;
  },[]);
  
  return <p className="markedText">{taggedWords}</p>
    
}

export default TagMarker