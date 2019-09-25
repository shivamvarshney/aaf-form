/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DefaultFormConfiguration } from './default-configuration';
//import { Location, DOCUMENT } from '@angular/common';
import { SelectComponent } from './aaf-form-fields/select/select.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';
export class AafFormComponent {
    /**
     * @param {?} fb
     * @param {?} defaultConfig
     * @param {?} ngxService
     */
    constructor(fb, defaultConfig, ngxService) {
        this.fb = fb;
        this.defaultConfig = defaultConfig;
        this.ngxService = ngxService;
        this.submit = new EventEmitter();
        this.initialEventsObj = [];
        this.onChangeEventsObj = [];
    }
    /**
     * @return {?}
     */
    get value() {
        return this.form.value;
    }
    /**
     * @param {?} controlName
     * @return {?}
     */
    changeToEmptyState(controlName) {
        this.deeplyClonedObject.map((/**
         * @param {?} val
         * @param {?} key
         * @return {?}
         */
        (val, key) => {
            if (val.name == controlName) {
                this.deeplyClonedObject[key].options = [];
                //this.deeplyClonedObject[key].options.push({ label: "Select", value: '' });
            }
        }));
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    onChanges(formGroup) {
        if (this.onChangeEventsObj.length > 0) {
            this.onChangeEventsObj.map((/**
             * @param {?} val
             * @param {?} key
             * @return {?}
             */
            (val, key) => {
                this.form.get(val.source).valueChanges.subscribe((/**
                 * @param {?} changedValue
                 * @return {?}
                 */
                changedValue => {
                    if (!val.changeType) {
                        if (val.dependent && val.dependent.length > 0) {
                            val.dependent.map((/**
                             * @param {?} value
                             * @return {?}
                             */
                            value => {
                                this.changeToEmptyState(value);
                            }));
                        }
                        if (changedValue != '') {
                            this.listActions[val.actionDataProvider](changedValue).subscribe((/**
                             * @param {?} resp
                             * @return {?}
                             */
                            (resp) => {
                                this.updateFieldConfiguration(val.destination, resp);
                            }), (/**
                             * @param {?} err
                             * @return {?}
                             */
                            err => {
                                /** @type {?} */
                                let staticDdata = [];
                                staticDdata.push(this.blankDataObj);
                                staticDdata.push(this.staticData);
                                this.updateFieldConfiguration(val.destination, staticDdata);
                            }));
                        }
                    }
                    else {
                        if (changedValue != '') {
                            // Enable all dependent field
                            if (val.dependent && val.dependent.length > 0) {
                                val.dependent.map((/**
                                 * @param {?} value
                                 * @return {?}
                                 */
                                value => {
                                    this.enableField(value);
                                }));
                            }
                            if (val.changeType && val.changeType.length > 0) {
                                if (val.callApi) {
                                    this.listActions[val.actionDataProvider]().subscribe((/**
                                     * @param {?} resp
                                     * @return {?}
                                     */
                                    (resp) => {
                                        /** @type {?} */
                                        let getResponse = resp.filter((/**
                                         * @param {?} roleInfo
                                         * @return {?}
                                         */
                                        roleInfo => {
                                            return (roleInfo.value.id ? roleInfo.value.id : roleInfo.value) == (changedValue.id ? changedValue.id : changedValue);
                                        }));
                                        if (getResponse.length > 0) {
                                            val.changeType.map((/**
                                             * @param {?} changeTypeInfo
                                             * @param {?} changeInfoKey
                                             * @return {?}
                                             */
                                            (changeTypeInfo, changeInfoKey) => {
                                                if (changeTypeInfo.source == getResponse[0].type) {
                                                    changeTypeInfo.removeDestination.map((/**
                                                     * @param {?} destination
                                                     * @return {?}
                                                     */
                                                    destination => {
                                                        this.disableField(destination);
                                                        this.deeplyClonedObject.map((/**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */
                                                        (fieldVal, fieldKey) => {
                                                            if (fieldVal.name == destination) {
                                                                this.deeplyClonedObject[fieldKey].visibility = false;
                                                            }
                                                        }));
                                                    }));
                                                    changeTypeInfo.addDestination.map((/**
                                                     * @param {?} source
                                                     * @return {?}
                                                     */
                                                    source => {
                                                        this.enableField(source);
                                                        this.deeplyClonedObject.map((/**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */
                                                        (fieldVal, fieldKey) => {
                                                            if (fieldVal.name == source) {
                                                                this.deeplyClonedObject[fieldKey].visibility = true;
                                                            }
                                                        }));
                                                    }));
                                                }
                                            }));
                                        }
                                    }));
                                }
                                else {
                                    val.changeType.map((/**
                                     * @param {?} changeTypeInfo
                                     * @param {?} changeInfoKey
                                     * @return {?}
                                     */
                                    (changeTypeInfo, changeInfoKey) => {
                                        if (changeTypeInfo.source == changedValue) {
                                            changeTypeInfo.removeDestination.map((/**
                                             * @param {?} destination
                                             * @return {?}
                                             */
                                            destination => {
                                                this.disableField(destination);
                                                this.deeplyClonedObject.map((/**
                                                 * @param {?} fieldVal
                                                 * @param {?} fieldKey
                                                 * @return {?}
                                                 */
                                                (fieldVal, fieldKey) => {
                                                    if (fieldVal.name == destination) {
                                                        this.deeplyClonedObject[fieldKey].visibility = false;
                                                    }
                                                }));
                                            }));
                                            changeTypeInfo.addDestination.map((/**
                                             * @param {?} source
                                             * @return {?}
                                             */
                                            source => {
                                                this.enableField(source);
                                                this.deeplyClonedObject.map((/**
                                                 * @param {?} fieldVal
                                                 * @param {?} fieldKey
                                                 * @return {?}
                                                 */
                                                (fieldVal, fieldKey) => {
                                                    if (fieldVal.name == source) {
                                                        this.deeplyClonedObject[fieldKey].visibility = true;
                                                    }
                                                }));
                                            }));
                                        }
                                    }));
                                }
                            }
                        }
                        else {
                            // Disable all dependent field
                            if (val.dependent && val.dependent.length > 0) {
                                val.dependent.map((/**
                                 * @param {?} value
                                 * @return {?}
                                 */
                                value => {
                                    this.disableField(value);
                                }));
                            }
                        }
                    }
                }));
            }));
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    disableField(field) {
        this.form.get(field).disable();
        return true;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    enableField(field) {
        this.form.get(field).enable();
        return true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.deeplyClonedObject = JSON.parse(JSON.stringify(this.fields));
        this.deeplyClonedObject.map((/**
         * @param {?} fieldVal
         * @param {?} fieldKey
         * @return {?}
         */
        (fieldVal, fieldKey) => {
            if (fieldVal.type == 'select' && fieldVal.options && fieldVal.optionsData == false) {
                /** @type {?} */
                let initialeventObj = {
                    actionDataProvider: `get${fieldVal.name}`,
                    source: fieldVal.name,
                    localstorage: true,
                    destination: fieldVal.name
                };
                this.initialEventsObj.push(initialeventObj);
                if (fieldVal.onChange) {
                    /** @type {?} */
                    let onChangeObj = {
                        source: fieldVal.name,
                        destination: fieldVal.onChange.destination,
                        actionDataProvider: `get${fieldVal.onChange.destination}`,
                        localstorage: fieldVal.onChange.localstorage,
                        dependent: fieldVal.onChange.dependent,
                        changeType: fieldVal.onChange.changeType ? fieldVal.onChange.changeType : '',
                        callApi: fieldVal.onChange.callApi ? fieldVal.onChange.callApi : false
                    };
                    this.onChangeEventsObj.push(onChangeObj);
                }
            }
        }));
        this.form = this.createControl();
        this.listActions = this.actionProvider;
        this.getInitilizedValues();
        this.onChanges(this.form);
    }
    /**
     * @param {?} source
     * @param {?} resp
     * @return {?}
     */
    updateFieldConfiguration(source, resp) {
        this.deeplyClonedObject.map((/**
         * @param {?} valStatic
         * @param {?} keyStatic
         * @return {?}
         */
        (valStatic, keyStatic) => {
            if (valStatic.name == source) {
                this.deeplyClonedObject[keyStatic].options = resp;
            }
        }));
    }
    /**
     * @return {?}
     */
    get staticData() {
        return { label: "Sales User", value: "sales_user" };
    }
    /**
     * @return {?}
     */
    get blankDataObj() {
        return { label: "Select", value: "" };
    }
    /**
     * @return {?}
     */
    getInitilizedValues() {
        if (this.initialEventsObj.length > 0) {
            this.initialEventsObj.map((/**
             * @param {?} value
             * @param {?} key
             * @return {?}
             */
            (value, key) => {
                this.ngxService.start();
                this.listActions[value.actionDataProvider]().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                (resp) => {
                    this.updateFieldConfiguration(value.source, resp);
                }));
                this.ngxService.stop();
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        }
        else {
            this.validateAllFormFields(this.form);
        }
    }
    /**
     * @return {?}
     */
    createControl() {
        /** @type {?} */
        const group = this.fb.group({});
        this.deeplyClonedObject.forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            if (field.type === "button")
                return;
            /** @type {?} */
            const control = this.fb.control({ value: field.value, disabled: field.disabled }, this.bindValidations(field.validations || []));
            group.addControl(field.name, control);
        }));
        return group;
    }
    /**
     * @param {?} validations
     * @return {?}
     */
    bindValidations(validations) {
        if (validations.length > 0) {
            /** @type {?} */
            const validList = [];
            validations.forEach((/**
             * @param {?} valid
             * @return {?}
             */
            valid => {
                validList.push(valid.validator);
            }));
            return Validators.compose(validList);
        }
        return null;
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((/**
         * @param {?} field
         * @return {?}
         */
        field => {
            /** @type {?} */
            const control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        }));
    }
}
AafFormComponent.decorators = [
    { type: Component, args: [{
                selector: 'aaf-form',
                template: `
  <form [class]="formInfo.class" [name]="formInfo.name" [formGroup]="form" (submit)="onSubmit($event)">
  <ng-container *ngFor="let field of deeplyClonedObject;" aafFormField [field]="field" [group]="form">
  </ng-container>
  </form>
  `,
                providers: [DefaultFormConfiguration]
            }] }
];
/** @nocollapse */
AafFormComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: DefaultFormConfiguration },
    { type: NgxUiLoaderService }
];
AafFormComponent.propDecorators = {
    fields: [{ type: Input }],
    formInfo: [{ type: Input }],
    submit: [{ type: Output }],
    actionProvider: [{ type: Input }],
    formData: [{ type: ViewChild, args: [SelectComponent,] }]
};
if (false) {
    /** @type {?} */
    AafFormComponent.prototype.fields;
    /** @type {?} */
    AafFormComponent.prototype.formInfo;
    /** @type {?} */
    AafFormComponent.prototype.submit;
    /** @type {?} */
    AafFormComponent.prototype.actionProvider;
    /** @type {?} */
    AafFormComponent.prototype.form;
    /** @type {?} */
    AafFormComponent.prototype.listActions;
    /** @type {?} */
    AafFormComponent.prototype.deeplyClonedObject;
    /** @type {?} */
    AafFormComponent.prototype.initialEventsObj;
    /** @type {?} */
    AafFormComponent.prototype.onChangeEventsObj;
    /** @type {?} */
    AafFormComponent.prototype.formData;
    /**
     * @type {?}
     * @private
     */
    AafFormComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    AafFormComponent.prototype.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    AafFormComponent.prototype.ngxService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWtELE1BQU0sRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWFuRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUFpQjNCLFlBQ1UsRUFBZSxFQUNmLGFBQXVDLEVBRXZDLFVBQThCO1FBSDlCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixrQkFBYSxHQUFiLGFBQWEsQ0FBMEI7UUFFdkMsZUFBVSxHQUFWLFVBQVUsQ0FBb0I7UUFqQjlCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU05RCxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO0lBWTdCLENBQUM7Ozs7SUFUTCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBU0Qsa0JBQWtCLENBQUMsV0FBVztRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN2QyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FB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QUFLLENBQUMsRUFBRTs7a0JBQ3hDLE9BQU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUExUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBRUQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7Ozs7WUFsQm1CLFdBQVc7WUFFdEIsd0JBQXdCO1lBSXhCLGtCQUFrQjs7O3FCQWV4QixLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsTUFBTTs2QkFDTixLQUFLO3VCQU9MLFNBQVMsU0FBQyxlQUFlOzs7O0lBVjFCLGtDQUErQjs7SUFDL0Isb0NBQStCOztJQUMvQixrQ0FBOEQ7O0lBQzlELDBDQUF5Qzs7SUFFekMsZ0NBQWdCOztJQUNoQix1Q0FBaUI7O0lBQ2pCLDhDQUF3Qjs7SUFDeEIsNENBQWdDOztJQUNoQyw2Q0FBaUM7O0lBQ2pDLG9DQUFzRDs7Ozs7SUFNcEQsOEJBQXVCOzs7OztJQUN2Qix5Q0FBK0M7Ozs7O0lBRS9DLHNDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBTaW1wbGVDaGFuZ2UsIE9uSW5pdCwgT3V0cHV0LCBJbmplY3QsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgRmllbGRDb25maWcsIFZhbGlkYXRvciwgRm9ybURldGFpbHMsIEV2ZW50c1R5cGUsIEV2ZW50cyB9IGZyb20gXCIuL2ZpZWxkLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGVmYXVsdEZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZ3VyYXRpb24nO1xuLy9pbXBvcnQgeyBMb2NhdGlvbiwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hYWYtZm9ybS1maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9hYWYtZm9ybS1hY3Rpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IE5neFVpTG9hZGVyU2VydmljZSB9IGZyb20gJ25neC11aS1sb2FkZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhYWYtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gIDxmb3JtIFtjbGFzc109XCJmb3JtSW5mby5jbGFzc1wiIFtuYW1lXT1cImZvcm1JbmZvLm5hbWVcIiBbZm9ybUdyb3VwXT1cImZvcm1cIiAoc3VibWl0KT1cIm9uU3VibWl0KCRldmVudClcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGVlcGx5Q2xvbmVkT2JqZWN0O1wiIGFhZkZvcm1GaWVsZCBbZmllbGRdPVwiZmllbGRcIiBbZ3JvdXBdPVwiZm9ybVwiPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPC9mb3JtPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0Rm9ybUNvbmZpZ3VyYXRpb25dXG59KVxuZXhwb3J0IGNsYXNzIEFhZkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpZWxkczogRmllbGRDb25maWdbXTtcbiAgQElucHV0KCkgZm9ybUluZm86IEZvcm1EZXRhaWxzO1xuICBAT3V0cHV0KCkgc3VibWl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBhY3Rpb25Qcm92aWRlcjogQWN0aW9uc1Byb3ZpZGVyO1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgbGlzdEFjdGlvbnM6IGFueTtcbiAgZGVlcGx5Q2xvbmVkT2JqZWN0OiBhbnk7XG4gIGluaXRpYWxFdmVudHNPYmo6IEV2ZW50c1tdID0gW107XG4gIG9uQ2hhbmdlRXZlbnRzT2JqOiBFdmVudHNbXSA9IFtdO1xuICBAVmlld0NoaWxkKFNlbGVjdENvbXBvbmVudCkgZm9ybURhdGE6IFNlbGVjdENvbXBvbmVudDtcblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZTtcbiAgfVxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc6IERlZmF1bHRGb3JtQ29uZmlndXJhdGlvbixcbiAgICAvL3ByaXZhdGUgX2xvY2F0aW9uOiBMb2NhdGlvbixcbiAgICBwcml2YXRlIG5neFNlcnZpY2U6IE5neFVpTG9hZGVyU2VydmljZSxcbiAgICAvL0BJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50XG4gICkgeyB9XG5cbiAgY2hhbmdlVG9FbXB0eVN0YXRlKGNvbnRyb2xOYW1lKSB7XG4gICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgaWYgKHZhbC5uYW1lID09IGNvbnRyb2xOYW1lKSB7XG4gICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0W2tleV0ub3B0aW9ucyA9IFtdO1xuICAgICAgICAvL3RoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0W2tleV0ub3B0aW9ucy5wdXNoKHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiAnJyB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbkNoYW5nZXMoZm9ybUdyb3VwOiBGb3JtR3JvdXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vbkNoYW5nZUV2ZW50c09iai5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRXZlbnRzT2JqLm1hcCgodmFsLCBrZXkpID0+IHtcbiAgICAgICAgdGhpcy5mb3JtLmdldCh2YWwuc291cmNlKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgICAgIGNoYW5nZWRWYWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXZhbC5jaGFuZ2VUeXBlKSB7XG4gICAgICAgICAgICAgIGlmICh2YWwuZGVwZW5kZW50ICYmIHZhbC5kZXBlbmRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhbC5kZXBlbmRlbnQubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9FbXB0eVN0YXRlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY2hhbmdlZFZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0QWN0aW9uc1t2YWwuYWN0aW9uRGF0YVByb3ZpZGVyXShjaGFuZ2VkVmFsdWUpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZENvbmZpZ3VyYXRpb24odmFsLmRlc3RpbmF0aW9uLCByZXNwKTtcbiAgICAgICAgICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdGF0aWNEZGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNEZGF0YS5wdXNoKHRoaXMuYmxhbmtEYXRhT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljRGRhdGEucHVzaCh0aGlzLnN0YXRpY0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkQ29uZmlndXJhdGlvbih2YWwuZGVzdGluYXRpb24sIHN0YXRpY0RkYXRhKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChjaGFuZ2VkVmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICAvLyBFbmFibGUgYWxsIGRlcGVuZGVudCBmaWVsZFxuICAgICAgICAgICAgICAgIGlmICh2YWwuZGVwZW5kZW50ICYmIHZhbC5kZXBlbmRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgdmFsLmRlcGVuZGVudC5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUZpZWxkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsLmNoYW5nZVR5cGUgJiYgdmFsLmNoYW5nZVR5cGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbC5jYWxsQXBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdEFjdGlvbnNbdmFsLmFjdGlvbkRhdGFQcm92aWRlcl0oKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdldFJlc3BvbnNlID0gcmVzcC5maWx0ZXIocm9sZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHJvbGVJbmZvLnZhbHVlLmlkID8gcm9sZUluZm8udmFsdWUuaWQgOiByb2xlSW5mby52YWx1ZSkgPT0gKGNoYW5nZWRWYWx1ZS5pZCA/IGNoYW5nZWRWYWx1ZS5pZCA6IGNoYW5nZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnZXRSZXNwb25zZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5jaGFuZ2VUeXBlLm1hcCgoY2hhbmdlVHlwZUluZm8sIGNoYW5nZUluZm9LZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlVHlwZUluZm8uc291cmNlID09IGdldFJlc3BvbnNlWzBdLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGVJbmZvLnJlbW92ZURlc3RpbmF0aW9uLm1hcChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZpZWxkKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QubWFwKChmaWVsZFZhbCwgZmllbGRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWwubmFtZSA9PSBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3RbZmllbGRLZXldLnZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlSW5mby5hZGREZXN0aW5hdGlvbi5tYXAoc291cmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVGaWVsZChzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKGZpZWxkVmFsLCBmaWVsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbC5uYW1lID09IHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3RbZmllbGRLZXldLnZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsLmNoYW5nZVR5cGUubWFwKChjaGFuZ2VUeXBlSW5mbywgY2hhbmdlSW5mb0tleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VUeXBlSW5mby5zb3VyY2UgPT0gY2hhbmdlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlSW5mby5yZW1vdmVEZXN0aW5hdGlvbi5tYXAoZGVzdGluYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVGaWVsZChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0Lm1hcCgoZmllbGRWYWwsIGZpZWxkS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsLm5hbWUgPT0gZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0W2ZpZWxkS2V5XS52aXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHlwZUluZm8uYWRkRGVzdGluYXRpb24ubWFwKHNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRmllbGQoc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QubWFwKChmaWVsZFZhbCwgZmllbGRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWwubmFtZSA9PSBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0W2ZpZWxkS2V5XS52aXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGlzYWJsZSBhbGwgZGVwZW5kZW50IGZpZWxkXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5kZXBlbmRlbnQgJiYgdmFsLmRlcGVuZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB2YWwuZGVwZW5kZW50Lm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZpZWxkKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGRpc2FibGVGaWVsZChmaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5mb3JtLmdldChmaWVsZCkuZGlzYWJsZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGVuYWJsZUZpZWxkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5lbmFibGUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZHMpKTtcbiAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKGZpZWxkVmFsLCBmaWVsZEtleSkgPT4ge1xuICAgICAgaWYgKGZpZWxkVmFsLnR5cGUgPT0gJ3NlbGVjdCcgJiYgZmllbGRWYWwub3B0aW9ucyAmJiBmaWVsZFZhbC5vcHRpb25zRGF0YSA9PSBmYWxzZSkge1xuICAgICAgICBsZXQgaW5pdGlhbGV2ZW50T2JqID0ge1xuICAgICAgICAgIGFjdGlvbkRhdGFQcm92aWRlcjogYGdldCR7ZmllbGRWYWwubmFtZX1gLFxuICAgICAgICAgIHNvdXJjZTogZmllbGRWYWwubmFtZSxcbiAgICAgICAgICBsb2NhbHN0b3JhZ2U6IHRydWUsXG4gICAgICAgICAgZGVzdGluYXRpb246IGZpZWxkVmFsLm5hbWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxFdmVudHNPYmoucHVzaChpbml0aWFsZXZlbnRPYmopO1xuICAgICAgICBpZiAoZmllbGRWYWwub25DaGFuZ2UpIHtcbiAgICAgICAgICBsZXQgb25DaGFuZ2VPYmogPSB7XG4gICAgICAgICAgICBzb3VyY2U6IGZpZWxkVmFsLm5hbWUsXG4gICAgICAgICAgICBkZXN0aW5hdGlvbjogZmllbGRWYWwub25DaGFuZ2UuZGVzdGluYXRpb24sXG4gICAgICAgICAgICBhY3Rpb25EYXRhUHJvdmlkZXI6IGBnZXQke2ZpZWxkVmFsLm9uQ2hhbmdlLmRlc3RpbmF0aW9ufWAsXG4gICAgICAgICAgICBsb2NhbHN0b3JhZ2U6IGZpZWxkVmFsLm9uQ2hhbmdlLmxvY2Fsc3RvcmFnZSxcbiAgICAgICAgICAgIGRlcGVuZGVudDogZmllbGRWYWwub25DaGFuZ2UuZGVwZW5kZW50LFxuICAgICAgICAgICAgY2hhbmdlVHlwZTogZmllbGRWYWwub25DaGFuZ2UuY2hhbmdlVHlwZSA/IGZpZWxkVmFsLm9uQ2hhbmdlLmNoYW5nZVR5cGUgOiAnJyxcbiAgICAgICAgICAgIGNhbGxBcGk6IGZpZWxkVmFsLm9uQ2hhbmdlLmNhbGxBcGkgPyBmaWVsZFZhbC5vbkNoYW5nZS5jYWxsQXBpIDogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUV2ZW50c09iai5wdXNoKG9uQ2hhbmdlT2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuY3JlYXRlQ29udHJvbCgpO1xuICAgIHRoaXMubGlzdEFjdGlvbnMgPSB0aGlzLmFjdGlvblByb3ZpZGVyO1xuICAgIHRoaXMuZ2V0SW5pdGlsaXplZFZhbHVlcygpO1xuICAgIHRoaXMub25DaGFuZ2VzKHRoaXMuZm9ybSk7XG4gIH1cblxuICB1cGRhdGVGaWVsZENvbmZpZ3VyYXRpb24oc291cmNlLCByZXNwKSB7XG4gICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QubWFwKCh2YWxTdGF0aWMsIGtleVN0YXRpYykgPT4ge1xuICAgICAgaWYgKHZhbFN0YXRpYy5uYW1lID09IHNvdXJjZSkge1xuICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdFtrZXlTdGF0aWNdLm9wdGlvbnMgPSByZXNwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHN0YXRpY0RhdGEoKSB7XG4gICAgcmV0dXJuIHsgbGFiZWw6IFwiU2FsZXMgVXNlclwiLCB2YWx1ZTogXCJzYWxlc191c2VyXCIgfTtcbiAgfVxuICBnZXQgYmxhbmtEYXRhT2JqKCkge1xuICAgIHJldHVybiB7IGxhYmVsOiBcIlNlbGVjdFwiLCB2YWx1ZTogXCJcIiB9XG4gIH1cbiAgZ2V0SW5pdGlsaXplZFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsRXZlbnRzT2JqLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5pdGlhbEV2ZW50c09iai5tYXAoKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgdGhpcy5uZ3hTZXJ2aWNlLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubGlzdEFjdGlvbnNbdmFsdWUuYWN0aW9uRGF0YVByb3ZpZGVyXSgpLnN1YnNjcmliZShcbiAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkQ29uZmlndXJhdGlvbih2YWx1ZS5zb3VyY2UsIHJlc3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLm5neFNlcnZpY2Uuc3RvcCgpO1xuICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdChldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLmZvcm0udmFsaWQpIHtcbiAgICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5mb3JtLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWxpZGF0ZUFsbEZvcm1GaWVsZHModGhpcy5mb3JtKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG4gICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gXCJidXR0b25cIikgcmV0dXJuO1xuICAgICAgY29uc3QgY29udHJvbCA9IHRoaXMuZmIuY29udHJvbChcbiAgICAgICAgeyB2YWx1ZTogZmllbGQudmFsdWUsIGRpc2FibGVkOiBmaWVsZC5kaXNhYmxlZCB9LFxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9ucyhmaWVsZC52YWxpZGF0aW9ucyB8fCBbXSlcbiAgICAgICk7XG4gICAgICBncm91cC5hZGRDb250cm9sKGZpZWxkLm5hbWUsIGNvbnRyb2wpO1xuICAgIH0pO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIGJpbmRWYWxpZGF0aW9ucyh2YWxpZGF0aW9uczogYW55KSB7XG4gICAgaWYgKHZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHZhbGlkTGlzdCA9IFtdO1xuICAgICAgdmFsaWRhdGlvbnMuZm9yRWFjaCh2YWxpZCA9PiB7XG4gICAgICAgIHZhbGlkTGlzdC5wdXNoKHZhbGlkLnZhbGlkYXRvcik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBWYWxpZGF0b3JzLmNvbXBvc2UodmFsaWRMaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YWxpZGF0ZUFsbEZvcm1GaWVsZHMoZm9ybUdyb3VwOiBGb3JtR3JvdXApIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgY29uc3QgY29udHJvbCA9IGZvcm1Hcm91cC5nZXQoZmllbGQpO1xuICAgICAgY29udHJvbC5tYXJrQXNUb3VjaGVkKHsgb25seVNlbGY6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cblxuXG59XG4iXX0=