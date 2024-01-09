import React from 'react';
import PaginationBlock from "../../Pagination/PaginationBlock";
import s from '../Paginator/Paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (currentPage: number) => void,
}

const Paginator = ({totalUsersCount, pageSize, onPageChanged}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <div className={s.paginatorContainer}>
            <PaginationBlock count={pagesCount} onPageChanged={onPageChanged}/>
        </div>
    );
};

export default Paginator;