import { BrowserRouter, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Pages from './pages/Pages';
import Sidebar, { SidebarItem } from './components/reusable/Sidebar';
import { LuLayoutDashboard, LuCalendarRange, LuSettings, LuListTodo } from 'react-icons/lu';
import { TbReportAnalytics } from 'react-icons/tb';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';


function App() {

  return (
    <BrowserRouter>
      <main className="App flex h-screen">
        <Sidebar >
            <SidebarItem
              icon={<LuLayoutDashboard size={20} />}
              text="Dashboard"
            />

            <SidebarItem 
              icon={<LuCalendarRange size={20} />}
              text="Calendar" 
            />

            <SidebarItem
              icon={<LuListTodo size={20} />}
              text="Upcoming"
            />

            <SidebarItem
              icon={<TbReportAnalytics size={20} />}
              text="Analytics"
            />
            
            <SidebarItem 
              icon={<HiOutlineClipboardDocumentList size={20} />}
              text="Documents"
            />

            <SidebarItem
              icon={<LuSettings size={20} />}
              text="Settings"
            />
          </Sidebar>
          
          <Pages/>
      </main>
    </BrowserRouter>

   
  );
  
}

export default App;
