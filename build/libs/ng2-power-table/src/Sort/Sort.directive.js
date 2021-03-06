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
var core_1 = require("@angular/core");
var Table_directive_1 = require("./../Table/Table.directive");
var SortOrder_enum_1 = require("./SortOrder.enum");
var SortDirective = (function () {
    /**
     *
     */
    function SortDirective(table, element, renderer) {
        var _this = this;
        this.table = table;
        this.element = element;
        this.renderer = renderer;
        this.order = SortOrder_enum_1.SortOrder.NotSet;
        this.suppressSortChangedHandler = false;
        this.removeClickListener = this.renderer.listen(this.element.nativeElement, 'click', function (ev) {
            _this.onClicked(ev);
        });
        this.removeTableStateListener = this.table.tableStateChange.subscribe(function (tableState) {
            _this.onTableStateChanged(tableState);
        });
    }
    SortDirective.prototype.ngOnDestroy = function () {
        if (this.removeClickListener)
            this.removeClickListener();
        if (this.removeTableStateListener && this.removeTableStateListener.unsubscribe)
            this.removeTableStateListener.unsubscribe();
        this.unsubscribeToSortListener();
    };
    SortDirective.prototype.unsubscribeToSortListener = function () {
        if (this.removeSortListener && this.removeSortListener.unsubscribe)
            this.removeSortListener.unsubscribe();
    };
    SortDirective.prototype.resolveTableState = function () {
        if (this.suppressSortChangedHandler) {
            // this directive is causing the callback   
            return;
        }
        var sort = this.getSortState();
        if (!sort)
            return;
        if ((!sort.predicate || (sort.predicate !== this.predicate))
            && this.order !== SortOrder_enum_1.SortOrder.NotSet) {
            // tableState has no predicate set, everything should be clear
            this.order = SortOrder_enum_1.SortOrder.NotSet;
            this.updateSortDisplay();
            // fix css classes
            return;
        }
        if (!sort.predicate)
            return;
        if (sort.predicate === this.predicate
            && sort.order !== this.order) {
            // since suppressSortChangedHandler was not set, we can safely assume
            // we need to trigger sort.
            this.order = sort.order;
            this.updateSortDisplay();
            this.table.pipe();
            // fix css classes
            return;
        }
    };
    SortDirective.prototype.onTableStateChanged = function (tableState) {
        var _this = this;
        this.unsubscribeToSortListener();
        this.resolveTableState();
        var sort = this.getSortState();
        if (sort) {
            this.removeSortListener = sort.changed.subscribe(function () {
                _this.resolveTableState();
            });
        }
    };
    SortDirective.prototype.updateSortDisplay = function () {
        var config = this.table.getConfiguration();
        var addAscending = (this.order === SortOrder_enum_1.SortOrder.Ascending);
        var addDescending = (this.order === SortOrder_enum_1.SortOrder.Descending);
        if (!addDescending && addAscending) {
            this.setElementClass(config.descendingCssClass, addDescending);
            this.setElementClass(config.ascendingCssClass, addAscending);
        }
        else {
            this.setElementClass(config.ascendingCssClass, addAscending);
            this.setElementClass(config.descendingCssClass, addDescending);
        }
    };
    SortDirective.prototype.setElementClass = function (classValue, add) {
        var classes = classValue.split(' ');
        for (var i = 0; i < classes.length; i++) {
            var value = classes[i];
            this.renderer.setElementClass(this.element.nativeElement, value, add);
        }
    };
    SortDirective.prototype.getSortState = function () {
        var tableState = this.table.tableState;
        if (!tableState || !tableState.sort) {
            return null;
        }
        return tableState.sort;
    };
    SortDirective.prototype.onClicked = function (ev) {
        if (this.order === SortOrder_enum_1.SortOrder.Descending) {
            // manual reset
            this.order = SortOrder_enum_1.SortOrder.NotSet;
        }
        else {
            this.order++;
        }
        this.updateSortDisplay();
        this.suppressSortChangedHandler = true;
        var sort = this.getSortState();
        sort.predicate = this.predicate;
        sort.order = this.order;
        this.table.pipe();
        this.suppressSortChangedHandler = false;
    };
    return SortDirective;
}());
__decorate([
    core_1.Input("ptSort"),
    __metadata("design:type", String)
], SortDirective.prototype, "predicate", void 0);
SortDirective = __decorate([
    core_1.Directive({
        selector: "[ptSort]"
    }),
    __metadata("design:paramtypes", [Table_directive_1.TableDirective,
        core_1.ElementRef,
        core_1.Renderer])
], SortDirective);
exports.SortDirective = SortDirective;
//# sourceMappingURL=Sort.directive.js.map