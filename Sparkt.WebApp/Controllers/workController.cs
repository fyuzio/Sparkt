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

        [Route("birla-white-repaint-putty")]
        public ActionResult BirlaWhiteRepaintPutty()
        {
            return View();
        }


        [Route("birla-excel-putty")]
        public ActionResult BirlaExcelPutty()
        {
            return View();
        }


        [Route("mmf-app")]
        public ActionResult MMFApp()
        {
            return View();
        }

        [Route("sarva-app")]
        public ActionResult SarvaApp()
        {
            return View();
        }
        [Route("sarva-brandbook")]
        public ActionResult SarvaBrandbook()
        {
            return View();
        }

        //sarva-
        [Route("sarva-campaign")]
        public ActionResult SarvaCampaign()
        {
            return View();
        }

        //[Route("nutrela")]
        public ActionResult Nutrela()
        {
            return View();
        }

        [Route("yaarii-films")]
        public ActionResult Yaariifilms()
        {
            return View();
        }

        [Route("seven-seas")]
        public ActionResult SevenSeas()
        {
            return View();
        }
        [Route("seven-seas-ar")]
        public ActionResult SevenSeasAr()
        {
            return View();
        }

        [Route("ted2019")]
        public ActionResult Ted2019()
        {
            return View();
        }

        [Route("ted-ar-innovation")]
        public ActionResult TedArInnovation()
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

        [HttpGet]
        [Route("kullfimissedcall")]
        public ActionResult kullfimissedcall()
        {
            return View();
        }

        [HttpGet]
        [Route("KZK")]
        public ActionResult KZK()
        {
            return View();
        }

        [HttpGet]
        [Route("KZK-AR")]
        public ActionResult KZKAR()
        {
            return View();
        }

        [HttpGet]
        [Route("piramalfoundation")]
        public ActionResult PiramalFoundation()
        {
            return View();
        }

        [HttpGet]
        [Route("sky")]
        public ActionResult Sky()
        {
            return View();
        }



        [HttpGet]
        [Route("star-plus-brand-refresh")]
        public ActionResult StarPlusBrandRefresh()
        {
            return View();
        }
        [HttpGet]
        [Route("star-second-screen")]
        public ActionResult StarSecondScreen()
        {
            return View();
        }


        [HttpGet]
        [Route("yaarii-website")]
        public ActionResult yaariiwebsite()
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
            ViewBag.At = "@";
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

        [Route("Baaghi-2")]
        public ActionResult Baaghi2()
        {
            return View();
        }
        [Route("Divya-Drishti-Content")]
        public ActionResult DivyaDrishtiContent()
        {
            return View();
        }

        [Route("Divya-Drishti-Innovation")]
        public ActionResult DivyaDrishtiInnovation()
        {
            return View();
        }
        [Route("Dubsmash")]
        public ActionResult Dubsmash()
        {
            return View();
        }
        [Route("Karn-Sangini")]
        public ActionResult KarnSangini()
        {
            return View();
        }

        [Route("Mahindra-Pragati-Yojana")]
        public ActionResult MahindraPragatiYojana()
        {
            return View();
        }


        [Route("Mahindra-Rural-Bharat")]
        public ActionResult MahindraRuralBharat()
        {
            return View();
        }

        [Route("mahindra-top-nfo")]
        public ActionResult MahindraTopNfo()
        {
            return View();
        }

        

        [Route("Nazar")]
        public ActionResult Nazar()
        {
            return View();
        }
        [Route("Pchf")]
        public ActionResult Pchf()
        {
            return View();
        }
        [Route("Pedderjohnson")]
        public ActionResult Pedderjohnson()
        {
            return View();
        }
        [Route("Sanju")]
        public ActionResult Sanju()
        {
            return View();
        }
        [Route("Stree")]
        public ActionResult Stree()
        {
            return View();
        }
        [Route("TheVoice")]
        public ActionResult TheVoice()
        {
            return View();
        }
        [Route("Yaarii")]
        public ActionResult Yaarii()
        {
            return View();
        }

        #region Added By moin on 26 March 2020

        [Route("Bharti-AXA")]
        public ActionResult BhartiAxa()
        {
            return View();
        }

        [Route("Sarva-Experience")]
        public ActionResult SarvaExperience()
        {
            return View();
        }

        [Route("Ek-Bhram")]
        public ActionResult EkBhram()
        {
            return View();
        }
        [Route("BhartiAxaPolicy")]
        public ActionResult BhartiAxaPolicy()
        {
            return View();
        }
        [Route("GandhiFellowship")]
        public ActionResult GandhiFellowship()
        {
            return View();
        }
        [Route("iCanhelp")]
        public ActionResult ICan()
        {
            return View();
        }
        #endregion

        [Route("bharti-axa-cop-app")]
        public ActionResult BhartiAxaCropApp()
        {
            return View();
        }

        [Route("cameo")]
        public ActionResult Cameo()
        { 
            return View();
        }

        [Route("ourdaily")]
        public ActionResult OurDaily()
        {
            return View();
        }

        [Route("triactive")]
        public ActionResult TriActive()
        {
            return View();
        }

        [Route("indiabulls-blu")]
        public ActionResult IndiabullsBlu()
        {
            return View();
        }

        [Route("star-pravah-ar")]
        public ActionResult StarPravah()
        {
            return View();
        }

        [Route("philips")]
        public ActionResult Philips()
        {
            return View();
        }

        [Route("edufront")]
        public ActionResult Edufront()
        {
            return View();
        }
    }
}