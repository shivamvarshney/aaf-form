/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class InputComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: "app-input",
                template: `
<mat-form-field class="demo-full-width" [formGroup]="group" *ngIf="field.visibility">
<mat-label>{{field.label}}</mat-label>
<input [id]="field.name" matInput [formControlName]="field.name" [placeholder]="field.placeHolder" [type]="field.inputType" [required]="field.validations">
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>
`
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    InputComponent.prototype.field;
    /** @type {?} */
    InputComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0tZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWdCbEQsTUFBTSxPQUFPLGNBQWM7SUFHekIsZ0JBQWdCLENBQUM7Ozs7SUFDakIsUUFBUSxLQUFLLENBQUM7OztZQWpCZixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRWDthQUVBOzs7Ozs7SUFFQywrQkFBbUI7O0lBQ25CLCtCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2ZpZWxkLmludGVyZmFjZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHAtaW5wdXRcIixcclxuICB0ZW1wbGF0ZTogYFxyXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGhcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCIgKm5nSWY9XCJmaWVsZC52aXNpYmlsaXR5XCI+XHJcbjxtYXQtbGFiZWw+e3tmaWVsZC5sYWJlbH19PC9tYXQtbGFiZWw+XHJcbjxpbnB1dCBbaWRdPVwiZmllbGQubmFtZVwiIG1hdElucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5wbGFjZUhvbGRlclwiIFt0eXBlXT1cImZpZWxkLmlucHV0VHlwZVwiIFtyZXF1aXJlZF09XCJmaWVsZC52YWxpZGF0aW9uc1wiPlxyXG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGZpZWxkLnZhbGlkYXRpb25zO1wiIG5nUHJvamVjdEFzPVwibWF0LWVycm9yXCI+XHJcbjxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoZmllbGQubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPnt7dmFsaWRhdGlvbi5tZXNzYWdlfX08L21hdC1lcnJvcj5cclxuPC9uZy1jb250YWluZXI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+XHJcbmAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBGaWVsZENvbmZpZztcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbiAgbmdPbkluaXQoKSB7IH1cclxufVxyXG4iXX0=