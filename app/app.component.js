"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
const Navigation_component_1 = require("./Navigation/Navigation.component");
const LoadingFrame_component_1 = require("./Navigation/LoadingFrame.component");
const CodeView_component_1 = require("./CodeViews/CodeView.component");
const Basic_component_1 = require("./Basics/Basic.component");
const BasicExample_component_1 = require("./Basics/BasicExample.component");
const Sorting_component_1 = require("./Sorting/Sorting.component");
const SortingExample_component_1 = require("./Sorting/SortingExample.component");
const Paging_component_1 = require("./Paging/Paging.component");
const PagingExample_component_1 = require("./Paging/PagingExample.component");
const Server_component_1 = require("./Server/Server.component");
const ServerExample_component_1 = require("./Server/ServerExample.component");
const Customize_component_1 = require("./Customize/Customize.component");
const CustomizeExample_component_1 = require("./Customize/CustomizeExample.component");
exports.Ng2PowerTableComponents = [
    CodeView_component_1.CodeExampleComponent,
    Navigation_component_1.NavigationComponent,
    Basic_component_1.BasicComponent,
    BasicExample_component_1.BasicExampleComponent,
    Sorting_component_1.SortingComponent,
    SortingExample_component_1.SortingExampleComponent,
    Paging_component_1.PagingComponent,
    PagingExample_component_1.PagingExampleComponent,
    Server_component_1.ServerComponent,
    ServerExample_component_1.ServerExampleComponent,
    Customize_component_1.CustomizeComponent,
    CustomizeExample_component_1.CustomizeExampleComponent,
    AppComponent,
    LoadingFrame_component_1.LoadingFrameComponent
];
//# sourceMappingURL=app.component.js.map