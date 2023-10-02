using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Validation.Models;

namespace Validation.Controllers
    {
    [Route("api/[controller]")]
    [ApiController]
    public class UserBlogController : ControllerBase
        {
        private readonly IUserBlogData component;
        public UserBlogController(IUserBlogData component)
            {
            this.component = component;
            }
        [HttpGet]
        public async Task<ActionResult<List<Blogs>>> GetAllBlogs() => await component.GetAllBlogs();

        [HttpGet("{id}")]
        public async Task<ActionResult<Blogs>> GetBlog(int id) => await component.GetBlog(id);

        [HttpPost]
        public async Task<ActionResult<Blogs>> AddBlog(Blogs blog)
            {
            await component.AddBlog(blog);
            return CreatedAtAction(nameof(GetBlog), new { id = blog.BlogId }, blog);
            }

        [HttpPut("{id}")]
        public async Task<ActionResult<Blogs>> UpdateBlog(int id, Blogs blog)
            {
            return await component.UpdateBlog(id, blog);
            }

        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> DeleteBlog(int id)
            {
            await component.DeleteBlog(id);
            return await new Task<string>(() => "EMPLOYEE DELETED SUCCESSFULLY");
            }
        }
    }