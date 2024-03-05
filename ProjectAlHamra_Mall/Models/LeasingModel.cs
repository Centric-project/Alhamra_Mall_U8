using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectAlHamra_Mall.Models
{
    public class LeasingModel
    {
       public string brandNameConcept { get; set; }
        public string OwnershipofBrandName { get; set; }
        public string companyName { get; set; }
        public string distributorCountryOrigin { get; set; }
        public string numberOfStoresInUAE { get; set; }
        public int estimatedSales { get; set; }
        public string currency { get; set; }
        public int minSpaceRequired { get; set; }
        public int maxSpaceRequired { get; set; }
        public int preferredSpace { get; set; }
        public string spaceUnit { get; set; }
        public string contactPerson { get; set; }
        public string cpCompanyName { get; set; }
        public string cpDesignation { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string mobileNo { get; set; }
        public string email { get; set; }
        public string proposedRetailStore { get; set; }
        public string authorizedSignatory { get; set; }
        public string storeLocationsUAE { get; set; }
        public string comments { get; set; }
        public string reCaptcha { get; set; }
    }
}