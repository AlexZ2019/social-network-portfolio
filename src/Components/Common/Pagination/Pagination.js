import React from "react";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let onPageChange = (page) => {
        props.getUsers(page, props.pageSize)
        debugger
    }
    return <div>
        {pages.map(page => <span key={page} onClick={() => onPageChange(page)}>{page}</span>)}
    </div>
}

export default Pagination