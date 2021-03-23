import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilter, getPageSize, getTotalUserCount} from "../../../Redux/Selectors/UsersSelector";
import {getUsers} from "../../../Redux/Reducers/UsersReducer";

const Pagination = () => {
    const totalUsersCount = useSelector(getTotalUserCount);
    const pageSize = useSelector(getPageSize)
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // let portionPagesNumber = Math.ceil(pagesCount / props.portionPageSize) // getting sum of all portions of all the pages
    // let [portionPageNumber, setPortionPageNumber] = useState(1) // set a current portion of all the portions
    // let LeftPartOfPortionsPages = (portionPageNumber - 1) * props.portionPageSize + 1 // know if there're pages portions before current
    // let RightPartOfPortionsPages = portionPageNumber * props.portionPageSize // know if there're pages portions after current
    let onPageChange = (page) => {
        dispatch(getUsers(page, pageSize, filter));
    }
    return <div>
        {pages.map(page => <span key={page} onClick={() => onPageChange(page)}>{page}</span>)}
    </div>
}

export default Pagination;