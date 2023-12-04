import React from "react";
import Header from "../components/Header";

const menus = [
    { name: "Marketplace", url: "/", id: 1 },
    { name: "My Orders", url: "/checkout", id: 2 },
    { name: "Account", url: "/account", id: 3 },
  ];

const PersonalAccount = (items) => {    
    return (
        <>
            <Header data={menus} title="Farm2Market" />
        </>
    );
};

export default PersonalAccount;