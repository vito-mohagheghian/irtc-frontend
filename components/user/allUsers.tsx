import React, { useState } from "react";

import { styles } from "../../styles";
import ReactPaginate from "react-paginate";
import { userType } from "../../types/user";
import User, { UserLoading } from "./user";
import useGetDataArray from "../../hooks/getData";
import { exportToExcel } from "../../modules/exportUsersToExcel";

const USERS_URL = "/users";

function AllUsers() {
  const [selectedPage, setSelectedPage] = useState<number>(1);

  const { data, fetchedCountPage } = useGetDataArray(USERS_URL, selectedPage, 2);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setSelectedPage(selectedItem.selected + 1);
  };

  const exportToExcelHandler = () => {
    exportToExcel(data);
  };

  return (
    <>
      <button onClick={exportToExcelHandler} className={`${styles.secondaryButton} py-3 px-6 `}>
        استخراج کاربر ها به صورت فایل اکسل
      </button>

      <div className="my-6 h-[2px] w-full bg-dim-secondary rounded-md" />

      <ReactPaginate
        pageCount={fetchedCountPage}
        breakLabel="..."
        nextLabel="بعدی"
        previousLabel="قبلی"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"mt-4 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
        pageClassName={
          "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
        activeClassName={"h-6 lg:h-8 rounded-full !text-white bg-brand"}
        breakClassName={
          "flex items-center justify-center border-brand pt-1 border px-2 lg:px-3 h-6 lg:h-8 rounded-full text-brand"
        }
        nextClassName={
          "flex items-center justify-center px-2 lg:px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        previousClassName={
          "flex items-center justify-center px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        disabledClassName={"hidden"}
      />

      <div className="mt-8 space-y-8">
        {data
          ? data.users.map((item: userType, index: number) => <User {...item} key={index} />)
          : [...new Array(4)].map((index) => <UserLoading key={index} />)}
      </div>

      <ReactPaginate
        pageCount={fetchedCountPage}
        breakLabel="..."
        nextLabel="بعدی"
        previousLabel="قبلی"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"mt-4 flex items-center justify-end flex-row-reverse gap-x-2 lg:gap-x-3 "}
        pageClassName={
          "flex items-center justify-center h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        pageLinkClassName={"pt-1 px-2 lg:px-3 w-full h-full rounded-full"}
        activeClassName={"h-6 lg:h-8 rounded-full !text-white bg-brand"}
        breakClassName={
          "flex items-center justify-center border-brand pt-1 border px-2 lg:px-3 h-6 lg:h-8 rounded-full text-brand"
        }
        nextClassName={
          "flex items-center justify-center px-2 lg:px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        previousClassName={
          "flex items-center justify-center px-3 h-6 lg:h-8 text-[.75rem] lg:text-base rounded-full text-brand border-brand border"
        }
        disabledClassName={"hidden"}
      />
    </>
  );
}

export default AllUsers;
