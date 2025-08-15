export const createPageUrl = (pageName) => {
  const pageMap = {
    "Home": "/",
    "WhoWeAre": "/who-we-are",
    "OurSolutions": "/our-solutions",
    "Contact": "/contact"
  };
  
  return pageMap[pageName] || "/";
}; 