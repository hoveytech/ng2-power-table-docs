"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ng2_power_table_1 = require("ng2-power-table/ng2-power-table");
var http_1 = require("@angular/http");
var GithubDataPipe = (function () {
    function GithubDataPipe(http) {
        this.http = http;
    }
    GithubDataPipe.prototype.pipe = function (data, tableState, configuration) {
        this.http.get('https://api.github.com/repos/hoveytech/ng2-power-table/stats/commit_activity')
            .toPromise()
            .then(function (response) {
            var totalItemCount = 0;
            var weeks = response.json();
            for (var _i = 0, weeks_1 = weeks; _i < weeks_1.length; _i++) {
                var week = weeks_1[_i];
                totalItemCount += week.total;
            }
            tableState.pagination.totalItemCount = totalItemCount;
        });
        var perPage = tableState.pagination.pageSize;
        var page = Math.ceil(tableState.pagination.start / perPage) + 1; // github uses 1-indexing
        var getCommits = 'https://api.github.com/repos/hoveytech/ng2-power-table/commits';
        getCommits += "?page=" + page + "&per_page=" + perPage;
        return this.http.get(getCommits)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    return GithubDataPipe;
}());
GithubDataPipe = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubDataPipe);
var ServerExampleComponent = (function () {
    function ServerExampleComponent() {
        this.allCommits = [];
        this.commits = [];
        this.configuration = ng2_power_table_1.DefaultConfiguration.create();
        this.configuration.pipeServiceType = GithubDataPipe;
    }
    return ServerExampleComponent;
}());
ServerExampleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'server-example',
        templateUrl: './ServerExample.component.html',
        providers: [GithubDataPipe]
    }),
    __metadata("design:paramtypes", [])
], ServerExampleComponent);
exports.ServerExampleComponent = ServerExampleComponent;
//# sourceMappingURL=ServerExample.component.js.map