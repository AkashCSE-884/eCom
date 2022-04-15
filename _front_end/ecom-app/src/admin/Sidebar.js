import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <a href="/admin/home"><i className="fa fa-fw fa-home"></i> Home</a>
                <a href="/create-product"><i className="fa fa-fw fa-wrench"></i> Add Products</a>
                <a href="/manage-products"><i className="fa fa-fw fa-user"></i> Manage Products</a>
                <a className="bottom-0" href="/logout"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>
            </div>
        </>
    )
}
