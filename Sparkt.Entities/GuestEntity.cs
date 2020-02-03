using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Sparkt.Entities
{
   public class GuestEntity
    {
        public int GuestId { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public string SeekAConsultation { get; set; }
        public string Message { get; set; }
        public string filePath { get; set; }
        public HttpPostedFileBase file { get; set; }

    }
}
