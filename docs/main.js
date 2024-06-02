(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 6715);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1402);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 4056);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather.service */ 8986);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 1217);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tab/tab.component */ 3730);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 6384);
/* harmony import */ var _servises_location_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servises/location-cache.service */ 2868);
/* harmony import */ var _servises_forecast_cache_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servises/forecast-cache.service */ 1067);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// @ts-ignore
let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent, _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_5__.CurrentConditionsComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_6__.MainPageComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_7__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production
  }), _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_9__.TabComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_10__.TabsComponent],
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService, _weather_service__WEBPACK_IMPORTED_MODULE_4__.WeatherService, _servises_location_cache_service__WEBPACK_IMPORTED_MODULE_11__.LocationCacheService, _servises_forecast_cache_service__WEBPACK_IMPORTED_MODULE_12__.ForecastCacheService]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 64);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 1152);



const appRoutes = [{
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 3730:
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab.component.html?ngResource */ 3757);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component.css?ngResource */ 8082);
/* harmony import */ var _tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabComponent = class TabComponent {
  static #_ = this.propDecorators = {
    titleTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    bodyTemplateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: _tab_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  styles: [(_tab_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabComponent);


/***/ }),

/***/ 6384:
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 5605);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 7481);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ 3730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3303);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5046);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let TabsComponent = class TabsComponent {
  constructor() {
    this.tabClose = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.cdf = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngAfterContentInit() {
    // respond to changes in the tabs
    this.tabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(() => this.tabs.length > 0)).subscribe(() => {
      if (!this.activeComponent) {
        this.activateTab(this.tabs.first);
      }
      this.cdf.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  activateTab(tab) {
    this.activeComponent = tab;
  }
  close(tab, index) {
    this.tabClose.emit(tab.content);
    const array = this.tabs.toArray();
    const deletedTab = array.splice(index, 1);
    this.tabs.reset(array);
    if (deletedTab[0].content === tab.content) {
      this.activeComponent = this.tabs.first;
    }
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }],
    tabClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }]
  };
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 1217:
/*!********************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 9139);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 2340);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 4056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _servises_location_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servises/location-cache.service */ 2868);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 7965);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 2130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9681);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.cacheService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_servises_location_cache_service__WEBPACK_IMPORTED_MODULE_4__.LocationCacheService);
    // reacts to new locations
    this.conditions$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_7__.toObservable)(this.locationService.locations).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(zip => !!zip.length), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(zipCodes => {
      const requests = this.fetchData(zipCodes);
      return requests.length ? (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.forkJoin)(requests) : (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)([]);
    }));
    this.zipTrack = (index, item) => item.zip;
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  // Fetch data from cache or request it if not available
  fetchData(zipCodes) {
    return zipCodes.map(zipCode => {
      const cache = this.cacheService.getNoExpirationItem(zipCode);
      return cache ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
        zip: zipCode,
        data: cache
      }) : this.weatherService.addCurrentConditionsObservable(zipCode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(condition => ({
        zip: zipCode,
        data: condition
      })));
    });
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 64:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7854);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 8986);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6520);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
  constructor(weatherService, route) {
    this.weatherService = weatherService;
    this.forecast$ = route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => weatherService.getForecast(params['zipcode'])));
  }
  static #_ = this.ctorParameters = () => [{
    type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4056:
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let LocationService = class LocationService {
  constructor() {
    this.locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
  }
  addLocation(zipcode) {
    if (this.locations().includes(zipcode)) {
      return;
    }
    this.locations.update(value => [...value, zipcode]);
  }
  removeLocation(zipcode) {
    this.locations.update(value => value.filter(item => item !== zipcode));
  }
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], LocationService);


/***/ }),

