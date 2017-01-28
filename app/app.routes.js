"use strict";
var router_1 = require("@angular/router");
var Basic_component_1 = require("./Basics/Basic.component");
var Sorting_component_1 = require("./Sorting/Sorting.component");
var Paging_component_1 = require("./Paging/Paging.component");
var Server_component_1 = require("./Server/Server.component");
var Customize_component_1 = require("./Customize/Customize.component");
var appRoutes = [
    { path: '', component: Basic_component_1.BasicComponent },
    { path: 'sorting', component: Sorting_component_1.SortingComponent },
    { path: 'paging', component: Paging_component_1.PagingComponent },
    { path: 'customize', component: Customize_component_1.CustomizeComponent },
    { path: 'server', component: Server_component_1.ServerComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map