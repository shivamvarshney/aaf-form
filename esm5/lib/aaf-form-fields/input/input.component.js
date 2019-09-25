/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-input",
                    template: "\n<mat-form-field class=\"demo-full-width\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-label>{{field.label}}</mat-label>\n<input [id]=\"field.name\" matInput [formControlName]=\"field.name\" [placeholder]=\"field.placeHolder\" [type]=\"field.inputType\" [required]=\"field.validations\">\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    return InputComponent;
}());
export { InputComponent };
if (false) {
    /** @type {?} */
    InputComponent.prototype.field;
    /** @type {?} */
    InputComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0tZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUdsRDtJQWdCRTtJQUFnQixDQUFDOzs7O0lBQ2pCLGlDQUFROzs7SUFBUixjQUFhLENBQUM7O2dCQWpCZixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSx1aEJBUVg7aUJBRUE7Ozs7SUFNRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO1NBTFksY0FBYzs7O0lBQ3pCLCtCQUFtQjs7SUFDbkIsK0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZnVsbC13aWR0aFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIiAqbmdJZj1cImZpZWxkLnZpc2liaWxpdHlcIj5cclxuPG1hdC1sYWJlbD57e2ZpZWxkLmxhYmVsfX08L21hdC1sYWJlbD5cclxuPGlucHV0IFtpZF09XCJmaWVsZC5uYW1lXCIgbWF0SW5wdXQgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCIgW3BsYWNlaG9sZGVyXT1cImZpZWxkLnBsYWNlSG9sZGVyXCIgW3R5cGVdPVwiZmllbGQuaW5wdXRUeXBlXCIgW3JlcXVpcmVkXT1cImZpZWxkLnZhbGlkYXRpb25zXCI+XHJcbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgZmllbGQudmFsaWRhdGlvbnM7XCIgbmdQcm9qZWN0QXM9XCJtYXQtZXJyb3JcIj5cclxuPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChmaWVsZC5uYW1lKS5oYXNFcnJvcih2YWxpZGF0aW9uLm5hbWUpXCI+e3t2YWxpZGF0aW9uLm1lc3NhZ2V9fTwvbWF0LWVycm9yPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZmllbGQ6IEZpZWxkQ29uZmlnO1xyXG4gIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHsgfVxyXG59XHJcbiJdfQ==