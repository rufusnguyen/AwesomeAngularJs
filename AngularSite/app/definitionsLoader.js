/**
 * Created with JetBrains WebStorm.
 * User: raul
 * Date: 17/07/13
 * Time: 12:30
 */
define(['definition'], function (definition) {
    var statesToConfigure = [];
    var modulesToLoad = [];
    var scriptsToLoad = [];


    //Generates a string array with all the needed modules to load
    function generateModulesToLoad(globalDependencies) {
        for (var i = 0; i < modules.length; i++) {
            var moduleDependencies = modules[i].moduleDependencies;
            var moduleName = modules[i].moduleName;
            if (moduleName !== null) {
                globalDependencies.push(moduleName);
            }
            if (moduleDependencies !== null) {
                globalDependencies = _.union(globalDependencies, moduleDependencies);
            }
        }
        return globalDependencies;
    };

    function generateStatesToConfigure() {
        var states = [];
        for (var i = 0; i < modules.length; i++) {
            var moduleStates = modules[i].moduleStates;
            for (var j = 0; j < moduleStates.length; j++) {
                moduleStates[j].path = modules[i].modulePath;
            }
            if (moduleStates !== null) {
                states = _.union(states, moduleStates);
            }
        }
        return states;
    }

    var init = function () {
        modules = definition.modules;
        statesToConfigure = generateStatesToConfigure();
    }

    init();

    return {
        scriptsToLoad: scriptsToLoad,
        statesToConfigure: statesToConfigure,
        modulesToLoad: modulesToLoad,
        modules: modules
    }
})






