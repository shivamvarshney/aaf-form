import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSortModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatGridListModule, MatPaginatorModule, MatFormFieldModule, MatDividerModule, MatTooltipModule, MatListModule, MatOptionModule, MatTabsModule, MatButtonToggleModule, MatChipsModule, MatExpansionModule, MatRippleModule, MatSidenavModule, MatSliderModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderService, NgxUiLoaderModule } from 'ngx-ui-loader';
import { Injectable, ComponentFactoryResolver, Directive, Input, ViewContainerRef, NgModule, Component, ViewChild, EventEmitter, Output, defineInjectable } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AafFormService {
    constructor() { }
}
AafFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AafFormService.ctorParameters = () => [];
/** @nocollapse */ AafFormService.ngInjectableDef = defineInjectable({ factory: function AafFormService_Factory() { return new AafFormService(); }, token: AafFormService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultFormFields {
    constructor() {
    }
    /**
     * @return {?}
     */
    getFieldData() {
        this.getDefaultFields();
        this.getDefaultFormConfigs();
        /** @type {?} */
        let fieldObj = { defaultFields: this.regConfig, defaultFormConfig: this.createUserForm };
        return fieldObj;
    }
    /**
     * @return {?}
     */
    getDefaultFormConfigs() {
        this.createUserForm = {
            name: 'createUser',
            class: 'createUser'
        };
        return this.createUserForm;
    }
    /**
     * @return {?}
     */
    getDefaultFields() {
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
                        validator: Validators.required,
                        message: "First name is Required"
                    },
                    {
                        name: "pattern",
                        validator: Validators.pattern("^[a-zA-Z]+$"),
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
                        validator: Validators.required,
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
                        validator: Validators.required,
                        message: "Mobile Number is Required"
                    },
                    {
                        name: "pattern",
                        validator: Validators.pattern("^[0-9]+$"),
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
                        validator: Validators.required,
                        message: "Last name is Required"
                    },
                    {
                        name: "pattern",
                        validator: Validators.pattern("^[a-zA-Z]+$"),
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
                        validator: Validators.required,
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
                        validator: Validators.required,
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
    }
}
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
class DefaultFormConfiguration {
    /**
     * @return {?}
     */
    getFormConfiguration() {
        /** @type {?} */
        const defaultData = createDefaultField();
        return defaultData.getFieldData();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    toggleAllSelection() {
        if (this.allSelected.selected) {
            this.group.get(this.field.name).patchValue([...this.field.options.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.value)), 0]);
        }
        else {
            this.group.get(this.field.name).patchValue([]);
        }
    }
    /**
     * @param {?} all
     * @return {?}
     */
    tosslePerOne(all) {
        if (this.field.isMultiselect == false) {
            return true;
        }
        if (this.allSelected.selected) {
            this.allSelected.deselect();
            return false;
        }
        if (this.group.get(this.field.name).value.length == this.field.options.length)
            this.allSelected.select();
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: "app-select",
                template: `
<mat-form-field class="demo-full-width margin-top" [formGroup]="group" *ngIf="field.visibility">
<mat-select [placeholder]="field.label" [formControlName]="field.name" [required]="field.validations" [multiple]="field.isMultiselect">

<ng-container *ngIf="field.isMultiselect;then multiSelectTemplate else simpleSelectTemplate"></ng-container>
<ng-template #multiSelectTemplate>
<mat-option *ngIf="field.isMultiselect" #allSelected (click)="toggleAllSelection()" [value]="0">All</mat-option>
<mat-option (click)="tosslePerOne(allSelected.viewValue)" *ngFor="let item of field.options" [value]="item.value">{{item.label}}</mat-option>
</ng-template>
<ng-template #simpleSelectTemplate>
<mat-option *ngFor="let item of field.options" [value]="item.value">{{item.label}}</mat-option>
</ng-template>
</mat-select>
<ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
<mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
</ng-container>
</mat-form-field>  
`
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [];
SelectComponent.propDecorators = {
    allSelected: [{ type: ViewChild, args: ['allSelected',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AafFormComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//MAT_DIALOG_DEFAULT_OPTIONS
class MaterialModules {
}
MaterialModules.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatCardModule,
                    MatInputModule,
                    MatDialogModule,
                    MatTableModule,
                    MatMenuModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatGridListModule,
                    MatPaginatorModule,
                    MatSelectModule,
                    MatSnackBarModule,
                    MatDatepickerModule,
                    MatCheckboxModule,
                    MatSortModule,
                    MatFormFieldModule,
                    MatDividerModule,
                    MatTooltipModule,
                    MatAutocompleteModule,
                    MatRadioModule,
                    MatMomentDateModule,
                    MatListModule,
                    MatOptionModule,
                    MatTabsModule,
                    MatButtonToggleModule,
                    MatChipsModule,
                    MatExpansionModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatSliderModule
                    //MAT_DIALOG_DEFAULT_OPTIONS
                ],
                exports: [
                    CommonModule,
                    MatToolbarModule,
                    MatButtonModule,
                    MatCardModule,
                    MatInputModule,
                    MatDialogModule,
                    MatTableModule,
                    MatMenuModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatGridListModule,
                    MatPaginatorModule,
                    MatSelectModule,
                    MatSnackBarModule,
                    MatDatepickerModule,
                    MatCheckboxModule,
                    MatSortModule,
                    MatFormFieldModule,
                    MatDividerModule,
                    MatTooltipModule,
                    MatAutocompleteModule,
                    MatRadioModule,
                    MatMomentDateModule,
                    MatListModule,
                    MatOptionModule,
                    MatTabsModule,
                    MatButtonToggleModule,
                    MatChipsModule,
                    MatExpansionModule,
                    MatRippleModule,
                    MatSidenavModule,
                    MatSliderModule
                    //MAT_DIALOG_DEFAULT_OPTIONS
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: "app-button",
                template: `
<div [ngClass]="['demo-full-width','margin-top',field.class]" [formGroup]="group">
<button type="submit" color="primary" class="choose_file">{{field.label}}</button>
</div>
`
            }] }
];
/** @nocollapse */
ButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DateComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadiobuttonComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CheckboxComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: "app-checkbox",
                template: `
<div class="demo-full-width margin-top" [formGroup]="group" *ngIf="field.visibility">
<mat-checkbox [formControlName]="field.name">{{field.label}}</mat-checkbox>
</div>
`
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const componentMapper = {
    input: InputComponent,
    button: ButtonComponent,
    select: SelectComponent,
    date: DateComponent,
    radiobutton: RadiobuttonComponent,
    checkbox: CheckboxComponent
};
class AafFormFieldDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AafFormModule {
}
AafFormModule.decorators = [
    { type: NgModule, args: [{
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
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MaterialModules,
                    NgxUiLoaderModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AafFormComponent, AafFormService, AafFormModule, AafFormFieldDirective as ɵh, ButtonComponent as ɵd, CheckboxComponent as ɵg, DateComponent as ɵe, InputComponent as ɵc, RadiobuttonComponent as ɵf, SelectComponent as ɵb, DefaultFormConfiguration as ɵa, MaterialModules as ɵi };

//# sourceMappingURL=aaf-form.js.map