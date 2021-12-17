//import React from "react";


//import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardIcon from "./logos/DashboardIcon.svg";

//import DashboardIconActive from '@mui/icons-material/Dashboard';
import DashboardIconActive from "./logos/DashboardIconActive.svg";

import TransactionsIcon from "./logos/TransactionsIcon.svg";
//import TransactionsIcon from '@mui/icons-material/TimeToLeave'; //timetoleave icon

//import TransactionsIconActive from '@mui/icons-material/TimeToLeave'; //timetoleave icon(active)
import TransactionsIconActive from "./logos/TransactionsIconActive.svg";

import SecureIcon from "./logos/SecureIcon.svg"; //security
//import SecureIcon from '@mui/icons-material/Security'; //security

//import SecureIconActive from '@mui/icons-material/Security'; //security(active)
import SecureIconActive from "./logos/SecureIconActive.svg";

//import SettingsIcon from '@mui/icons-material/Settings';
import SettingsIcon from "./logos/SettingsIcon.svg";

import SettingsIconActive from "./logos/SettingsIconActive.svg";
//import SettingsIconActive from '@mui/icons-material/Settings';

//import SignOutIcon from "./logos/SignOutIcon.svg";
import SignOutIcon from '@mui/icons-material/Logout';

import AccountsIcon from "./logos/AccountsIcon.svg";
//import AccountsIcon from '@mui/icons-material/AccountBox';

import AccountsIconActive from '@mui/icons-material/AccountBox';
//import AccountsIconActive from "./logos/AccountsIconActive.svg";


import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Transaction from "./pages/Transaction";
import Secure from "./pages/Secure";
import Settings from "./pages/Settings";


const routes = [
  {
    label: "Dashboard",
    path: "/",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
    component: Dashboard
  },
  {
    label: "Accounts",
    path: "/accounts",
    icon: AccountsIcon,
    activeIcon: AccountsIconActive,
    component: Account,
  },
  {
    label: "Trips",
    path: "/transactions",
    icon: TransactionsIcon,
    activeIcon: TransactionsIconActive,
    component: Transaction
  },
  {
    label: "Secure",
    path: "/secure",
    icon: SecureIcon,
    activeIcon: SecureIconActive,
    component: Secure
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    component: Settings
  },
  {
    label: "Sign Out",
    path: "/sign-out",
    icon: SignOutIcon,
    activeIcon: SignOutIcon,
  },
];

export default routes;