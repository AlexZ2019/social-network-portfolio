import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getFilter, getPageSize} from "../../Redux/Selectors/UsersSelector";
import {useHistory} from "react-router";
import * as queryString from "querystring";
import {getUsers} from "../../Redux/Reducers/UsersReducer";

export const UserSearcher = (props) => {

    const pageSize = useSelector(getPageSize);
    const currentPage = useSelector(getCurrentPage);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    let [value, setValue] = useState("");
    const history = useHistory();

    useEffect(() => {

        const parsedSearch = queryString.parse(history.location.search.substr(1));
        let actualFilter = filter
        let actualPage = currentPage;
        if (!!parsedSearch.page) {
            actualPage = Number(parsedSearch.page);
        }

        if (!!parsedSearch.term) {
            setValue(parsedSearch.term);
            actualFilter = {...actualFilter, term: parsedSearch.term}
        }
        dispatch(getUsers(actualPage, pageSize, actualFilter));
    }, []);

    useEffect(() => {

        let query = {}
        if (!!filter.term) {
            query.term = filter.term;
        }
        if (currentPage !== 1) {
            query.page = String(currentPage)
        }
        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })

    }, [filter, currentPage])

    const onFilterChanged = (term) => {
        const filter = {
            term
        }
        props.getUsers(1, pageSize, filter)
    }
    const setValueFromInput = (e) => {
        setValue(e.currentTarget.value)
    }
    const getUsersWithSearchFilter = (e) => {
        e.preventDefault()
        onFilterChanged(value)
        console.log(value)
    }
    return <div>
        <form onSubmit={getUsersWithSearchFilter}>
            <input type="text" value={value} onChange={setValueFromInput}/>
            <button type="submit">Search</button>
        </form>

    </div>
}


