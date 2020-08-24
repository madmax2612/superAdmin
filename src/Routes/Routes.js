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

export const Routes = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/otopark/superadmin/login" component={LoginPage} />

          <Route
            exact
            path="/otopark/superadmin/dashboard"
            component={Dashboard}
          />
          <Route exact path="/otopark/superadmin/users" component={UserDash} />
          <Route exact path="/otopark/superadmin/parking" component={Parking} />
          <Route exact path="/otopark/superadmin/booking" component={Booking} />
          <Route exact path="/otopark/superadmin/payment" component={Payment} />
          <Route
            exact
            path="/otopark/superadmin/hardware"
            component={Hardware}
          />
          <Route exact path="/otopark/superadmin/support" component={Support} />
          <Route
            exact
            path="/otopark/superadmin/notification"
            component={Notification}
          />

          <Route exact path="/otopark/superadmin/rfid" component={RFID} />
          <Route
            exact
            path="/otopark/superadmin/montlypass"
            component={MonthlyPass}
          />

          <Route
            exact
            path="/otopark/superadmin/ticketdispenser"
            component={TicketDispenser}
          />
          {/* <Route
            exact
            path="/otopark/superadmin/settings"
            component={Settings}
          /> */}
          <Route exact path="/otopark/superadmin/profile" component={Profile} />
          <Route
            exact
            path="/otopark/superadmin/changepassword"
            component={ChangePassword}
          />

          {/* <Route exact path="*" component={NotFound} /> */}
        </Switch>
      </Suspense>
    </HashRouter>
  );
};
