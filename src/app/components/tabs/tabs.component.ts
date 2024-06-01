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
import {LocationService} from '../../location.service';

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

  destroy = new Subject()

  ngAfterContentInit() {
    this.activeComponent = this.tabs.first;
    this.tabs.changes.pipe(
        takeUntil(this.destroy),
        filter(() => this.tabs.length > 0)
    ).subscribe(() => {
      this.activeComponent = this.tabs.first;
      this.cdf.markForCheck();
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
    const deletedTab = array.splice(index, 1);
    this.tabs.reset(array);

    if (deletedTab[0].content === tab.content){
      this.activeComponent = this.tabs.first
    }
  }

  private unsubscribe() {
    this.destroy.next();
    this.destroy.complete();
  }
}
