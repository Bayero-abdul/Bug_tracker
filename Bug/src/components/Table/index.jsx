import React from "react";

import { useRef, useEffect, useState } from "react";
import { Button, Img, Input, List, Text } from "components";
import { CloseSVG } from "../../assets/images";

const Table = (props) => {
  const { title, tableHeads, tableItems } = props;

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleButtonClick = (idx) => {
    setDropdownVisible((prevVisibility) => ({
      ...prevVisibility,
      [idx]: !prevVisibility[idx],
    }));
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col gap-4 h-auto md:h-auto items-center justify-start max-w-[1008px] p-[18px] rounded-[5px] w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[152px] items-center justify-between rounded-tl-[5px] rounded-tr-[5px] w-full">
          <Text
            className="text-base text-blue_gray-900 w-auto"
            size="txtRobotoMedium16"
          >
            {title}{" "}
          </Text>
          <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
            <Input
              name="searchbar"
              placeholder="search"
              value={searchbarvalue}
              onChange={(e) => setSearchbarvalue(e)}
              className="!placeholder:text-gray-400 !text-gray-400 font-roboto p-0 text-left h-[18px] text-sm w-full"
              wrapClassName="border border-gray-400 border-solid flex w-[27%]"
              prefix={
                <Img
                  className="cursor-pointer h-[18px] mr-2 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#c4c4c4"
                  className="cursor-pointer h-[18px] my-auto"
                  onClick={() => setSearchbarvalue("")}
                  style={{
                    visibility:
                      searchbarvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={18}
                  width={18}
                  viewBox="0 0 18 18"
                />
              }
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
            <Button
              className="cursor-pointer font-inter font-semibold h-9 leading-[normal] min-w-[122px] text-center text-sm tracking-[0.50px] flex items-center justify-center"
              shape="round"
              color="indigo_A400"
              size="xs"
              variant="fill"
            >
              Create Ticket
            </Button>
          </div>
        </div>
        <div className="bg-gray-300 flex md:flex-col flex-row md:gap-5 items-start justify-start outline outline-[1px] outline-gray-300 rounded-[5px] w-full">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                {tableHeads.map((head, idx) => (
                  <th key={idx} className="py-3 px-6">
                    {head}
                  </th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white-A700 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  {Object.values(item).map((value, i) => (
                    <td key={i} className="px-6 py-4 whitespace-nowrap">
                      {value}
                    </td>
                  ))}

                  <td className="px-4 py-3 flex items-center justify-end">
                    <Button
                      className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                      onClick={() => handleButtonClick(idx)}
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </Button>
                    <div
                      className={`${
                        dropdownVisible[idx] ? "absolute" : "hidden"
                      } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        // aria-labelledby={`dropdown-button-${idx}`}
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[115px] items-center justify-center w-full">
          <div className="flex flex-1 flex-col items-start justify-center w-full">
            <Button
              className="cursor-pointer min-w-[86px] outline outline-[1px] outline-gray-300_01 text-center text-sm"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              Previous
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center w-auto">
            <Text
              className="text-blue_gray-900 text-sm w-auto"
              size="txtRobotoRomanRegular14"
            >
              Page 1 of 8
            </Text>
          </div>
          <div className="flex flex-1 flex-col items-end justify-center w-full">
            <Button
              className="cursor-pointer min-w-[61px] outline outline-[1px] outline-gray-300_01 text-center text-sm"
              shape="round"
              color="white_A700"
              size="xs"
              variant="fill"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Table.defaultProps = { text: "Bug Tracker" };

export default Table;
