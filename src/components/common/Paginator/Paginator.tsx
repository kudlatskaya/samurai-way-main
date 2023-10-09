import React from 'react';
import PaginationBlock from "../../Pagination/PaginationBlock";

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (currentPage: number) => void,
}

const Paginator = ({totalUsersCount, pageSize, onPageChanged}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <div>
            <PaginationBlock count={pagesCount} onPageChanged={onPageChanged}/>
        </div>
    );
};

export default Paginator;