using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Web;

namespace Sparkt.WebApp.Helpers
{
    public static class CsvHelpers
    {
        public static string ToLeadCsv<T>(this IEnumerable<T> objectlist, string separator)
        {
            //Type t = typeof(T);
            //PropertyInfo[] props = t.GetProperties();
            string[] props = new string[]
            {
                "Name",
                "Mobile No.",
                "Email",
                "Company Name",
                "Message",
                //"Type",
                //"Querry Type",
                "Date"
                };
            string header = String.Join(separator, props.Select(f => f).ToArray());
            StringBuilder csvdata = new StringBuilder();
            csvdata.AppendLine(header);
            List<LeadModel> lstLead = (List<LeadModel>)objectlist;
            foreach (var objLead in lstLead)
            {
                objLead.LeadName = objLead.LeadName.Replace("\"", " ");
                objLead.PhoneNumber = objLead.PhoneNumber.Replace("\"", " ");
                objLead.Email = objLead.Email.Replace("\"", " ");
                objLead.CompanyName = objLead.CompanyName.Replace("\"", " ");
                objLead.Message = objLead.Message.Replace("\"", "'");
                objLead.DisplayDate = objLead.DisplayDate.Replace("\"", " ");
                csvdata.AppendLine(
                        "\""+objLead.LeadName +"\"" + separator +
                        "\"" + objLead.PhoneNumber + "\"" + separator +
                        "\"" + objLead.Email + "\"" + separator +
                       "\"" + objLead.CompanyName + "\"" + separator +
                        "\"" + objLead.Message + "\"" + separator +
                        //objLead.LeadType + separator +
                        //objLead.QuerryType + separator+
                        "\"" + objLead.DisplayDate + "\"" + separator
                    );
            }
            return csvdata.ToString();
        }


        public static string ToConnectorCsv<T>(this IEnumerable<T> objectlist, string separator)
        {
            Type t = typeof(T);
            PropertyInfo[] props = t.GetProperties();
            string header = String.Join(separator, props.Select(f => f.Name).ToArray());
            StringBuilder csvdata = new StringBuilder();
            csvdata.AppendLine(header);
            foreach (var o in objectlist)
                csvdata.AppendLine(ToCsvFields(separator, props, o));
            return csvdata.ToString();
        }
        private static string ToCsvFields(string separator, PropertyInfo[] properties, object o)
        {
            var line = new StringBuilder();
            foreach (var f in properties)
            {
                if (line.Length > 0)
                    line.Append(separator);
                var x = f.GetValue(o);
                if (x != null)
                    if (Convert.ToString(x).Contains(","))
                    {
                        line.Append("\"" + x + "\"");
                    }
                    else
                    {
                        line.Append(x);
                    }
            }
            return line.ToString();
        }
    }
}