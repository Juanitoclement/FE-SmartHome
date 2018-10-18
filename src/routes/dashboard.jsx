// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Home from "@material-ui/icons/Home";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import LiveTv from "@material-ui/icons/LiveTv";
import Help from "@material-ui/icons/Help";
import AirCon from "@material-ui/icons/Toys";
import Lamp from "@material-ui/icons/WbSunny";
import Environment from "@material-ui/icons/Wallpaper";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Icons from "views/Icons/Icons.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import ContactUs from "views/ContactUs/ContactUs.jsx";
import AC from "views/AC/AC.jsx";
import TV from "views/TV/TV.jsx";
import Login from "views/Login/Login.jsx";
import Light from "views/Light/Light.jsx";
import Environmental from "views/Environmental/Environmental";

const routes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "SmartHome Panel",
    icon: Home,
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
    icon: Help,
    component: ContactUs
  },
  {
    path: "/ac",
    sidebarName: "Air Conditioner",
    navbarName: "Air Conditioner",
    icon: AirCon,
    component: AC,
    private: true
  },
  {
    path: "/tv",
    sidebarName: "TV",
    navbarName: "TV",
    icon: LiveTv,
    component: TV,
    private: true
  },
  {
    path: "/login",
    sidebarName: "Login",
    navbarName: "Login",
    icon: Person,
    component: Login,
    private: true
  },
  {
    path: "/light",
    sidebarName: "Light",
    navbarName: "Light",
    icon: Lamp,
    component: Light,
    private: true
  },
  {
    path: "/environmental",
    sidebarName: "Environmental",
    navbarName: "Environmental",
    icon: Environment,
    component: Environmental,
    private: true
  },
  { redirect: true, path: "/", to: "/login", navbarName: "Redirect" }
];

export default routes;
