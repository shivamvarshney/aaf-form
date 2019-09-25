(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/checkbox'), require('@angular/material/table'), require('@angular/material/select'), require('@angular/material/snack-bar'), require('@angular/material/datepicker'), require('@angular/material/autocomplete'), require('@angular/material/radio'), require('@angular/material-moment-adapter'), require('@angular/material'), require('@angular/common'), require('ngx-ui-loader'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('aaf-form', ['exports', '@angular/material/checkbox', '@angular/material/table', '@angular/material/select', '@angular/material/snack-bar', '@angular/material/datepicker', '@angular/material/autocomplete', '@angular/material/radio', '@angular/material-moment-adapter', '@angular/material', '@angular/common', 'ngx-ui-loader', '@angular/forms', '@angular/core'], factory) :
    (factory((global['aaf-form'] = {}),global.ng.material.checkbox,global.ng.material.table,global.ng.material.select,global.ng.material['snack-bar'],global.ng.material.datepicker,global.ng.material.autocomplete,global.ng.material.radio,global.ng['material-moment-adapter'],global.ng.material,global.ng.common,global.ngxUiLoader,global.ng.forms,global.ng.core));
}(this, (function (exports,checkbox,table,select,snackBar,datepicker,autocomplete,radio,materialMomentAdapter,material,common,ngxUiLoader,forms,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AafFormService = /** @class */ (function () {
        function AafFormService() {
        }
        AafFormService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AafFormService.ctorParameters = function () { return []; };
        /** @nocollapse */ AafFormService.ngInjectableDef = i0.defineInjectable({ factory: function AafFormService_Factory() { return new AafFormService(); }, token: AafFormService, providedIn: "root" });
        return AafFormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //MAT_DIALOG_DEFAULT_OPTIONS
    var MaterialModules = /** @class */ (function () {
        function MaterialModules() {
        }
        MaterialModules.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatInputModule,
                            material.MatDialogModule,
                            table.MatTableModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatGridListModule,
                            material.MatPaginatorModule,
                            select.MatSelectModule,
                            snackBar.MatSnackBarModule,
                            datepicker.MatDatepickerModule,
                            checkbox.MatCheckboxModule,
                            material.MatSortModule,
                            material.MatFormFieldModule,
                            material.MatDividerModule,
                            material.MatTooltipModule,
                            autocomplete.MatAutocompleteModule,
                            radio.MatRadioModule,
                            materialMomentAdapter.MatMomentDateModule,
                            material.MatListModule,
                            material.MatOptionModule,
                            material.MatTabsModule,
                            material.MatButtonToggleModule,
                            material.MatChipsModule,
                            material.MatExpansionModule,
                            material.MatRippleModule,
                            material.MatSidenavModule,
                            material.MatSliderModule
                            //MAT_DIALOG_DEFAULT_OPTIONS
                        ],
                        exports: [
                            common.CommonModule,
                            material.MatToolbarModule,
                            material.MatButtonModule,
                            material.MatCardModule,
                            material.MatInputModule,
                            material.MatDialogModule,
                            table.MatTableModule,
                            material.MatMenuModule,
                            material.MatIconModule,
                            material.MatProgressSpinnerModule,
                            material.MatGridListModule,
                            material.MatPaginatorModule,
                            select.MatSelectModule,
                            snackBar.MatSnackBarModule,
                            datepicker.MatDatepickerModule,
                            checkbox.MatCheckboxModule,
                            material.MatSortModule,
                            material.MatFormFieldModule,
                            material.MatDividerModule,
                            material.MatTooltipModule,
                            autocomplete.MatAutocompleteModule,
                            radio.MatRadioModule,
                            materialMomentAdapter.MatMomentDateModule,
                            material.MatListModule,
                            material.MatOptionModule,
                            material.MatTabsModule,
                            material.MatButtonToggleModule,
                            material.MatChipsModule,
                            material.MatExpansionModule,
                            material.MatRippleModule,
                            material.MatSidenavModule,
                            material.MatSliderModule
                            //MAT_DIALOG_DEFAULT_OPTIONS
                        ],
                    },] }
        ];
        return MaterialModules;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultFormFields = /** @class */ (function () {
        function DefaultFormFields() {
        }
        /**
         * @return {?}
         */
        DefaultFormFields.prototype.getFieldData = /**
         * @return {?}
         */
            function () {
                this.getDefaultFields();
                this.getDefaultFormConfigs();
                /** @type {?} */
                var fieldObj = { defaultFields: this.regConfig, defaultFormConfig: this.createUserForm };
                return fieldObj;
            };
        /**
         * @return {?}
         */
        DefaultFormFields.prototype.getDefaultFormConfigs = /**
         * @return {?}
         */
            function () {
                this.createUserForm = {
                    name: 'createUser',
                    class: 'createUser'
                };
                return this.createUserForm;
            };
        /**
         * @return {?}
         */
        DefaultFormFields.prototype.getDefaultFields = /**
         * @return {?}
         */
            function () {
                this.regConfig = [
                    {
                        type: "input",
                        label: "First name",
                        inputType: "text",
                        name: "fname",
                        placeHolder: 'Name',
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "First name is Required"
                            },
                            {
                                name: "pattern",
                                validator: forms.Validators.pattern("^[a-zA-Z]+$"),
                                message: "Accept only text"
                            }
                        ]
                    },
                    {
                        type: "date",
                        label: "Date Of Birth",
                        name: "dob",
                        placeHolder: 'dd-mm-yy',
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "Date of Birth is Required"
                            }
                        ]
                    },
                    {
                        type: "input",
                        label: "Mobile Number",
                        inputType: "text",
                        name: "mobileno",
                        placeHolder: 'Number',
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "Mobile Number is Required"
                            },
                            {
                                name: "pattern",
                                validator: forms.Validators.pattern("^[0-9]+$"),
                                message: "Accept only numbers"
                            }
                        ]
                    },
                    {
                        type: "input",
                        label: "Last name",
                        inputType: "text",
                        name: "lname",
                        placeHolder: 'Name',
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "Last name is Required"
                            },
                            {
                                name: "pattern",
                                validator: forms.Validators.pattern("^[a-zA-Z]+$"),
                                message: "Accept only text"
                            }
                        ]
                    },
                    {
                        type: "select",
                        label: "Role",
                        name: "role",
                        value: '',
                        options: [
                            {
                                label: 'Select',
                                value: ''
                            },
                            {
                                label: 'Admin',
                                value: 'Admin'
                            },
                            {
                                label: 'Agent',
                                value: 'Agent'
                            }
                        ],
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "Role is Required"
                            }
                        ]
                    },
                    {
                        type: "select",
                        label: "Primary Language",
                        name: "primarylanguage",
                        value: '',
                        options: [
                            {
                                label: 'Select',
                                value: ''
                            },
                            {
                                label: 'Swahili',
                                value: 'Swahili'
                            }
                        ],
                        validations: [
                            {
                                name: "required",
                                validator: forms.Validators.required,
                                message: "Primary Language is Required"
                            }
                        ]
                    },
                    {
                        type: "button",
                        label: "Create"
                    }
                ];
                return this.regConfig;
            };
        return DefaultFormFields;
    }());
    /**
     * @return {?}
     */
    function createDefaultField() {
        return new DefaultFormFields();
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DefaultFormConfiguration = /** @class */ (function () {
        function DefaultFormConfiguration() {
        }
        /**
         * @return {?}
         */
        DefaultFormConfiguration.prototype.getFormConfiguration = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var defaultData = createDefaultField();
                return defaultData.getFieldData();
            };
        return DefaultFormConfiguration;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                    this.group.get(this.field.name).patchValue(__spread(this.field.options.map(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return item.value; })), [0]));
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
            { type: i0.Component, args: [{
                        selector: "app-select",
                        template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-select [placeholder]=\"field.label\" [formControlName]=\"field.name\" [required]=\"field.validations\" [multiple]=\"field.isMultiselect\">\n\n<ng-container *ngIf=\"field.isMultiselect;then multiSelectTemplate else simpleSelectTemplate\"></ng-container>\n<ng-template #multiSelectTemplate>\n<mat-option *ngIf=\"field.isMultiselect\" #allSelected (click)=\"toggleAllSelection()\" [value]=\"0\">All</mat-option>\n<mat-option (click)=\"tosslePerOne(allSelected.viewValue)\" *ngFor=\"let item of field.options\" [value]=\"item.value\">{{item.label}}</mat-option>\n</ng-template>\n<ng-template #simpleSelectTemplate>\n<mat-option *ngFor=\"let item of field.options\" [value]=\"item.value\">{{item.label}}</mat-option>\n</ng-template>\n</mat-select>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>  \n"
                    }] }
        ];
        /** @nocollapse */
        SelectComponent.ctorParameters = function () { return []; };
        SelectComponent.propDecorators = {
            allSelected: [{ type: i0.ViewChild, args: ['allSelected',] }]
        };
        return SelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AafFormComponent = /** @class */ (function () {
        function AafFormComponent(fb, defaultConfig, ngxService) {
            this.fb = fb;
            this.defaultConfig = defaultConfig;
            this.ngxService = ngxService;
            this.submit = new i0.EventEmitter();
            this.initialEventsObj = [];
            this.onChangeEventsObj = [];
        }
        Object.defineProperty(AafFormComponent.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
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
                this.deeplyClonedObject.map(( /**
                 * @param {?} val
                 * @param {?} key
                 * @return {?}
                 */function (val, key) {
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
                    this.onChangeEventsObj.map(( /**
                     * @param {?} val
                     * @param {?} key
                     * @return {?}
                     */function (val, key) {
                        _this.form.get(val.source).valueChanges.subscribe(( /**
                         * @param {?} changedValue
                         * @return {?}
                         */function (changedValue) {
                            if (!val.changeType) {
                                if (val.dependent && val.dependent.length > 0) {
                                    val.dependent.map(( /**
                                     * @param {?} value
                                     * @return {?}
                                     */function (value) {
                                        _this.changeToEmptyState(value);
                                    }));
                                }
                                if (changedValue != '') {
                                    _this.listActions[val.actionDataProvider](changedValue).subscribe(( /**
                                     * @param {?} resp
                                     * @return {?}
                                     */function (resp) {
                                        _this.updateFieldConfiguration(val.destination, resp);
                                    }), ( /**
                                     * @param {?} err
                                     * @return {?}
                                     */function (err) {
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
                                        val.dependent.map(( /**
                                         * @param {?} value
                                         * @return {?}
                                         */function (value) {
                                            _this.enableField(value);
                                        }));
                                    }
                                    if (val.changeType && val.changeType.length > 0) {
                                        if (val.callApi) {
                                            _this.listActions[val.actionDataProvider]().subscribe(( /**
                                             * @param {?} resp
                                             * @return {?}
                                             */function (resp) {
                                                /** @type {?} */
                                                var getResponse = resp.filter(( /**
                                                 * @param {?} roleInfo
                                                 * @return {?}
                                                 */function (roleInfo) {
                                                    return (roleInfo.value.id ? roleInfo.value.id : roleInfo.value) == (changedValue.id ? changedValue.id : changedValue);
                                                }));
                                                if (getResponse.length > 0) {
                                                    val.changeType.map(( /**
                                                     * @param {?} changeTypeInfo
                                                     * @param {?} changeInfoKey
                                                     * @return {?}
                                                     */function (changeTypeInfo, changeInfoKey) {
                                                        if (changeTypeInfo.source == getResponse[0].type) {
                                                            changeTypeInfo.removeDestination.map(( /**
                                                             * @param {?} destination
                                                             * @return {?}
                                                             */function (destination) {
                                                                _this.disableField(destination);
                                                                _this.deeplyClonedObject.map(( /**
                                                                 * @param {?} fieldVal
                                                                 * @param {?} fieldKey
                                                                 * @return {?}
                                                                 */function (fieldVal, fieldKey) {
                                                                    if (fieldVal.name == destination) {
                                                                        _this.deeplyClonedObject[fieldKey].visibility = false;
                                                                    }
                                                                }));
                                                            }));
                                                            changeTypeInfo.addDestination.map(( /**
                                                             * @param {?} source
                                                             * @return {?}
                                                             */function (source) {
                                                                _this.enableField(source);
                                                                _this.deeplyClonedObject.map(( /**
                                                                 * @param {?} fieldVal
                                                                 * @param {?} fieldKey
                                                                 * @return {?}
                                                                 */function (fieldVal, fieldKey) {
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
                                            val.changeType.map(( /**
                                             * @param {?} changeTypeInfo
                                             * @param {?} changeInfoKey
                                             * @return {?}
                                             */function (changeTypeInfo, changeInfoKey) {
                                                if (changeTypeInfo.source == changedValue) {
                                                    changeTypeInfo.removeDestination.map(( /**
                                                     * @param {?} destination
                                                     * @return {?}
                                                     */function (destination) {
                                                        _this.disableField(destination);
                                                        _this.deeplyClonedObject.map(( /**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */function (fieldVal, fieldKey) {
                                                            if (fieldVal.name == destination) {
                                                                _this.deeplyClonedObject[fieldKey].visibility = false;
                                                            }
                                                        }));
                                                    }));
                                                    changeTypeInfo.addDestination.map(( /**
                                                     * @param {?} source
                                                     * @return {?}
                                                     */function (source) {
                                                        _this.enableField(source);
                                                        _this.deeplyClonedObject.map(( /**
                                                         * @param {?} fieldVal
                                                         * @param {?} fieldKey
                                                         * @return {?}
                                                         */function (fieldVal, fieldKey) {
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
                                        val.dependent.map(( /**
                                         * @param {?} value
                                         * @return {?}
                                         */function (value) {
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
                this.deeplyClonedObject.map(( /**
                 * @param {?} fieldVal
                 * @param {?} fieldKey
                 * @return {?}
                 */function (fieldVal, fieldKey) {
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
                this.deeplyClonedObject.map(( /**
                 * @param {?} valStatic
                 * @param {?} keyStatic
                 * @return {?}
                 */function (valStatic, keyStatic) {
                    if (valStatic.name == source) {
                        _this.deeplyClonedObject[keyStatic].options = resp;
                    }
                }));
            };
        Object.defineProperty(AafFormComponent.prototype, "staticData", {
            get: /**
             * @return {?}
             */ function () {
                return { label: "Sales User", value: "sales_user" };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AafFormComponent.prototype, "blankDataObj", {
            get: /**
             * @return {?}
             */ function () {
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
                    this.initialEventsObj.map(( /**
                     * @param {?} value
                     * @param {?} key
                     * @return {?}
                     */function (value, key) {
                        _this.ngxService.start();
                        _this.listActions[value.actionDataProvider]().subscribe(( /**
                         * @param {?} resp
                         * @return {?}
                         */function (resp) {
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
                this.deeplyClonedObject.forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
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
                    validations.forEach(( /**
                     * @param {?} valid
                     * @return {?}
                     */function (valid) {
                        validList_1.push(valid.validator);
                    }));
                    return forms.Validators.compose(validList_1);
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
                Object.keys(formGroup.controls).forEach(( /**
                 * @param {?} field
                 * @return {?}
                 */function (field) {
                    /** @type {?} */
                    var control = formGroup.get(field);
                    control.markAsTouched({ onlySelf: true });
                }));
            };
        AafFormComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'aaf-form',
                        template: "\n  <form [class]=\"formInfo.class\" [name]=\"formInfo.name\" [formGroup]=\"form\" (submit)=\"onSubmit($event)\">\n  <ng-container *ngFor=\"let field of deeplyClonedObject;\" aafFormField [field]=\"field\" [group]=\"form\">\n  </ng-container>\n  </form>\n  ",
                        providers: [DefaultFormConfiguration]
                    }] }
        ];
        /** @nocollapse */
        AafFormComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: DefaultFormConfiguration },
                { type: ngxUiLoader.NgxUiLoaderService }
            ];
        };
        AafFormComponent.propDecorators = {
            fields: [{ type: i0.Input }],
            formInfo: [{ type: i0.Input }],
            submit: [{ type: i0.Output }],
            actionProvider: [{ type: i0.Input }],
            formData: [{ type: i0.ViewChild, args: [SelectComponent,] }]
        };
        return AafFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: "app-input",
                        template: "\n<mat-form-field class=\"demo-full-width\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-label>{{field.label}}</mat-label>\n<input [id]=\"field.name\" matInput [formControlName]=\"field.name\" [placeholder]=\"field.placeHolder\" [type]=\"field.inputType\" [required]=\"field.validations\">\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
                    }] }
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () { return []; };
        return InputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        /**
         * @return {?}
         */
        ButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        ButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-button",
                        template: "\n<div [ngClass]=\"['demo-full-width','margin-top',field.class]\" [formGroup]=\"group\">\n<button type=\"submit\" color=\"primary\" class=\"choose_file\">{{field.label}}</button>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        ButtonComponent.ctorParameters = function () { return []; };
        return ButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: "app-date",
                        template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-label>{{field.label}}</mat-label>\n<input matInput [matDatepicker]=\"picker\" [formControlName]=\"field.name\" [placeholder]=\"field.placeHolder\" [required]=\"field.validations\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-hint></mat-hint>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
                    }] }
        ];
        /** @nocollapse */
        DateComponent.ctorParameters = function () { return []; };
        return DateComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var RadiobuttonComponent = /** @class */ (function () {
        function RadiobuttonComponent() {
        }
        /**
         * @return {?}
         */
        RadiobuttonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        RadiobuttonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-radiobutton",
                        template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<label class=\"radio-label-padding\">{{field.label}}:</label>\n<mat-radio-group [formControlName]=\"field.name\">\n<mat-radio-button *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-radio-button>\n</mat-radio-group>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        RadiobuttonComponent.ctorParameters = function () { return []; };
        return RadiobuttonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
        }
        /**
         * @return {?}
         */
        CheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        CheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "app-checkbox",
                        template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\" *ngIf=\"field.visibility\">\n<mat-checkbox [formControlName]=\"field.name\">{{field.label}}</mat-checkbox>\n</div>\n"
                    }] }
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        return CheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Directive, args: [{
                        selector: "[aafFormField]"
                    },] }
        ];
        /** @nocollapse */
        AafFormFieldDirective.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef }
            ];
        };
        AafFormFieldDirective.propDecorators = {
            field: [{ type: i0.Input }],
            group: [{ type: i0.Input }]
        };
        return AafFormFieldDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AafFormModule = /** @class */ (function () {
        function AafFormModule() {
        }
        AafFormModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            InputComponent,
                            ButtonComponent,
                            SelectComponent,
                            DateComponent,
                            RadiobuttonComponent,
                            CheckboxComponent,
                            AafFormFieldDirective,
                            AafFormComponent
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            MaterialModules,
                            ngxUiLoader.NgxUiLoaderModule
                        ],
                        entryComponents: [
                            InputComponent,
                            ButtonComponent,
                            SelectComponent,
                            DateComponent,
                            RadiobuttonComponent,
                            CheckboxComponent
                        ],
                        exports: [AafFormComponent]
                    },] }
        ];
        return AafFormModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AafFormComponent = AafFormComponent;
    exports.AafFormService = AafFormService;
    exports.AafFormModule = AafFormModule;
    exports.ɵh = AafFormFieldDirective;
    exports.ɵd = ButtonComponent;
    exports.ɵg = CheckboxComponent;
    exports.ɵe = DateComponent;
    exports.ɵc = InputComponent;
    exports.ɵf = RadiobuttonComponent;
    exports.ɵb = SelectComponent;
    exports.ɵa = DefaultFormConfiguration;
    exports.ɵi = MaterialModules;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=aaf-form.umd.js.map