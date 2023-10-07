using Microsoft.EntityFrameworkCore;

namespace Validation.Models
    {
    public interface IUserBlogData
        {
        Task<List<Blogs>> GetAllBlogs();
        Task<Blogs> GetBlog(int id);
        Task DeleteBlog(int id);
        Task<Blogs> UpdateBlog(int id, Blogs updateBlog);
        Task<Blogs> AddBlog(Blogs blog);
        }

    public class BlogData : IUserBlogData
        {
        private readonly DataContext dbContext;
        public BlogData(DataContext context)
            {
            dbContext = context;
            }
        public async Task<List<Blogs>> GetAllBlogs()
            {
            return await dbContext.Blogs.ToListAsync();
            }
        public async Task DeleteBlog(int id)
            {
            var blog = dbContext.Blogs.Find(id);
            if (blog != null)
                {
                dbContext.Blogs.Remove(blog);
                }
            await dbContext.SaveChangesAsync();
            }
        public async Task<Blogs> GetBlog(int id)
            {
            return await dbContext.Blogs.FindAsync(id) ?? throw new Exception("BLOG NOT FOUND");
            }
        public async Task<Blogs> UpdateBlog(int id, Blogs updateBlog)
            {
            var blog = await dbContext.Blogs.FindAsync(id);
            if (blog == null)
                {
                throw new Exception("BLOG NOT FOUND TO UPDATE");
                }
            else
                {
                blog.UserName = updateBlog.UserName;
                blog.LocId = updateBlog.LocId;
                blog.Content = updateBlog.Content;
                await dbContext.SaveChangesAsync();
                return await new Task<Blogs>(() => blog);
                }
            }
        public async Task<Blogs> AddBlog(Blogs blog)
            {
            dbContext.Blogs.Add(blog);
            await dbContext.SaveChangesAsync();
            return blog;
            }
        }
    }