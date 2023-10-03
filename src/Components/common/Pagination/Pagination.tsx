import styles from "../../Users/User.module.css";
import React, {useState} from "react";
import {Button} from "../Button/Button";

export const Pagination: React.FC<PropsType> = ({
                                                    totalItemsCount,
                                                    pageSize,
                                                    currentPage,
                                                    portionSize = 10,
                                                    onPageChanged
                                                }) => {
    const pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 && <Button title={'PREV'} callback={() => setPortionNumber(portionNumber - 1)}/>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index) => {
                return <span key={index} className={p === currentPage ? styles.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p} </span>
            })}
        {portionCount > portionNumber && <Button title={'NEXT'} callback={() => setPortionNumber(portionNumber + 1)}/>}
    </div>
}

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    portionSize: number,
    onPageChanged: (pageNumber: number) => void
}