import { EventEmitter, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FieldConfig, FormDetails, Events } from "./field.interface";
import { DefaultFormConfiguration } from './default-configuration';
import { SelectComponent } from './aaf-form-fields/select/select.component';
import { ActionsProvider } from './aaf-form-actions-provider';
import { NgxUiLoaderService } from 'ngx-ui-loader';
export declare class AafFormComponent implements OnInit {
    private fb;
    private defaultConfig;
    private ngxService;
    fields: FieldConfig[];
    formInfo: FormDetails;
    submit: EventEmitter<any>;
    actionProvider: ActionsProvider;
    form: FormGroup;
    listActions: any;
    deeplyClonedObject: any;
    initialEventsObj: Events[];
    onChangeEventsObj: Events[];
    formData: SelectComponent;
    readonly value: any;
    constructor(fb: FormBuilder, defaultConfig: DefaultFormConfiguration, ngxService: NgxUiLoaderService);
    changeToEmptyState(controlName: any): void;
    onChanges(formGroup: FormGroup): void;
    disableField(field: string): boolean;
    enableField(field: string): boolean;
    ngOnInit(): void;
    updateFieldConfiguration(source: any, resp: any): void;
    readonly staticData: {
        label: string;
        value: string;
    };
    readonly blankDataObj: {
        label: string;
        value: string;
    };
    getInitilizedValues(): void;
    onSubmit(event: Event): void;
    createControl(): FormGroup;
    bindValidations(validations: any): import("@angular/forms").ValidatorFn;
    validateAllFormFields(formGroup: FormGroup): void;
}
