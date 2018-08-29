using PHFL.DataAccess.Common;
using Sparkt.DataAccess.Interface;
using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.DataAccess.Implementation
{
    public class UserRepository : IUserRepository
    {
        string connectionString = ConfigurationManager.ConnectionStrings["SparktEntities"].ToString();
        public User GetUserByEmail(string email)
        {
            User user = new User();
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("UserName", email);
                user = DatabaseHelper.ExecuteStoreProcedure<User>(connectionString, "dbo.prcGetUserDetailsByUserName", inputparam).FirstOrDefault();
            }
            catch (TypeInitializationException ex)
            {
                user.Email = ex.InnerException.Message;
            }
            catch (Exception ex)
            {
                user.Email = ex.Message;

            }
            return user;
        }
    }
}
