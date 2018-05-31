using Sparkt.DataAccess.Core.Dapper;
using Sparkt.DataAccess.Core.Interface;
using Sparkt.Entities.ContactUs;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.DataAccess.Core.Implementation
{
   public class ContactUsRepository: IContactUsRepository
    {
        public string InsertContactus(ContactUs contactUs)
        {
            string message = string.Empty;
            try
            {
                var inputparam = new { LeadId = contactUs.SparktId, Name = contactUs.Name, CompanyName = contactUs.CompanyName, EmailId = contactUs.EmailId, PhoneNumber = contactUs.PhoneNumber, SeekAConsultation = contactUs.SeekAConsultation, Message = contactUs.Message };
                message = SqlHelper.QuerySP<string>(DapperBase.SqlQuery.InsertLeads, inputparam, CommandType.StoredProcedure).FirstOrDefault();
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            return message;
        }
        //public List<LeadModel> GetLeadsWithFilters(string FilterData, int currentPage, int pageSize)
        //{
        //    List<LeadModel> leads = new List<LeadModel>();
        //    try
        //    {
        //        var inputparam = new { FilterData = FilterData, currentPage = currentPage, pageSize = pageSize };

        //        leads = SqlHelper.QuerySP<LeadModel>(DapperBase.SqlQuery.GetAllLeads, inputparam, CommandType.StoredProcedure).ToList();
        //    }
        //    catch (Exception ex)
        //    {
        //        leads = new List<LeadModel>();
        //        //UserHelper.LogError(Ex);				
        //    }
        //    return leads;
        //}
        //public LeadModel GetLeadsWithId(int Id)
        //{
        //    LeadModel leads = new LeadModel();
        //    try
        //    {
        //        var inputparam = new { Id = Id };
        //        leads = SqlHelper.QuerySP<LeadModel>(DapperBase.SqlQuery.GetAllLeadsId, inputparam, CommandType.StoredProcedure).FirstOrDefault();
        //    }
        //    catch (Exception ex)
        //    {
        //        leads = new LeadModel();
        //    }
        //    return leads;
        //}

        //public List<LeadModel> GetLeadsDownload(DateTime fromDate, DateTime toDate)
        //{
        //    List<LeadModel> leads = new List<LeadModel>();
        //    try
        //    {
        //        var inputparam = new { fromDate = fromDate, toDate = toDate };

        //        leads = SqlHelper.QuerySP<LeadModel>(DapperBase.SqlQuery.GetDownloadLeads, inputparam, CommandType.StoredProcedure).ToList();
        //    }
        //    catch (Exception ex)
        //    {
        //        leads = new List<LeadModel>();
        //        //UserHelper.LogError(Ex);				
        //    }
        //    return leads;
        //}
    }
}
