import {useState, useEffect} from 'react'
import FocusCard from './FocusCard'

function SingleResult({data}) {
  const [showFocus, toggleShow] = useState(false)
  useEffect(()=> {
    toggleShow(false)
  },[data])

  const style = showFocus ? "user-row row-active" : "user-row"
  
  return (
    <>
    <div className={style}
      onClick={() => toggleShow(!showFocus)}
    >
      <div className="flex align-center">
        <img className="user-avatar" src={data.avatar_url} />
        <h4 className="user-name">{data.login}</h4>
      </div>
      <a className="link-profile" href={data.html_url} target="blank">View Profile</a>      
    </div>
    {
      showFocus && 
      <FocusCard
        data={data}
        show={showFocus}
      />
    }
    
    </>
  )
}

export default SingleResult