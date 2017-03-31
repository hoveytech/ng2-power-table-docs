"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular stuff
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
// other dependencies
const ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
/*
  ======== IMPORT PowerTableModule
*/
const ng2_power_table_1 = require("ng2-power-table/ng2-power-table");
// components for this app
const app_component_1 = require("./app.component");
// routing
const app_routes_1 = require("./app.routes");
core_1.enableProdMode();
let Ng2PowerTableDocumentationModule = class Ng2PowerTableDocumentationModule {
};
Ng2PowerTableDocumentationModule = __decorate([
    core_1.NgModule({
        /*
          ======== INCLUDE PowerTableModule in imports of your module
        */
        imports: [platform_browser_1.BrowserModule, ng2_power_table_1.PowerTableModule, app_routes_1.routing, ng2_bootstrap_1.Ng2BootstrapModule, http_1.HttpModule],
        declarations: [app_component_1.Ng2PowerTableComponents],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_routes_1.appRoutingProviders]
    })
], Ng2PowerTableDocumentationModule);
exports.Ng2PowerTableDocumentationModule = Ng2PowerTableDocumentationModule;
//# sourceMappingURL=app.module.js.map