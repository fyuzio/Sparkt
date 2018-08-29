using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess.Interface
{
    public interface IUserService
    {
        User GetUserByEmail(string username);
    }
}
