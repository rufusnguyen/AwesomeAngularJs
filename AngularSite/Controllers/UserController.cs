using Hoang.AwesomeAngularJs.Core.BusinessLogic;
using Hoang.AwesomeAngularJs.Core.Domain.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace AngularSite.Controllers
{
    public class UserController : ApiController
    {
        private IUserBusinessLogic _userLogic;
        public UserController(IUserBusinessLogic userLogic)
        {
            _userLogic = userLogic;
        }
        [HttpGet]
        public List<User> GetUsers()
        {
            return _userLogic.GetUsers();
        }
    }
}
