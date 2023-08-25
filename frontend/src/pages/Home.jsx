import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Fontana Community Senior Center Rentals Department</h1>
        
        <div>
          <Link to="/interest_list">
            <button type="button" >Interest List</button>
          </Link>
          
        </div>
    </div>

  )
}

export default Home;