import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../hooks/usePagination";

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
    <>
      <ul
        className={classnames("Pagination-container", {
          [className]: className,
        })}
      >
        <li
          className={classnames("Pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="Pagination-arrow Arrow-left" />
        </li>
        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li className="Pagination-dots" key={i}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames("Pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
              key={i}
            >
              {pageNumber}
            </li>
          );
        })}
        {}
        <li
          className={classnames("Pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="Pagination-arrow Arrow-right" />
        </li>
      </ul>

      <style jsx>
        {`
          .Pagination-container {
            padding: 0;
            display: flex;
            list-style-type: none;
            justify-content: center;
          }
          .Pagination-item {
            padding: 0 12px;
            height: 32px;
            text-align: center;
            margin: auto 4px;
            color: rgba(0, 0, 0, 0.87);
            display: flex;
            box-sizing: border-box;
            align-items: center;
            letter-spacing: 0.01071em;
            border-radius: 16px;
            line-height: 1.43;
            font-size: 13px;
            min-width: 32px;
          }
          .Pagination-dots:hover {
            background-color: transparent;
            cursor: default;
          }
          .Pagination-item:hover {
            background-color: rgba(0, 0, 0, 0.04);
            cursor: pointer;
          }
          .Pagination-item.selected {
            background-color: rgba(0, 0, 0, 0.08);
          }
          .Pagination-arrow::before {
            position: relative;
            content: "";
            display: inline-block;
            width: 0.4em;
            height: 0.4em;
            border-right: 0.12em solid rgba(0, 0, 0, 0.87);
            border-top: 0.12em solid rgba(0, 0, 0, 0.87);
          }
          .Arrow-left {
            transform: rotate(-135deg) translate(-50%);
          }
          .Arrow-right {
            transform: rotate(45deg);
          }
          .Pagination-item.disabled {
            pointer-events: none;
          }
          .Pagination-item.disabled .arrow::before {
            border-right: 0.12em solid rgba(0, 0, 0, 0.43);
            border-top: 0.12em solid rgba(0, 0, 0, 0.43);
          }
          .Pagination-item.disabled:hover {
            background-color: transparent;
            cursor: default;
          }
        `}
      </style>
    </>
  );
};

export default Pagination;
