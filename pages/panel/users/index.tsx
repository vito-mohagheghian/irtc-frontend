import React from "react";

import Access from "../../../components/access";
import AllUsers from "../../../components/user/allUsers";
import { PanelLayout } from "../../../components/layout";
import UsersFilter from "../../../components/user/usersFilter";

function PanelUsers() {
  const searchHandler = () => {};

  return (
    <Access admin>
      <main>
        <UsersFilter searchHandler={searchHandler} />

        <section className="mt-6 p-5  bg-background rounded-xl box-shadow">
          <AllUsers />
        </section>
      </main>
    </Access>
  );
}

PanelUsers.PageLayout = PanelLayout;

export default PanelUsers;
