using Sparkt.Entities.ContactUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.DataAccess.Core.Interface
{
   public interface IContactUsRepository
    {
        string InsertContactus(ContactUs contactUs);
        //List<LeadModel> GetLeadsWithFilters(string FilterData, int currentPage, int pageSize);
        //List<LeadModel> GetLeadsDownload(DateTime fromDate, DateTime toDate);
        //LeadModel GetLeadsWithId(int Id);
    }
}
