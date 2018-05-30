using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Sparkt.Utility;


namespace Sparkt.WebApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Page= "Home";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
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