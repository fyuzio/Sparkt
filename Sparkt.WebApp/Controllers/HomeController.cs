using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sparkt.Entities;
using Sparkt.BusinessAccess;

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
            return Json(new { Status = true, Message = "Saved Successfuly." },  JsonRequestBehavior.AllowGet);
        }

        [Route("verifygresponse")]
        [HttpPost]
        public ActionResult VerifyGResponse(string gresponse)
        {
            bool result = Utility.Utility.ValidateCaptcha(gresponse);
            return Json(new { Status = result });
        }
        
    }
}