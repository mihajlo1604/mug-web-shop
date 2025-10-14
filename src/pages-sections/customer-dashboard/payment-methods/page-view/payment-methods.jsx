import { Fragment } from "react";

// CUSTOM COMPONENT
import CreditCard from "icons/CreditCard";
import ListCard from "../list-card";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header";

// CUSTOM DATA MODEL


// ==============================================================


// ==============================================================

export function PaymentMethodsPageView({
  payments,
  totalPages
}) {
  return <Fragment>
      <DashboardHeader Icon={CreditCard} title="Payment Methods" />

      {payments.map(item => <ListCard id={item.id} key={item.id} exp={item.exp} card_no={item.card_no} username={item.user} payment_method={item.payment_method} />)}

      <Pagination count={totalPages} />
    </Fragment>;
}