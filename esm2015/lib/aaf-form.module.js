/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { MaterialModules } from './material.module';
import { CommonModule } from '@angular/common';
import { AafFormComponent } from './aaf-form.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// components
import { InputComponent } from "./aaf-form-fields/input/input.component";
import { ButtonComponent } from "./aaf-form-fields/button/button.component";
import { SelectComponent } from "./aaf-form-fields/select/select.component";
import { DateComponent } from "./aaf-form-fields/date/date.component";
import { RadiobuttonComponent } from "./aaf-form-fields/radiobutton/radiobutton.component";
import { CheckboxComponent } from "./aaf-form-fields/checkbox/checkbox.component";
import { AafFormFieldDirective } from "./aaf-form-field.directive";
export class AafFormModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFmLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYWFmLWZvcm0vIiwic291cmNlcyI6WyJsaWIvYWFmLWZvcm0ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBZ0NuRSxNQUFNLE9BQU8sYUFBYTs7O1lBNUJ6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixlQUFlO29CQUNmLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixpQkFBaUI7aUJBQ2xCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixhQUFhO29CQUNiLG9CQUFvQjtvQkFDcEIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZXMgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWFmRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vYWFmLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IE5neFVpTG9hZGVyTW9kdWxlIH0gZnJvbSAnbmd4LXVpLWxvYWRlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL2lucHV0L2lucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWFmLWZvcm0tZmllbGRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWxlY3RDb21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvc2VsZWN0L3NlbGVjdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERhdGVDb21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvZGF0ZS9kYXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmFkaW9idXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9hYWYtZm9ybS1maWVsZHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveENvbXBvbmVudCB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkcy9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFhZkZvcm1GaWVsZERpcmVjdGl2ZSB9IGZyb20gXCIuL2FhZi1mb3JtLWZpZWxkLmRpcmVjdGl2ZVwiO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50LFxuICAgIEFhZkZvcm1GaWVsZERpcmVjdGl2ZSxcbiAgICBBYWZGb3JtQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRlcmlhbE1vZHVsZXMsXG4gICAgTmd4VWlMb2FkZXJNb2R1bGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgSW5wdXRDb21wb25lbnQsXG4gICAgQnV0dG9uQ29tcG9uZW50LFxuICAgIFNlbGVjdENvbXBvbmVudCxcbiAgICBEYXRlQ29tcG9uZW50LFxuICAgIFJhZGlvYnV0dG9uQ29tcG9uZW50LFxuICAgIENoZWNrYm94Q29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtBYWZGb3JtQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBYWZGb3JtTW9kdWxlIHsgfVxuIl19