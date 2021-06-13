function ResultsView({data}) {
  const view = data.map(e => 
      <div className="user-row">
        <div className="flex align-center">
        <img className="user-avatar" src={e.avatar_url} />
        <h4 className="user-name">{e.login}</h4>
        </div>
        <a className="link-profile" href={e.html_url} target="blank">View Profile</a>
      </div>
    )
  return (
    <section className="search-results-container">{view}</section>
  )
}

export default ResultsView