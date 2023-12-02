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
                link="/"
                />

                <SidebarItem 
                icon={<LuCalendarRange size={20} />}
                text="Calendar" 
                link="/calendar"
                />

                <SidebarItem
                icon={<LuListTodo size={20} />}
                text="Upcoming"
                link="/upcoming"
                />

                <SidebarItem
                icon={<TbReportAnalytics size={20} />}
                text="Analytics"
                link="/analytics"
                />
                
                <SidebarItem 
                icon={<HiOutlineClipboardDocumentList size={20} />}
                text="Documents"
                link="/documents"
                />

                <SidebarItem
                icon={<LuSettings size={20} />}
                text="Settings"
                link="/settings"
                />
            </Sidebar>
            
            <Pages/>
        </main>
    </BrowserRouter>

   
  );
  
}

export default App;
