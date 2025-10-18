import { Fragment } from "react";

// GLOBAL COMPONENTS
import FixedHeaderButtons from "components/fixed-header-buttons";

// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section4 from "../section-4";
import Section6 from "../section-6";
import Section7 from "../section-7";

export default async function MarketOnePageView() {
  return <Fragment>
      {/* HOME AND LANGUAGE TOGGLE BUTTONS */}
      <FixedHeaderButtons />

      {/* HERO SLIDER SECTION */}
      <Section1 />

      {/* JUST FOR YOU SECTION */}
      <Section4 />

      {/* NEW ARRIVALS SECTION */}
      <Section6 />

      {/* GRID PRODUCTS SECTION */}
      <Section7 />
    </Fragment>;
}
