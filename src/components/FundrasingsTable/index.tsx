import React, { useState } from "react";

type Props = {};

const FundrasingsTable = (props: Props) => {
  const [show, setShow] = useState<number | null>(0);

  const [subscriptions, setSubscriptions] = useState([
    // Title	Summary	Price	Sub Type	Created At
    {
      id: "3234234234",
      title: "John Doe",
      summary: "some thing Doe",
      cover: "https://cdn.tuk.dev/assets/templates/olympus/projects(1).png",
      price: "Ethiopia",
      subType: "Addis Ababa",
      createdAt: "2020-01-01",
    },
    {
      id: "1232322323234",
      title: "John Doe",
      summary: "some thing Doe",
      cover: "https://cdn.tuk.dev/assets/templates/olympus/projects(3).png",
      price: "Ethiopia",
      subType: "Addis Ababa",
      createdAt: "2020-01-01",
    },
    {
      id: "1wef3232423423423",
      title: "John Doe",
      summary: "some thing Doe",
      cover: "https://cdn.tuk.dev/assets/templates/olympus/projects(2).png",
      price: "Ethiopia",
      subType: "Addis Ababa",
      createdAt: "2020-01-01",
    },
  ]);

  return (
    <>
      <div className="w-full">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Fundrasings
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Update Fundrasing
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Title</th>
                <th className="font-normal text-left pl-12">Summary</th>
                <th className="font-normal text-left pl-12">Price</th>
                <th className="font-normal text-left pl-20">Sub Type</th>
                <th className="font-normal text-left pl-20">Created At</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {subscriptions.map((subscription, index) => {
                return (
                  <tr
                    key={subscription.id}
                    className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100"
                  >
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={subscription.cover}
                          />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium">{subscription.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {subscription.summary}
                      </p>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {subscription.price}
                      </p>
                      <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                        <div className="w-20 h-3 bg-green-progress rounded-full" />
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">{subscription.subType}</p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">{subscription.createdAt}</p>
                    </td>

                    <td className="px-7 2xl:px-0">
                      {show == 4 ? (
                        <button
                          onClick={() => setShow(null)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setShow(4)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                      {show == 4 && (
                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FundrasingsTable;