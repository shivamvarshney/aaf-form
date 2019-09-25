/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    DefaultFormFields.prototype.regConfig;
    /**
     * @type {?}
     * @private
     */
    DefaultFormFields.prototype.createUserForm;
}
/**
 * @return {?}
 */
export function createDefaultField() {
    return new DefaultFormFields();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZHMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FhZi1mb3JtLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxNQUFNLGlCQUFpQjtJQUtuQjtJQUVBLENBQUM7Ozs7SUFDRCxZQUFZO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O1lBQ3pCLFFBQVEsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDdEYsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHFCQUFxQjtRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ2xCLElBQUksRUFBQyxZQUFZO1lBQ2pCLEtBQUssRUFBQyxZQUFZO1NBQ3JCLENBQUE7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQzs7OztJQUNELGdCQUFnQjtRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYjtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsWUFBWTtnQkFDbkIsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLElBQUksRUFBRSxPQUFPO2dCQUNiLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixXQUFXLEVBQUU7b0JBQ1Q7d0JBQ0ksSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLFNBQVMsRUFBRSxVQUFVLENBQUMsUUFBUTt3QkFDOUIsT0FBTyxFQUFFLHdCQUF3QjtxQkFDcEM7b0JBQ0Q7d0JBQ0ksSUFBSSxFQUFFLFNBQVM7d0JBQ2YsU0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUM1QyxPQUFPLEVBQUUsa0JB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a0JBQWtCO0lBQzlCLE9BQU8sSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZENvbmZpZyxGb3JtRGV0YWlscyB9IGZyb20gJy4vZmllbGQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNsYXNzIERlZmF1bHRGb3JtRmllbGRzIHtcclxuXHJcbiAgICBwcml2YXRlIHJlZ0NvbmZpZzogRmllbGRDb25maWdbXTtcclxuICAgIHByaXZhdGUgY3JlYXRlVXNlckZvcm06Rm9ybURldGFpbHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBnZXRGaWVsZERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0RmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0Rm9ybUNvbmZpZ3MoKTtcclxuICAgICAgICBsZXQgZmllbGRPYmogPSB7IGRlZmF1bHRGaWVsZHM6IHRoaXMucmVnQ29uZmlnLGRlZmF1bHRGb3JtQ29uZmlnOnRoaXMuY3JlYXRlVXNlckZvcm0gfTtcclxuICAgICAgICByZXR1cm4gZmllbGRPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdEZvcm1Db25maWdzKCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVVc2VyRm9ybSA9IHtcclxuICAgICAgICAgICAgbmFtZTonY3JlYXRlVXNlcicsXHJcbiAgICAgICAgICAgIGNsYXNzOidjcmVhdGVVc2VyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVVc2VyRm9ybTtcclxuICAgIH1cclxuICAgIGdldERlZmF1bHRGaWVsZHMoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdDb25maWcgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZpcnN0IG5hbWVcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZUhvbGRlcjogJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkZpcnN0IG5hbWUgaXMgUmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdHRlcm5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXCJeW2EtekEtWl0rJFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBY2NlcHQgb25seSB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0ZSBPZiBCaXJ0aFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJkb2JcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSG9sZGVyOiAnZGQtbW0teXknLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkRhdGUgb2YgQmlydGggaXMgUmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTW9iaWxlIE51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9iaWxlbm9cIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSG9sZGVyOiAnTnVtYmVyJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJNb2JpbGUgTnVtYmVyIGlzIFJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5wYXR0ZXJuKFwiXlswLTldKyRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWNjZXB0IG9ubHkgbnVtYmVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJMYXN0IG5hbWVcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZUhvbGRlcjogJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkxhc3QgbmFtZSBpcyBSZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF0dGVyblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucGF0dGVybihcIl5bYS16QS1aXSskXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFjY2VwdCBvbmx5IHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzZWxlY3RcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJvbGVcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwicm9sZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZG1pbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQWRtaW4nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWdlbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0FnZW50J1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUm9sZSBpcyBSZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUHJpbWFyeSBMYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwcmltYXJ5bGFuZ3VhZ2VcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnU3dhaGlsaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnU3dhaGlsaSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlByaW1hcnkgTGFuZ3VhZ2UgaXMgUmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNyZWF0ZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlZ0NvbmZpZztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRGaWVsZCgpIHtcclxuICAgIHJldHVybiBuZXcgRGVmYXVsdEZvcm1GaWVsZHMoKTtcclxufVxyXG4iXX0=