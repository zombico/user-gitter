import UserSearch from './pages/UserSearch';
import './App.css';

function App() {

// ● I can search for users and see a paginated list of results
// ● I can navigate through the next and previous pages of the paginated results
// ● I see the total count of search results
// ● I see notable information for each search result, such as the description, star/follower count, profile pictures, etc.
// ● I can select a search result and be taken to the applicable page on github.com API

// 1. make an input bar that makes params ez
// 2. on submit, the response sets page state as 1, set total item count, then divide item count by 30. 
//    if there's a remainder, add +1 page
// 3. Make this
//    - Search input component
//    - Results table display component
//    - Page switcher component

  return (
    <UserSearch />
  );
}

export default App;
