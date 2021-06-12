function ResultsView({data}) {
  const view = data.map(e => 
      <div>{e.login}</div>
    )
  return (
    <section className="search-results-container">{view}</section>
  )
}

export default ResultsView