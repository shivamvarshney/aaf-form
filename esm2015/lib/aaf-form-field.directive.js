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
const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent
};
export class AafFormFieldDirective {
    /**
     * @param {?} resolver
     * @param {?} container
     */
    constructor(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChangeEvent(value) {
        console.log(value);
    }
}
AafFormFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: "[aafFormField]"
            },] }
];
/** @nocollapse */
AafFormFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
AafFormFieldDirective.propDecorators = {
    field: [{ type: Input }],
    group: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWZvcm0tZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0tZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsd0JBQXdCLEVBRXhCLFNBQVMsRUFDVCxLQUFLLEVBRUwsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7O01BRTVFLGVBQWUsR0FBRztJQUN0QixLQUFLLEVBQUUsY0FBYztJQUNyQixNQUFNLEVBQUUsZUFBZTtJQUN2QixNQUFNLEVBQUUsZUFBZTtJQUN2QixJQUFJLEVBQUUsYUFBYTtJQUNuQixXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7Q0FDNUI7QUFJRCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUloQyxZQUNVLFFBQWtDLEVBQ2xDLFNBQTJCO1FBRDNCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ2pDLENBQUM7Ozs7SUFDTCxRQUFROztjQUNBLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUNuRCxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDakM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsS0FBSztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7OztZQTFCQyx3QkFBd0I7WUFLeEIsZ0JBQWdCOzs7b0JBdUJmLEtBQUs7b0JBQ0wsS0FBSzs7OztJQUROLHNDQUE0Qjs7SUFDNUIsc0NBQTBCOztJQUMxQiw2Q0FBa0I7Ozs7O0lBRWhCLHlDQUEwQzs7Ozs7SUFDMUMsMENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gXCIuL2ZpZWxkLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9pbnB1dC9pbnB1dC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNlbGVjdENvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL2RhdGUvZGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmFkaW9idXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudFwiO1xyXG5cclxuY29uc3QgY29tcG9uZW50TWFwcGVyID0ge1xyXG4gIGlucHV0OiBJbnB1dENvbXBvbmVudCxcclxuICBidXR0b246IEJ1dHRvbkNvbXBvbmVudCxcclxuICBzZWxlY3Q6IFNlbGVjdENvbXBvbmVudCxcclxuICBkYXRlOiBEYXRlQ29tcG9uZW50LFxyXG4gIHJhZGlvYnV0dG9uOiBSYWRpb2J1dHRvbkNvbXBvbmVudCxcclxuICBjaGVja2JveDogQ2hlY2tib3hDb21wb25lbnRcclxufTtcclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IFwiW2FhZkZvcm1GaWVsZF1cIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWFmRm9ybUZpZWxkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBmaWVsZDogRmllbGRDb25maWc7XHJcbiAgQElucHV0KCkgZ3JvdXA6IEZvcm1Hcm91cDtcclxuICBjb21wb25lbnRSZWY6IGFueTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxyXG4gICAgKTtcclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2VFdmVudCh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=