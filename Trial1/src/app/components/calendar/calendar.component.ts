import { Component, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent{
  selected: Date | null = null;

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    const day = cellDate.getDay();
    if (view == 'month') {
      if(day == 0 )
        return (day === 0 ) ? 'highlight-date' : "";
    }
    return "";
  }
}
