webpackJsonp([0],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Главная" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Расписание" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Обучаемые" tabIcon="contacts"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_events_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_event__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, studentsService, modalCtrl, eventsService) {
        this.navCtrl = navCtrl;
        this.studentsService = studentsService;
        this.modalCtrl = modalCtrl;
        this.eventsService = eventsService;
        this.date = new Date(Date.now()).toISOString().slice(0, 10);
        this.timeoffset = 'day';
        this.daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', "Вс"];
    }
    AboutPage.prototype.onWatch = function (evt) {
        var _this = this;
        if (evt === 'week') {
            setTimeout(function () {
                _this.renderTable();
            });
        }
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.studentsService.students.subscribe(function (students) { return _this.students = students; });
        this.eventsService.events.subscribe(function (events) {
            _this.events = events;
            var container = document.querySelector('.timetable');
            if (_this.events && _this.events.length && container) {
                _this.renderTable();
            }
        });
    };
    AboutPage.prototype.addEvent = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_event__["a" /* ModalEvent */]);
        modal.present();
    };
    AboutPage.prototype.renderTable = function () {
        var _this = this;
        this.timetable = new Timetable();
        var minHour = this.events
            .map(function (event) { return (new Date(event.startTime)).getHours(); })
            .sort(function (a, b) { return a - b; })[0];
        var maxHour = this.events
            .map(function (event) { return (new Date(event.endTime)).getHours(); })
            .sort(function (a, b) { return a - b; })[this.events.length - 1] + 1;
        this.timetable.setScope(minHour, maxHour);
        this.timetable.addLocations(this.daysOfWeek);
        this.events.forEach(function (event) {
            var student = _this.students.find(function (student) { return student.id === event.studentId; });
            var dayOfWeek = _this.daysOfWeek[_this.getDay(event.startTime)];
            _this.timetable.addEvent(student.name, dayOfWeek, new Date(event.startTime), new Date(event.endTime));
        });
        var renderer = new Timetable.Renderer(this.timetable);
        renderer.draw('.timetable');
    };
    AboutPage.prototype.getDay = function (date) {
        var d = (new Date(date)).getDay();
        return d === 0 ? 6 : d - 1;
    };
    AboutPage.prototype.findStudent = function (studentId) {
        var student = this.students.find(function (student) { return student.id === studentId; });
        return student.name + " " + student.lastname;
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Расписание\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div padding>\n        <ion-segment [(ngModel)]="timeoffset" (ngModelChange)="onWatch($event)">\n          <ion-segment-button value="day">\n            День\n          </ion-segment-button>\n          <ion-segment-button value="all">\n            Все\n          </ion-segment-button>\n          <ion-segment-button value="week">\n            Неделя\n          </ion-segment-button>\n          \n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="timeoffset">\n        <ng-container *ngSwitchCase="\'day\'">\n          <ion-item>\n            <ion-label>Дата</ion-label>\n            <ion-datetime displayFormat="DD.MM.YYYY" [(ngModel)]="date"></ion-datetime>\n          </ion-item>\n\n          <ion-list *ngIf="students && students.length">\n            <ion-item-sliding *ngFor="let event of events | forThisDate:date | sort">\n              <ion-item>\n                <ion-avatar item-start>\n                  <img src="https://ionicframework.com/dist/preview-app/www/assets/img/avatar-finn.png">\n                </ion-avatar>\n                <h2>{{event.startTime | date:"HH:mm"}} - {{event.endTime | date:"HH:mm"}}</h2>\n                <h3>{{findStudent(event.studentId)}}</h3>\n              </ion-item>\n              <ion-item-options side="left">\n                <button ion-button color="primary">\n                  <ion-icon name="text"></ion-icon>\n                  Text\n                </button>\n                <button ion-button color="secondary">\n                  <ion-icon name="call"></ion-icon>\n                  Call\n                </button>\n              </ion-item-options>\n              <ion-item-options side="right">\n                <button ion-button color="primary">\n                  <ion-icon name="mail"></ion-icon>\n                  Email\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ng-container>\n\n        <ng-container *ngSwitchCase="\'week\'">\n          <div class="timetable"></div>\n        </ng-container>\n      </div>\n\n      <div [ngSwitch]="timeoffset">\n          <ng-container *ngSwitchCase="\'all\'">  \n            <ion-list>\n              <ion-item-sliding *ngFor="let event of events | sort">\n                <ion-item>\n                  <ion-avatar item-start>\n                    <img src="https://ionicframework.com/dist/preview-app/www/assets/img/avatar-finn.png">\n                  </ion-avatar>\n                  <h2>{{event.startTime | date:"dd.MM.yy HH:mm"}}-{{event.endTime | date:"HH:mm"}}</h2>\n                  <h3>{{findStudent(event.studentId)}}</h3>\n                </ion-item>\n                <ion-item-options side="left">\n                  <button ion-button color="primary">\n                    <ion-icon name="text"></ion-icon>\n                    Text\n                  </button>\n                  <button ion-button color="secondary">\n                    <ion-icon name="call"></ion-icon>\n                    Call\n                  </button>\n                </ion-item-options>\n                <ion-item-options side="right">\n                  <button ion-button color="primary">\n                    <ion-icon name="mail"></ion-icon>\n                    Email\n                  </button>\n                </ion-item-options>\n              </ion-item-sliding>\n            </ion-list>\n          </ng-container>\n  \n          <ng-container *ngSwitchCase="\'week\'">\n            <div class="timetable"></div>\n          </ng-container>\n        </div>\n\n      <ion-fab top right edge>\n          <button color="secondary" ion-fab mini (tap)="addEvent()"><ion-icon name="add"></ion-icon></button>\n      </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_students_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__services_events_service__["a" /* EventsService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_groups_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_events_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalEvent = /** @class */ (function () {
    function ModalEvent(platform, params, studentsService, groupsService, eventsService, viewCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.studentsService = studentsService;
        this.groupsService = groupsService;
        this.eventsService = eventsService;
        this.viewCtrl = viewCtrl;
        this.groupsService.groups.subscribe(function (groups) { return _this.groups = groups; });
        this.studentsService.students.subscribe(function (students) { return _this.students = students; });
    }
    ModalEvent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalEvent.prototype.addEvent = function () {
        var startTime = this.date + "T" + this.startTime;
        var endTime = this.date + "T" + this.endTime;
        this.eventsService.addEvent(this.selectedStudent, startTime, endTime);
        this.dismiss();
    };
    ModalEvent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/about/modal-event.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Запись на занятие\n        </ion-title>\n        <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Отмена</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-list>\n            <ion-item *ngIf="groups && groups.length">\n                <ion-label>Группа</ion-label>\n                <ion-select [(ngModel)]="selectedGroup">\n                <ion-option *ngFor="let group of groups; let i = index" [value]="group.id" [selected]="i == (groups.length-1)">\n                    {{group.id}}\n                </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item *ngIf="selectedGroup">\n                <ion-label>Обучаемый</ion-label>\n                <ion-select [(ngModel)]="selectedStudent">\n                <ion-option *ngFor="let student of students | groupFilter:selectedGroup" [value]="student.id">\n                    {{ student.name }} {{student.lastname}}\n                </ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Дата</ion-label>\n                <ion-datetime displayFormat="DD.MM.YYYY" [(ngModel)]="date"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Время начала занятия</ion-label>\n                <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="startTime"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Время окончания занятия</ion-label>\n                <ion-datetime displayFormat="HH:mm" pickerFormat="HH mm" [(ngModel)]="endTime"></ion-datetime>\n            </ion-item>\n\n            <ion-item>\n                <button color="secondary" (tap)="addEvent()" ion-button>Добавить</button>\n            </ion-item>\n        </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/about/modal-event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_students_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_groups_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_4__services_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalEvent);
    return ModalEvent;
}());

//# sourceMappingURL=modal-event.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_page__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_group__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_groups_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, studentsService, groupService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.studentsService = studentsService;
        this.groupService = groupService;
        this.modalCtrl = modalCtrl;
        this.groupService.groups.subscribe(function (groups) {
            _this.groups = groups;
            if (_this.groups && _this.groups.length) {
                _this.selectedGroup = _this.groups[_this.groups.length - 1].id;
            }
        });
        this.studentsService.students.subscribe(function (students) { return _this.students = students; });
    }
    ContactPage.prototype.itemSelected = function (student) {
        this.presentModal(student);
    };
    ContactPage.prototype.addStudent = function () {
        this.presentModal({ id: null });
    };
    ContactPage.prototype.addGroup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_group__["a" /* ModalGroup */]);
        modal.present();
    };
    ContactPage.prototype.presentModal = function (student) {
        var studentId = student.id;
        var selectedGroup = this.selectedGroup;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_page__["a" /* ModalPage */], { studentId: studentId, selectedGroup: selectedGroup });
        modal.present();
    };
    ContactPage.prototype.onSelectGroup = function (group) {
        this.studentsOfGroup = this.students.filter(function (student) { return student.group === group; });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Обучаемые\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label>Группа</ion-label>\n            <ion-select [(ngModel)]="selectedGroup" (ngModelChange)="onSelectGroup($event)">\n              <ion-option *ngFor="let group of groups; let i = index" [value]="group.id" [selected]="i == (groups.length-1)">\n                {{group.id}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n  \n    <ion-card-content>\n      <ion-item-group *ngIf="students && students.length; else noStudents">\n        <ion-list-header>\n            Cписок группы\n        </ion-list-header>\n        <button ion-item *ngFor="let student of students | groupFilter:selectedGroup" (click)="itemSelected(student)">\n            {{ student.name }} {{student.lastname}}\n        </button>\n      </ion-item-group>\n      <ng-template #noStudents>В этой группе ещё нет обучаемых</ng-template>\n    </ion-card-content>\n  \n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab (click)="addStudent()"><ion-icon ios="ios-person" md="md-person"></ion-icon></button>\n      <button ion-fab (click)="addGroup()"><ion-icon ios="ios-people" md="md-people"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__services_students_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_5__services_groups_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_groups_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = /** @class */ (function () {
    function ModalPage(platform, params, studentsService, groupsService, viewCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.studentsService = studentsService;
        this.groupsService = groupsService;
        this.viewCtrl = viewCtrl;
        this.isEditing = false;
        var studentId = this.params.get('studentId');
        var selectedGroup = this.params.get('selectedGroup');
        console.log('group', selectedGroup);
        this.studentsService.students.subscribe(function (res) {
            _this.students = res;
            if (studentId) {
                _this.student = _this.students.find(function (student) { return student.id === studentId; });
            }
            else {
                _this.isNewStudent = true;
                _this.student = {
                    id: Date.now(),
                    name: '',
                    lastname: '',
                    age: 0,
                    tel: '',
                    address: '',
                    email: '',
                    group: 59,
                    hourscount: 0
                };
            }
        });
        this.groupsService.groups.subscribe(function (groups) { return _this.groups = groups; });
    }
    ModalPage.prototype.ngOnInit = function () {
        this.isEditing = this.isNewStudent;
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage.prototype.save = function () {
        this.studentsService.setStudent(this.student);
        this.dismiss();
    };
    ModalPage.prototype.delete = function () {
        this.studentsService.deleteStudent(this.student);
        this.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/contact/modal-page.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Обучаемый\n        </ion-title>\n        <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Отмена</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf="student">\n        <ion-list *ngIf="!isEditing">\n            <ion-item>\n                <ion-avatar item-start>\n                <img src="https://ionicframework.com/dist/preview-app/www/assets/img/avatar-gollum.jpg">\n                </ion-avatar>\n                <h2>{{student?.name}} {{student?.lastname}}</h2>\n                <p>Группа {{student?.group}}</p>\n            </ion-item>\n            <ion-item *ngIf="student.tel">\n                <a [href]="\'tel:\' + student.tel">{{student.tel}}</a>\n                <ion-note item-end>\n                    <a [href]="\'viber://chat?number=\' + student.tel"><ion-icon name="logo-vimeo"></ion-icon></a>\n                </ion-note>\n            </ion-item>\n            <ion-item>\n                Возраст\n                <ion-note item-end>{{student?.age}}</ion-note>\n            </ion-item>\n            <ion-item>\n                Email\n                <ion-note item-end>{{student?.email}}</ion-note>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf="isEditing">\n            <form (ngSubmit)="save()" #heroForm="ngForm">\n                <ion-item class="form-group">\n                    <ion-label floating>Имя</ion-label>\n                    <ion-input class="form-control" name="name" type="text" [(ngModel)]="student.name" required></ion-input>\n                </ion-item>\n        \n                <ion-item>\n                    <ion-label floating>Фамилия</ion-label>\n                    <ion-input type="text" name="lastname" [(ngModel)]="student.lastname" required></ion-input>\n                </ion-item>\n        \n                <ion-item>\n                    <ion-label floating>Возраст</ion-label>\n                    <ion-input type="number" name="age" [(ngModel)]="student.age"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label floating>Телефон</ion-label>\n                    <ion-input type="text" name="tel" [(ngModel)]="student.tel"></ion-input>\n                </ion-item>\n        \n                <ion-item>\n                    <ion-label floating>Email</ion-label>\n                    <ion-input type="text" name="email" [(ngModel)]="student.email"></ion-input>\n                </ion-item>\n        \n                <ion-item *ngIf="groups && groups.length">\n                    <ion-label>Группа</ion-label>\n                    <ion-select  name="group" [(ngModel)]="student.group">\n                        <ion-option *ngFor="let group of groups" [value]="group.id">\n                            {{group.id}}\n                        </ion-option>\n                    </ion-select>\n                </ion-item>\n        \n                <ion-item>\n                    <div style="display: flex; justify-content: space-between; align-items: center;">\n                        <button  [disabled]="!heroForm.form.valid"type="submit" ion-fab mini color="secondary">\n                            <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>\n                        </button>\n                        <button *ngIf="!isNewStudent" ion-fab mini color="danger" (click)="delete()">\n                            <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n                        </button>\n                    </div>\n                </ion-item>\n            </form>\n    \n        </ion-list>\n\n        <ion-list *ngIf="!isNewStudent">\n            <ion-item>\n                <ion-label>Редактировать</ion-label>\n                <ion-toggle [(ngModel)]="isEditing"></ion-toggle>\n            </ion-item>\n        </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/contact/modal-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_students_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_groups_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal-page.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_groups_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalGroup = /** @class */ (function () {
    function ModalGroup(platform, params, studentsService, groupsService, viewCtrl) {
        var _this = this;
        this.platform = platform;
        this.params = params;
        this.studentsService = studentsService;
        this.groupsService = groupsService;
        this.viewCtrl = viewCtrl;
        this.groupsService.groups.subscribe(function (groups) {
            _this.groups = groups;
            _this.groups.sort(function (a, b) { return a.id - b.id; });
            _this.group = {
                id: groups[groups.length - 1].id + 1,
                description: ''
            };
        });
    }
    ModalGroup.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalGroup.prototype.save = function () {
        this.groupsService.addGroup(this.group.id);
        this.dismiss();
    };
    ModalGroup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/contact/modal-group.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Группа\n        </ion-title>\n        <ion-buttons start>\n        <button ion-button (click)="dismiss()">\n            <span ion-text color="primary" showWhen="ios">Отмена</span>\n            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-list *ngIf="group">\n\n            <ion-item>\n                <ion-label floating>Номер группы</ion-label>\n                <ion-input type="number" [(ngModel)]="group.id"></ion-input>\n            </ion-item>\n    \n            <ion-item>\n                <div style="display: flex; justify-content: space-between; align-items: center;">\n                    <button ion-fab mini color="secondary" (click)="save()">\n                        <ion-icon ios="ios-checkmark-circle" md="md-checkmark-circle"></ion-icon>\n                    </button>\n                </div>\n            </ion-item>\n    \n        </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/contact/modal-group.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_students_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3__services_groups_service__["a" /* GroupService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], ModalGroup);
    return ModalGroup;
}());

//# sourceMappingURL=modal-group.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_events_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, eventService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.eventService = eventService;
        this.eventService.events.subscribe(function (events) {
            var d = Date.now();
            _this.currentEvent = events.filter(function (event) {
                return d >= Date.parse(event.startTime) && d < Date.parse(event.endTime);
            });
            _this.events = events.filter(function (event) {
                return (new Date()).toDateString() === (new Date(event.startTime)).toDateString() &&
                    d < Date.parse(event.startTime);
            });
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Главная</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-content class="card-background-page">\n\n      <ion-card *ngFor="let event of currentEvent" [style.background]="\'green\'">\n        <div class="card-title">São Paulo</div>\n        <div class="card-subtitle">{{event.startTime | date:"HH:mm"}} - {{event.endTime | date:"HH:mm"}}</div>\n      </ion-card>\n\n      <ion-card *ngFor="let event of events">\n        <div class="card-title">São Paulo</div>\n        <div class="card-subtitle">{{event.startTime | date:"HH:mm"}} - {{event.endTime | date:"HH:mm"}}</div>\n      </ion-card>\n    \n    </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_events_service__["a" /* EventsService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_modal_page__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_modal_event__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_students_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_groups_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contact_modal_group__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_studentsOfGruop_pipe__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_events_service__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_modal_page__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_modal_group__["a" /* ModalGroup */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_modal_event__["a" /* ModalEvent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_studentsOfGruop_pipe__["b" /* GroupFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_studentsOfGruop_pipe__["c" /* SortEventPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_studentsOfGruop_pipe__["a" /* ForThisDatePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_modal_page__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contact_modal_group__["a" /* ModalGroup */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_modal_event__["a" /* ModalEvent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_students_service__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_18__services_events_service__["a" /* EventsService */],
                __WEBPACK_IMPORTED_MODULE_14__services_groups_service__["a" /* GroupService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/valeriy/Projects/ionicapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/valeriy/Projects/ionicapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GroupFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SortEventPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForThisDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupFilterPipe = /** @class */ (function () {
    function GroupFilterPipe() {
    }
    GroupFilterPipe.prototype.transform = function (items, arg) {
        return items.filter(function (item) { return item.group === arg; });
    };
    GroupFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'groupFilter',
            pure: false
        })
    ], GroupFilterPipe);
    return GroupFilterPipe;
}());

var SortEventPipe = /** @class */ (function () {
    function SortEventPipe() {
    }
    SortEventPipe.prototype.transform = function (items) {
        return items.sort(function (a, b) { return Date.parse(a.startTime) - Date.parse(b.startTime); });
    };
    SortEventPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'sort',
            pure: false
        })
    ], SortEventPipe);
    return SortEventPipe;
}());

