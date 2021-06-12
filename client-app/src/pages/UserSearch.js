import React, {useState, useEffect} from 'react';

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [resultsView, setResultsView] = useState(false)
  // const [showOptions, setShowOptions] = useState(false)
  // useEffect(() => {
  //   async function getData() {
  //     const request = await fetch(
  //       "https://api.github.com/search/users?p=2&q=franz+in%3Aname+type%3Auser&type=Users"
  //     )
  //     const data = await request.json();
  //     console.log(data)
  //   }
  //   getData()
  // },[])

  function requestConstructor(term) {
    const baseUrl = "https://api.github.com/search/users?"
    const request = `${baseUrl}q=${term}+in%3Aname+type%3Auser&type=Users`
    return request
  }

  async function getData() {
    const request = await fetch(requestConstructor(searchTerm))
    const data = await request.json();
    setResultsView(data)
  }

  return(
    <section className="search-bar-container">
      <input 
        type="text"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      <button
        onClick={() => getData()}
      >
        Search
      </button>
      {
        // showOptions && 
        <>

        </>
      }
    </section>
  )
}

export default UserSearch