import categoriesMegaMenu from "./categoriesMegaMenu";

// MEGA-MENU DATA
const megaMenus = [[{
  title: "User Account",
  child: [{
    title: "Order List",
    url: "/orders"
  }, {
    title: "Order Details",
    url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8"
  }, {
    title: "View Profile",
    url: "/profile"
  }, {
    title: "Edit Profile",
    url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75"
  }, {
    title: "Address List",
    url: "/address"
  }, {
    title: "Add Address",
    url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34"
  }, {
    title: "All tickets",
    url: "/support-tickets"
  }, {
    title: "Ticket details",
    url: "/support-tickets/when-will-my-product-arrive"
  }, {
    title: "Wishlist",
    url: "/wish-list"
  }]
}], [{
  title: "Authentication",
  child: [{
    title: "Login",
    url: "/login"
  }, {
    title: "Register",
    url: "/register"
  }]
}], [{
  title: "Shop",
  child: [{
    title: "Search product",
    url: "/products/search?category=clothes"
  }, {
    title: "Single product",
    url: "/products/lord-2019"
  }, {
    title: "Cart",
    url: "/cart"
  }, {
    title: "Checkout",
    url: "/checkout"
  }, {
    title: "Alternative Checkout",
    url: "/checkout-alternative"
  }, {
    title: "Order confirmation",
    url: "/order-confirmation"
  }]
}]];


// MAIN NAVIGATION DATA
const navbarNavigation = [{
  title: "Home",
  megaMenu: false,
  megaMenuWithSub: false,
  url: "/"
}, {
  megaMenu: true,
  megaMenuWithSub: false,
  title: "Mega Menu",
  child: megaMenus
}, {
  megaMenu: false,
  megaMenuWithSub: true,
  title: "Full Screen Menu",
  child: categoriesMegaMenu
}, {
  megaMenu: false,
  megaMenuWithSub: false,
  title: "Pages",
  child: [{
    title: "Vendor",
    child: [{
      title: "All vendors",
      url: "/shops"
    }, {
      title: "Vendor store",
      url: "/shops/scarlett-beauty"
    }]
  }, {
    title: "Shop",
    child: [{
      title: "Search product",
      url: "/products/search?category=clothes"
    }, {
      title: "Single product",
      url: "/products/lord-2019"
    }, {
      title: "Cart",
      url: "/cart"
    }, {
      title: "Checkout",
      url: "/checkout"
    }, {
      title: "Alternative Checkout",
      url: "/checkout-alternative"
    }, {
      title: "Order confirmation",
      url: "/order-confirmation"
    }]
  }, {
    title: "Auth",
    child: [{
      title: "Login",
      url: "/login"
    }, {
      title: "Register",
      url: "/register"
    }]
  }]
}, {
  megaMenu: false,
  megaMenuWithSub: false,
  title: "User Account",
  child: [{
    title: "Orders",
    child: [{
      title: "Order List",
      url: "/orders"
    }, {
      title: "Order Details",
      url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8"
    }]
  }, {
    title: "Profile",
    child: [{
      title: "View Profile",
      url: "/profile"
    }, {
      title: "Edit Profile",
      url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75"
    }]
  }, {
    title: "Address",
    child: [{
      title: "Address List",
      url: "/address"
    }, {
      title: "Add Address",
      url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34"
    }]
  }, {
    title: "Support tickets",
    child: [{
      title: "All tickets",
      url: "/support-tickets"
    }, {
      title: "Ticket details",
      url: "/support-tickets/when-will-my-product-arrive"
    }]
  }, {
    title: "Wishlist",
    url: "/wish-list"
  }]
}];
export default navbarNavigation;