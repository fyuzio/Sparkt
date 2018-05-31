using Sparkt.DataAccess.Core.Interface;
using Sparkt.BusinessAccess.Core.Interface;
using Sparkt.Entities.ContactUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess.Core.Interface
{
   public interface IContactUsService
    {
        string InsertContactUs(ContactUs contactUs);

    }
}
