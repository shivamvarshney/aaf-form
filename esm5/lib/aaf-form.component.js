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
var AafFormComponent = /** @class */ (function () {
    function AafFormComponent(fb, defaultConfig, ngxService) {
        this.fb = fb;
        this.defaultConfig = defaultConfig;
        this.ngxService = ngxService;
        this.submit = new EventEmitter();
        this.initialEventsObj = [];
        this.onChangeEventsObj = [];
    }
    Object.defineProperty(AafFormComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.form.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} controlName
     * @return {?}
     */
    AafFormComponent.prototype.changeToEmptyState = /**
     * @param {?} controlName
     * @return {?}
     */
    function (controlName) {
        var _this = this;
        this.deeplyClonedObject.map((/**
         * @param {?} val
         * @param {?} key
         * @return {?}
         */
        function (val, key) {
            if (val.name == controlName) {
                _this.deeplyClonedObject[key].options = [];
                //this.deeplyClonedObject[key].options.push({ label: "Select", value: '' });
            }
        }));
    };
    /**
     * @param {?} formGroup
     * @return {?}
     */
    AafFormComponent.prototype.onChanges = /**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        var _this = this;
        if (this.onChangeEventsObj.length > 0) {
            this.onChangeEventsObj.map((/**
             * @param {?} val
             * @param {?} key
             * @return {?}
             */
            function (val, key) {
                _this.form.get(val.source).valueChanges.subscribe((/**
                 * @param {?} changedValue
                 * @return {?}
                 */
                function (changedValue) {
                    if (!val.changeType) {
                        if (val.dependent && val.dependent.length > 0) {
                            val.dependent.map((/**
                             * @param {?} value
                             * @return {?}
                             */
                            function (value) {
                                _this.changeToEmptyState(value);
                            }));
                        }
                        if (changedValue != '') {
                            _this.listActions[val.actionDataProvider](changedValue).subscribe((/**
                             * @param {?} resp
                             * @return {?}
                             */
                            function (resp) {
                                _this.updateFieldConfiguration(val.destination, resp);
                            }), (/**
                             * @param {?} err
                             * @return {?}
                             */
                            function (err) {
                                /** @type {?} */
                                var staticDdata = [];
                                staticDdata.push(_this.blankDataObj);
                                staticDdata.push(_this.staticData);
                                _this.updateFieldConfiguration(val.destination, staticDdata);
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
                                function (value) {
                                    _this.enableField(value);
                                }));
                            }
                            if (val.changeType && val.changeType.length > 0) {
                                if (val.callApi) {
                                    _this.listActions[val.actionDataProvider]().subscribe((/**
                                     * @param {?} resp
                                     * @return {?}
                                     */
                                    function (resp) {
                                        /** @type {?} */
                                        var getResponse = resp.filter((/**
                                         * @param {?} roleInfo
                                         * @return {?}
                                         */
                                        function (roleInfo) {
                                            return (roleInfo.value.id ? roleInfo.value.id : roleInfo.value) == (changedValue.id ? changedValue.id : changedValue);
                                        }));
                                        if (getResponse.length > 0) {
                                            val.changeType.map((/**
                                             * @param {?} changeTypeInfo
                                             * @param {?} changeInfoKey
                                             * @return {?}
                                             */
                                            function (changeTypeInfo, changeInfoKey) {
                                                if (changeTypeInfo.source == getResponse[0].type) {
                                                    changeTypeInfo.removeDestination.map((/**
                                                     * @param {?} destination
                                                     * @return {?}
                                                     */
                                                    function (destination) {
                                                        _this.disableField(destination);
                                                        _this.deeplyClonedObject.map((/**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */
                                                        function (fieldVal, fieldKey) {
                                                            if (fieldVal.name == destination) {
                                                                _this.deeplyClonedObject[fieldKey].visibility = false;
                                                            }
                                                        }));
                                                    }));
                                                    changeTypeInfo.addDestination.map((/**
                                                     * @param {?} source
                                                     * @return {?}
                                                     */
                                                    function (source) {
                                                        _this.enableField(source);
                                                        _this.deeplyClonedObject.map((/**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */
                                                        function (fieldVal, fieldKey) {
                                                            if (fieldVal.name == source) {
                                                                _this.deeplyClonedObject[fieldKey].visibility = true;
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
                                    function (changeTypeInfo, changeInfoKey) {
                                        if (changeTypeInfo.source == changedValue) {
                                            changeTypeInfo.removeDestination.map((/**
                                             * @param {?} destination
                                             * @return {?}
                                             */
                                            function (destination) {
                                                _this.disableField(destination);
                                                _this.deeplyClonedObject.map((/**
                                                 * @param {?} fieldVal
                                                 * @param {?} fieldKey
                                                 * @return {?}
                                                 */
                                                function (fieldVal, fieldKey) {
                                                    if (fieldVal.name == destination) {
                                                        _this.deeplyClonedObject[fieldKey].visibility = false;
                                                    }
                                                }));
                                            }));
                                            changeTypeInfo.addDestination.map((/**
                                             * @param {?} source
                                             * @return {?}
                                             */
                                            function (source) {
                                                _this.enableField(source);
                                                _this.deeplyClonedObject.map((/**
                                                 * @param {?} fieldVal
                                                 * @param {?} fieldKey
                                                 * @return {?}
                                                 */
                                                function (fieldVal, fieldKey) {
                                                    if (fieldVal.name == source) {
                                                        _this.deeplyClonedObject[fieldKey].visibility = true;
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
                                function (value) {
                                    _this.disableField(value);
                                }));
                            }
                        }
                    }
                }));
            }));
        }
    };
    /**
     * @param {?} field
     * @return {?}
     */
    AafFormComponent.prototype.disableField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.form.get(field).disable();
        return true;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    AafFormComponent.prototype.enableField = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        this.form.get(field).enable();
        return true;
    };
    /**
     * @return {?}
     */
    AafFormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.deeplyClonedObject = JSON.parse(JSON.stringify(this.fields));
        this.deeplyClonedObject.map((/**
         * @param {?} fieldVal
         * @param {?} fieldKey
         * @return {?}
         */
        function (fieldVal, fieldKey) {
            if (fieldVal.type == 'select' && fieldVal.options && fieldVal.optionsData == false) {
                /** @type {?} */
                var initialeventObj = {
                    actionDataProvider: "get" + fieldVal.name,
                    source: fieldVal.name,
                    localstorage: true,
                    destination: fieldVal.name
                };
                _this.initialEventsObj.push(initialeventObj);
                if (fieldVal.onChange) {
                    /** @type {?} */
                    var onChangeObj = {
                        source: fieldVal.name,
                        destination: fieldVal.onChange.destination,
                        actionDataProvider: "get" + fieldVal.onChange.destination,
                        localstorage: fieldVal.onChange.localstorage,
                        dependent: fieldVal.onChange.dependent,
                        changeType: fieldVal.onChange.changeType ? fieldVal.onChange.changeType : '',
                        callApi: fieldVal.onChange.callApi ? fieldVal.onChange.callApi : false
                    };
                    _this.onChangeEventsObj.push(onChangeObj);
                }
            }
        }));
        this.form = this.createControl();
        this.listActions = this.actionProvider;
        this.getInitilizedValues();
        this.onChanges(this.form);
    };
    /**
     * @param {?} source
     * @param {?} resp
     * @return {?}
     */
    AafFormComponent.prototype.updateFieldConfiguration = /**
     * @param {?} source
     * @param {?} resp
     * @return {?}
     */
    function (source, resp) {
        var _this = this;
        this.deeplyClonedObject.map((/**
         * @param {?} valStatic
         * @param {?} keyStatic
         * @return {?}
         */
        function (valStatic, keyStatic) {
            if (valStatic.name == source) {
                _this.deeplyClonedObject[keyStatic].options = resp;
            }
        }));
    };
    Object.defineProperty(AafFormComponent.prototype, "staticData", {
        get: /**
         * @return {?}
         */
        function () {
            return { label: "Sales User", value: "sales_user" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AafFormComponent.prototype, "blankDataObj", {
        get: /**
         * @return {?}
         */
        function () {
            return { label: "Select", value: "" };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AafFormComponent.prototype.getInitilizedValues = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.initialEventsObj.length > 0) {
            this.initialEventsObj.map((/**
             * @param {?} value
             * @param {?} key
             * @return {?}
             */
            function (value, key) {
                _this.ngxService.start();
                _this.listActions[value.actionDataProvider]().subscribe((/**
                 * @param {?} resp
                 * @return {?}
                 */
                function (resp) {
                    _this.updateFieldConfiguration(value.source, resp);
                }));
                _this.ngxService.stop();
            }));
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AafFormComponent.prototype.onSubmit = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.form.valid) {
            this.submit.emit(this.form.value);
        }
        else {
            this.validateAllFormFields(this.form);
        }
    };
    /**
     * @return {?}
     */
    AafFormComponent.prototype.createControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var group = this.fb.group({});
        this.deeplyClonedObject.forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            if (field.type === "button")
                return;
            /** @type {?} */
            var control = _this.fb.control({ value: field.value, disabled: field.disabled }, _this.bindValidations(field.validations || []));
            group.addControl(field.name, control);
        }));
        return group;
    };
    /**
     * @param {?} validations
     * @return {?}
     */
    AafFormComponent.prototype.bindValidations = /**
     * @param {?} validations
     * @return {?}
     */
    function (validations) {
        if (validations.length > 0) {
            /** @type {?} */
            var validList_1 = [];
            validations.forEach((/**
             * @param {?} valid
             * @return {?}
             */
            function (valid) {
                validList_1.push(valid.validator);
            }));
            return Validators.compose(validList_1);
        }
        return null;
    };
    /**
     * @param {?} formGroup
     * @return {?}
     */
    AafFormComponent.prototype.validateAllFormFields = /**
     * @param {?} formGroup
     * @return {?}
     */
    function (formGroup) {
        Object.keys(formGroup.controls).forEach((/**
         * @param {?} field
         * @return {?}
         */
        function (field) {
            /** @type {?} */
            var control = formGroup.get(field);
            control.markAsTouched({ onlySelf: true });
        }));
    };
    AafFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aaf-form',
                    template: "\n  <form [class]=\"formInfo.class\" [name]=\"formInfo.name\" [formGroup]=\"form\" (submit)=\"onSubmit($event)\">\n  <ng-container *ngFor=\"let field of deeplyClonedObject;\" aafFormField [field]=\"field\" [group]=\"form\">\n  </ng-container>\n  </form>\n  ",
                    providers: [DefaultFormConfiguration]
                }] }
    ];
    /** @nocollapse */
    AafFormComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: DefaultFormConfiguration },
        { type: NgxUiLoaderService }
    ]; };
    AafFormComponent.propDecorators = {
        fields: [{ type: Input }],
        formInfo: [{ type: Input }],
        submit: [{ type: Output }],
        actionProvider: [{ type: Input }],
        formData: [{ type: ViewChild, args: [SelectComponent,] }]
    };
    return AafFormComponent;
}());
export { AafFormComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWtELE1BQU0sRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUksT0FBTyxFQUFhLFdBQVcsRUFBRSxVQUFVLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRDtJQTRCRSwwQkFDVSxFQUFlLEVBQ2YsYUFBdUMsRUFFdkMsVUFBOEI7UUFIOUIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUEwQjtRQUV2QyxlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQWpCOUIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBTTlELHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyxzQkFBaUIsR0FBYSxFQUFFLENBQUM7SUFZN0IsQ0FBQztJQVRMLHNCQUFJLG1DQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBOzs7OztJQVNELDZDQUFrQjs7OztJQUFsQixVQUFtQixXQUFXO1FBQTlCLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUc7Ozs7O1FBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNuQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUMzQixLQUFJLENBQUMsa0JBQWtCLENBQUMs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QU8sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkExUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsbVFBS1Q7b0JBRUQsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOzs7O2dCQWxCbUIsV0FBVztnQkFFdEIsd0JBQXdCO2dCQUl4QixrQkFBa0I7Ozt5QkFleEIsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLE1BQU07aUNBQ04sS0FBSzsyQkFPTCxTQUFTLFNBQUMsZUFBZTs7SUFzTzVCLHVCQUFDO0NBQUEsQUE3UEQsSUE2UEM7U0FsUFksZ0JBQWdCOzs7SUFFM0Isa0NBQStCOztJQUMvQixvQ0FBK0I7O0lBQy9CLGtDQUE4RDs7SUFDOUQsMENBQXlDOztJQUV6QyxnQ0FBZ0I7O0lBQ2hCLHVDQUFpQjs7SUFDakIsOENBQXdCOztJQUN4Qiw0Q0FBZ0M7O0lBQ2hDLDZDQUFpQzs7SUFDakMsb0NBQXNEOzs7OztJQU1wRCw4QkFBdUI7Ozs7O0lBQ3ZCLHlDQUErQzs7Ozs7SUFFL0Msc0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIFNpbXBsZUNoYW5nZSwgT25Jbml0LCBPdXRwdXQsIEluamVjdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBGaWVsZENvbmZpZywgVmFsaWRhdG9yLCBGb3JtRGV0YWlscywgRXZlbnRzVHlwZSwgRXZlbnRzIH0gZnJvbSBcIi4vZmllbGQuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEZWZhdWx0Rm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2RlZmF1bHQtY29uZmlndXJhdGlvbic7XG4vL2ltcG9ydCB7IExvY2F0aW9uLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL2FhZi1mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zUHJvdmlkZXIgfSBmcm9tICcuL2FhZi1mb3JtLWFjdGlvbnMtcHJvdmlkZXInO1xuaW1wb3J0IHsgTmd4VWlMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnbmd4LXVpLWxvYWRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FhZi1mb3JtJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGZvcm0gW2NsYXNzXT1cImZvcm1JbmZvLmNsYXNzXCIgW25hbWVdPVwiZm9ybUluZm8ubmFtZVwiIFtmb3JtR3JvdXBdPVwiZm9ybVwiIChzdWJtaXQpPVwib25TdWJtaXQoJGV2ZW50KVwiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkZWVwbHlDbG9uZWRPYmplY3Q7XCIgYWFmRm9ybUZpZWxkIFtmaWVsZF09XCJmaWVsZFwiIFtncm91cF09XCJmb3JtXCI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8L2Zvcm0+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRGb3JtQ29uZmlndXJhdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgQWFmRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmllbGRzOiBGaWVsZENvbmZpZ1tdO1xuICBASW5wdXQoKSBmb3JtSW5mbzogRm9ybURldGFpbHM7XG4gIEBPdXRwdXQoKSBzdWJtaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGFjdGlvblByb3ZpZGVyOiBBY3Rpb25zUHJvdmlkZXI7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBsaXN0QWN0aW9uczogYW55O1xuICBkZWVwbHlDbG9uZWRPYmplY3Q6IGFueTtcbiAgaW5pdGlhbEV2ZW50c09iajogRXZlbnRzW10gPSBbXTtcbiAgb25DaGFuZ2VFdmVudHNPYmo6IEV2ZW50c1tdID0gW107XG4gIEBWaWV3Q2hpbGQoU2VsZWN0Q29tcG9uZW50KSBmb3JtRGF0YTogU2VsZWN0Q29tcG9uZW50O1xuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbHVlO1xuICB9XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZzogRGVmYXVsdEZvcm1Db25maWd1cmF0aW9uLFxuICAgIC8vcHJpdmF0ZSBfbG9jYXRpb246IExvY2F0aW9uLFxuICAgIHByaXZhdGUgbmd4U2VydmljZTogTmd4VWlMb2FkZXJTZXJ2aWNlLFxuICAgIC8vQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcbiAgKSB7IH1cblxuICBjaGFuZ2VUb0VtcHR5U3RhdGUoY29udHJvbE5hbWUpIHtcbiAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKHZhbCwga2V5KSA9PiB7XG4gICAgICBpZiAodmFsLm5hbWUgPT0gY29udHJvbE5hbWUpIHtcbiAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3Rba2V5XS5vcHRpb25zID0gW107XG4gICAgICAgIC8vdGhpcy5kZWVwbHlDbG9uZWRPYmplY3Rba2V5XS5vcHRpb25zLnB1c2goeyBsYWJlbDogXCJTZWxlY3RcIiwgdmFsdWU6ICcnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG9uQ2hhbmdlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9uQ2hhbmdlRXZlbnRzT2JqLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMub25DaGFuZ2VFdmVudHNPYmoubWFwKCh2YWwsIGtleSkgPT4ge1xuICAgICAgICB0aGlzLmZvcm0uZ2V0KHZhbC5zb3VyY2UpLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoXG4gICAgICAgICAgY2hhbmdlZFZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmICghdmFsLmNoYW5nZVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKHZhbC5kZXBlbmRlbnQgJiYgdmFsLmRlcGVuZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFsLmRlcGVuZGVudC5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0VtcHR5U3RhdGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChjaGFuZ2VkVmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RBY3Rpb25zW3ZhbC5hY3Rpb25EYXRhUHJvdmlkZXJdKGNoYW5nZWRWYWx1ZSkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgKHJlc3A6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkQ29uZmlndXJhdGlvbih2YWwuZGVzdGluYXRpb24sIHJlc3ApO1xuICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXRpY0RkYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0RkYXRhLnB1c2godGhpcy5ibGFua0RhdGFPYmopO1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNEZGF0YS5wdXNoKHRoaXMuc3RhdGljRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRDb25maWd1cmF0aW9uKHZhbC5kZXN0aW5hdGlvbiwgc3RhdGljRGRhdGEpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGNoYW5nZWRWYWx1ZSAhPSAnJykge1xuICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBhbGwgZGVwZW5kZW50IGZpZWxkXG4gICAgICAgICAgICAgICAgaWYgKHZhbC5kZXBlbmRlbnQgJiYgdmFsLmRlcGVuZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB2YWwuZGVwZW5kZW50Lm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlRmllbGQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwuY2hhbmdlVHlwZSAmJiB2YWwuY2hhbmdlVHlwZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsLmNhbGxBcGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0QWN0aW9uc1t2YWwuYWN0aW9uRGF0YVByb3ZpZGVyXSgpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAocmVzcDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2V0UmVzcG9uc2UgPSByZXNwLmZpbHRlcihyb2xlSW5mbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocm9sZUluZm8udmFsdWUuaWQgPyByb2xlSW5mby52YWx1ZS5pZCA6IHJvbGVJbmZvLnZhbHVlKSA9PSAoY2hhbmdlZFZhbHVlLmlkID8gY2hhbmdlZFZhbHVlLmlkIDogY2hhbmdlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdldFJlc3BvbnNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLmNoYW5nZVR5cGUubWFwKChjaGFuZ2VUeXBlSW5mbywgY2hhbmdlSW5mb0tleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VUeXBlSW5mby5zb3VyY2UgPT0gZ2V0UmVzcG9uc2VbMF0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHlwZUluZm8ucmVtb3ZlRGVzdGluYXRpb24ubWFwKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRmllbGQoZGVzdGluYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKGZpZWxkVmFsLCBmaWVsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbC5uYW1lID09IGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdFtmaWVsZEtleV0udmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGVJbmZvLmFkZERlc3RpbmF0aW9uLm1hcChzb3VyY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUZpZWxkKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0Lm1hcCgoZmllbGRWYWwsIGZpZWxkS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsLm5hbWUgPT0gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdFtmaWVsZEtleV0udmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWwuY2hhbmdlVHlwZS5tYXAoKGNoYW5nZVR5cGVJbmZvLCBjaGFuZ2VJbmZvS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZVR5cGVJbmZvLnNvdXJjZSA9PSBjaGFuZ2VkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGVJbmZvLnJlbW92ZURlc3RpbmF0aW9uLm1hcChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUZpZWxkKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3QubWFwKChmaWVsZFZhbCwgZmllbGRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWwubmFtZSA9PSBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3RbZmllbGRLZXldLnZpc2liaWxpdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlSW5mby5hZGREZXN0aW5hdGlvbi5tYXAoc291cmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVGaWVsZChzb3VyY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKGZpZWxkVmFsLCBmaWVsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbC5uYW1lID09IHNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWVwbHlDbG9uZWRPYmplY3RbZmllbGRLZXldLnZpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIGFsbCBkZXBlbmRlbnQgZmllbGRcbiAgICAgICAgICAgICAgICBpZiAodmFsLmRlcGVuZGVudCAmJiB2YWwuZGVwZW5kZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHZhbC5kZXBlbmRlbnQubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlRmllbGQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgZGlzYWJsZUZpZWxkKGZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZvcm0uZ2V0KGZpZWxkKS5kaXNhYmxlKCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZW5hYmxlRmllbGQoZmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuZm9ybS5nZXQoZmllbGQpLmVuYWJsZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkcykpO1xuICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0Lm1hcCgoZmllbGRWYWwsIGZpZWxkS2V5KSA9PiB7XG4gICAgICBpZiAoZmllbGRWYWwudHlwZSA9PSAnc2VsZWN0JyAmJiBmaWVsZFZhbC5vcHRpb25zICYmIGZpZWxkVmFsLm9wdGlvbnNEYXRhID09IGZhbHNlKSB7XG4gICAgICAgIGxldCBpbml0aWFsZXZlbnRPYmogPSB7XG4gICAgICAgICAgYWN0aW9uRGF0YVByb3ZpZGVyOiBgZ2V0JHtmaWVsZFZhbC5uYW1lfWAsXG4gICAgICAgICAgc291cmNlOiBmaWVsZFZhbC5uYW1lLFxuICAgICAgICAgIGxvY2Fsc3RvcmFnZTogdHJ1ZSxcbiAgICAgICAgICBkZXN0aW5hdGlvbjogZmllbGRWYWwubmFtZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbEV2ZW50c09iai5wdXNoKGluaXRpYWxldmVudE9iaik7XG4gICAgICAgIGlmIChmaWVsZFZhbC5vbkNoYW5nZSkge1xuICAgICAgICAgIGxldCBvbkNoYW5nZU9iaiA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogZmllbGRWYWwubmFtZSxcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBmaWVsZFZhbC5vbkNoYW5nZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICAgIGFjdGlvbkRhdGFQcm92aWRlcjogYGdldCR7ZmllbGRWYWwub25DaGFuZ2UuZGVzdGluYXRpb259YCxcbiAgICAgICAgICAgIGxvY2Fsc3RvcmFnZTogZmllbGRWYWwub25DaGFuZ2UubG9jYWxzdG9yYWdlLFxuICAgICAgICAgICAgZGVwZW5kZW50OiBmaWVsZFZhbC5vbkNoYW5nZS5kZXBlbmRlbnQsXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiBmaWVsZFZhbC5vbkNoYW5nZS5jaGFuZ2VUeXBlID8gZmllbGRWYWwub25DaGFuZ2UuY2hhbmdlVHlwZSA6ICcnLFxuICAgICAgICAgICAgY2FsbEFwaTogZmllbGRWYWwub25DaGFuZ2UuY2FsbEFwaSA/IGZpZWxkVmFsLm9uQ2hhbmdlLmNhbGxBcGkgOiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlRXZlbnRzT2JqLnB1c2gob25DaGFuZ2VPYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gICAgdGhpcy5saXN0QWN0aW9ucyA9IHRoaXMuYWN0aW9uUHJvdmlkZXI7XG4gICAgdGhpcy5nZXRJbml0aWxpemVkVmFsdWVzKCk7XG4gICAgdGhpcy5vbkNoYW5nZXModGhpcy5mb3JtKTtcbiAgfVxuXG4gIHVwZGF0ZUZpZWxkQ29uZmlndXJhdGlvbihzb3VyY2UsIHJlc3ApIHtcbiAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5tYXAoKHZhbFN0YXRpYywga2V5U3RhdGljKSA9PiB7XG4gICAgICBpZiAodmFsU3RhdGljLm5hbWUgPT0gc291cmNlKSB7XG4gICAgICAgIHRoaXMuZGVlcGx5Q2xvbmVkT2JqZWN0W2tleVN0YXRpY10ub3B0aW9ucyA9IHJlc3A7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3RhdGljRGF0YSgpIHtcbiAgICByZXR1cm4geyBsYWJlbDogXCJTYWxlcyBVc2VyXCIsIHZhbHVlOiBcInNhbGVzX3VzZXJcIiB9O1xuICB9XG4gIGdldCBibGFua0RhdGFPYmooKSB7XG4gICAgcmV0dXJuIHsgbGFiZWw6IFwiU2VsZWN0XCIsIHZhbHVlOiBcIlwiIH1cbiAgfVxuICBnZXRJbml0aWxpemVkVmFsdWVzKCkge1xuICAgIGlmICh0aGlzLmluaXRpYWxFdmVudHNPYmoubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pbml0aWFsRXZlbnRzT2JqLm1hcCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICB0aGlzLm5neFNlcnZpY2Uuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5saXN0QWN0aW9uc1t2YWx1ZS5hY3Rpb25EYXRhUHJvdmlkZXJdKCkuc3Vic2NyaWJlKFxuICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRDb25maWd1cmF0aW9uKHZhbHVlLnNvdXJjZSwgcmVzcCk7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMubmd4U2VydmljZS5zdG9wKCk7XG4gICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5zdWJtaXQuZW1pdCh0aGlzLmZvcm0udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQWxsRm9ybUZpZWxkcyh0aGlzLmZvcm0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgY29uc3QgZ3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcbiAgICB0aGlzLmRlZXBseUNsb25lZE9iamVjdC5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSBcImJ1dHRvblwiKSByZXR1cm47XG4gICAgICBjb25zdCBjb250cm9sID0gdGhpcy5mYi5jb250cm9sKFxuICAgICAgICB7IHZhbHVlOiBmaWVsZC52YWx1ZSwgZGlzYWJsZWQ6IGZpZWxkLmRpc2FibGVkIH0sXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb25zKGZpZWxkLnZhbGlkYXRpb25zIHx8IFtdKVxuICAgICAgKTtcbiAgICAgIGdyb3VwLmFkZENvbnRyb2woZmllbGQubmFtZSwgY29udHJvbCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgYmluZFZhbGlkYXRpb25zKHZhbGlkYXRpb25zOiBhbnkpIHtcbiAgICBpZiAodmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdmFsaWRMaXN0ID0gW107XG4gICAgICB2YWxpZGF0aW9ucy5mb3JFYWNoKHZhbGlkID0+IHtcbiAgICAgICAgdmFsaWRMaXN0LnB1c2godmFsaWQudmFsaWRhdG9yKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFZhbGlkYXRvcnMuY29tcG9zZSh2YWxpZExpc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG5cbn1cbiJdfQ==