using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.Entities
{
    public class Lead
    {
        public int LeadId { get; set; }
        public string Name { get; set; }
        public string CompanyName { get; set; }
        public string EmailId { get; set; }
        public string PhoneNumber { get; set; }
        public string QuerryType { get; set; }
        public string Message { get; set; }
        public string UTMSource { get; set; }
        public string UTMMedium { get; set; }
        public string UTMCampaign { get; set; }
        public string UTMTerm { get; set; }
        public string UTMContent { get; set; }
        public string UTMChannel { get; set; }
        public string UTMReferrer { get; set; }
        public string ReferralUrl { get; set; }
    }
}
