using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectAlHamra_Mall.App_Code
{
    public class ShopItem
    {
        public string id { get; set; }
        public string name { get; set; }
        public string url { get; set; }
        public string[] tags { get; set; }
        public int catId { get; set; }
        public string cat { get; set; }
    }
}