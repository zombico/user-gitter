import SingleResult from './SingleResult'

function ResultsView({data}) {
  const view = data.map(e => 
    <SingleResult 
      data={e}
    />
    )
  return (
    <section className="search-results-container">{view}</section>
  )
}

export default ResultsView