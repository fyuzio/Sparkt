using Sparkt.Entities.ContactUs;
using Sparkt.WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sparkt.WebApp.Core.Extensions
{
    public static class ContactUsExtension
    {
        public static ContactUs toContactUs(this ContactUsViewModel viewModel)
        {
            var contactUs = new ContactUs();
            try
            {
                if (viewModel != null)
                {
                    contactUs = new ContactUs
                    {
                        SparktId = viewModel.SparktId,
                        Name = viewModel.Name,
                        CompanyName = viewModel.CompanyName,
                        EmailId = viewModel.EmailId,
                        PhoneNumber = viewModel.PhoneNumber,
                        SeekAConsultation = viewModel.SeekAConsultation,
                        Message = viewModel.Message
                    };
                }
            }
            catch (Exception ex)
            {
                contactUs = new ContactUs();
            }
            return contactUs;
        }
    }
}