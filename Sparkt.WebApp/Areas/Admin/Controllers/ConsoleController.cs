using Sparkt.BusinessAccess.Interface;
using Sparkt.Entities;
using Sparkt.WebApp.Areas.Admin.Core.ActionFilters;
using Sparkt.WebApp.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sparkt.WebApp.Areas.Admin.Controllers
{
    public class ConsoleController : Controller
    {
        private readonly ILeadService _leadService;
        public ConsoleController( ILeadService leadService)
        {
            _leadService = leadService;
        }
        // GET: Admin/Console
        [HttpGet]
        [CustomAuthorize]
        public ActionResult Dashboard()
        {
            return View();
        }
        #region Leads Section
        [CustomAuthorize]
        [Authorize]
        public ActionResult Leads()
        {
            List<LeadModel> listLeads = new List<LeadModel>();
            return View(listLeads);
        }

        [HttpPost]
        public ActionResult LeadFilter(string FilterData, int currentPage, int pageSize)
        {
            #region Filters
            string[] Parameters;
            if (FilterData != string.Empty)
            {
                Parameters = FilterData.Split(',');
                FilterData = string.Empty;
                if (Parameters[0] != string.Empty)
                    FilterData += " AND L.Name LIKE '%" + Parameters[0] + "%' ";
                if (Parameters[1] != string.Empty)
                    FilterData += " AND L.PhoneNumber LIKE '%" + Parameters[1] + "%' ";
                if (Parameters[2] != string.Empty)
                    FilterData += " AND L.EmailId LIKE '%" + Parameters[2] + "%' ";
                if (Parameters[3] != string.Empty)
                    FilterData += " AND L.CompanyName LIKE '%" + Parameters[3] + "%' ";
                if (Parameters[4] != string.Empty)
                    FilterData += " AND C.ConsultationTypeId =" + Parameters[4];

            }
            else
            {
                FilterData = string.Empty;
            }

            #endregion

            List<LeadModel> lstLeads = _leadService.GetLeadsWithFilters(FilterData, currentPage, pageSize);
            if (lstLeads != null && lstLeads.Any())
            {
                lstLeads.ForEach(s => s.DisplayDate = s.CreatedDate.ToString("dd MMM yyyy"));
            }
            return Json(lstLeads);
        }

        [CustomAuthorize]
        public ActionResult LeadDetail(int id)
        {
            LeadModel lstLeads = new LeadModel();
            try
            {
                lstLeads = _leadService.GetLeadsWithId(id);
            }
            catch (Exception ex)
            {
                lstLeads = new LeadModel();
            }
            return View(lstLeads);
        }

        [HttpPost]
        public ActionResult DownloadLeadsDate(int TypeId, DateTime FromDate, DateTime ToDate)
        {
            var fDate =  FromDate;
            var tdate = ToDate;

                List<LeadModel> listLeads = _leadService.GetLeadsDownload(Convert.ToDateTime(fDate), Convert.ToDateTime(tdate));
            if (listLeads != null && listLeads.Any())
            {
                listLeads.ForEach(s => s.DisplayDate = s.CreatedDate.ToString("dd MMM yyyy hh.mm tt"));
            }
            string fileName = DateTime.Now.ToFileTime().ToString();
            return new LeadCsvResult(listLeads, fileName + ".csv");
        }
        #endregion
    }
}