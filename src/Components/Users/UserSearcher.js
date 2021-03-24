import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getFilter, getPageSize} from "../../Redux/Selectors/UsersSelector";
import {useHistory} from "react-router";
import * as queryString from "querystring";
import {getUsers} from "../../Redux/Reducers/UsersReducer";

export const UserSearcher = () => {

    const pageSize = useSelector(getPageSize);
    const currentPage = useSelector(getCurrentPage);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    let [value, setValue] = useState("");
    let [selectedValue, setSelectedValue] = useState("null");
    const history = useHistory();

    useEffect(() => {

        const parsedSearch = queryString.parse(history.location.search.substr(1));
        let actualFilter = filter;
        let actualPage = currentPage;
        if (!!parsedSearch.page) {
            actualPage = Number(parsedSearch.page);
        }

        if (!!parsedSearch.term) {
            setValue(parsedSearch.term);
            actualFilter = {...actualFilter, term: parsedSearch.term}
        }

        if(!!parsedSearch.friend) {
            setSelectedValue(parsedSearch.friend)
            actualFilter = {...actualFilter, friend: parsedSearch.friend}
            console.log("actual filter", actualFilter)
        }

        dispatch(getUsers(actualPage, pageSize, actualFilter));
    }, []);

    useEffect(() => {

        let query = {}
        if (!!filter.term) {
            query.term = filter.term;
        }
        if (currentPage !== 1) {
            query.page = String(currentPage);
        }

            // switch (filter.friend) {
            //
            //     case "true":
            //         query.friend = true
            //         break;
            //
            //     case "false":
            //         query.friend = false
            //         break
            //
            //     default: break
            // }
        if (filter.friend) {
            query.friend = filter.friend
        }

        console.log("query", query)
        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })

    }, [filter, currentPage]);

    const onFilterChanged = (filter) => {
        dispatch(getUsers(1, pageSize, filter));
    }
    const setValueFromInput = (e) => {
        setValue(e.currentTarget.value);
    }
    const setOptionFromSelect = (e) => {
        setSelectedValue(e.currentTarget.value);
    }
    const getUsersWithSearchFilter = (e) => {

        const filter = {
            term: value,
            friend: selectedValue === "null" ? null : selectedValue === "true" ? true : false
        }
        e.preventDefault();
        onFilterChanged(filter);
        console.log(selectedValue);
    }

    return <div>
        <form onSubmit={getUsersWithSearchFilter}>
            <input type="text" value={value} onChange={setValueFromInput}/>
            <select value={selectedValue} onChange={setOptionFromSelect}>
                <option value="null">All users</option>
                <option value="true">Only friends</option>
                <option value="false">Not friends</option>
            </select>
            <button type="submit">Search</button>
        </form>
    </div>
}