import { Component, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgxDaterangepickerBootstrapComponent } from "ngx-daterangepicker-bootstrap";
import dayjs, { Dayjs } from "dayjs";
import { DatePipe } from "@angular/common";

export function formatDate(date: any, format: string): string {
    return new DatePipe("en-US").transform(date, format)!.toString();
}

@Component({
    selector: "app-date-picker-inline",
    standalone: true,
    imports: [FormsModule, NgxDaterangepickerBootstrapComponent],
    template: `<ngx-daterangepicker-bootstrap (datesUpdated)="datesUpdatedInline($event)" [autoApply]="true" [singleDatePicker]="true" [locale]="locale"> </ngx-daterangepicker-bootstrap>`,
})
export class DatePickerInlineComponent {
    locale: {
        firstDay: number;
        startDate: Dayjs;
        endDate: Dayjs;
        format: string;
    } = {
        firstDay: 1,
        startDate: dayjs().startOf("day"),
        endDate: dayjs().endOf("day"),
        format: "DD-MM-YYYY",
    };
    tooltips: { date: Dayjs; text: string }[] = [
        { date: dayjs(), text: "Today is just unselectable" },
        { date: dayjs().add(2, "days"), text: "Yeeeees!!!" },
    ];

    public currentDay: { start: string; end: string; label: string } = {
        start: formatDate(dayjs().startOf("day"), "YYYY-DD-DD"),
        end: formatDate(dayjs().endOf("day"), "YYYY-MM-dd"),
        label: "Today",
    };

    constructor() {}

    datesUpdatedInline($event: Object) {
        console.log("inline", $event);
    }
}
