import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications } from "@/pages/dashboard";
import { App_Group_Breaches } from "@/components/Application/App_Group_Breaches";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      //{
      //  icon: <UserCircleIcon {...icon} />,
      //  name: "profile",
      //  path: "/profile",
      //  element: <Profile />,
        //},
      {        
        name: "reload",
        path: "/reload"
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Applications",
        path: "/applications",
        element: <App_Group_Breaches/>
      },
      //{
      //  icon: <InformationCircleIcon {...icon} />,
      //  name: "notifications",
      //  path: "/notifications",
      //  element: <Notifications />,
      //},
    ],
  },
  //{
  //  title: "auth pages",
  //  layout: "auth",
  //  pages: [
  //    {
  //      icon: <ServerStackIcon {...icon} />,
  //      name: "sign in",
  //      path: "/sign-in",
  //      element: <SignIn />,
  //    },
  //    {
  //      icon: <RectangleStackIcon {...icon} />,
  //      name: "sign up",
  //      path: "/sign-up",
  //      element: <SignUp />,
  //    },
  //  ],
  //},
];

export default routes;
