

export const timeRange = (date) => {
    const currentTime = new Date();
    const createTime = new Date(date);
    const minMili = 60000;
    const hourMili = 3600000;
    const dayMili = 86400000;
    const monthMili = 2628000000;
    const yearMili = 31540000000;
    const miliDifrence = Math.floor((currentTime - createTime));
    if(miliDifrence < minMili ) return ["","Just now"]
    if(miliDifrence > minMili && miliDifrence < minMili * 2 ) return ["","a minute"]
    if(miliDifrence > minMili * 2 && miliDifrence < hourMili ) return [Math.floor(miliDifrence / minMili),"minute"]
    if(miliDifrence > hourMili && miliDifrence < dayMili ) return [Math.floor(miliDifrence / hourMili),"h"]
    if(miliDifrence > dayMili && miliDifrence < monthMili ) return [Math.floor(miliDifrence / dayMili),"d"]
    if(miliDifrence > monthMili && miliDifrence < yearMili ) return [Math.floor(miliDifrence / monthMili),"month"]
    if(miliDifrence > yearMili) return [Math.floor(miliDifrence / yearMili),"year"]
}