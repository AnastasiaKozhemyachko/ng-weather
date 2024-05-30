import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() tabName? = 'default';
  @Input() titleTemplateRef!: TemplateRef<any>;
  @Input() bodyTemplateRef!: TemplateRef<any>;
  @Input() content?: any;
}
