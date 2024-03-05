using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace ProjectAlHamra_Mall.Models
{
    public class LeasingSurfaceController : SurfaceController
    {
        // GET: LeasingForm
        string constr = ConfigurationManager.ConnectionStrings["umbracoDbDSN"].ConnectionString;

        [HttpPost]
        public ActionResult LeasingForm()
        {
            SqlConnection con = new SqlConnection("Data Source=145.239.140.17;Initial Catalog=AlhamraMall;Integrated Security=False;User ID=SA123456;Password=SA@123456");
            con.Open();
            SqlCommand cmd = new SqlCommand("SP_enquiryTBL", con);

            return RedirectToCurrentUmbracoUrl();
        }
    }
}