/***/ 1152:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 8132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 6288:
/*!*******************************************!*\
  !*** ./src/app/servises/cache.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5746);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CacheService = class CacheService {
  constructor() {
    this.deleteExpiriedDate();
  }
  setData(data) {
    const transformLocalStorage = data.map(value => this.transformLocalStorage(value, this.storageKey));
    localStorage.setItem(this.storageKey, JSON.stringify(transformLocalStorage));
  }
  addData(data, key) {
    let currentValue = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const index = currentValue.findIndex(item => item.key === key);
    if (index !== -1) {
      currentValue[index] = this.transformLocalStorage(data, key);
    } else {
      currentValue = [...currentValue, this.transformLocalStorage(data, key)];
    }
    localStorage.setItem(this.storageKey, JSON.stringify(currentValue));
  }
  getData() {
    return JSON.parse(localStorage.getItem(this.storageKey)) ?? [];
  }
  getItemValue(key) {
    return this.getData()?.find(value => value.key === key)?.value;
  }
  getNoExpirationItem(key) {
    return this.getData().find(value => value.key === key && this.validDate(value.expiration))?.value;
  }
  validDate(expiration) {
    return expiration > new Date().getTime();
  }
  getDataOrDoRequest(request, zipcode) {
    const validData = this.getNoExpirationItem(zipcode);
    if (validData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(validData);
    }
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return request.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(value => this.addData(value, zipcode)));
  }
  transformLocalStorage(value, key) {
    return {
      key,
      value,
      expiration: new Date().getTime() + this.seconds
    };
  }
  deleteExpiriedDate() {
    const validDate = this.getData().filter(value => this.validDate(value.expiration));
    localStorage.setItem(this.storageKey, JSON.stringify(validDate));
  }
  static #_ = this.ctorParameters = () => [];
};
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], CacheService);


/***/ }),

/***/ 1067:
/*!****************************************************!*\
  !*** ./src/app/servises/forecast-cache.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastCacheService: () => (/* binding */ ForecastCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache.service */ 6288);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ForecastCacheService = class ForecastCacheService extends _cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService {
  constructor() {
    super(...arguments);
    this.storageKey = 'FORECAST';
    this.seconds = 7200 * 1000; //2hour
    // protected seconds = 7;
  }
};

ForecastCacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ForecastCacheService);


/***/ }),

/***/ 2868:
/*!****************************************************!*\
  !*** ./src/app/servises/location-cache.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocationCacheService: () => (/* binding */ LocationCacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache.service */ 6288);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let LocationCacheService = class LocationCacheService extends _cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService {
  constructor() {
    super(...arguments);
    this.storageKey = 'LOCATIONS';
    this.seconds = 7200 * 1000; //2hour
    // protected seconds = 7;
  }
};

LocationCacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], LocationCacheService);


/***/ }),

/***/ 8986:
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _servises_forecast_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servises/forecast-cache.service */ 1067);
/* harmony import */ var _servises_location_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servises/location-cache.service */ 2868);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;




