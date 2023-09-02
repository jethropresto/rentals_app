import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
        <h1>Fontana Community Senior Center Rentals Department</h1>
        
        <div>
          <Link to="/interest_list">
            <Button type="button" >Interest List</Button>
          </Link>
          
        </div>
    </div>

  )
}

export default Home;