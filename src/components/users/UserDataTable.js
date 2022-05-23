

import React from 'react'
import { Table } from 'antd';


export const UserDataTable = () => {


    const usersData = [
        {
            id: 1,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 2,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 3,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 4,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 5,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 6,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 7,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 8,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 9,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 10,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        },
        {
            id: 11,
            userName: "John Doe",
            email: "email@address.org",
            password:"pass1234",
            phone: "0958987458",
            address: "Bole, Addis Ababa",
            role:"donor",
            createdAt: "12-05-2022"
        }
    ]

    const columns = [
        {
            key: "userName",
            title: "User Name",
            dataIndex: "userName"
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "password",
            title: "Password",
            dataIndex: "password"
        },
        {
            key: "phone",
            title: "Phone",
            dataIndex: "phone"
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address"
        },
       
        {
            key: "role",
            title: "Role",
            dataIndex: "role"
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