let WeatherService = class WeatherService {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_servises_location_cache_service__WEBPACK_IMPORTED_MODULE_1__.LocationCacheService);
    this.forecastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_servises_forecast_cache_service__WEBPACK_IMPORTED_MODULE_0__.ForecastCacheService);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
  }
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'http://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  addCurrentConditionsObservable(zipcode) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.locationService.getDataOrDoRequest(this.http.get(`${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`), zipcode);
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.forecastService.getDataOrDoRequest(this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`), zipcode);
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + "art_storm.png";else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + "art_rain.png";else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + "art_light_rain.png";else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + "art_snow.png";else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + "art_clouds.png";else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + "art_fog.png";else return WeatherService_1.ICON_URL + "art_clear.png";
  }
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], WeatherService);


/***/ }),

/***/ 1402:
/*!**********************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 7606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../location.service */ 4056);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
  }
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush
})], ZipcodeEntryComponent);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 6715:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8082:
/*!*************************************************************!*\
  !*** ./src/app/components/tab/tab.component.css?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7481:
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
.tab-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #ccc;
    position: relative;
    gap: 5px;
}

.tab-item {
    display: flex;
    padding: 10px;
    cursor: pointer;
    background: #4690d0;
    color: #e6ecfa;
}

.tab-item.active {
    border-bottom: 3px solid #293185;
}

.tab-item:hover {
    background-color: #23305e;
}

.tab-item:not(.active):hover {
    border-bottom: 3px solid #ccc;
    padding-bottom: 7px;
}

.tab-body {
    border: 2px solid #232b38;
}

.tab-close {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #1256cd;
    border-radius: 15px;
    height: 25px;
    width: 25px;
}

`, "",{"version":3,"sources":["webpack://./src/app/components/tabs/tabs.component.css"],"names":[],"mappings":";AACA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf","sourcesContent":["\n.tab-header {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    border-bottom: 1px solid #ccc;\n    position: relative;\n    gap: 5px;\n}\n\n.tab-item {\n    display: flex;\n    padding: 10px;\n    cursor: pointer;\n    background: #4690d0;\n    color: #e6ecfa;\n}\n\n.tab-item.active {\n    border-bottom: 3px solid #293185;\n}\n\n.tab-item:hover {\n    background-color: #23305e;\n}\n\n.tab-item:not(.active):hover {\n    border-bottom: 3px solid #ccc;\n    padding-bottom: 7px;\n}\n\n.tab-body {\n    border: 2px solid #232b38;\n}\n\n.tab-close {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid #1256cd;\n    border-radius: 15px;\n    height: 25px;\n    width: 25px;\n}\n\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2340:
/*!********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.weather-container {
  display: flex;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/app/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;AACjB","sourcesContent":[".weather-container {\n  display: flex;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7854:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 3757:
/*!**************************************************************!*\
  !*** ./src/app/components/tab/tab.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "";

/***/ }),

/***/ 5605:
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tab-container\" *ngIf=\"activeComponent\">\n    <div class=\"tab-header\">\n        <div  *ngFor=\"let tab of tabs; let i = index\"\n              (click)=\"activateTab(tab)\"\n              [class.active]=\"tab === activeComponent\"\n             class=\"tab-item\">\n            <ng-template\n                    [ngTemplateOutlet]=\"activeComponent.titleTemplateRef\"\n                    [ngTemplateOutletContext]=\" {$implicit: tab.content}\">\n            </ng-template>\n            <p class=\"tab-close\" (click)=\"close(tab, i)\">X</p>\n        </div>\n    </div>\n    <div class=\"tab-body\">\n        <ng-template\n                [ngTemplateOutlet]=\"activeComponent.bodyTemplateRef\"\n                [ngTemplateOutletContext]=\" {$implicit: activeComponent.content}\">\n        </ng-template>\n    </div>\n</div>\n\n\n\n";

/***/ }),

/***/ 9139:
/*!*********************************************************************************!*\
  !*** ./src/app/current-conditions/current-conditions.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-tabs (tabClose)=\"locationService.removeLocation($event.zip)\">\n    <ng-container *ngFor=\"let location of conditions$ | async; let i = index; trackBy: zipTrack\">\n        <app-tab [titleTemplateRef]=\"titleTemplateRef\"\n                 [bodyTemplateRef]=\"bodyTemplate\"\n                 [content]=\"location\"\n        ></app-tab>\n    </ng-container>\n</app-tabs>\n<ng-template #titleTemplateRef let-location>\n    <h3 *ngIf=\"location\">{{location.data.name}} ({{location.zip}})</h3>\n</ng-template>\n\n<ng-template #bodyTemplate let-location>\n    <div *ngIf=\"location\" class=\"weather-container\" (click)=\"showForecast(location.zip)\">\n        <div>\n            <h3>{{location.data.name}} ({{location.zip}})</h3>\n\n            <h4>Current conditions: {{location.data.weather[0].main}}</h4>\n            <h4>Temperatures today:</h4>\n            <p>\n                Current {{location.data.main.temp | number:'.0-0'}}\n                - Max {{location.data.main.temp_max | number:'.0-0'}}\n                - Min {{location.data.main.temp_min | number:'.0-0'}}\n            </p>\n            <p>\n                <a [routerLink]=\"['/forecast', location.zip]\" >Show 5-day forecast for {{location.data.name}}</a>\n            </p>\n        </div>\n        <div>\n            <img [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\">\n        </div>\n    </div>\n</ng-template>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n  <div class=\"panel panel-default\" *ngIf=\"forecast$ | async as forecast\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast?.city.name}}</h3>\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 8132:
/*!***************************************************************!*\
  !*** ./src/app/main-page/main-page.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n\n  <app-zipcode-entry> </app-zipcode-entry>\n  <app-current-conditions></app-current-conditions>\n\n</div>\n";

/***/ }),

/***/ 7606:
/*!***********************************************************************!*\
  !*** ./src/app/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode:</h2>\n  <input type=\"text\" #zipcode placeholder=\"Zipcode\" class=\"form-control\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"locationService.addLocation(zipcode.value)\" >\n    Add location\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map