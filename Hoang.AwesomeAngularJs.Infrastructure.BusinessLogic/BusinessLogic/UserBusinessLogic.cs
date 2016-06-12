using Hoang.AwesomeAngularJs.Core.BusinessLogic;
using Hoang.AwesomeAngularJs.Core.Domain.Models;
using System;
using System.Collections.Generic;

namespace Hoang.AwesomeAngularJs.Infrastructure.BusinessLogic.BusinessLogic
{
    public class UserBusinessLogic : IUserBusinessLogic
    {
        private List<User> users = new List<User>
        {
            new User { Id = 1, FirstName = "Hoang", LastName = "Nguyen", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
            new User { Id = 2, FirstName = "Britney", LastName = "Spears", DateOfBirth = new DateTime(1981,2,12), IsActive = true },
            new User { Id = 3, FirstName = "Justin", LastName = "Bieber", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
            new User { Id = 4, FirstName = "Mariah", LastName = "Carey", DateOfBirth = new DateTime(1991,10,13), IsActive = false },
            new User { Id = 5, FirstName = "Jessica", LastName = "Jung", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
            new User { Id = 6, FirstName = "Tim", LastName = "McGraw", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
            new User { Id = 7, FirstName = "Justin", LastName = "Timberlake", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
            new User { Id = 8, FirstName = "Bruno", LastName = "Mars", DateOfBirth = new DateTime(1991,10,13), IsActive = true },
        };
        public UserBusinessLogic()
        {
            // push you dependencies here
        }
        public User AddUser(User newUser)
        {
            throw new NotImplementedException();
        }

        public List<User> GetUsers()
        {
            return users;
        }

        public User UpdateUser(User updatedUser)
        {
            throw new NotImplementedException();
        }
    }
}
