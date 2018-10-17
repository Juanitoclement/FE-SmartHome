// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import ContactUs from "views/ContactUs/ContactUs.jsx";
import AC from "views/AC/AC.jsx";
import TV from "views/TV/TV.js";
import Login from "views/Login/Login.jsx";
import Light from "views/Light/Light.jsx";
import Environmental from "views/Environmental/Environmental";

const routes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "SmartHome Panel",
    icon: Dashboard,
    component: DashboardPage,
    private: true
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    private: true
  },
  {
    path: "/contact-us",
    sidebarName: "Contact Us",
    navbarName: "Contact Us",
    icon: Person,
    component: ContactUs
  },
  {
    path: "/ac",
    sidebarName: "Air Conditioner",
    navbarName: "Air Conditioner",
    icon: Unarchive,
    component: AC,
    private: true
  },
  {
    path: "/tv",
    sidebarName: "TV",
    navbarName: "TV",
    icon: Unarchive,
    component: TV,
    private: true
  },
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Person,
    component: Login,
    private: false
  },
  {
    path: "/light",
    sidebarName: "Light",
    navbarName: "Light",
    icon: BubbleChart,
    component: Light,
    private: true
  },
  {
    path: "/environmental",
    sidebarName: "Environmental",
    navbarName: "Environmental",
    icon: Unarchive,
    component: Environmental,
    private: true
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default routes;
