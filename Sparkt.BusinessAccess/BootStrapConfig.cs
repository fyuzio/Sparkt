using Autofac;
using Sparkt.DataAccess;
using Sparkt.DataAccess.Interface;
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
            builder.RegisterAssemblyTypes(typeof(IUserRepository).Assembly).Where(t => t.Name.EndsWith("Repository")).AsImplementedInterfaces().InstancePerRequest();
        }
    }
}
