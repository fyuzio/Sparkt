using Sparkt.BusinessAccess.Interface;
using Sparkt.DataAccess.Interface;
using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess.Implementation
{
    public class LeadService : ILeadService
    {
        private readonly ILeadRepository _leadRepository;
        public LeadService(ILeadRepository leadRepository)
        {
            _leadRepository = leadRepository;
        }

        public string InsertLead(Lead lead)
        {
            return _leadRepository.InsertLead(lead);
        }
        public List<LeadModel> GetLeadsWithFilters(string FilterData, int currentPage, int pageSize)
        {
            List<LeadModel> listLeads = new List<LeadModel>();
            try
            {
                listLeads = _leadRepository.GetLeadsWithFilters(FilterData, currentPage, pageSize);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return listLeads;
        }
        public LeadModel GetLeadsWithId(int id)
        {
            return _leadRepository.GetLeadsWithId(id);
        }

        public List<LeadModel> GetLeadsDownload(DateTime fromDate, DateTime toDate)
        {
            List<LeadModel> listLeads = new List<LeadModel>();
            try
            {
                listLeads = _leadRepository.GetLeadsDownload(fromDate, toDate);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return listLeads;
        }
    }
}
