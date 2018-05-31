using Sparkt.BusinessAccess.Core.Interface;
using Sparkt.DataAccess.Core.Interface;
using Sparkt.Entities.ContactUs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess.Core.Implementation
{
    public class ContactUsService: IContactUsService
    {
        private readonly IContactUsRepository _contactusRepository;
        public ContactUsService(IContactUsRepository contactusRepository)
        {
            _contactusRepository = contactusRepository;
        }

        public string InsertContactUs(ContactUs contactUs)
        {
            return _contactusRepository.InsertContactus(contactUs);
        }
    }
}
