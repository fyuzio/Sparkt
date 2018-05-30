using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Sparkt.WebApp.Models
{
    public class ContactUsModal
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter your Name")]
        [MaxLength(50, ErrorMessage = "Name must be atmsot 50 characters long")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please enter your Company Name")]
        [MaxLength(100, ErrorMessage = "Company name must be atmsot 100 characters long")]
        public string CompanyName { get; set; }

        [Required(ErrorMessage = "Please enter your Email Id")]
        [MaxLength(50, ErrorMessage = "Email must be atmsot 50 characters long")]
        public string EmailId { get; set; }

        [Required(ErrorMessage = "Please enter your Phone number")]
        [MaxLength(12, ErrorMessage = "Phone number should be 12 digit long")]
        [MinLength(10, ErrorMessage = "Phone number should be atleast 10 digit long")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Please select query type")]
        public string SeekAConsultation { get; set; }

        [Required(ErrorMessage = "Please enter your Message")]
        [MaxLength(500, ErrorMessage = "Message must be atmsot 500 characters long")]
        public string Message { get; set; }
    }
}