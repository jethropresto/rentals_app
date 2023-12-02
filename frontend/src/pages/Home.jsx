import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className='p-4'>
      <div className="pb-4 items-center">
        <h1>Dashboard</h1>
      </div>
      
      
      <div>
        <Link to="/interest_list">
          <Button type="button" >Interest List</Button>
        </Link>
      </div>
    </div>

  )
}

export default Home;