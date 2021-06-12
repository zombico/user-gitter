import React, {useState, useEffect} from 'react';

let totalResults = []

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [resultsView, setResultsView] = useState(false)
  const [currentPage, setPage] = useState(null)

  function requestConstructor(term, page) {
    const baseUrl = "https://api.github.com/search/users?"
    const request = `${baseUrl}page=${page}&q=${term}+in%3Aname+type%3Auser&type=Users`
    return request
  }

  async function getData(e, page) {
    e.preventDefault()
    const request = await fetch(requestConstructor(searchTerm, page))
    const data = await request.json()
    setResultsView(data.items)
    totalResults.push(...[data.items])
    console.log(totalResults)
    setPage(totalResults.length)
  }

  async function getFreshData(e) {
    // reset some state items
    totalResults.length = 0
    setResultsView(false)
    await getData(e, 1)
  }

  return(
    <section >
      <div className="search-bar-container">
        <form>
          <input 
            type="text"
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
          />

          <button
            onClick={e => getFreshData(e)}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      { resultsView &&
        <section>
          <button onClick={e => getData(e, currentPage +1)}>
          Get More
          </button>
        </section>
      }
      {
        // showOptions && 
        <>

        </>
      }
    </section>
  )
}

export default UserSearch