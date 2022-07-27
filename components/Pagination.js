import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../hooks/usePagination";
import styles from "../styles/pagination.module.scss";

const Pagination = (props) => {
  const {
    className,
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames(styles.pagination_container, {
        [className]: className,
      })}
    >
      <li
        className={classnames(styles.pagination_item, {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={classnames(styles.arrow, styles.left)} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className={classnames(styles.pagination_item, styles.dots)}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames(
              styles.pagination_item,
              pageNumber === currentPage && styles.selected
            )}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames(
          styles.pagination_item,
          currentPage === lastPage && styles.disabled
        )}
        onClick={onNext}
      >
        <div className={classnames(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

export default Pagination;
