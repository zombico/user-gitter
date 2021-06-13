import {useEffect, useState} from 'react'

function FocusCard({data}) {
  // const [followerCount, setFollowers] = useState(null)
  const [focusData, setFocusData] = useState(null)
  useEffect(async ()=>{
    // check followers
    const request = await fetch(`https://api.github.com/users/${data.login}`)
    const res = await request.json()
    console.log(res)
    setFocusData(res)
    console.log(focusData)
  },[])
  
    
    return (
      <div className="focus-card row-active">
        <h3 className="focus-name">{focusData?.name}</h3>
        {focusData?.bio && <p>{focusData?.bio}</p>}
        <div>
          {focusData?.followers && <span>{focusData?.followers} followers | </span>}        
          {focusData?.following && <span>{focusData?.following} following</span>}        
        </div>
      </div>
    )
  
  
}

export default FocusCard