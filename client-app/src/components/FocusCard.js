import {useEffect, useState} from 'react'

function FocusCard({data}) {  
  const [userData, setUserData] = useState(null)
  const [reposData, setReposData] = useState(null)
  useEffect(async ()=>{
    // Get user data
    const user_request = await fetch(`https://api.github.com/users/${data.login}`)
    const user_res = await user_request.json()
    setUserData(user_res)
    // Get repos data for some stars count
    const repos_request = await fetch(`https://api.github.com/users/${data.login}/repos?per_page=100`)
    const repos_res = await repos_request.json()
    setReposData(repos_res)
  },[])

  function getStars(repos) {
    const total = repos?.map(e => e.stargazers_count)
    return total
  }

  const stars = getStars(reposData)
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const starCount = stars?.length && stars?.reduce(reducer) 
  
  console.log(starCount)
    
    return (
      <div className="focus-card row-active">
        <div className="flex space-between align-center">
          <h3 className="focus-name">{userData?.name}</h3>
          
        </div>
        <span>★ {starCount}</span>
        {userData?.bio && <p>{userData?.bio}</p>}
        
        <div>
          {userData?.followers && <span>{userData?.followers} followers | </span>}        
          {userData?.following && <span>{userData?.following} following</span>}        
        </div>
      </div>
    )
  
  
}

export default FocusCard