import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})

export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  // tslint:disable-next-line:no-input-rename
  @Input('name') title: string = 'Title';
  @Input() progress: number = 50;

  // tslint:disable-next-line:no-output-rename
  @Output('changeValue') progressValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    }else if ( newValue <= 0 ) {
      this.progress = 0;
    }else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.progressValue.emit( this.progress );

  }

  updateValue( value: number ) {

    if ( this.progress >= 100 && value > 0 ) {
      this.progress = 100;
      return;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value;

    this.progressValue.emit( this.progress );

  }

}
