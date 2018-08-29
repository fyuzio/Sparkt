using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Sparkt.Entities;

namespace Sparkt.DataAccess.Interface
{
    public interface IUserRepository
    {
        User GetUserByEmail(string email);
    }
}
