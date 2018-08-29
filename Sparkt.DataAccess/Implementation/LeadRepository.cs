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
    public class LeadRepository : ILeadRepository
    {
        string connectionString = ConfigurationManager.ConnectionStrings["SparktEntities"].ToString();
        public string InsertLead(Lead lead)
        {
            string message = string.Empty;
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("LeadId", lead.LeadId);
                inputparam.Add("Name", lead.Name);
                inputparam.Add("CompanyName", lead.CompanyName);
                inputparam.Add("EmailId", lead.EmailId);
                inputparam.Add("PhoneNumber", lead.PhoneNumber);
                inputparam.Add("QuerryType", lead.QuerryType);
                inputparam.Add("Message", lead.Message);
                message = DatabaseHelper.ExecuteStoreProcedure<string>(connectionString, "", inputparam).FirstOrDefault();
            }
            catch (Exception ex)
            {
                message = ex.Message;
            }
            return message;
        }
        public List<LeadModel> GetLeadsWithFilters(string FilterData, int currentPage, int pageSize)
        {
            List<LeadModel> leads = new List<LeadModel>();
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("FilterData", FilterData);
                inputparam.Add("currentPage", Convert.ToInt32(currentPage));
                inputparam.Add("pageSize", Convert.ToInt32(pageSize));
                leads = DatabaseHelper.ExecuteStoreProcedure<LeadModel>(connectionString, "dbo.prcGetLeadsWithFilter", inputparam).ToList();
            }
            catch (Exception ex)
            {
                leads = new List<LeadModel>();
                //UserHelper.LogError(Ex);				
            }
            return leads;
        }
        public LeadModel GetLeadsWithId(int Id)
        {
            LeadModel leads = new LeadModel();
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("Id", Id);
                leads = DatabaseHelper.ExecuteStoreProcedure<LeadModel>(connectionString, "dbo.prcGetLeadsWithId", inputparam).FirstOrDefault();
            }
            catch (Exception ex)
            {
                leads = new LeadModel();
            }
            return leads;
        }

        public List<LeadModel> GetLeadsDownload(DateTime fromDate, DateTime toDate)
        {
            List<LeadModel> leads = new List<LeadModel>();
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("fromDate", fromDate);
                inputparam.Add("toDate", toDate);
                leads = DatabaseHelper.ExecuteStoreProcedure<LeadModel>(connectionString, "dbo.prc_GetAllLeadData", inputparam).ToList();
            }
            catch (Exception ex)
            {
                leads = new List<LeadModel>();
                //UserHelper.LogError(Ex);				
            }
            return leads;
        }
    }
}
