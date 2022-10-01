import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = (props) => {
    return (
      <Link to={props.url}>
        <div className="placeholder-glow px-2 py-4 fw-semibold align-items-center justify-content-center btn btn-secondary">
          <span className="material-icons">{props.icon}</span>
          <span className="d-none d-md-block vertical-text fw-bolder mt-2 text-break">{props.name}</span>
        </div>
      </Link>
    );
}

export default SidebarItem