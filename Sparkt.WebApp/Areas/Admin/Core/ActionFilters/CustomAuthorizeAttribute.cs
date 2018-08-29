using Sparkt.WebApp.Areas.Admin.Core.Authentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Sparkt.WebApp.Areas.Admin.Core.ActionFilters
{
    public class CustomAuthorizeAttribute : AuthorizeAttribute
    {
        protected virtual CustomPrincipal CurrentUser
        {
            get { return HttpContext.Current.User as CustomPrincipal; }
        }

        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext.HttpContext.Request.IsAuthenticated)
            {
                var isAuthorized = true;

                if (!String.IsNullOrEmpty(Roles))
                {
                    if (!CurrentUser.IsInRole(Roles))
                    {
                        isAuthorized = false;
                    }
                }

                if (!String.IsNullOrEmpty(Users))
                {
                    if (!Users.Contains(CurrentUser.UserId.ToString()))
                    {
                        isAuthorized = false;
                    }
                }

                if (!isAuthorized)
                {
                    if (filterContext.HttpContext.Request.IsAjaxRequest())
                    {
                        filterContext.Result = new JsonResult()
                        {
                            ContentType = "application/json; charset=utf-8",
                            Data = new
                            {
                                Status = false,
                                RedirectUrl = "/Admin/Home/AccessDenied",
                                Name = "UnAuthorizedAccess",
                                Message = "You don't have permission for the requested component. Please try contacting administrator.",
                                StatusCode = HttpStatusCode.Unauthorized
                            },
                            JsonRequestBehavior = JsonRequestBehavior.AllowGet
                        };
                    }
                    else
                    {
                        filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Login", action = "AccessDenied" }));
                    }
                }
            }
            else
            {
                if (filterContext.HttpContext.Request.IsAjaxRequest())
                {
                    filterContext.Result = new JsonResult()
                    {
                        ContentType = "application/json; charset=utf-8",
                        Data = new
                        {
                            Status = false,
                            RedirectUrl = "/Admin/Login/Login",
                            Name = "SessionExpired",
                            Message = "It seems session expired.",
                            StatusCode = HttpStatusCode.NotAcceptable
                        },
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                else
                {
                    filterContext.Result = new RedirectToRouteResult(new
                       RouteValueDictionary(new { controller = "Login", action = "Login" }));
                }
            }
        }
    }
}