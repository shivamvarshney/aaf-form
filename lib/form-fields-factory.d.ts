import { FieldConfig, FormDetails } from './field.interface';
declare class DefaultFormFields {
    private regConfig;
    private createUserForm;
    constructor();
    getFieldData(): {
        defaultFields: FieldConfig[];
        defaultFormConfig: FormDetails;
    };
    getDefaultFormConfigs(): FormDetails;
    getDefaultFields(): FieldConfig[];
}
export declare function createDefaultField(): DefaultFormFields;
export {};
