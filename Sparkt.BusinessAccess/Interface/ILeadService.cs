﻿using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess.Interface
{
    public interface ILeadService
    {
        string InsertLead(Lead lead);
        List<LeadModel> GetLeadsWithFilters(string FilterData, int currentPage, int pageSize);
        List<LeadModel> GetLeadsDownload(DateTime fromDate, DateTime toDate);
        LeadModel GetLeadsWithId(int Id);
    }
}
