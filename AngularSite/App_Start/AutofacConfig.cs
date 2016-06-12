using AngularSite.App_Start.AutofacRegister;
using Autofac;
using Autofac.Integration.WebApi;
using System.Reflection;
using System.Web.Http;

namespace AngularSite
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            // Register our Data dependencies
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterModule(new BusinessLogicRegistry());

            var container = builder.Build();
            // Set MVC DI resolver to use our Autofac container
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
        }
    }
}