import {AfterContentInit, Component, ContentChildren, DestroyRef, Input, OnDestroy, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import { NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
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
export class TabsComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeComponent!: TabComponent;

  notifier = new Subject()

  ngAfterContentInit() {
    this.tabs.changes.pipe(
        takeUntil(this.notifier),
        filter(() => this.tabs.length > 0)
    ).subscribe(() => {
      this.activeComponent = this.tabs.first;
      this.unsubscribe();
    });
  }

  activateTab(tab: TabComponent) {
    this.activeComponent = tab;
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  private unsubscribe() {
    this.notifier.next();
    this.notifier.complete();
  }
}
