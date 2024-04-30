import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-animals',
  templateUrl: './show-animals.component.html',
  styleUrls: ['./show-animals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowAnimalsComponent implements OnInit {

  @Input() data: string[] = [];
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.data);

  }

  refresh() {
    this.cd.detectChanges();
    console.log(this.data);

  }

}
