function ResultsView({data}) {
  const view = data.map(e => 
    <div>{e.login}</div>)
  return view
}

export default ResultsView