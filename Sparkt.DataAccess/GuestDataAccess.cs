using PHFL.DataAccess.Common;
using Sparkt.Entities;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.DataAccess
{
    public class GuestDataAccess
    {
        string connectionString = ConfigurationManager.ConnectionStrings["SparktEntities"].ToString();

        public GuestDataAccess()
        {

        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="guestEntity"></param>
        /// <returns></returns>
        public bool InsertGuestDetails(GuestEntity guestEntity)
        {
            bool result = false;
            try
            {
                Dictionary<string, object> inputparam = new Dictionary<string, object>();
                inputparam.Add("Name", guestEntity.Name);
                inputparam.Add("PhoneNumber", guestEntity.PhoneNumber);
                inputparam.Add("EmailId", guestEntity.EmailId);
                inputparam.Add("CompanyName", guestEntity.CompanyName);
                inputparam.Add("Message", guestEntity.Message);
                inputparam.Add("ConsultationTypeId", guestEntity.SeekAConsultation);
                inputparam.Add("FilePath", guestEntity.filePath);
                
                var success = DatabaseHelper.ExecuteStoreProcedure<int>(connectionString, "InsertGuestDetails_test", inputparam).FirstOrDefault();
                result = Convert.ToBoolean(success);
            }
            catch (Exception ex)
            {
                //UserHelper.LogError(ex);
                throw ex;
            }
            return result;
        }
    }
}
