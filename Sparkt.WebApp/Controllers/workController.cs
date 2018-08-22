using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sparkt.WebApp.Controllers
{
    [RoutePrefix("work")]
    public class workController : Controller
    {
        // GET: work
        public ActionResult Index()
        {
            return View();
        }
        [Route("BoutiqueLiving")]
        public ActionResult Bql()
        {
            return View();
        }
        public ActionResult Brickex()
        {
            return View();
        }

        public ActionResult DancePlus2()
        {
            return View();
        }
        public ActionResult Dhoni()
        {
            return View();
        }
        [Route("HarShaakhPeUlluBaithaaHai")]
        public ActionResult HSPubh()
        {
            return View();
        }
        public ActionResult Ikyawann()
        {
            return View();
        }
        public ActionResult IndiaRF()
        {
            return View();
        }
        public ActionResult IshqBaaaz()
        {
            return View();
        }
        public ActionResult JungleBook()
        {
            return View();
        }
        public ActionResult Khichdi()
        {
            return View();
        }
        public ActionResult Kullfi()
        {
            return View();
        }
        public ActionResult MadeByMom()
        {
            return View();
        }

        public ActionResult MahindraBadhatYojana()
        {
            return View();
        }      
        public ActionResult MahindraMF()
        {
            return View();
        }

        public ActionResult MahindraMFExperience()
        {
            return View();
        }
        public ActionResult MahindraNfoLaunches()
        {
            return View();
        }
        [Route("MahindraKarBachatYojana")]
        public ActionResult MahindraTah()
        {
            return View();
        }
        public ActionResult MahindraTextMoji()
        {
            return View();
        }
        public ActionResult MahindraUnnati()
        {
            return View();
        }
        public ActionResult MGage()
        {
            return View();
        }
        public ActionResult NachBaliye8()
        {
            return View();
        }
        public ActionResult NayiSoch()
        {
            ViewBag.At="@";
            return View();
        }
        public ActionResult OnePlus()
        {
            return View();
        }
        [Route("PiramalHousingFinanceLtd")]
        public ActionResult Phfl()
        {
            return View();
        }
        public ActionResult PiramalCapital()
        {
            return View();
        }
        public ActionResult Pow()
        {
            return View();
        }
        [Route("StarWritersProgram")]
        public ActionResult Swp()
        {
            return View();
        }
        public ActionResult Ted()
        {
            return View();
        }
        public ActionResult TedGoogleCards()
        {
            return View();
        }
        [Route("TheGreatIndianLaughterChallenge")]
        public ActionResult Tgilc()
        {
            return View();
        }
        public ActionResult UCypher()
        {
            return View();
        }
        public ActionResult UCypherInstafight()
        {
            return View();
        }
        public ActionResult UCypherUseOfData()
        {
            return View();
        }
        public ActionResult UCypherUseOfDataMS()
        {
            return View();
        }
        public ActionResult USports()
        {
            return View();
        }
        public ActionResult USportsHamburger()
        {
            return View();
        }
        public ActionResult USportsScratch()
        {
            return View();
        }
        public ActionResult WomensDay()
        {
            return View();
        }

        public ActionResult Total()
        {
            return View();
        }
        [Route("HarShaakhPeUlluBaithaaHaiMedia")]
        public ActionResult HSPUBHMedia()
        {
            return View();
        }
        [Route("MahindraMutualFundTextEmoji")]
        public ActionResult TextMoji()
        {
            return View();
        }

        [Route("EditageInsights")]
        public ActionResult EditageInsights()
        {
            return View();
        }

        [Route("VYNG")]
        public ActionResult StarVYNG()
        {
            return View();
        }
    }
}