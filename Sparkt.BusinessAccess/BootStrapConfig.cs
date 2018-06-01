using Autofac;
using Sparkt.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sparkt.BusinessAccess
{
    public class BootStrapConfig
    {
        public static void Build(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(typeof(GuestDataAccess).Assembly).Where(t => t.Name.EndsWith("DataAccess")).InstancePerRequest();
        }
    }
}
