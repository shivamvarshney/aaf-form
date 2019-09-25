/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    /**
     * @return {?}
     */
    DateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DateComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-date",
                    template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-label>{{field.label}}</mat-label>\n<input matInput [matDatepicker]=\"picker\" [formControlName]=\"field.name\" [placeholder]=\"field.placeHolder\" [required]=\"field.validations\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-hint></mat-hint>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
                }] }
    ];
    /** @nocollapse */
    DateComponent.ctorParameters = function () { return []; };
    return DateComponent;
}());
export { DateComponent };
if (false) {
    /** @type {?} */
    DateComponent.prototype.field;
    /** @type {?} */
    DateComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hYWYtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hYWYtZm9ybS1maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRDtJQW1CRTtJQUFlLENBQUM7Ozs7SUFDaEIsZ0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBcEJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDRwQkFXWDtpQkFFQTs7OztJQU1ELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FMWSxhQUFhOzs7SUFDeEIsOEJBQW1COztJQUNuQiw4QkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLWRhdGVcIixcclxuICB0ZW1wbGF0ZTogYFxyXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cImZpZWxkLnZpc2liaWxpdHlcIj5cclxuPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZUhvbGRlclwiIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uc1wiPlxyXG48bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxyXG48bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG48bWF0LWhpbnQ+PC9tYXQtaGludD5cclxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBmaWVsZC52YWxpZGF0aW9ucztcIiBuZ1Byb2plY3RBcz1cIm1hdC1lcnJvclwiPlxyXG48bWF0LWVycm9yICpuZ0lmPVwiZ3JvdXAuZ2V0KGZpZWxkLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj57e3ZhbGlkYXRpb24ubWVzc2FnZX19PC9tYXQtZXJyb3I+XHJcbjwvbmctY29udGFpbmVyPlxyXG48L21hdC1mb3JtLWZpZWxkPlxyXG5gLFxyXG4gIHN0eWxlczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBGaWVsZENvbmZpZztcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpIHt9XHJcbn0iXX0=