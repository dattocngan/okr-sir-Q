import React from 'react'
import SidebarItem from './SidebarItem'

const sidebarData = [
    {
        key: 1,
        icon: 'add_circle',
        name: 'Create OKR',
        url: '/create_okr'
    },
    {
        key: 2,
        icon: 'emoji_objects',
        name: 'All objectives',
        url: '/all_objectives'
    },
    {
        key: 3,
        icon: 'info',
        name: 'Detail',
        url: '/detail'
    },
    {
        key: 4,
        icon: 'logout',
        name: 'Logout',
        url: '/logout'
    },
]
const Sidebar = () => {
    const sidebarList = sidebarData.map((item) => <SidebarItem key={item.key} icon={item.icon} name={item.name} url={item.url} />)
    return (
      <aside className="col-1 col-lg-auto position-sticky top-0 start-0 h-100">
        <div className="nav flex-column">{sidebarList}</div>
      </aside>
    );
}

export default Sidebar