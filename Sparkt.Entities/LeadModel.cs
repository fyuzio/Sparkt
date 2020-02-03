using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.Entities
{
    public class LeadModel
    {
        public long LeadId { get; set; }
        public string LeadName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string CompanyName { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Message { get; set; }
        public string Type { get; set; }
        public string LeadType { get; set; }
        public string QuerryType { get; set; }
        public string DisplayDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
        public long TotalRecords { get; set; }
        public long RowNum { get; set; }

        public string filePath { get; set; }
        //public string UTMSource { get; set; }
        //public string UTMMedium { get; set; }
        //public string UTMCampaign { get; set; }
        //public string UTMTerm { get; set; }
        //public string UTMContent { get; set; }
        //public string UTMChannel { get; set; }
        //public string UTMReferrer { get; set; }
        //public string ReferralUrl { get; internal set; }

    }
}
