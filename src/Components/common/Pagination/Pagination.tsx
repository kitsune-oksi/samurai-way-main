import styles from "../../Users/User.module.css";
import React from "react";

export const Pagination: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map((p, index) => {
            return <span key={index} className={p === currentPage ? styles.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}

type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
}