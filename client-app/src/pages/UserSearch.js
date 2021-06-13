import React, {useState, useEffect} from 'react';
import PageSwitcher from '../components/PageSwitcher'
import ResultsView from '../components/ResultsView'

let totalResults = []
let pageNumbers = []

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [resultsView, setResultsView] = useState(false)
  const [resultsFound, setResultsFound] = useState(null)
  const [currentPage, setPage] = useState(null)

  function requestConstructor(term, page) {
    const baseUrl = "https://api.github.com/search/users?"
    const request = `${baseUrl}page=${page}&q=${term}+in%3Aname+in%3Alogin+type%3Auser`
    return request
  }

  // note: gotta pass 'e' around since the events are triggered by the button
  async function getData(e, page) {
    e.preventDefault()
    const request = await fetch(requestConstructor(searchTerm, page))
    const data = await request.json()
    setResultsView(data.items)
    totalResults.push(...[data.items])
    console.log(totalResults)
    setPage(totalResults.length)
    setResultsFound(data.total_count)
  }

  async function getFreshData(e) {
    // reset some state items
    clearData(e)
    await getData(e, 1)
  }

  function clearData() {
    totalResults.length = 0
    pageNumbers.length = 0
    setResultsView(false)
  }

  const IS_MULTIPAGE = resultsFound > 30
  const HAS_RESULTS = resultsFound > 1
  const NO_RESULTS = resultsFound === 0

  return(
    <>
    <section className="search-bar-container">   
    <h1>User Gitter <span className="subtitle">for Github</span></h1>       
      <form className="flex"> 
        
          <div className="flex column">
            <label for="search-bar">Search by user or name</label>
            <input
              id="search-bar" 
              type="text"
              onChange={e => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <div className="flex align-end">
            <button
              onClick={e => getFreshData(e)}
              type="submit"
            >
              Search
            </button>
            <button
              onClick={e => clearData()}            
            >
              Clear
            </button>
          </div>
          
        
      </form>
      <p style={{textAlign: 'center'}}>
          {HAS_RESULTS &&
           `${resultsFound} results found.`                       
          }
          {NO_RESULTS &&
           `No results found.`                       
          }
          </p>
    </section>
    {
        resultsView && 
        <ResultsView
          data={resultsView}
        />
      }
      {
        resultsView && IS_MULTIPAGE &&  <section className="page-control">
        <PageSwitcher
          totalResults={totalResults}
          pageNumbers={pageNumbers}
          setPage={setPage}
          setResultsView={setResultsView}
          currentPage={currentPage}
          getData={getData}
        />
        
        </section>
      }
    </>
  )
}

export default UserSearch