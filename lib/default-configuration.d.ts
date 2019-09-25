import { FormConfiguration } from './configuration.interface';
export declare class DefaultFormConfiguration implements FormConfiguration {
    getFormConfiguration(): {
        defaultFields: import("./field.interface").FieldConfig[];
        defaultFormConfig: import("./field.interface").FormDetails;
    };
}
