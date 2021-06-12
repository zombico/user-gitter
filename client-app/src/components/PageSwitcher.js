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
        <button>Previous</button>
        <button>Next</button>
      </section>
    </>
  )

}

export default PageSwitcher