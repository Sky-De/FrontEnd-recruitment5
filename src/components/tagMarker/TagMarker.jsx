
const TagMarker = ({text}) => {
    
    const markTgas = (text) => {
      // regEx for words which starts with "@"
      const tagCheck = /([@])\w+/g; 
      let matches = text.match(tagCheck);
      
      if( matches ){
        for (let i = 0; i < matches.length; i++) {
          text = text.replaceAll(matches[i], `<a href=${matches[i]} className="tagMarked">${matches[i]}</a>`);
        }
        return text
        }else return text
    } 
  
  return (
    <p className="markedText" dangerouslySetInnerHTML={{__html: markTgas(text)}}/>
  )
}

export default TagMarker