
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Notification from './Notification'
import Header from './Header'

function AppLayout() {
  return (
    <div className='flex'>
        <Sidebar/>
        <main className=' ml-60 mr-72 border border-x border-l-graylighter w-full h-screen'>
            <Header/>
            <Outlet/>
        </main>
        <Notification/>
    </div>
  )
}

export default AppLayout