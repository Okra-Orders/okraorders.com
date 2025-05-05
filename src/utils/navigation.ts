// Define interfaces for better type safety
interface NavLinkItem {
  name: string;
  url: string;
  subLinks?: NavLinkItem[]; // Optional array for sub-links
}

// An array of links for navigation bar
const navBarLinks: NavLinkItem[] = [
  {
    name: "Features",
    url: "#", // Main link might not go anywhere directly
    subLinks: [
      { name: "Online Ordering", url: "/features/online-ordering/" },
      { name: "Store Management", url: "/features/store-management/" },
      { name: "Operations", url: "/features/operations/" },
      { name: "Integrations", url: "/features/integrations/" }, // Added Integrations here
      { name: "Analytics & Insights", url: "/features/analytics-insights/" },
    ],
  },
  { name: "Why Okra?", url: "/why-okra/" },
  { name: "Pricing", url: "/pricing/" },
  { name: "Support", url: "/support/" },
  // Removed: Products, Services, Blog, Contact
];
// An array of links for footer
const footerLinks = [
  {
    section: "Product",
    links: [
      { name: "Online Ordering", url: "/features/online-ordering/" },
      { name: "Store Management", url: "/features/store-management/" },
      { name: "Operations", url: "/features/operations/" },
      { name: "Integrations", url: "/features/integrations/" },
      { name: "Analytics & Insights", url: "/features/analytics-insights/" },
      { name: "Pricing", url: "/pricing/" },
      { name: "Live Demo", url: "https://demo.okraorders.com", external: true }, // Mark external
    ],
  },
  {
    section: "Company",
    links: [
      // { name: "About us", url: "#" }, // Removed from HTML
      { name: "Contact Us", url: "/contact" },
      // { name: "Careers", url: "#" }, // Removed from HTML
      // { name: "Customers", url: "#" }, // Removed from HTML
    ],
  },
   {
    section: "Support & Legal", // New Section
    links: [
      { name: "Help Center", url: "/support/" },
      { name: "Privacy Policy", url: "/privacy/" },
      { name: "Terms of Service", url: "/terms/" },
    ],
  },
];
// An object of links for social icons
export const socialLinks = {
  facebook: "#", // Replace with your Facebook URL
  twitter: "#", // Replace with your Twitter URL
  github: "#", // Replace with your GitHub URL or remove
  linkedin: "#", // Replace with your LinkedIn URL
  instagram: "#", // Replace with your Instagram URL
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};

// Export the type if needed elsewhere
export type { NavLinkItem };