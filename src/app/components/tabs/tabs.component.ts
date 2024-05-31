import {AfterContentInit, Component, ContentChildren, EventEmitter, OnDestroy, OnInit, Output, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NgForOf,
    NgTemplateOutlet,
    NgIf
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent<TContent> implements AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent<TContent>>;
  @Output() tabClose = new EventEmitter<TContent>();

  activeComponent!: TabComponent<TContent>;

  destroy = new Subject()

  ngAfterContentInit() {
    this.activeComponent = this.tabs.first;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  activateTab(tab: TabComponent<TContent>) {
    this.activeComponent = tab;
  }

  close(index: number) {
    const array = this.tabs.toArray()
    array.splice(index, 1);
    this.tabs.reset(array);
    this.activeComponent = this.tabs.first;
    this.tabClose.emit(this.activeComponent?.content);
  }

  private unsubscribe() {
    this.destroy.next();
    this.destroy.complete();
  }
}
