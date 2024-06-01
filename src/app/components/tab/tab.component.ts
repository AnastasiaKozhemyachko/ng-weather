import {ChangeDetectionStrategy, Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent<TContent> {
  @Input() titleTemplateRef!: TemplateRef<TContent>;
  @Input() bodyTemplateRef!: TemplateRef<TContent>;
  @Input() content?: TContent;
}
