import { Table } from 'antd'
import React from 'react'

import charityLogo from '../../assets/img/icon.png'

const GenerateReport = () => {

    const resportData = [
        {
            totalUsers: 120,
            totalCharity: 20000,
            totalDonation: 40000,
            totalFundraising: 90000000,
            totalEvents: 500
        },
        {
            totalUsers: 120,
            totalCharity: 20000,
            totalDonation: 40000,
            totalFundraising: 90000000,
            totalEvents: 500
        },
        {
            totalUsers: 120,
            totalCharity: 20000,
            totalDonation: 40000,
            totalFundraising: 90000000,
            totalEvents: 500
        },
        {
            totalUsers: 120,
            totalCharity: 20000,
            totalDonation: 40000,
            totalFundraising: 90000000,
            totalEvents: 500
        }
    ]

    const columns = [
        {
            key: "0",
            title: "Total Users",
            dataIndex: "totalUsers"
        },
        {
            key: "1",
            title: "Charity Count",
            dataIndex: "totalCharity"
        },

        {
            key: "2",
            title: "Total Donation",
            dataIndex: "totalDonation"
        },
        {
            key: "3",
            title: "Total Fundraising",
            dataIndex: "totalFundraising"
        },

        {
            key: "4",
            title: "Events Occured",
            dataIndex: "totalEvents"
        },
    ]



    return (
        <div className='flex flex-col'>
            <div className='flex flex-col relative items-center justify-center w-full'>
                <div className='w-1/5 py-5 absolute right-0 top-5'>
                    <p>Date: __________________</p>
                </div>
                <div className='w-1/2 flex flex-col items-center justify-center p-5 mt-24'>
                    <h1 className='text-3xl font-bold'>Charity Management Report</h1>
                    <img src={charityLogo} alt='watch dog logo' className='w-36 h-24' />
                </div>

                <div className='w-2/3 flex items-center justify-center'>
                    <p className='text-center'>
                        Charity Management team has collected the information based on the system. The data shows
                        the number of users directly participated on the fundraising and the amount of money collected
                        through the system. We approve that the provided data is correct has amazing integrity. We gave our
                        best to successfully combine, arrange and analyze the following data.
                    </p>
                </div>
            {/* bring the table here */}
            {/* you can design your html here */}
            {/* It's all about how you want your data to appear */}

            <div className='mt-8 w-4/5 '>
                <Table
                    dataSource={resportData}
                    columns={columns}
                    pagination={true}
                    loading={false}
                    rowKey="id" />
            </div>

            </div>

            <div className='my-10 w-full flex items-center justify-end'>
            <div className='w-1/5 flex flex-col text-right pr-10'>
                    <p>_______________________________</p>
                    <p className='-mt-4'>Director Signature</p>
                </div>
            </div>
        </div>
    )
}

export default GenerateReport