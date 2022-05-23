import { Table } from 'antd'
import React from 'react'

export const CharityDataTable = () => {

    const usersData = [
        {
            id: 1,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 2,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 3,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 4,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 5,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 6,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 7,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 8,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 9,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 10,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        },
        {
            id: 11,
            name:"mekedonia",
            description:"helping the others",
            category:"aged group",
            email:"selam@gmail.com",
            address:"Addis Ababa",
            phone:"09345678",
            noOfDonors:12,
            sumOfDonation:1230,
            createdAt: "12-05-2022"
        }
    ]

    const columns = [
        {
            key: "name",
            title: "Name",
            dataIndex: "name"
        },
        {
            key: "description",
            title: "Description",
            dataIndex: "description"
        },
        {
            key: "category",
            title: "Category",
            dataIndex: "category"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "noOfDonors",
            title: "NumOfDonation",
            dataIndex: "noOfDonors"
        },
        {
            key: "sumOfDonation",
            title: "SumOfDonation",
            dataIndex: "sumOfDonation"
        },
        {
            key: "createdAt",
            title: "Created At",
            dataIndex: "createdAt"
        },
    ]

  return (
    <div className='flex flex-col'>

            
            <div className='mt-8'>
                <Table dataSource={usersData} columns={columns} pagination={true} rowKey="id" />
            </div>

        </div>
  )
}