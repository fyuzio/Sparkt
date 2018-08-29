using Newtonsoft.Json;
using Sparkt.BusinessAccess.Interface;
using Sparkt.WebApp.Areas.Admin.Core.Authentication;
using Sparkt.WebApp.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace Sparkt.WebApp.Areas.Admin.Controllers
{
    public class LoginController : Controller
    {
        // GET: Admin/Login
        private readonly IUserService _userService;

        public LoginController(IUserService userService)
        {
            _userService = userService;
        }
        public ActionResult Dashboard()
        {
            return View();
        }

        #region HTTP GET        
        [AllowAnonymous]
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult UnAuthorized()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult ResourceNotFound()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }


        [AllowAnonymous]
        public ActionResult LogOut()
        {

            // First we clean the authentication ticket like always
            //required NameSpace: using System.Web.Security;
            //   FormsAuthentication.SignOut();

            // Second we clear the principal to ensure the user does not retain any authentication
            //required NameSpace: using System.Security.Principal;
            HttpContext.User = new GenericPrincipal(new GenericIdentity(string.Empty), null);

            Session.Clear();
            System.Web.HttpContext.Current.Session.RemoveAll();
            FormsAuthentication.SignOut();
            // Last we redirect to a controller/action that requires authentication to ensure a redirect takes place
            // this clears the Request.IsAuthenticated flag since this triggers a new request
            return RedirectToAction("Login", "Login", null);
        }

        #endregion

        #region HTTP POST

        [HttpPost]
        [ValidateAntiForgeryToken]
        [AllowAnonymous]
        public ActionResult Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = _userService.GetUserByEmail(model.Username);
                // ModelState.AddModelError("UserName", user.Email);
                if (user != null)
                {
                    if (user.Password.Equals(model.Password))
                    {
                        CustomPrincipalSerializeModel serializeModel = new CustomPrincipalSerializeModel
                        {
                            UserId = user.UserId,
                            UserName = user.UserName,
                            FirstName = "",
                            LastName = "",
                            roles = new string[] { user.RoleName }
                        };
                        Session["UserId"] = user.UserId;
                        string userData = JsonConvert.SerializeObject(serializeModel);
                        FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket(1, user.Email, DateTime.Now, DateTime.Now.AddMinutes(15), false, userData);

                        string encTicket = FormsAuthentication.Encrypt(authTicket);
                        HttpCookie faCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encTicket);

                        Response.Cookies.Add(faCookie);

                        return RedirectToAction("Dashboard", "Console");
                    }
                }
                ModelState.AddModelError("UserName", "Incorrect username and/or password");
            }
            return View(model);
        }

        #endregion
    }
}