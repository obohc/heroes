import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {

  @ViewChild("input") inputRef?: ElementRef;
  @Output() onUserInput: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit(): void {    
    fromEvent(this.inputRef?.nativeElement, "keyup").pipe(
      distinctUntilChanged(),
      debounceTime(300),
    )
    .subscribe((event: any) => this.onUserInput.emit(event.target.value))
  }
}
