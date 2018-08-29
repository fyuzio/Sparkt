using System.Web;
using System.Web.Optimization;

namespace Sparkt.WebApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          //"~/Scripts/bootstrap.js",
            //         /* "~/Scripts/respond.js"*/));

            //bundles.Add(new StyleBundle("~/bundles/css").Include(
            //          //"~/Content/bootstrap.css",
            //          "~/Content/site.css"));
            bundles.Add(new StyleBundle("~/Content/Admin/css").Include(
                    "~/Areas/Admin/Content/css/reset.css",
                    "~/Areas/Admin/Content/css/materialize.min.css"
                    , "~/Areas/Admin/Content/css/style.css"
                    , "~/Areas/Admin/Content/css/jquery.dataTables.min.css"));
            bundles.Add(new ScriptBundle("~/bundles/Admin/jquery").Include(
                       "~/Areas/Admin/Scripts/Plugins/jquery-3.1.1.min.js"
                       , "~/Areas/Admin/Scripts/Plugins/materialize.js"
                       , "~/Areas/Admin/Scripts/Plugins/jquery.mCustomScrollbar.min.js"
                       , "~/Areas/Admin/Scripts/Plugins/gridtab.min.js"
                       , "~/Areas/Admin/Scripts/Plugins/jquery.mousewheel.min.js"
                       , "~/Areas/Admin/Scripts/Plugins/jquery.ros.js"
                       , "~/Areas/Admin/Scripts/Plugins/owl.carousel.min.js"
                       , "~/Areas/Admin/Scripts/swiper.min.js"
                       , "~/Areas/Admin/Scripts/jquery.validate.min.js"
                       , "~/Areas/Admin/Scripts/Plugins/functions.js"
                       , "~/Areas/Admin/Scripts/Custom/commonHelper.js"
                       , "~/Areas/Admin/Scripts/Custom/ajaxHelper.js"));
        }
    }
}
