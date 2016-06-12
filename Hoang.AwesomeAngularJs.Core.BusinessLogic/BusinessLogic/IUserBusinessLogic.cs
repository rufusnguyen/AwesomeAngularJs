using Hoang.AwesomeAngularJs.Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hoang.AwesomeAngularJs.Core.BusinessLogic
{
    public interface IUserBusinessLogic
    {
        List<User> GetUsers();
        User AddUser(User newUser);
        User UpdateUser(User updatedUser);
    }
}
