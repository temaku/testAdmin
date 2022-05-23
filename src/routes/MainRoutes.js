import React from "react";

import {
  Charity,
  Dashboard,
  Donation,
  Login,
  User,
  Event,
  Fundraise
} from "../components";

import { Routes, Route } from "react-router-dom";

import { PageNotFound } from "./PageNotFound";
import UsersIndexPage from "../components/users/userlayout";
import CharityIndexPage from "../components/charity/charitylayout";
import AddEditUser from "../components/users/AddUserForm";
import EventIndexPage from "../components/events/eventslayout";
import AddCharity from "../components/charity/AddCharityForm";
import AddEvent from "../components/events/addEvents";
import AddFundraise from "../components/fundraising/AddFundraise"
import FundraisingIndexPage from "../components/fundraising/FundraisingLayout";



export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />}></Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersIndexPage />}>
          <Route index element={<User />}></Route>
          <Route path="add-user" element={<AddEditUser />}/>
        </Route>
        <Route path="/charity" element={<CharityIndexPage />}>
          <Route index element={<Charity />}></Route>
          <Route path="add-charity" element={<AddCharity />}/>
        </Route>

        <Route path="/event" element={<EventIndexPage />}>
          <Route index element={<Event />}></Route>
          <Route path="add-event" element={<AddEvent />}/>
        </Route>

        <Route path="/fundraising" element={<FundraisingIndexPage />}>
          <Route index element={<Fundraise />}></Route>
          <Route path="add-fundraise" element={<AddFundraise />}/>
        </Route>

        
       
        <Route path="/donation" element={<Donation />} />
        <Route path="/fundraising" element={<Fundraise />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
