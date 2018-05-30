using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.OleDb;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Script.Serialization;
using Sparkt.Entities;
using System.Reflection;

namespace Sparkt.Utility
{
	public class Utility
	{

	
		public static bool ValidateCaptcha(string response)
		{
			//secret that was generated in key value pair  
			string secret = WebConfigurationManager.AppSettings["ReCaptchaSecretKey"];			
			var client = new WebClient();
			var reply = client.DownloadString(string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secret, response));
			JavaScriptSerializer ser = new JavaScriptSerializer();
			CaptchaResponse captchaResponse = ser.Deserialize<CaptchaResponse>(reply);
			return Convert.ToBoolean(captchaResponse.Success);

		}
		

        public static string SendEmailViaSMTP(string EmailAddress, string EmailSubject, string EmailTemplateString)
		{
			string response = string.Empty;
			try
			{
				if (EmailAddress != string.Empty)
				{
					string smtpServer = ConfigurationManager.AppSettings["SMTPServer"].ToString();
					string smtpPort = ConfigurationManager.AppSettings["SMTPPort"].ToString();
					string smtpKey = ConfigurationManager.AppSettings["SMTPKey"].ToString();
					string smtpPassword = ConfigurationManager.AppSettings["SMTPPassword"].ToString();
					string mailFrom = ConfigurationManager.AppSettings["SMTPMailFrom"].ToString();
					string displayName = ConfigurationManager.AppSettings["SMTPDisplayName"].ToString();
					SmtpClient _smtp = new SmtpClient(smtpServer, Convert.ToInt32(smtpPort));
					_smtp.UseDefaultCredentials = false;//dLZh1T7OTeqdUvQOfiDtjw 
					_smtp.Credentials = new NetworkCredential(smtpKey, smtpPassword);
					MailMessage message = new MailMessage();
					message.From = new MailAddress(mailFrom, displayName);
					message.To.Add(EmailAddress);
					message.Subject = EmailSubject;
					message.IsBodyHtml = true;
					message.Body = EmailTemplateString;
					_smtp.Send(message);
				}
			}
			catch (Exception ex)
			{
				throw ex;
			}
			return response;
		}

		public static void SendMailViaApi(string emailAddress, string emailSubject, string emailTemplateString)
		{
			string statusCode = string.Empty;
			try
			{
				string smtpEnvironmentKey = ConfigurationManager.AppSettings["SMTPEnvironmentKey"].ToString();
				string sendGridApiKey = ConfigurationManager.AppSettings["SendGridApiKey"].ToString();
				string mailFrom = ConfigurationManager.AppSettings["SMTPMailFrom"].ToString();
				string displayName = ConfigurationManager.AppSettings["SMTPDisplayName"].ToString();
				var apiKey = Environment.GetEnvironmentVariable(smtpEnvironmentKey);
				var client = new SendGridClient(sendGridApiKey);

			
				var from = new EmailAddress(mailFrom, displayName);			
				var to = new EmailAddress(emailAddress, null);				
				var msg = MailHelper.CreateSingleEmail(from, to, emailSubject, "", emailTemplateString);
				var response = client.SendEmailAsync(msg);
				//statusCode = response.StatusCode.ToString();
			}
			catch (Exception ex)
			{
				throw ex;
			}			
		}

		public static Task SendMail(string emailAddress, string emailSubject, string emailTemplateString)
		{
			return Task.Run(() =>
			{
				SendMailViaApi(emailAddress, emailSubject, emailTemplateString);
			});
		}


        public static T ParseEnum<T>(string value, T defaultValue) where T : struct
        {
            try
            {
                T enumValue;
                if (!Enum.TryParse(value, true, out enumValue))
                {
                    return defaultValue;
                }
                return enumValue;
            }
            catch (Exception)
            {
                return defaultValue;
            }
        }

