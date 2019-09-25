/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Validators } from '@angular/forms';
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
    };
    return DefaultFormFields;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZHMtZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FhZi1mb3JtLyIsInNvdXJjZXMiOlsibGliL2Zvcm0tZmllbGRzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QztJQUtJO0lBRUEsQ0FBQzs7OztJQUNELHdDQUFZOzs7SUFBWjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztZQUN6QixRQUFRLEdBQUcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3RGLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCxpREFBcUI7OztJQUFyQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDbEIsSUFBSSxFQUFDLFlBQVk7WUFDakIsS0FBSyxFQUFDLFlBQVk7U0FDckIsQ0FBQTtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMvQixDQUFDOzs7O0lBQ0QsNENBQWdCOzs7SUFBaEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2I7Z0JBQ0ksSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixJQUFJLEVBQUUsT0FBTztnQkFDYixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsV0FBVyxFQUFFO29CQUNUO3dCQUNJLElBQUksRUFBRSxVQUFVO3dCQUNoQixTQUFTLEVBQUUsVUFBVSxDQUFDLFFBQVE7d0JBQzlCLE9BQU8sRUFBRSx3QkFBd0I7cUJBQ3BDO29CQUNEO3dCQUNJLElBQUksRUFBRSxTQUFTO3dCQUNmLFNBQVMsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQzt3QkFDNUMsT0FB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Ozs7O0lBQ2pDLDJDQUFtQzs7Ozs7QUFzSnZDLE1BQU0sVUFBVSxrQkFBa0I7SUFDOUIsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkQ29uZmlnLEZvcm1EZXRhaWxzIH0gZnJvbSAnLi9maWVsZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuY2xhc3MgRGVmYXVsdEZvcm1GaWVsZHMge1xyXG5cclxuICAgIHByaXZhdGUgcmVnQ29uZmlnOiBGaWVsZENvbmZpZ1tdO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVVc2VyRm9ybTpGb3JtRGV0YWlscztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldEZpZWxkRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmdldERlZmF1bHRGaWVsZHMoKTtcclxuICAgICAgICB0aGlzLmdldERlZmF1bHRGb3JtQ29uZmlncygpO1xyXG4gICAgICAgIGxldCBmaWVsZE9iaiA9IHsgZGVmYXVsdEZpZWxkczogdGhpcy5yZWdDb25maWcsZGVmYXVsdEZvcm1Db25maWc6dGhpcy5jcmVhdGVVc2VyRm9ybSB9O1xyXG4gICAgICAgIHJldHVybiBmaWVsZE9iajtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZWZhdWx0Rm9ybUNvbmZpZ3MoKXtcclxuICAgICAgICB0aGlzLmNyZWF0ZVVzZXJGb3JtID0ge1xyXG4gICAgICAgICAgICBuYW1lOidjcmVhdGVVc2VyJyxcclxuICAgICAgICAgICAgY2xhc3M6J2NyZWF0ZVVzZXInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVVzZXJGb3JtO1xyXG4gICAgfVxyXG4gICAgZ2V0RGVmYXVsdEZpZWxkcygpIHtcclxuICAgICAgICB0aGlzLnJlZ0NvbmZpZyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbnB1dFwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRmlyc3QgbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiZm5hbWVcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSG9sZGVyOiAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRmlyc3QgbmFtZSBpcyBSZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGF0dGVyblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucGF0dGVybihcIl5bYS16QS1aXSskXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFjY2VwdCBvbmx5IHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRlIE9mIEJpcnRoXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImRvYlwiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VIb2xkZXI6ICdkZC1tbS15eScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRGF0ZSBvZiBCaXJ0aCBpcyBSZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImlucHV0XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJNb2JpbGUgTnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2JpbGVub1wiLFxyXG4gICAgICAgICAgICAgICAgcGxhY2VIb2xkZXI6ICdOdW1iZXInLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicmVxdWlyZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1vYmlsZSBOdW1iZXIgaXMgUmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhdHRlcm5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLnBhdHRlcm4oXCJeWzAtOV0rJFwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBY2NlcHQgb25seSBudW1iZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW5wdXRcIixcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkxhc3QgbmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibG5hbWVcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlSG9sZGVyOiAnTmFtZScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTGFzdCBuYW1lIGlzIFJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXR0ZXJuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5wYXR0ZXJuKFwiXlthLXpBLVpdKyRcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWNjZXB0IG9ubHkgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNlbGVjdFwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUm9sZVwiLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJyb2xlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NlbGVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FkbWluJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdBZG1pbidcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBZ2VudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQWdlbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSb2xlIGlzIFJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQcmltYXJ5IExhbmd1YWdlXCIsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInByaW1hcnlsYW5ndWFnZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTd2FoaWxpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdTd2FoaWxpJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyZXF1aXJlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUHJpbWFyeSBMYW5ndWFnZSBpcyBSZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQ3JlYXRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVnQ29uZmlnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEZpZWxkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0Rm9ybUZpZWxkcygpO1xyXG59XHJcbiJdfQ==