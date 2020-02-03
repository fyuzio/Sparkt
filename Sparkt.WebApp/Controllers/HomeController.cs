using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sparkt.Entities;
using Sparkt.BusinessAccess;
using System.IO;

namespace Sparkt.WebApp.Controllers
{
   
    public class HomeController : Controller
    {
        private readonly GuestManagementController _guestManagementController;
        public HomeController(GuestManagementController guestManagementController)
        {
            _guestManagementController = guestManagementController;

        }
        
        public ActionResult Index(string section)
        {
            ViewBag.Page= "Home";
            ViewBag.PageSection = section;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        //public ActionResult Contact()
        //{
        //    //string leadmail = System.IO.File.ReadAllText(Server.MapPath("~/Core/Mailer/Lead.html"));
        //    //Utility.Core.Utility.SendLeadMail("New Lead - IndiaRF", leadmail);
        //    return View();
        //}
        //[HttpPost]
        ////[ValidateAntiForgeryToken]
        //[Route("contact")]
        //public ActionResult Contact(ContactUsViewModel viewModel)
        //{
        //    // ViewBag.Message = "Your contact page.";
        //    var errors = ModelState.Values.SelectMany(v => v.Errors);
        //    var contactUs = new ContactUs();
        //    if (ModelState.IsValid)
        //    {
        //        contactUs = viewModel.toContactUs();
        //        string result = _contactUsService.InsertContactUs(contactUs);
        //        if (result.ToLower().Trim() == "success")
        //        {
        //            TempData["IsSuccess"] = true;
        //            return RedirectToAction("Contact");
        //            //string data = Utility.Utility.SendEmailViaSMTP();
        //            //if (data != string.Empty)
        //            //{
        //            //    ModelState.AddModelError("Name", data);
        //            //}
        //            //else
        //            //{
        //            //    TempData["IsSuccess"] = true;
        //            //    return RedirectToAction("Contact");
        //            //}
        //        }

        //    }
        //    return View(viewModel);
        //   // return View();
        //}
        [Route("create")]
        [HttpPost]
        public ActionResult Create(GuestEntity guestEntity)
        {            
            bool result = _guestManagementController.InsertGuestDetails(guestEntity);
                if (result)
            {
                string emailString = "Name: " + guestEntity.Name + "<br>";
                emailString = emailString + "Company: " + guestEntity.CompanyName + "<br>";
                emailString = emailString + "Mobile: " + guestEntity.PhoneNumber + "<br>";
                emailString = emailString + "Email: " + guestEntity.EmailId + "<br>";
                emailString = emailString+ "How can we assist you?: "+ GetConsultationType(guestEntity.SeekAConsultation) + "<br>";
                emailString = emailString + "Message:- " + guestEntity.Message+ "<br>";
                Utility.Utility.SendEmailViaSMTP(guestEntity.EmailId, "Sparkt Contact Us Form", emailString);
            }
            return Json(new { Status = true, Message = "Saved Successfuly." },  JsonRequestBehavior.AllowGet);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="type"></param>
        /// <returns></returns>
        private string GetConsultationType(string type)
        {
            string consultationType = string.Empty;
            switch(type)
            {
                case "1":
                    consultationType = "Partner with us";
                    break;
                case "2":
                    consultationType = "Work with us";
                    break;
                case "3":
                    consultationType = "Press Inquiry";
                    break;
                default:                   
                    break;
            }
            return consultationType;
        }

        [Route("verifygresponse")]
        [HttpPost]
        public ActionResult VerifyGResponse(string gresponse)
        {
            bool result = Utility.Utility.ValidateCaptcha(gresponse);
            return Json(new { Status = result });
        }

        public ActionResult Uturn()
        {
            return View();
        }

        [Route("importfile")]
        [HttpPost]
        public ActionResult ImportFile(HttpPostedFileBase file)
        {
            string newFileName = string.Empty;
            try
            {
                if (file != null && file.ContentLength > 0)
                {
                    FileInfo fileInfo = new FileInfo(file.FileName);
                    string ext = fileInfo.Extension;

                    if (ext == ".pdf")
                    {
                        newFileName = DateTime.Now.ToFileTime().ToString()+ ext;
                        //string fileName = DateTime.Now.ToFileTime().ToString();
                        var location = Path.Combine(
                        Server.MapPath("~/Content/document"), newFileName);
                        file.SaveAs(location);
                       
                        return Json(new { Status = true, Message = "File uploaded successfully.",fileName= "/Content/document/" + newFileName });
                    }
                    else
                    {
                        return Json(new { Status = false, Message = "File doesn't support.", fileName ="" });
                    }
                }
                else
                {
                    return Json(new { Status = false, Message = "Please select a File for import.", fileName = "" });
                }
            }
            catch (Exception ex)
            {
                return Json(new { Status = false, Message = ex.Message.ToString(), fileName = "" });
            }
            return Json(new { Status = true });
        }

    }
}