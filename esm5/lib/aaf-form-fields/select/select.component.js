/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { MatOption } from '@angular/material';
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    SelectComponent.prototype.toggleAllSelection = /**
     * @return {?}
     */
    function () {
        if (this.allSelected.selected) {
            this.group.get(this.field.name).patchValue(tslib_1.__spread(this.field.options.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.value; })), [0]));
        }
        else {
            this.group.get(this.field.name).patchValue([]);
        }
    };
    /**
     * @param {?} all
     * @return {?}
     */
    SelectComponent.prototype.tosslePerOne = /**
     * @param {?} all
     * @return {?}
     */
    function (all) {
        if (this.field.isMultiselect == false) {
            return true;
        }
        if (this.allSelected.selected) {
            this.allSelected.deselect();
            return false;
        }
        if (this.group.get(this.field.name).value.length == this.field.options.length)
            this.allSelected.select();
    };
    SelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-select",
                    template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-select [placeholder]=\"field.label\" [formControlName]=\"field.name\" [required]=\"field.validations\" [multiple]=\"field.isMultiselect\">\n\n<ng-container *ngIf=\"field.isMultiselect;then multiSelectTemplate else simpleSelectTemplate\"></ng-container>\n<ng-template #multiSelectTemplate>\n<mat-option *ngIf=\"field.isMultiselect\" #allSelected (click)=\"toggleAllSelection()\" [value]=\"0\">All</mat-option>\n<mat-option (click)=\"tosslePerOne(allSelected.viewValue)\" *ngFor=\"let item of field.options\" [value]=\"item.value\">{{item.label}}</mat-option>\n</ng-template>\n<ng-template #simpleSelectTemplate>\n<mat-option *ngFor=\"let item of field.options\" [value]=\"item.value\">{{item.label}}</mat-option>\n</ng-template>\n</mat-select>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>  \n"
                }] }
    ];
    /** @nocollapse */
    SelectComponent.ctorParameters = function () { return []; };
    SelectComponent.propDecorators = {
        allSelected: [{ type: ViewChild, args: ['allSelected',] }]
    };
    return SelectComponent;
}());
export { SelectComponent };
if (false) {
    /** @type {?} */
    SelectComponent.prototype.field;
    /** @type {?} */
    SelectComponent.prototype.group;
    /** @type {?} */
    SelectComponent.prototype.allSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FhZi1mb3JtLyIsInNvdXJjZXMiOlsibGliL2FhZi1mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUM7SUEwQkU7SUFBZ0IsQ0FBQzs7OztJQUNqQixrQ0FBUTs7O0lBQVIsY0FBYSxDQUFDOzs7O0lBRWQsNENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxrQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQyxHQUFFLENBQUMsR0FBRSxDQUFDO1NBQ2hHO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7O0lBQ0Qsc0NBQVk7Ozs7SUFBWixVQUFhLEdBQUc7UUFDZCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssRUFBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGtrQ0FpQlg7aUJBRUE7Ozs7OzhCQUlFLFNBQVMsU0FBQyxhQUFhOztJQXNCMUIsc0JBQUM7Q0FBQSxBQS9DRCxJQStDQztTQXpCWSxlQUFlOzs7SUFDMUIsZ0NBQW1COztJQUNuQixnQ0FBaUI7O0lBQ2pCLHNDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNYXRPcHRpb24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1zZWxlY3RcIixcclxuICB0ZW1wbGF0ZTogYFxyXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cImZpZWxkLnZpc2liaWxpdHlcIj5cclxuPG1hdC1zZWxlY3QgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCIgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb25zXCIgW211bHRpcGxlXT1cImZpZWxkLmlzTXVsdGlzZWxlY3RcIj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5pc011bHRpc2VsZWN0O3RoZW4gbXVsdGlTZWxlY3RUZW1wbGF0ZSBlbHNlIHNpbXBsZVNlbGVjdFRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjbXVsdGlTZWxlY3RUZW1wbGF0ZT5cclxuPG1hdC1vcHRpb24gKm5nSWY9XCJmaWVsZC5pc011bHRpc2VsZWN0XCIgI2FsbFNlbGVjdGVkIChjbGljayk9XCJ0b2dnbGVBbGxTZWxlY3Rpb24oKVwiIFt2YWx1ZV09XCIwXCI+QWxsPC9tYXQtb3B0aW9uPlxyXG48bWF0LW9wdGlvbiAoY2xpY2spPVwidG9zc2xlUGVyT25lKGFsbFNlbGVjdGVkLnZpZXdWYWx1ZSlcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj57e2l0ZW0ubGFiZWx9fTwvbWF0LW9wdGlvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPG5nLXRlbXBsYXRlICNzaW1wbGVTZWxlY3RUZW1wbGF0ZT5cclxuPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZmllbGQub3B0aW9uc1wiIFt2YWx1ZV09XCJpdGVtLnZhbHVlXCI+e3tpdGVtLmxhYmVsfX08L21hdC1vcHRpb24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwvbWF0LXNlbGVjdD5cclxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBmaWVsZC52YWxpZGF0aW9ucztcIiBuZ1Byb2plY3RBcz1cIm1hdC1lcnJvclwiPlxyXG48bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGZpZWxkLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj57e3ZhbGlkYXRpb24ubWVzc2FnZX19PC9tYXQtZXJyb3I+XHJcbjwvbmctY29udGFpbmVyPlxyXG48L21hdC1mb3JtLWZpZWxkPiAgXHJcbmAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWVsZDogRmllbGRDb25maWc7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBAVmlld0NoaWxkKCdhbGxTZWxlY3RlZCcpIGFsbFNlbGVjdGVkOiBNYXRPcHRpb247XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICB0b2dnbGVBbGxTZWxlY3Rpb24oKSB7XHJcbiAgICBpZiAodGhpcy5hbGxTZWxlY3RlZC5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLm5hbWUpLnBhdGNoVmFsdWUoWy4uLnRoaXMuZmllbGQub3B0aW9ucy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSwgMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ncm91cC5nZXQodGhpcy5maWVsZC5uYW1lKS5wYXRjaFZhbHVlKFtdKTtcclxuICAgIH1cclxuICB9XHJcbiAgdG9zc2xlUGVyT25lKGFsbCkge1xyXG4gICAgaWYodGhpcy5maWVsZC5pc011bHRpc2VsZWN0ID09IGZhbHNlKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbGxTZWxlY3RlZC5zZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLmFsbFNlbGVjdGVkLmRlc2VsZWN0KCk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLm5hbWUpLnZhbHVlLmxlbmd0aCA9PSB0aGlzLmZpZWxkLm9wdGlvbnMubGVuZ3RoKVxyXG4gICAgICB0aGlzLmFsbFNlbGVjdGVkLnNlbGVjdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=