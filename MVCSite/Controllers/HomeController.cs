using Hoang.AwesomeAngularJs.Core.BusinessLogic;
using System.Web.Mvc;

namespace MVCSite.Controllers
{
    public class HomeController : Controller
    {
        private IUserBusinessLogic _userLogic;
        public HomeController(IUserBusinessLogic userLogic)
        {
            _userLogic = userLogic;
        }
        public ActionResult Index()
        {
            return View(_userLogic.GetUsers());
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
    }
}