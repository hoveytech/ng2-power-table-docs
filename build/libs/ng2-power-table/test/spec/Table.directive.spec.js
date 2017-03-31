"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var component_factory_1 = require("./component.factory");
var Table_directive_1 = require("./../../src/Table/Table.directive");
var DefaultTableState_class_1 = require("./../../src/TableState/DefaultTableState.class");
var ConfigurationProvider_class_1 = require("./../../src/Configuration/ConfigurationProvider.class");
var DefaultConfiguration_class_1 = require("./../../src/Configuration/DefaultConfiguration.class");
var DefaultDataPipeService_class_1 = require("./../../src/Pipe/DefaultDataPipeService.class");
var Pagination_component_1 = require("./../../src/Pagination/Pagination.component");
var TestObject_class_1 = require("./../helpers/TestObject.class");
var TestTableComponent = (function () {
    /**
     *
     */
    function TestTableComponent() {
        this.originalData = new Array();
        this.displayData = new Array();
    }
    return TestTableComponent;
}());
TestTableComponent = __decorate([
    core_1.Component({
        selector: 'my-test-component',
        template: "<div></div>"
    }),
    __metadata("design:paramtypes", [])
], TestTableComponent);
var dataPipeCallCount;
var TestDataPipeService = (function () {
    function TestDataPipeService() {
    }
    TestDataPipeService.prototype.pipe = function (array, state, config) {
        dataPipeCallCount++;
        return Promise.resolve([
            { name: "override" }
        ]);
    };
    return TestDataPipeService;
}());
TestDataPipeService = __decorate([
    core_1.Injectable()
], TestDataPipeService);
exports.TestDataPipeService = TestDataPipeService;
describe('TableDirective tests', function () {
    var mockConfigurationProvider = {
        globalConfiguration: {
            pipeServiceType: TestDataPipeService,
            tableStateType: DefaultTableState_class_1.DefaultTableState
        },
        globalConfigurationChanged: new core_1.EventEmitter()
    };
    beforeEach(function () {
        dataPipeCallCount = 0;
        testing_1.TestBed.configureTestingModule({
            declarations: [Table_directive_1.TableDirective, TestTableComponent, component_factory_1.TestComp],
            providers: [TestDataPipeService, { provide: ConfigurationProvider_class_1.ConfigurationProvider, useValue: mockConfigurationProvider }]
        });
    });
    it('should be created when [pt-table] on element', function () {
        var el = component_factory_1.createComponent('<table ptTable=""></table>');
        expect(el.children[0].injector.get(Table_directive_1.TableDirective)).toBeDefined();
    });
    it('should inject same table instance', function () {
        var el = component_factory_1.createComponent('<table ptTable=""></table>');
        var table1 = el.children[0].injector.get(Table_directive_1.TableDirective);
        var table2 = el.children[0].injector.get(Table_directive_1.TableDirective);
        expect(table1).toEqual(table2);
        expect(table2.dataPipe.observers.length).toBe(0);
        table1.dataPipe.subscribe(function () { });
        expect(table2.dataPipe.observers.length).toBe(1);
    });
    it('should initialize tableState when created', function () {
        var el = component_factory_1.createComponent('<table ptTable=""></table>');
        var table = el.children[0].injector.get(Table_directive_1.TableDirective);
        var tableState = table.tableState;
        expect(tableState).toBeDefined();
        expect(tableState instanceof DefaultTableState_class_1.DefaultTableState).toBeTruthy();
    });
    it('originalArray is populated from parentComponent', function () {
        var el = component_factory_1.createComponentFixture('<table [ptTable]="originalData"></table>', [], TestTableComponent);
        var table = el.debugElement.children[0].injector.get(Table_directive_1.TableDirective);
        expect(table.originalArray).toBeDefined();
    });
    it('can update tableState from parent controller', function () {
        var template = "<table [ptTable]=\"originalData\" [(ptTableState)]=\"tableState\" (ptDisplayData)=\"displayData\"></table>";
        var fix = component_factory_1.createComponentFixture(template, [], TestTableComponent);
        var tableEl = fix.debugElement.children[0].injector.get(Table_directive_1.TableDirective);
        fix.componentInstance.originalData = new Array();
        fix.detectChanges();
        expect(tableEl.tableState).toBeDefined();
        expect(fix.componentInstance.tableState).toBeDefined();
    });
    it('displayArray is set using result from IDataPipeService', testing_1.fakeAsync(function () {
        var template = "<table [ptTable]=\"originalData\" [(ptTableState)]=\"tableState\" [(ptDisplayArray)]=\"displayData\"></table>";
        var fix = component_factory_1.createComponentFixture(template, [], TestTableComponent);
        testing_1.tick();
        var display = fix.componentInstance.displayData;
        expect(display).toBeDefined();
        expect(display.length).toBe(1);
        expect(display[0].name).toBe("override");
        expect(dataPipeCallCount).toBe(1);
    }));
    it('table will use item configuration to inject IDataPipeService', testing_1.fakeAsync(function () {
        testing_1.TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [Table_directive_1.TableDirective, TestTableComponent],
            providers: [ConfigurationProvider_class_1.ConfigurationProvider, DefaultDataPipeService_class_1.DefaultDataPipeService, TestDataPipeService]
        });
        var template = "<table [ptTable]=\"originalData\" [(ptDisplayArray)]=\"displayData\" [ptConfiguration]=\"tableConfiguration\"></table>";
        var fix = component_factory_1.createComponentFixture(template, [], TestTableComponent);
        fix.componentInstance.tableConfiguration = DefaultConfiguration_class_1.DefaultConfiguration.create();
        fix.componentInstance.tableConfiguration.pipeServiceType = TestDataPipeService;
        fix.componentInstance.originalData = new Array();
        fix.detectChanges();
        testing_1.tick();
        var display = fix.componentInstance.displayData;
        expect(display).toBeDefined();
        expect(display.length).toBe(1);
        expect(display[0].name).toBe("override");
        expect(dataPipeCallCount).toBe(1);
    }));
    var CustomTableState = (function (_super) {
        __extends(CustomTableState, _super);
        function CustomTableState() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.customProperty = "custom table state";
            return _this;
        }
        return CustomTableState;
    }(DefaultTableState_class_1.DefaultTableState));
    var TableWithCustomStateComponent = (function () {
        /**
         *
         */
        function TableWithCustomStateComponent() {
            this.originalData = new Array();
            this.tableState = new CustomTableState();
        }
        return TableWithCustomStateComponent;
    }());
    TableWithCustomStateComponent = __decorate([
        core_1.Component({
            selector: 'my-test-component',
            template: "<div></div>"
        }),
        __metadata("design:paramtypes", [])
    ], TableWithCustomStateComponent);
    var hasClass = function (element, className) {
        var hasClass = false;
        for (var i = 0; i < element.classList.length; i++) {
            if (element.classList[i] === className)
                hasClass = true;
        }
        return hasClass;
    };
    it('table will call emit for tableState when custom state is being used by consumer', function () {
        testing_1.TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [Table_directive_1.TableDirective, TableWithCustomStateComponent, Pagination_component_1.PaginationComponent],
            providers: [ConfigurationProvider_class_1.ConfigurationProvider, DefaultDataPipeService_class_1.DefaultDataPipeService, TestDataPipeService]
        });
        var template = "\n    <div>\n      <table [ptTable]=\"originalData\" [(ptTableState)]=\"tableState\">\n          <tfoot>\n              <pt-pagination></pt-pagination>\n          </tfoot>\n      </table>\n    </div>\n    ";
        var fix = component_factory_1.createComponentFixture(template, [], TableWithCustomStateComponent);
        var items = new Array();
        for (var i = 0; i < 20; i++) {
            items.push(new TestObject_class_1.TestObject(i, ""));
        }
        fix.componentInstance.originalData = items;
        var tableEl = fix.debugElement.children[0].children[0].injector.get(Table_directive_1.TableDirective);
        fix.detectChanges();
        expect(tableEl.tableState.customProperty).toBe("custom table state");
        var paginationEl = fix.debugElement.children[0].children[0].children[0].children[0];
        var buttonPage1 = paginationEl.children[0].children[2];
        var buttonPage2 = paginationEl.children[0].children[3];
        buttonPage2.nativeElement.click();
        fix.detectChanges();
        expect(fix.componentInstance.tableState.pagination.start).toBe(10);
    });
    it('table will call emit if tableState is set by consumer after constructor', function () {
        testing_1.TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [Table_directive_1.TableDirective, TestTableComponent, Pagination_component_1.PaginationComponent],
            providers: [ConfigurationProvider_class_1.ConfigurationProvider, DefaultDataPipeService_class_1.DefaultDataPipeService, TestDataPipeService]
        });
        var template = "\n    <div>\n      <table [ptTable]=\"originalData\" [(ptTableState)]=\"tableState\">\n          <tfoot>\n              <pt-pagination></pt-pagination>\n          </tfoot>\n      </table>\n    </div>\n    ";
        var fix = component_factory_1.createComponentFixture(template, [], TestTableComponent);
        var newTableState = new DefaultTableState_class_1.DefaultTableState();
        newTableState.pagination.totalItemCount = 20;
        newTableState.pagination.start = 10;
        var tableEl = fix.debugElement.children[0].children[0].injector.get(Table_directive_1.TableDirective);
        fix.componentInstance.tableState = newTableState;
        fix.detectChanges();
        var paginationEl = fix.debugElement.children[0].children[0].children[0].children[0];
        var page1Button = paginationEl.children[0].children[2];
        var page2Button = paginationEl.children[0].children[3];
        expect(hasClass(page1Button.nativeElement, 'active')).toBeFalsy();
        expect(hasClass(page2Button.nativeElement, 'active')).toBeTruthy();
    });
    var TableWithCustomDataPipeFunction = (function () {
        function TableWithCustomDataPipeFunction() {
            this.tableState = new CustomTableState();
            this.pipeCount = 0;
        }
        TableWithCustomDataPipeFunction.prototype.pipe = function (tableState, config) {
            var self = this;
            this.pipeCount++;
            setTimeout(function () {
                tableState.pagination.totalItemCount = 3;
                self.displayArray = [
                    new TestObject_class_1.TestObject(1, "ng2"),
                    new TestObject_class_1.TestObject(1, "power"),
                    new TestObject_class_1.TestObject(1, "table")
                ];
            });
        };
        return TableWithCustomDataPipeFunction;
    }());
    TableWithCustomDataPipeFunction = __decorate([
        core_1.Component({
            selector: 'my-test-component',
            template: "<div></div>"
        })
    ], TableWithCustomDataPipeFunction);
    it('table will use dataPipe value on directive if set', function (done) {
        testing_1.TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [TableWithCustomDataPipeFunction, Table_directive_1.TableDirective, TestTableComponent, Pagination_component_1.PaginationComponent],
            providers: [ConfigurationProvider_class_1.ConfigurationProvider, DefaultDataPipeService_class_1.DefaultDataPipeService, TestDataPipeService]
        });
        var template = "\n    <div>\n      <table [ptTable]=\"\" (ptDataPipe)=\"pipe($event[0], $event[1])\" [(ptDisplayArray)]=\"displayArray\" [(ptTableState)]=\"tableState\">\n      </table>\n    </div>\n    ";
        var fix = component_factory_1.createComponentFixture(template, [], TableWithCustomDataPipeFunction);
        var intervalHandle;
        var start = new Date();
        intervalHandle = setInterval(function () {
            fix.detectChanges();
            var now = new Date();
            if ((now.getTime() - start.getTime()) > 2000) {
                clearInterval(intervalHandle);
                expect(true).toBeFalsy();
                done();
                throw new Error("Timeout passed, displayArray not set.");
            }
            if (fix.componentInstance.displayArray
                && fix.componentInstance.displayArray.length === 3) {
                clearInterval(intervalHandle);
                expect(fix.componentInstance.displayArray.length).toBe(3);
                expect(fix.componentInstance.displayArray[0].name).toBe("ng2");
                expect(fix.componentInstance.displayArray[1].name).toBe("power");
                expect(fix.componentInstance.displayArray[2].name).toBe("table");
                done();
            }
        }, 50);
    });
    it('table will use dataPipe only once when view first initialized', testing_1.fakeAsync(function () {
        testing_1.TestBed.resetTestingModule();
        testing_1.TestBed.configureTestingModule({
            declarations: [TableWithCustomDataPipeFunction, Table_directive_1.TableDirective, TestTableComponent, Pagination_component_1.PaginationComponent],
            providers: [ConfigurationProvider_class_1.ConfigurationProvider, DefaultDataPipeService_class_1.DefaultDataPipeService, TestDataPipeService]
        });
        var template = "\n    <div>\n      <table ptTable=\"\" (ptDataPipe)=\"pipe($event[0], $event[1])\" [(ptDisplayArray)]=\"displayArray\" [(ptTableState)]=\"tableState\">\n      </table>\n    </div>\n    ";
        var fix = component_factory_1.createComponentFixture(template, [], TableWithCustomDataPipeFunction);
        testing_1.tick();
        expect(fix.componentInstance.pipeCount).toBe(1);
    }));
});
//# sourceMappingURL=Table.directive.spec.js.map