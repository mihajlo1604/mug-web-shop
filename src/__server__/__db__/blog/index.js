import { getBlogs, getBlogBySlug, getRecentBlogs } from "./data";

// API functions for blog data
const api = {
  // Get all blog articles
  getBlogs: () => {
    return getBlogs();
  },

  // Get a single blog article by slug
  getBlogBySlug: (slug) => {
    return getBlogBySlug(slug);
  },

  // Get recent blog articles (with limit)
  getRecentBlogs: (limit = 3) => {
    return getRecentBlogs(limit);
  },

  // Get blog articles by category (if needed in future)
  getBlogsByCategory: (category) => {
    const allBlogs = getBlogs();
    return allBlogs.filter(blog => blog.category === category);
  },

  // Search blog articles by title or content
  searchBlogs: (query) => {
    const allBlogs = getBlogs();
    const lowercaseQuery = query.toLowerCase();
    
    return allBlogs.filter(blog => 
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.titleSr.toLowerCase().includes(lowercaseQuery) ||
      blog.description.toLowerCase().includes(lowercaseQuery) ||
      blog.descriptionSr.toLowerCase().includes(lowercaseQuery) ||
      blog.content.toLowerCase().includes(lowercaseQuery) ||
      blog.contentSr.toLowerCase().includes(lowercaseQuery)
    );
  }
};

export default api;
