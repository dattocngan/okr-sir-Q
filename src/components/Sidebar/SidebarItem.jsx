import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = (props) => {
    return (
        <Link to={props.url}>
            <div className='placeholder-glow ps-md-3 px-2 py-4 d-flex align-items-center fw-semibold'>
                <span className='material-icons'>{props.icon}</span>
                <span className='fs-5 ms-3 d-none d-lg-block'>{props.name}</span>
            </div>
        </Link>
    )
}

export default SidebarItem