var ForThisDatePipe = /** @class */ (function () {
    function ForThisDatePipe() {
    }
    ForThisDatePipe.prototype.transform = function (items, arg) {
        return items.filter(function (item) { return (new Date(item.startTime)).toDateString() === (new Date(arg)).toDateString(); });
    };
    ForThisDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'forThisDate',
            pure: false
        })
    ], ForThisDatePipe);
    return ForThisDatePipe;
}());

//# sourceMappingURL=studentsOfGruop.pipe.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentService = /** @class */ (function () {
    function StudentService(storage, toastCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this._students = [
            {
                id: 1,
                name: 'Valeriy',
                lastname: 'Kondratko',
                age: 28,
                tel: '+79516376127',
                email: 'kve1990@yandex.ru',
                addres: '...',
                hourscount: 0,
                group: 57
            }
        ];
        this.students = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.getStudents();
    }
    StudentService.prototype.getStudents = function () {
        var _this = this;
        this.storage.get('students')
            .then(function (res) {
            if (res && res.length) {
                _this.students.next(res);
            }
            else {
                _this.storage.set('students', _this._students)
                    .then(function (res) { return _this.students.next(res); });
            }
        });
    };
    StudentService.prototype.setStudent = function (student) {
        var _this = this;
        var oldStudents = this.students.getValue();
        var index = oldStudents.findIndex(function (item) { return item.id === student.id; });
        var msg = '';
        if (~index) {
            oldStudents[index] = student;
            msg = 'Данные об обучаемом успешно изменены!';
            this.storage.set('students', oldStudents.slice())
                .then(function (res) { return _this.students.next(res); });
        }
        else {
            msg = 'Обучаемый успешно добавлен';
            this.storage.set('students', oldStudents.concat([student]))
                .then(function (res) { return _this.students.next(res); });
        }
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    StudentService.prototype.deleteStudent = function (student) {
        var students = this.students.getValue();
        var index = students.findIndex(function (item) { return item.id === student.id; });
        students.splice(index, 1);
        this.students.next(students);
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ToastController */]])
    ], StudentService);
    return StudentService;
}());

