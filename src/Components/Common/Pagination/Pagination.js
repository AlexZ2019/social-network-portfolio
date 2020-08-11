import React from "react";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // let portionPagesNumber = Math.ceil(pagesCount / props.portionPageSize) // getting sum of all portions of all the pages
    // let [portionPageNumber, setPortionPageNumber] = useState(1) // set a current portion of all the portions
    // let LeftPartOfPortionsPages = (portionPageNumber - 1) * props.portionPageSize + 1 // know if there're pages portions before current
    // let RightPartOfPortionsPages = portionPageNumber * props.portionPageSize // know if there're pages portions after current
    let onPageChange = (page) => {
        props.getUsers(page, props.pageSize)
    }
    return <div>
        {pages.map(page => <span key={page} onClick={() => onPageChange(page)}>{page}</span>)}
    </div>
}

export default Pagination