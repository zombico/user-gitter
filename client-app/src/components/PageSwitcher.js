const PageSwitcher = ({ totalResults, pageNumbers, setPage, setResultsView, currentPage}) => {
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
      className={currentPage === e ? "" : ""} 
      onClick={() => goToPage(e)}>{e}</p>
  ) 
  
  return (
    <div className="">
      <div style={{paddingRight: 20}}>Page</div> {pages}
    </div>
  )

}

export default PageSwitcher