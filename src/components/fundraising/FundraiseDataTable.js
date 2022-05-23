import { Table } from 'antd'
import React from 'react'

export const FundraiseDataTable = () => {

    const eventsData = [
        {
            id: 1,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"


        },
        {
            id: 2,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 3,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 4,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 5,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 6,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 7,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 8,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 9,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 10,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"

        },
        {
            id: 11,
            title:"Helping other",
            description:"this is description",
            amount:"5000",
            data_created:"2020/12/04"
        }
    ]

    const columns = [
        {
            key: "title",
            title: "Title",
            dataIndex: "title"
        },
        {
            key: "description",
            title: "Description",
            dataIndex: "description"
        },
        {
            key: "amount",
            title: "Amount",
            dataIndex: "amount"
        },
        {
            key: "data_created",
            title: "Date_created",
            dataIndex: "data_created"
        },
       
    ]

    return (
        <div className='flex flex-col'>


            <div className='mt-8'>
                <Table dataSource={eventsData} columns={columns} pagination={true} rowKey="id" />
            </div>

        </div>
    )
}
