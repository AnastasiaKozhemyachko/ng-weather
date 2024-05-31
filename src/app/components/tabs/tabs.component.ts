import {AfterContentInit, Component, ContentChildren, EventEmitter, OnDestroy, Output, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

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
    this.tabs.changes.pipe(
        takeUntil(this.destroy),
        filter(() => this.tabs.length > 0)
    ).subscribe(() => {
      this.activeComponent = this.tabs.first;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  activateTab(tab: TabComponent<TContent>) {
    this.activeComponent = tab;
  }

  close(tab: TabComponent<TContent>, index: number) {
    this.tabClose.emit(tab.content);

    const array = this.tabs.toArray();
    array.splice(index, 1);
    this.tabs.reset(array);
    this.activeComponent = this.tabs.first; //TODO: if active tab disappear set first
  }

  private unsubscribe() {
    this.destroy.next();
    this.destroy.complete();
  }
}
