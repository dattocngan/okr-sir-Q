import React from 'react';
import SidebarItem from './SidebarItem';

const sidebarData = [
  {
    key: 1,
    icon: 'add_circle',
    name: 'Create OKR',
    url: '/objectives/create_okr',
  },
  {
    key: 2,
    icon: 'emoji_objects',
    name: 'All objectives',
    url: '/',
  },
  {
    key: 3,
    icon: 'logout',
    name: 'Logout',
    url: '/logout',
  },
];
const Sidebar = () => {
  const sidebarList = sidebarData.map((item) => (
    <SidebarItem
      key={item.key}
      icon={item.icon}
      name={item.name}
      url={item.url}
    />
  ));
  return (
    <aside className="col-1 col-lg-auto position-sticky top-0 start-0 h-100vh">
      <div className="d-flex flex-column overflow-hidden h-100vh">
        {sidebarList}
      </div>
    </aside>
  );
};

export default Sidebar;
