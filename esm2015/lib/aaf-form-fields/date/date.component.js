/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class DateComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
DateComponent.decorators = [
    { type: Component, args: [{
                selector: "app-date",
                template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group" *ngIf="field.visibility">
<mat-label>{{field.label}}</mat-label>
<input matInput [matDatepicker]="picker" [formControlName]="field.name" [placeholder]="field.placeHolder" [required]="field.validations">
<mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
<mat-datepicker #picker></mat-datepicker>
<mat-hint></mat-hint>
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`
            }] }
];
/** @nocollapse */
DateComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    DateComponent.prototype.field;
    /** @type {?} */
    DateComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hYWYtZm9ybS8iLCJzb3VyY2VzIjpbImxpYi9hYWYtZm9ybS1maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQW1CbEQsTUFBTSxPQUFPLGFBQWE7SUFHeEIsZ0JBQWUsQ0FBQzs7OztJQUNoQixRQUFRLEtBQUksQ0FBQzs7O1lBcEJkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztDQVdYO2FBRUE7Ozs7OztJQUVDLDhCQUFtQjs7SUFDbkIsOEJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFwcC1kYXRlXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGVtby1mdWxsLXdpZHRoIG1hcmdpbi10b3BcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCJmaWVsZC52aXNpYmlsaXR5XCI+XHJcbjxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiBbcGxhY2Vob2xkZXJdPVwiZmllbGQucGxhY2VIb2xkZXJcIiBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbnNcIj5cclxuPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuPG1hdC1oaW50PjwvbWF0LWhpbnQ+XHJcbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgZmllbGQudmFsaWRhdGlvbnM7XCIgbmdQcm9qZWN0QXM9XCJtYXQtZXJyb3JcIj5cclxuPG1hdC1lcnJvciAqbmdJZj1cImdyb3VwLmdldChmaWVsZC5uYW1lKS5oYXNFcnJvcih2YWxpZGF0aW9uLm5hbWUpXCI+e3t2YWxpZGF0aW9uLm1lc3NhZ2V9fTwvbWF0LWVycm9yPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPC9tYXQtZm9ybS1maWVsZD5cclxuYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmaWVsZDogRmllbGRDb25maWc7XHJcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdPbkluaXQoKSB7fVxyXG59Il19