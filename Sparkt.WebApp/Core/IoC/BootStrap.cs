using Autofac;
using Autofac.Integration.Mvc;
using Sparkt.BusinessAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Sparkt.WebApp.Core.IoC
{
    public class BootStrap
    {
        public static void Build()
        {
            var builder = new ContainerBuilder();

            // Register your MVC controllers. (MvcApplication is the name of
            // the class in Global.asax.)
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            // OPTIONAL: Register model binders that require DI.
            builder.RegisterModelBinders(typeof(MvcApplication).Assembly);
            builder.RegisterModelBinderProvider();

            // OPTIONAL: Register web abstractions like HttpContextBase.
            builder.RegisterModule<AutofacWebTypesModule>();

            // OPTIONAL: Enable property injection in view pages.
            builder.RegisterSource(new ViewRegistrationSource());

            // OPTIONAL: Enable property injection into action filters.
            builder.RegisterFilterProvider();

            BootStrapConfig.Build(builder);

            //builder.RegisterAssemblyTypes(typeof(MenuManagementController).Assembly).Where(t => t.Name.EndsWith("Service")).InstancePerDependency();
            builder.RegisterAssemblyTypes(typeof(GuestManagementController).Assembly).Where(t => t.Name.EndsWith("Controller")).InstancePerRequest();
            //builder.RegisterType<CheckUserPermission>().PropertiesAutowired();
            // Set the dependency resolver to be Autofac.
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}