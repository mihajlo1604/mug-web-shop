import ShopLayout4 from "components/layouts/shop-layout-4";

// API FUNCTIONS
import api from "utils/__api__/grocery-4";
import layoutApi from "utils/__api__/layout";
export default async function Layout({
  children
}) {
  const [categories, data] = await Promise.all([api.getCategories(), layoutApi.getLayoutData()]);
  if (!categories && !data) {
    return <>{children}</>;
  }
  return <ShopLayout4 navigation={categories} data={data}>
      {children}
    </ShopLayout4>;
}