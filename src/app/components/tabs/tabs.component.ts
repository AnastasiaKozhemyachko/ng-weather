import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter, inject,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
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
  styleUrl: './tabs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent<TContent> implements AfterContentInit, OnDestroy {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent<TContent>>;
  @Output() tabClose = new EventEmitter<TContent>();
  protected cdf = inject(ChangeDetectorRef);

  activeComponent!: TabComponent<TContent>;

  destroy$ = new Subject();

  ngAfterContentInit() {
    // Subscribe to changes in the tabs QueryList
    this.tabs.changes.pipe(
        takeUntil(this.destroy$),
        filter(() => this.tabs.length > 0)
    ).subscribe(() => this.ensureActiveTab());

    // Ensure there is an active tab initially if tabs are already present
    if (this.tabs.length > 0) {
      this.ensureActiveTab();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  activateTab(tab: TabComponent<TContent>) {
    this.activeComponent = tab;
  }

  closeTab(tab: TabComponent<TContent>, index: number) {
    this.tabClose.emit(tab.content);

    const tabsArray = this.tabs.toArray();
    tabsArray.splice(index, 1);
    this.tabs.reset(tabsArray);

    if (this.activeComponent === tab) {
      this.activeComponent = this.tabs.first || null;
    }

    this.cdf.markForCheck();
  }

  // Method to ensure there is an active tab
  private ensureActiveTab() {
    if (!this.activeComponent) {
      this.activateTab(this.tabs.first);
    }
    this.cdf.markForCheck();
  }
}
