const PageSwitcher = ({ totalResults, pageNumbers, setPage, setResultsView, currentPage, getData}) => {
  let i;
  for (i = 0; i < totalResults.length; i ++) {
    if (!pageNumbers.includes(totalResults.length)){        
      pageNumbers.push(totalResults.length)
    }
  }

  function goToPage(page) {
    setPage(page);
    setResultsView(totalResults[page - 1]);
  }

  const pages = pageNumbers.map(e => 
    <p 
      key={e} 
      className={currentPage === e ? "page page-active" : "page"} 
      onClick={() => goToPage(e)}>{e}</p>
  )

  const CAN_GO_NEXT = currentPage < totalResults.length 
  
  return (
    <>
      <section className="flex">
        <div className="pages-container">
          <div style={{paddingRight: 20}}>Page</div> {pages}
          <button onClick={e => getData(e, currentPage +1)}>
          Get More
          </button>
        </div>      
      </section>
      
      <section>
        { currentPage !== 1 && 
          <button onClick={() => goToPage(currentPage - 1)}>Previous</button> 
        }
        { CAN_GO_NEXT && 
          <button onClick={() => goToPage(currentPage + 1)}>Next</button> 
        }
      </section>
    </>
  )

}

export default PageSwitcher