/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Scan from "layouts/scan";
import Dashboard from "layouts/dashboard";
import Students from "layouts/students";
import Classes from "layouts/classes";
import Settings from "layouts/settings";
import Absences from "layouts/absences";
import AddAbsences from "layouts/absences/components/Add";
import Profile from "layouts/profile";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
    {
        type: "route",
        name: "Scan",
        key: "scan",
        route: "/scan",
        component: <Scan />,
    },
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon fontSize="small">dashboard</Icon>,
        route: "/dashboard",
        component: <Dashboard />,
    },
    {
        type: "collapse",
        name: "Absensi Siswa",
        key: "absen",
        icon: <Icon fontSize="small">checklist</Icon>,
        route: "/absen",
        component: <Absences />,
    },
    {
        type: "route",
        name: "Tambah Absensi Siswa",
        icon: <Icon fontSize="small">checklist</Icon>,
        route: "/absen/tambah",
        component: <AddAbsences />,
    },
    {
        type: "collapse",
        name: "Data Siswa",
        key: "siswa",
        icon: <Icon fontSize="small">person</Icon>,
        route: "/siswa",
        component: <Students />,
    },
    {
        type: "collapse",
        name: "Data Kelas & Jurusan",
        key: "kelas",
        icon: <Icon fontSize="small">school</Icon>,
        route: "/kelas",
        component: <Classes />,
    },
    {
        type: "collapse",
        name: "Generate Laporan",
        key: "laporan",
        icon: <Icon fontSize="small">print</Icon>,
        route: "/laporan",
    },
    {
        type: "collapse",
        name: "Psikologi Siswa",
        key: "psikolog-siswa",
        icon: <Icon fontSize="small">healing</Icon>,
        route: "/psikolog-siswa",
    },
    {
        type: "collapse",
        name: "Pengaturan",
        key: "pengaturan",
        icon: <Icon fontSize="small">settings</Icon>,
        route: "/pengaturan",
        component: <Settings />,
    },
];

export default routes;
