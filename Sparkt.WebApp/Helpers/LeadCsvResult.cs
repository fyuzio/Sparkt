using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Sparkt.WebApp.Helpers
{
    public class LeadCsvResult : ActionResult
    {
        private readonly List<LeadModel> _records;
        private readonly string _filename;
        public LeadCsvResult(List<LeadModel> records, string filename)
        {
            _records = records;
            _filename = filename;
        }
        public override void ExecuteResult(ControllerContext context)
        {
            var sb = new StringBuilder();
            sb.Append(_records.ToLeadCsv<LeadModel>(","));
            var response = context.HttpContext.Response;
            response.ContentType = "text/csv";
            response.AddHeader("content-disposition",
                String.Format("attachment; filename={0}", _filename));

            response.Write(sb.ToString());

            response.Flush();
            response.End();
        }
    }
}