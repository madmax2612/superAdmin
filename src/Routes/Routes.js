import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Loader from "../util/Loader/Loader";

const LoginPage = lazy(() => import("../Components/LoginPage/LoginPage"));
const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));
const UserDash = lazy(() => import("../Components/Users/UserDash"));
const Parking = lazy(() => import("../Components/Parking/Parking"));
const Booking = lazy(() => import("../Components/Booking/Booking"));
const Payment = lazy(() => import("../Components/Payment/Payment"));
const Hardware = lazy(() => import("../Components/Hardware/Hardware"));
const Support = lazy(() => import("../Components/Support/Support"));
const Notification = lazy(() =>
  import("../Components/Notification/Notification")
);

const RFID = lazy(() => import("../Components/RFID/RFID"));
const MonthlyPass = lazy(() => import("../Components/MonthlyPass/MonthlyPass"));
const TicketDispenser = lazy(() =>
  import("../Components/TicketDispenser/TicketDispenser")
);
// const Settings = lazy(() => import("../Components/Settings/Settings"));
const Profile = lazy(() => import("../Components/ProfilePage/Profile/main"));
const ChangePassword = lazy(() =>
  import("../Components/ChangePassword/ChangePassword")
);



const NotFound = lazy(() => import("../util/NotFound/NotFound"));

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/otopark/admin/login" component={LoginPage} />
          <Route
            exact
            path="/otopark/admin/dashboard"
            component={Dashboard}
          />
          <Route exact path="/otopark/admin/users" component={UserDash} />
          <Route exact path="/otopark/admin/parking" component={Parking} />
          <Route exact path="/otopark/admin/booking" component={Booking} />
          <Route exact path="/otopark/admin/payment" component={Payment} />
          <Route
            exact
            path="/otopark/admin/hardware"
            component={Hardware}
          />
          <Route exact path="/otopark/admin/support" component={Support} />
          <Route
            exact
            path="/otopark/admin/notification"
            component={Notification}
          />

          <Route exact path="/otopark/admin/rfid" component={RFID} />
          <Route
            exact
            path="/otopark/admin/montlypass"
            component={MonthlyPass}
          />

          <Route
            exact
            path="/otopark/admin/ticketdispenser"
            component={TicketDispenser}
          />
          
          <Route exact path="/otopark/admin/profile" component={Profile} />
          <Route
            exact
            path="/otopark/admin/changepassword"
            component={ChangePassword}
          />

         
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
