'use strict';
define([], function () {
    return {
        modules: [
            {
                moduleName: "usermanagement",
                modulePath: "/app/usermanagement/",
                moduleStates: [
                    {
                        stateName: "home",
                        url: "/index",
                        baseName: "Home"
                    },
                ]
            },
        ]
    }
});