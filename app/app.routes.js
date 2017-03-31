"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const Basic_component_1 = require("./Basics/Basic.component");
const Sorting_component_1 = require("./Sorting/Sorting.component");
const Paging_component_1 = require("./Paging/Paging.component");
const Server_component_1 = require("./Server/Server.component");
const Customize_component_1 = require("./Customize/Customize.component");
const appRoutes = [
    { path: '', component: Basic_component_1.BasicComponent },
    { path: 'sorting', component: Sorting_component_1.SortingComponent },
    { path: 'paging', component: Paging_component_1.PagingComponent },
    { path: 'customize', component: Customize_component_1.CustomizeComponent },
    { path: 'server', component: Server_component_1.ServerComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routes.js.map