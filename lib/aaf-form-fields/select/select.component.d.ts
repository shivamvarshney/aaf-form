import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { MatOption } from '@angular/material';
export declare class SelectComponent implements OnInit {
    field: FieldConfig;
    group: FormGroup;
    allSelected: MatOption;
    constructor();
    ngOnInit(): void;
    toggleAllSelection(): void;
    tosslePerOne(all: any): boolean;
}
