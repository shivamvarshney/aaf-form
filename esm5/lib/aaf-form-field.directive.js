/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { InputComponent } from "./aaf-form-fields/input/input.component";
import { ButtonComponent } from "./aaf-form-fields/button/button.component";
import { SelectComponent } from "./aaf-form-fields/select/select.component";
import { DateComponent } from "./aaf-form-fields/date/date.component";
import { RadiobuttonComponent } from "./aaf-form-fields/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./aaf-form-fields/checkbox/checkbox.component";
/** @type {?} */
var componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent
};
var AafFormFieldDirective = /** @class */ (function () {
    function AafFormFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    AafFormFieldDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AafFormFieldDirective.prototype.handleChangeEvent = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        console.log(value);
    };
    AafFormFieldDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[aafFormField]"
                },] }
    ];
    /** @nocollapse */
    AafFormFieldDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    AafFormFieldDirective.propDecorators = {
        field: [{ type: Input }],
        group: [{ type: Input }]
    };
    return AafFormFieldDirective;
}());
export { AafFormFieldDirective };
if (false) {
    /** @type {?} */
    AafFormFieldDirective.prototype.field;
    /** @type {?} */
    AafFormFieldDirective.prototype.group;
    /** @type {?} */
    AafFormFieldDirective.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    AafFormFieldDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    AafFormFieldDirective.prototype.container;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWZvcm0tZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0tZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxLQUFLLEVBRUwsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7O0lBRTVFLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsZUFBZTtJQUN2QixNQUFNLEVBQUUsZUFBZTtJQUN2QixJQUFJLEVBQUUsYUFBYTtJQUNuQixXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7Q0FDNUI7QUFDRDtJQU9FLCtCQUNVLFFBQWtDLEVBQ2xDLFNBQTJCO1FBRDNCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2pDLENBQUM7Ozs7SUFDTCx3Q0FBUTs7O0lBQVI7O1lBQ1EsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQ25ELGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNqQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFDRCxpREFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBMUJDLHdCQUF3QjtnQkFLeEIsZ0JBQWdCOzs7d0JBdUJmLEtBQUs7d0JBQ0wsS0FBSzs7SUFpQlIsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQW5CWSxxQkFBcUI7OztJQUNoQyxzQ0FBNEI7O0lBQzVCLHNDQUEwQjs7SUFDMUIsNkNBQWtCOzs7OztJQUVoQix5Q0FBMEM7Ozs7O0lBQzFDLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi9maWVsZC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9idXR0b24vYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRGF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9kYXRlL2RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJhZGlvYnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGNvbXBvbmVudE1hcHBlciA9IHtcclxuICBpbnB1dDogSW5wdXRDb21wb25lbnQsXHJcbiAgYnV0dG9uOiBCdXR0b25Db21wb25lbnQsXHJcbiAgc2VsZWN0OiBTZWxlY3RDb21wb25lbnQsXHJcbiAgZGF0ZTogRGF0ZUNvbXBvbmVudCxcclxuICByYWRpb2J1dHRvbjogUmFkaW9idXR0b25Db21wb25lbnQsXHJcbiAgY2hlY2tib3g6IENoZWNrYm94Q29tcG9uZW50XHJcbn07XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBcIlthYWZGb3JtRmllbGRdXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIEFhZkZvcm1GaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZmllbGQ6IEZpZWxkQ29uZmlnO1xyXG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgY29tcG9uZW50UmVmOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkgeyB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcclxuICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cclxuICAgICk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlRXZlbnQodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19