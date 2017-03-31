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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const ng2_power_table_1 = require("ng2-power-table/ng2-power-table");
const http_1 = require("@angular/http");
let GithubDataPipe = class GithubDataPipe {
    constructor(http) {
        this.http = http;
    }
    pipe(data, tableState, configuration) {
        var tableStateTyped = tableState;
        this.http.get('https://api.github.com/repos/hoveytech/ng2-power-table/stats/commit_activity')
            .toPromise()
            .then(response => {
            let totalItemCount = 0;
            let weeks = response.json();
            for (var week of weeks) {
                totalItemCount += week.total;
            }
            tableStateTyped.pagination.totalItemCount = totalItemCount;
        });
        let perPage = tableStateTyped.pagination.pageSize;
        let page = Math.ceil(tableStateTyped.pagination.start / perPage) + 1; // github uses 1-indexing
        let getCommits = 'https://api.github.com/repos/hoveytech/ng2-power-table/commits';
        getCommits += `?page=${page}&per_page=${perPage}`;
        return this.http.get(getCommits)
            .toPromise()
            .then(response => {
            return response.json();
        });
    }
};
GithubDataPipe = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GithubDataPipe);
let ServerExampleComponent = class ServerExampleComponent {
    constructor() {
        this.allCommits = [];
        this.commits = [];
        this.configuration = ng2_power_table_1.DefaultConfiguration.create();
        this.configuration.pipeServiceType = GithubDataPipe;
    }
};
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