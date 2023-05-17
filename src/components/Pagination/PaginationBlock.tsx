import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginationBlockPropsType = {
    count: number,
    onPageChanged: (currentPage: number) => void,
}

const PaginationBlock = (props: PaginationBlockPropsType) => {
    let {count, onPageChanged} = props;

    const [page, setPage] = React.useState(5);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        onPageChanged(page);
    };

    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={handleChange} />
        </Stack>
    );
};

export default PaginationBlock;