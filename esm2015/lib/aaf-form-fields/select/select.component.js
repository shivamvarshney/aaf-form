/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild } from "@angular/core";
import { MatOption } from '@angular/material';
export class SelectComponent {
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
if (false) {
    /** @type {?} */
    SelectComponent.prototype.field;
    /** @type {?} */
    SelectComponent.prototype.group;
    /** @type {?} */
    SelectComponent.prototype.allSelected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FhZi1mb3JtLyIsInNvdXJjZXMiOlsibGliL2FhZi1mb3JtLWZpZWxkcy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25GLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQXVCOUMsTUFBTSxPQUFPLGVBQWU7SUFJMUIsZ0JBQWdCLENBQUM7Ozs7SUFDakIsUUFBUSxLQUFLLENBQUM7Ozs7SUFFZCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7O0lBQ0QsWUFBWSxDQUFDLEdBQUc7UUFDZCxJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLEtBQUssRUFBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztDQWlCWDthQUVBOzs7OzswQkFJRSxTQUFTLFNBQUMsYUFBYTs7OztJQUZ4QixnQ0FBbUI7O0lBQ25CLGdDQUFpQjs7SUFDakIsc0NBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tIFwiLi4vLi4vZmllbGQuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IE1hdE9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYXBwLXNlbGVjdFwiLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZnVsbC13aWR0aCBtYXJnaW4tdG9wXCIgW2Zvcm1Hcm91cF09XCJncm91cFwiICpuZ0lmPVwiZmllbGQudmlzaWJpbGl0eVwiPlxyXG48bWF0LXNlbGVjdCBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIiBbcmVxdWlyZWRdPVwiZmllbGQudmFsaWRhdGlvbnNcIiBbbXVsdGlwbGVdPVwiZmllbGQuaXNNdWx0aXNlbGVjdFwiPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmlzTXVsdGlzZWxlY3Q7dGhlbiBtdWx0aVNlbGVjdFRlbXBsYXRlIGVsc2Ugc2ltcGxlU2VsZWN0VGVtcGxhdGVcIj48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNtdWx0aVNlbGVjdFRlbXBsYXRlPlxyXG48bWF0LW9wdGlvbiAqbmdJZj1cImZpZWxkLmlzTXVsdGlzZWxlY3RcIiAjYWxsU2VsZWN0ZWQgKGNsaWNrKT1cInRvZ2dsZUFsbFNlbGVjdGlvbigpXCIgW3ZhbHVlXT1cIjBcIj5BbGw8L21hdC1vcHRpb24+XHJcbjxtYXQtb3B0aW9uIChjbGljayk9XCJ0b3NzbGVQZXJPbmUoYWxsU2VsZWN0ZWQudmlld1ZhbHVlKVwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZpZWxkLm9wdGlvbnNcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPnt7aXRlbS5sYWJlbH19PC9tYXQtb3B0aW9uPlxyXG48L25nLXRlbXBsYXRlPlxyXG48bmctdGVtcGxhdGUgI3NpbXBsZVNlbGVjdFRlbXBsYXRlPlxyXG48bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBmaWVsZC5vcHRpb25zXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIj57e2l0ZW0ubGFiZWx9fTwvbWF0LW9wdGlvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPC9tYXQtc2VsZWN0PlxyXG48bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGZpZWxkLnZhbGlkYXRpb25zO1wiIG5nUHJvamVjdEFzPVwibWF0LWVycm9yXCI+XHJcbjxtYXQtZXJyb3IgKm5nSWY9XCJncm91cC5nZXQoZmllbGQubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPnt7dmFsaWRhdGlvbi5tZXNzYWdlfX08L21hdC1lcnJvcj5cclxuPC9uZy1jb250YWluZXI+XHJcbjwvbWF0LWZvcm0tZmllbGQ+ICBcclxuYCxcclxuICBzdHlsZXM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGZpZWxkOiBGaWVsZENvbmZpZztcclxuICBncm91cDogRm9ybUdyb3VwO1xyXG4gIEBWaWV3Q2hpbGQoJ2FsbFNlbGVjdGVkJykgYWxsU2VsZWN0ZWQ6IE1hdE9wdGlvbjtcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gIHRvZ2dsZUFsbFNlbGVjdGlvbigpIHtcclxuICAgIGlmICh0aGlzLmFsbFNlbGVjdGVkLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQubmFtZSkucGF0Y2hWYWx1ZShbLi4udGhpcy5maWVsZC5vcHRpb25zLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpLCAwXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdyb3VwLmdldCh0aGlzLmZpZWxkLm5hbWUpLnBhdGNoVmFsdWUoW10pO1xyXG4gICAgfVxyXG4gIH1cclxuICB0b3NzbGVQZXJPbmUoYWxsKSB7XHJcbiAgICBpZih0aGlzLmZpZWxkLmlzTXVsdGlzZWxlY3QgPT0gZmFsc2Upe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFsbFNlbGVjdGVkLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuYWxsU2VsZWN0ZWQuZGVzZWxlY3QoKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZ3JvdXAuZ2V0KHRoaXMuZmllbGQubmFtZSkudmFsdWUubGVuZ3RoID09IHRoaXMuZmllbGQub3B0aW9ucy5sZW5ndGgpXHJcbiAgICAgIHRoaXMuYWxsU2VsZWN0ZWQuc2VsZWN0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==