//# sourceMappingURL=students.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupService = /** @class */ (function () {
    function GroupService(storage, alertCtrl) {
        var _this = this;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.groups = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        storage.get('groups')
            .then(function (res) {
            if (res && res.length) {
                _this.groups.next(res);
            }
            else {
                storage.set('groups', [{ id: 57, description: 'First group' }])
                    .then(function (res) { return _this.groups.next(res); });
            }
        });
    }
    GroupService.prototype.addGroup = function (id) {
        var _this = this;
        var groups = this.groups.getValue();
        if (~groups.findIndex(function (group) { return group.id === id; })) {
            var alert_1 = this.alertCtrl.create({
                title: 'Группа уже существует!',
                subTitle: 'Группа с таким номером уже существует!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.storage.set('groups', groups.concat([{ id: id, description: '' }]))
                .then(function (res) { return _this.groups.next(res); });
        }
    };
    GroupService.prototype.deleteGroup = function (id) {
        var groups = this.groups.getValue();
        var index = groups.findIndex(function (group) { return group.id === id; });
        if (~index) {
            groups.splice(id, 1);
            this.groups.next(groups);
        }
    };
    GroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], GroupService);
    return GroupService;
}());

//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = /** @class */ (function () {
    function EventsService(storage) {
        var _this = this;
        this.storage = storage;
        this._events = [
            {
                id: 1,
                studentId: 1,
                startTime: (new Date(2016, 7, 18, 10, 41)).toISOString(),
                endTime: (new Date(2016, 7, 18, 13, 30)).toISOString()
            }
        ];
        this.events = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        storage.get('events')
            .then(function (res) {
            if (res && res.length) {
                _this.events.next(res);
            }
            else {
                storage.set('events', _this._events)
                    .then(function (res) { return _this.events.next(res); });
            }
        });
    }
    EventsService.prototype.addEvent = function (studentId, startTime, endTime) {
        var _this = this;
        var events = this.events.getValue();
        this.storage.set('events', events.concat([{ id: Date.now(), studentId: studentId, startTime: startTime, endTime: endTime }]))
            .then(function (res) { return _this.events.next(res); });
    };
    EventsService.prototype.deleteEvent = function (id) {
        var events = this.events.getValue();
        var index = events.findIndex(function (event) { return event.id === id; });
        if (~index) {
            events.splice(id, 1);
            this.events.next(events);
        }
    };
    EventsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EventsService);
    return EventsService;
}());

//# sourceMappingURL=events.service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map