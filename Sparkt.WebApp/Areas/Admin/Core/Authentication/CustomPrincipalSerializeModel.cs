using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sparkt.WebApp.Areas.Admin.Core.Authentication
{
    public class CustomPrincipalSerializeModel
    {
        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string[] roles { get; set; }
    }
}