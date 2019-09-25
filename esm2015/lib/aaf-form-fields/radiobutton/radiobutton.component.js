/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
export class RadiobuttonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
RadiobuttonComponent.decorators = [
    { type: Component, args: [{
                selector: "app-radiobutton",
                template: `
<div class="demo-full-width margin-top" [formGroup]="group" *ngIf="field.visibility">
<label class="radio-label-padding">{{field.label}}:</label>
<mat-radio-group [formControlName]="field.name">
<mat-radio-button *ngFor="let item of field.options" [value]="item">{{item}}</mat-radio-button>
</mat-radio-group>
</div>
`
            }] }
];
/** @nocollapse */
RadiobuttonComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    RadiobuttonComponent.prototype.field;
    /** @type {?} */
    RadiobuttonComponent.prototype.group;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0tZmllbGRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQWVsRCxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLGdCQUFlLENBQUM7Ozs7SUFDaEIsUUFBUSxLQUFJLENBQUM7OztZQWhCZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7O0NBT1g7YUFFQTs7Ozs7O0lBRUMscUNBQW1COztJQUNuQixxQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuLi8uLi9maWVsZC5pbnRlcmZhY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLXJhZGlvYnV0dG9uXCIsXHJcbiAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cImRlbW8tZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiICpuZ0lmPVwiZmllbGQudmlzaWJpbGl0eVwiPlxyXG48bGFiZWwgY2xhc3M9XCJyYWRpby1sYWJlbC1wYWRkaW5nXCI+e3tmaWVsZC5sYWJlbH19OjwvbGFiZWw+XHJcbjxtYXQtcmFkaW8tZ3JvdXAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+XHJcbjxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbVwiPnt7aXRlbX19PC9tYXQtcmFkaW8tYnV0dG9uPlxyXG48L21hdC1yYWRpby1ncm91cD5cclxuPC9kaXY+XHJcbmAsXHJcbiAgc3R5bGVzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9idXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBGaWVsZENvbmZpZztcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIl19