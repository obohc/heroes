import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;
  @Input() label: string = "";
  @Output() onUserInput: EventEmitter<string> = new EventEmitter<string>();

  ngAfterViewInit(): void {
    fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
      distinctUntilChanged(), 
      debounceTime(300),
      map( (event: Event) => (event.target as HTMLInputElement).value )
    )
    .subscribe((query: string) => this.onUserInput.emit(query));
  }
}

