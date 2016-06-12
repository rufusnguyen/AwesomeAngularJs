using Autofac;
using Hoang.AwesomeAngularJs.Core.BusinessLogic;
using Hoang.AwesomeAngularJs.Infrastructure.BusinessLogic.BusinessLogic;

namespace MVCSite.App_Start.AutofacRegister
{
    public class BusinessLogicRegistry : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<UserBusinessLogic>().As<IUserBusinessLogic>().SingleInstance();
            base.Load(builder);
        }
    }
}