        public static async Task SendMailViaApiAsync(string [] emailAddress, string emailSubject, string emailTemplateString)
        {
            string statusCode = string.Empty;
            try
            {
                //string smtpEnvironmentKey = ConfigurationManager.AppSettings["SMTPEnvironmentKey"].ToString();
                string sendGridApiKey = ConfigurationManager.AppSettings["SendGridApiKey"].ToString();
                string mailFrom = ConfigurationManager.AppSettings["SMTPMailFrom"].ToString();
                string displayName = ConfigurationManager.AppSettings["SMTPDisplayName"].ToString();
                var apiKey = Environment.GetEnvironmentVariable("SendGridKey", EnvironmentVariableTarget.Machine);
                var client = new SendGridClient(sendGridApiKey);


                var from = new EmailAddress(mailFrom, displayName);
                var emailIds = new List<EmailAddress>();
                foreach (var item in emailAddress)
                {
                    emailIds.Add(new EmailAddress(item, null));
                }

                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, emailIds, emailSubject, "", emailTemplateString);
                var response = await client.SendEmailAsync(msg);
                //statusCode = response.StatusCode.ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static DataTable ToDataTable<T>(List<T> items)
        {
            DataTable dataTable = new DataTable(typeof(T).Name);

            //Get all the properties
            PropertyInfo[] Props = typeof(T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
            foreach (PropertyInfo prop in Props)
            {
                //Defining type of data column gives proper data table 
                var type = (prop.PropertyType.IsGenericType && prop.PropertyType.GetGenericTypeDefinition() == typeof(Nullable<>) ? Nullable.GetUnderlyingType(prop.PropertyType) : prop.PropertyType);
                //Setting column names as Property names
                dataTable.Columns.Add(prop.Name, type);
            }
            foreach (T item in items)
            {
                var values = new object[Props.Length];
                for (int i = 0; i < Props.Length; i++)
                {
                    //inserting property values to datatable rows
                    values[i] = Props[i].GetValue(item, null);
                }
                dataTable.Rows.Add(values);
            }
            //put a breakpoint here and check datatable
            return dataTable;
        }
        public static void WriteDataTable(DataTable sourceTable, TextWriter writer, bool includeHeaders)
        {
            if (includeHeaders)
            {
                IEnumerable<String> headerValues = sourceTable.Columns
                    .OfType<DataColumn>()
                    .Select(column => QuoteValue(column.ColumnName));

                writer.WriteLine(String.Join(",", headerValues));
            }

            IEnumerable<String> items = null;

            foreach (DataRow row in sourceTable.Rows)
            {
                items = row.ItemArray.Select(o => QuoteValue(o?.ToString() ?? String.Empty));
                writer.WriteLine(String.Join(",", items));
            }

            writer.Flush();
        }

        private static string QuoteValue(string value)
        {
            return String.Concat("\"",
            value.Replace("\"", "\"\""), "\"");
        }

        public static async Task SendMailViaApiWithAttachments(string [] emailAddress, string emailSubject, string emailTemplateString, List<byte[]> listattach)
        {
            string statusCode = string.Empty;
            try
            {
                //string smtpEnvironmentKey = ConfigurationManager.AppSettings["SMTPEnvironmentKey"].ToString();
                string sendGridApiKey = ConfigurationManager.AppSettings["SendGridApiKey"].ToString();
                string mailFrom = ConfigurationManager.AppSettings["SMTPMailFrom"].ToString();
                string displayName = ConfigurationManager.AppSettings["SMTPDisplayName"].ToString();
                var apiKey = Environment.GetEnvironmentVariable("SendGridKey", EnvironmentVariableTarget.Machine);
                var client = new SendGridClient(sendGridApiKey);


                var from = new EmailAddress(mailFrom, displayName);
                var emailIds = new List<EmailAddress>();
                foreach (var item in emailAddress)
                {
                    emailIds.Add(new EmailAddress(item, null));
                }

                var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, emailIds, emailSubject, "", emailTemplateString);
                List<SendGrid.Helpers.Mail.Attachment> listattachment = new List<SendGrid.Helpers.Mail.Attachment>();
                if(listattach!=null)
                {
                    foreach (byte[] attach in listattach)
                    {
                        string fileContentsAsBase64 = Convert.ToBase64String(attach);

                        var attachment = new SendGrid.Helpers.Mail.Attachment
                        {
                            Filename = "FailedLeads.csv",
                            Type = "txt/csv",
                            Content = fileContentsAsBase64
                        };
                        listattachment.Add(attachment);
                    }
                    msg.AddAttachments(listattachment);
                }
                var response = await client.SendEmailAsync(msg);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
