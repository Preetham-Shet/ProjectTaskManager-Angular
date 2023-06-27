"use strict";
(self["webpackChunkProjectTaskManager"] = self["webpackChunkProjectTaskManager"] || []).push([["main"],{

/***/ 5369:
/*!************************************************!*\
  !*** ./src/app/admin/about/about.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 2,
  vars: 0,
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7008:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminModule: () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 961);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 5369);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 6146);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ 2129);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ 7784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../team-size-validator.directive */ 9621);
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-location-status-validator.directive */ 1443);
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-idunique-validator.directive */ 5978);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ 5512);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./check-box-printer/check-box-printer.component */ 8228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);













class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective, _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective, _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective, _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent, _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxPrinterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule],
    exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective, _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective, _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective, _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent]
  });
})();

/***/ }),

/***/ 8228:
/*!************************************************************************!*\
  !*** ./src/app/admin/check-box-printer/check-box-printer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckBoxPrinterComponent: () => (/* binding */ CheckBoxPrinterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);


class CheckBoxPrinterComponent {
  constructor() {
    this.isChecked = false;
  }
  ngOnInit() {}
  check() {
    this.isChecked = true;
  }
  unCheck() {
    this.isChecked = false;
  }
}
CheckBoxPrinterComponent.ɵfac = function CheckBoxPrinterComponent_Factory(t) {
  return new (t || CheckBoxPrinterComponent)();
};
CheckBoxPrinterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CheckBoxPrinterComponent,
  selectors: [["app-check-box-printer"]],
  decls: 2,
  vars: 1,
  consts: [["type", "checkbox", "value", "true", "name", "isChecked", "id", "isChecked", 3, "ngModel", "ngModelChange"]],
  template: function CheckBoxPrinterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "input", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckBoxPrinterComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.isChecked = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChecked);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 961:
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/dashboard.service */ 2129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function DashboardComponent_li_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](client_r5);
  }
}
function DashboardComponent_a_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_a_56_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onProjectChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r6);
  }
}
function DashboardComponent_a_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](year_r9);
  }
}
function DashboardComponent_tr_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const teammembersummary_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](teammembersummary_r10.Region);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](teammembersummary_r10.TeamMembersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](teammembersummary_r10.TemporarilyUnavailableMembers);
  }
}
function DashboardComponent_div_103_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r14.ID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r14.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", member_r14.Status == "Busy" ? "red" : "black");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r14.Status);
  }
}
function DashboardComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "h2", 45)(3, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47)(6, "div", 48)(7, "table", 33)(8, "thead")(9, "tr")(10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DashboardComponent_div_103_tr_17_Template, 7, 5, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const teammember_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#cardbody" + i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", teammember_r11.Region, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "cardbody" + i_r12)("ngClass", i_r12 == 0 ? "show" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", teammember_r11.Members);
  }
}
class DashboardComponent {
  constructor(dashboardService) {
    this.dashboardService = dashboardService;
    this.Designation = "";
    this.Username = "";
    this.NoOfTeamMembers = 0;
    this.TotalCostOfAllProjects = 0;
    this.PendingTasks = 0;
    this.UpComingProjects = 0;
    this.ProjectCost = 0;
    this.CurrentExpenditure = 0;
    this.AvailableFunds = 0;
    this.Clients = [];
    this.Projects = [];
    this.Years = [];
    this.TeamMembersSummary = [];
    this.TeamMembers = [];
  }
  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.ToDay = new Date();
    this.Clients = ['ABC Infotech Ltd.', 'DEF Software Solutions', 'GHI Industries'];
    this.Projects = ['Project A', 'Project B', 'Project C', 'Project D'];
    for (var i = 2019; i >= 2010; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = [{
      Region: 'East',
      Members: [{
        ID: 1,
        Name: 'Ford',
        Status: 'Available'
      }, {
        ID: 2,
        Name: 'Miller',
        Status: 'Available'
      }, {
        ID: 3,
        Name: 'Jones',
        Status: 'Busy'
      }, {
        ID: 4,
        Name: 'James',
        Status: 'Busy'
      }]
    }, {
      Region: 'West',
      Members: [{
        ID: 5,
        Name: 'Anna',
        Status: 'Available'
      }, {
        ID: 6,
        Name: 'Arun',
        Status: 'Available'
      }, {
        ID: 7,
        Name: 'Varun',
        Status: 'Busy'
      }, {
        ID: 8,
        Name: 'Jasmine',
        Status: 'Busy'
      }]
    }, {
      Region: 'South',
      Members: [{
        ID: 9,
        Name: 'Krishna',
        Status: 'Available'
      }, {
        ID: 10,
        Name: 'Mohan',
        Status: 'Available'
      }, {
        ID: 11,
        Name: 'Raju',
        Status: 'Busy'
      }, {
        ID: 12,
        Name: 'Farooq',
        Status: 'Busy'
      }]
    }, {
      Region: 'North',
      Members: [{
        ID: 13,
        Name: 'Jacob',
        Status: 'Available'
      }, {
        ID: 14,
        Name: 'Smith',
        Status: 'Available'
      }, {
        ID: 15,
        Name: 'Jones',
        Status: 'Busy'
      }, {
        ID: 16,
        Name: 'James',
        Status: 'Busy'
      }]
    }];
  }
  onProjectChange($event) {
    if ($event.target.innerHTML.trim() == 'Project A') {
      this.ProjectCost = 2113507;
      this.CurrentExpenditure = 96788;
      this.AvailableFunds = 52436;
    } else if ($event.target.innerHTML.trim() == 'Project B') {
      this.ProjectCost = 88923;
      this.CurrentExpenditure = 22450;
      this.AvailableFunds = 2640;
    } else if ($event.target.innerHTML.trim() == 'Project C') {
      this.ProjectCost = 662183;
      this.CurrentExpenditure = 7721;
      this.AvailableFunds = 9811;
    } else if ($event.target.innerHTML.trim() == 'Project D') {
      this.ProjectCost = 928431;
      this.CurrentExpenditure = 562;
      this.AvailableFunds = 883;
    }
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 104,
  vars: 29,
  consts: [[1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-3", "pb-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "text-white", "text-center", "mx-auto", "rounded", "pt-2", "pb-2", "font-weight-bold", 2, "background-color", "#a39e9e", "font-family", "'Arial Narrow Bold', sans-serif"], [1, "col-12", "text-center", "mt-2"], ["src", "assets/user.png", "width", "120px"], [1, "col-12", "text-center", "pt-2", "pb-2", "font-weight-bold", 2, "font-family", "Tahoma"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "Arial"], [1, "col-12", "mb-3"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-secondary", "badge-pill", 2, "font-size", "13px"], [1, "col-12", "text-center", "pt-2", "pb-2", 2, "font-family", "'Arial Narrow'"], [1, "col-12"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "col-12", "pt-0", "pb-2", 2, "background-color", "#e9e6e6"], [1, "row", "mt-2"], [1, "col-6", "text-left"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], [1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-6", "text-right"], ["type", "button", "id", "dropdownMenuButton2", "data-toggle", "dropdown", 1, "btn", "btn-secondary", "dropdown-toggle"], ["class", "dropdown-item", "href", "#", "onclick", "return false", 4, "ngFor", "ngForOf"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-auto", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "'Arial Narrow'"], [1, "table", "table-borderless"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-2", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "'Arial Narrow'"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", 2, "background-color", "#e9e6e6"], [1, "col-11", "mx-auto", "mt-1", "text-white", "text-center", "pt-1", "pb-2", "mx-2", "rounded", "font-weight-bold", 2, "background-color", "#718d97", "font-family", "'Arial Narrow'"], [1, "col-lg-12", "pt-2"], ["id", "accordion1", 1, "accordion"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "list-group-item"], ["href", "#", "onclick", "return false", 1, "dropdown-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "dropdown-item"], [1, "card"], ["id", "card1", 1, "card-header", "bg-secondary"], [1, "mb-0"], ["type", "button", "data-toggle", "collapse", 1, "btn", "btn-link", "text-white"], ["data-parent", "#accordion1", 1, "collapse", 3, "id", "ngClass"], [1, "card-body"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ol", 0)(2, "li", 1)(3, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "div", 5)(14, "div", 4)(15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "uppercase");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " TEAM SUMMARY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11)(25, "ul", 12)(26, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " NO. OF TEAM MEMBERS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " TOTAL COST OF ALL PROJECTS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " PENDING TASKS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " UPCOMING PROJECTS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " CLIENTS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16)(45, "ul", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DashboardComponent_li_46_Template, 2, 1, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 19)(48, "div", 4)(49, "div", 20)(50, "div", 21)(51, "div", 22)(52, "div", 23)(53, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Project A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DashboardComponent_a_56_Template, 2, 1, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 27)(58, "div", 23)(59, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " 2019 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, DashboardComponent_a_62_Template, 2, 1, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " PROJECT BRIEFING ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 16)(66, "table", 31)(67, "tr")(68, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Project Cost");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](72, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "tr")(74, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Current Expenditure");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tr")(80, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Available Funds");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " TEAM MEMBERS SUMMARY ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 16)(88, "table", 33)(89, "tr")(90, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Region");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Team Members Count");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Temporarily Unavailable Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](96, DashboardComponent_tr_96_Template, 8, 3, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 35)(98, "div", 4)(99, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " TEAM MEMBERS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 37)(102, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, DashboardComponent_div_103_Template, 18, 5, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 15, ctx.ToDay, "d/M/y"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, ctx.Designation), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.Username, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.NoOfTeamMembers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$ ", ctx.TotalCostOfAllProjects, " k");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.PendingTasks);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.UpComingProjects);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Clients);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Years);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](72, 20, ctx.ProjectCost, "USD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](78, 23, ctx.CurrentExpenditure, "USD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](84, 26, ctx.AvailableFunds, "USD"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TeamMembersSummary);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.TeamMembers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6146:
/*!**********************************************************!*\
  !*** ./src/app/admin/my-profile/my-profile.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProfileComponent: () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MyProfileComponent {}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
  return new (t || MyProfileComponent)();
};
MyProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MyProfileComponent,
  selectors: [["app-my-profile"]],
  decls: 2,
  vars: 0,
  template: function MyProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "my-profile works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5512:
/*!****************************************************!*\
  !*** ./src/app/admin/project/project.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/projects.service */ 7883);



const _c0 = ["selectionBox"];
const _c1 = ["*"];
class ProjectComponent {
  constructor(projectsService) {
    this.projectsService = projectsService;
    this.editClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.deleteClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.hideDetails = false;
    this.selectionBoxes = null;
  }
  ngOnInit() {
    this.MySubscription = this.projectsService.MySubject.subscribe(hide => {
      this.hideDetails = hide;
    });
  }
  onEditClick(event, i) {
    this.editClick.emit({
      event,
      i
    });
  }
  onDeleteClick(event, i) {
    this.deleteClick.emit({
      event,
      i
    });
  }
  ngOnDestroy() {
    this.MySubscription.unsubscribe();
  }
  isAllCheckedChange(b) {
    let selectionBox = this.selectionBoxes.toArray();
    if (b) {
      for (let i = 0; i < selectionBox.length; i++) {
        selectionBox[i].check();
      }
    } else {
      for (let i = 0; i < selectionBox.length; i++) {
        selectionBox[i].unCheck();
      }
    }
  }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
  return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
};
ProjectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectComponent,
  selectors: [["app-project"]],
  contentQueries: function ProjectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectionBoxes = _t);
    }
  },
  inputs: {
    project: ["currentProject", "project"],
    i: ["recordIndex", "i"]
  },
  outputs: {
    editClick: "editClick",
    deleteClick: "deleteClick"
  },
  ngContentSelectors: _c1,
  decls: 38,
  vars: 7,
  consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "col-1"], [1, "card-body"], [1, "table", "table-borderless", 3, "hidden"], [1, "card-footer"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"]],
  template: function ProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "table", 6)(12, "tr")(13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr")(18, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "tr")(23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr")(28, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 7)(33, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_33_listener($event) {
        return ctx.onEditClick($event, ctx.i);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_36_listener($event) {
        return ctx.onDeleteClick($event, ctx.i);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.projectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.teamSize);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.status);
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7784:
/*!******************************************************!*\
  !*** ./src/app/admin/projects/projects.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/project */ 5265);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 3035);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/projects.service */ 7883);
/* harmony import */ var src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/client-locations.service */ 9746);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../team-size-validator.directive */ 9621);
/* harmony import */ var _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../client-location-status-validator.directive */ 1443);
/* harmony import */ var _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-idunique-validator.directive */ 5978);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project/project.component */ 5512);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../check-box-printer/check-box-printer.component */ 8228);












const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjID"];
const _c3 = ["prj"];
function ProjectsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 104);
  }
}
function ProjectsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 105)(1, "app-project", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("editClick", function ProjectsComponent_div_37_Template_app_project_editClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const i_r46 = restoredCtx.index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.onEditClick($event, i_r46));
    })("deleteClick", function ProjectsComponent_div_37_Template_app_project_deleteClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r50);
      const i_r46 = restoredCtx.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.onDeleteClick($event, i_r46));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "app-check-box-printer", null, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentProject", project_r45)("recordIndex", i_r46);
  }
}
function ProjectsComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", clientLocation_r52.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", clientLocation_r52.clientLocationName, " ");
  }
}
function ProjectsComponent_span_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_199_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", clientLocation_r53.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", clientLocation_r53.clientLocationName, " ");
  }
}
function ProjectsComponent_span_200_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c4 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class ProjectsComponent {
  constructor(projectService, clientLocationsService) {
    this.projectService = projectService;
    this.clientLocationsService = clientLocationsService;
    this.projects = [];
    this.clientLocations = [];
    this.showLoading = true;
    this.newProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editIndex = null;
    this.deleteProject = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.deleteIndex = null;
    this.searchBy = 'ProjectName';
    this.searchText = '';
    this.newForm = null;
    this.editForm = null;
    this.isAllChecked = false;
    this.projs = null;
    this.prjID = null;
  }
  ngOnInit() {
    this.projectService.getAllProjects().subscribe({
      next: response => {
        this.projects = response;
        this.showLoading = false;
      },
      error: error => {
        console.log(error);
        alert('Authentication Failed');
      }
    });
    this.clientLocationsService.getClientLocations().subscribe({
      next: response => {
        this.clientLocations = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  isAllCheckedChange(event) {
    let proj = this.projs.toArray();
    for (let i = 0; i < proj.length; i++) {
      proj[i].isAllCheckedChange(this.isAllChecked);
    }
  }
  onNewClick(event) {
    this.newForm.resetForm();
    setTimeout(() => {
      this.prjID.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      this.newProject.clientLocation.clientLocationID = 0;
      this.projectService.insertProject(this.newProject).subscribe({
        next: response => {
          //Add Project to Grid
          var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
          p.projectID = response.projectID;
          p.projectName = response.projectName;
          p.dateOfStart = response.dateOfStart;
          p.teamSize = response.teamSize;
          p.clientLocation = response.clientLocation;
          p.active = response.active;
          p.clientLocationID = response.clientLocationID;
          p.status = response.status;
          this.projects.push(p);
          //Clear New Project Dialog - TextBoxes
          this.newProject.projectID = null;
          this.newProject.projectName = null;
          this.newProject.dateOfStart = null;
          this.newProject.teamSize = null;
          this.newProject.active = false;
          this.newProject.clientLocationID = null;
          this.newProject.status = null;
          jquery__WEBPACK_IMPORTED_MODULE_1__('#newFormCancel').trigger('click');
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(event, index) {
    this.editForm.resetForm();
    setTimeout(() => {
      this.editProject.projectID = this.projects[index].projectID;
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.dateOfStart = this.projects[index].dateOfStart.split('/').reverse().join('-'); //yyyy-MM-dd
      this.editProject.teamSize = this.projects[index].teamSize;
      this.editProject.active = this.projects[index].active;
      this.editProject.clientLocationID = this.projects[index].clientLocationID;
      this.editProject.clientLocation = this.projects[index].clientLocation;
      this.editProject.status = this.projects[index].status;
      this.editIndex = index;
    }, 100);
  }
  onUpdateClick() {
    debugger;
    if (this.editForm.valid) {
      this.projectService.updateProject(this.editProject).subscribe({
        next: response => {
          var p = new src_app_project__WEBPACK_IMPORTED_MODULE_0__.Project();
          p.projectID = response.projectID;
          p.projectName = response.projectName;
          p.dateOfStart = response.dateOfStart;
          p.teamSize = response.teamSize;
          p.clientLocation = response.clientLocation;
          p.active = response.active;
          p.clientLocationID = response.clientLocationID;
          p.status = response.status;
          this.projects[this.editIndex] = p;
          this.editProject.projectID = null;
          this.editProject.projectName = null;
          this.editProject.dateOfStart = null;
          this.editProject.teamSize = null;
          this.newProject.active = false;
          this.newProject.clientLocationID = null;
          this.newProject.status = null;
          jquery__WEBPACK_IMPORTED_MODULE_1__('#editFormCancel').trigger('click');
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(event, index) {
    this.deleteIndex = index;
    this.deleteProject.projectID = this.projects[index].projectID;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
  }
  onDeleteConfirmClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe({
      next: response => {
        this.projects.splice(this.deleteIndex, 1);
        this.deleteProject.projectID = null;
        this.deleteProject.projectName = null;
        this.deleteProject.dateOfStart = null;
        this.deleteProject.teamSize = null;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchClick() {
    this.projectService.SearchProjects(this.searchBy, this.searchText).subscribe({
      next: response => {
        this.projects = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onHideShowDetails(event) {
    this.projectService.toggleDetails();
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_projects_service__WEBPACK_IMPORTED_MODULE_2__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_client_locations_service__WEBPACK_IMPORTED_MODULE_3__.ClientLocationsService));
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  viewQuery: function ProjectsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.projs = _t);
    }
  },
  decls: 235,
  vars: 89,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "row"], [1, "col-xl-12", "mx-auto"], [1, "form-group", "form-row"], [1, "col-2"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-1", "custom-control", "custom-checkbox"], ["type", "checkbox", "value", "true", "name", "isAllChecked", "id", "isAllChecked", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllChecked", 1, "custom-control-label"], ["for", "drpSearchBy", 1, "col-form-label", "col-1", "text-right"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "ProjectID"], ["value", "ProjectName"], ["value", "DateOfStart"], ["value", "TeamSize"], ["for", "textSearchText", 1, "col-form-label", "col-1", "text-right"], [1, "col-3"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append", 3, "click"], [1, "input-group-text"], [1, "fa", "fa-search"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel", "prjID", ""], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control-plain-text", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectName", "ngModel"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["data-dismiss", "modal", "id", "editFormCancel", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control-plain-text", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "text-danger"], [3, "value"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Create Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 4)(10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_10_listener($event) {
        return ctx.onHideShowDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Hide/Show Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 7)(13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.isAllChecked = $event;
      })("change", function ProjectsComponent_Template_input_change_13_listener($event) {
        return ctx.isAllCheckedChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 4)(18, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_18_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.searchText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_div_click_32_listener() {
        return ctx.onSearchClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 2)(36, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](37, ProjectsComponent_div_37_Template, 5, 2, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "form", 24, 25)(40, "div", 26)(41, "div", 27)(42, "div", 28)(43, "div", 29)(44, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "New Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "button", 31)(47, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "div", 32)(50, "div", 33)(51, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 35)(54, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_54_listener($event) {
        return ctx.newProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](57, ProjectsComponent_span_57_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](58, ProjectsComponent_span_58_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](59, ProjectsComponent_span_59_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "div", 33)(61, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](62, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 35)(64, "input", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_64_listener($event) {
        return ctx.newProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](66, ProjectsComponent_span_66_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, ProjectsComponent_span_67_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, ProjectsComponent_span_68_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 33)(70, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](71, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "div", 35)(73, "input", 43, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_73_listener($event) {
        return ctx.newProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, ProjectsComponent_span_75_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "div", 33)(77, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 35)(80, "input", 46, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_80_listener($event) {
        return ctx.newProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, ProjectsComponent_span_82_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](83, ProjectsComponent_span_83_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 33)(85, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](86, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 35)(88, "div", 49)(89, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_89_listener($event) {
        return ctx.newProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](91, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "div", 33)(93, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](94, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 35)(96, "div", 53)(97, "input", 54, 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_97_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](100, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](101, "div", 53)(102, "input", 57, 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_102_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](106, ProjectsComponent_span_106_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 33)(108, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "div", 35)(111, "select", 61, 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_111_listener($event) {
        return ctx.newProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](114, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, ProjectsComponent_option_115_Template, 2, 2, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, ProjectsComponent_span_116_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](117, ProjectsComponent_span_117_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "div", 65)(119, "button", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](120, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](121, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_121_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](122, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "form", 24, 68)(125, "div", 69)(126, "div", 27)(127, "div", 28)(128, "div", 70)(129, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](130, "Edit Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "button", 31)(132, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "div", 32)(135, "div", 33)(136, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "div", 35)(139, "input", 72, 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_139_listener($event) {
        return ctx.editProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](141, ProjectsComponent_span_141_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](142, ProjectsComponent_span_142_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](143, ProjectsComponent_span_143_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "div", 33)(145, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](146, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 35)(148, "input", 75, 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_148_listener($event) {
        return ctx.editProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](150, ProjectsComponent_span_150_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](151, ProjectsComponent_span_151_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](152, ProjectsComponent_span_152_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](153, "div", 33)(154, "label", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](155, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "div", 35)(157, "input", 78, 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_157_listener($event) {
        return ctx.editProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](159, ProjectsComponent_span_159_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "div", 33)(161, "label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](162, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "div", 35)(164, "input", 81, 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_164_listener($event) {
        return ctx.editProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](166, ProjectsComponent_span_166_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](167, ProjectsComponent_span_167_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "div", 33)(169, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](170, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 35)(172, "div", 49)(173, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_173_listener($event) {
        return ctx.editProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](175, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "div", 33)(177, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](178, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 35)(180, "div", 53)(181, "input", 86, 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_181_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](184, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](185, "div", 53)(186, "input", 89, 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_186_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "label", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](190, ProjectsComponent_span_190_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "div", 33)(192, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "div", 35)(195, "select", 93, 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_195_listener($event) {
        return ctx.editProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](197, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](198, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](199, ProjectsComponent_option_199_Template, 2, 2, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](200, ProjectsComponent_span_200_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](201, ProjectsComponent_span_201_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "div", 65)(203, "button", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](204, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_205_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](206, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "form")(208, "div", 96)(209, "div", 27)(210, "div", 28)(211, "div", 70)(212, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "Delete Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "button", 31)(215, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](216, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](217, "div", 32)(218, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](219, "Are you sure to delete this Project?");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "div", 33)(221, "label", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](222, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "div", 35)(224, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_224_listener($event) {
        return ctx.deleteProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](225, "div", 33)(226, "label", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](227, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](228, "div", 35)(229, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_229_listener($event) {
        return ctx.deleteProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "div", 65)(231, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](232, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "button", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_233_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](234, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](39);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](55);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](65);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](74);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](81);
      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](98);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](112);
      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](124);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](140);
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](149);
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](158);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](165);
      const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](182);
      const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](196);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.isAllChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](59, _c4, _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted), _r3.valid && (_r3.dirty || _r3.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && _r3.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && _r3.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r2.submitted) && _r3.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](62, _c4, _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted), _r8.valid && (_r8.dirty || _r8.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && _r8.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && _r8.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched || _r2.submitted) && _r8.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](65, _c4, _r12.invalid && (_r12.dirty || _r12.touched || _r2.submitted), _r12.valid && (_r12.dirty || _r12.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r12.invalid && (_r12.dirty || _r12.touched || _r2.submitted) && _r12.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](68, _c4, _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted), _r14.valid && (_r14.dirty || _r14.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted) && _r14.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r14.invalid && (_r14.dirty || _r14.touched || _r2.submitted) && _r14.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r17.invalid && (_r17.dirty || _r17.touched || _r2.submitted) && _r17.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](71, _c4, _r20.invalid && (_r20.dirty || _r20.touched || _r2.submitted), _r20.valid && (_r20.dirty || _r20.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r20.invalid && (_r20.dirty || _r20.touched || _r2.submitted) && _r20.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r2.invalid && (_r2.dirty || _r2.touched || _r2.submitted) && (_r2.errors ? _r2.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](74, _c4, _r25.invalid && (_r25.dirty || _r25.touched || _r2.submitted), _r25.valid && (_r25.dirty || _r25.touched || _r2.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r24.submitted) && _r25.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](77, _c4, _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted), _r29.valid && (_r29.dirty || _r29.touched || _r24.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r29.invalid && (_r29.dirty || _r29.touched || _r24.submitted) && _r29.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](80, _c4, _r33.invalid && (_r33.dirty || _r33.touched || _r24.submitted), _r33.valid && (_r33.dirty || _r33.touched || _r24.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r33.invalid && _r24.submitted && _r33.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](83, _c4, _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted), _r35.valid && (_r35.dirty || _r35.touched || _r24.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted) && _r35.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r35.invalid && (_r35.dirty || _r35.touched || _r24.submitted) && _r35.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r38.invalid && (_r38.dirty || _r38.touched || _r24.submitted) && _r38.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](86, _c4, _r41.invalid && (_r41.dirty || _r41.touched || _r24.submitted), _r41.valid && (_r41.dirty || _r41.touched || _r24.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r41.invalid && (_r41.dirty || _r41.touched || _r24.submitted) && _r41.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _r24.invalid && (_r24.dirty || _r24.touched || _r24.submitted) && (_r24.errors ? _r24.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _team_size_validator_directive__WEBPACK_IMPORTED_MODULE_4__.TeamSizeValidatorDirective, _client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_5__.ClientLocationStatusValidatorDirective, _project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ProjectIDUniqueValidatorDirective, _project_project_component__WEBPACK_IMPORTED_MODULE_7__.ProjectComponent, _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_8__.CheckBoxPrinterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ 961);
/* harmony import */ var _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/about/about.component */ 5369);
/* harmony import */ var _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/projects/projects.component */ 7784);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 7535);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ 4287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









const routes = [{
  path: "",
  redirectTo: "login",
  pathMatch: "full"
}, {
  path: "login",
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
}, {
  path: "signup",
  component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__.SignUpComponent
}, {
  path: "dashboard",
  component: _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  data: {
    expectedRole: "Admin"
  }
}, {
  path: "about",
  component: _admin_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
}, {
  path: "projects",
  component: _admin_projects_projects_component__WEBPACK_IMPORTED_MODULE_2__.ProjectsComponent,
  data: {
    expectedRole: "Admin"
  }
}, {
  path: "tasks",
  component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__.TasksComponent,
  data: {
    expectedRole: "Employee"
  }
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 6018);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





function AppComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.loginService.currentUserName);
  }
}
function AppComponent_li_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_13_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.loginService.Logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function AppComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  constructor(loginService) {
    this.loginService = loginService;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 26,
  vars: 6,
  consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item"], ["routerLink", "about", 1, "nav-link"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", "ml-1"], [1, "container-fluid"], ["routerLink", "dashboard", 1, "nav-link"], ["routerLink", "projects", 1, "nav-link"], ["href", "#", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"], ["routerLink", "login", 1, "nav-link"], ["routerLink", "signup", 1, "nav-link"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Project Task Manager ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_li_11_Template, 3, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 1, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_li_15_Template, 3, 0, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 9)(17, "div", 10)(18, "div", 11)(19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.module */ 7008);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt-interceptor.service */ 5060);
/* harmony import */ var _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt-un-authorized-interceptor.service */ 5319);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 7535);
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/tasks.component */ 4287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);














class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.JwtInterceptorService,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
    useClass: _jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_5__.JwtUnAuthorizedInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule.forRoot({
    config: {
      tokenGetter: () => {
        return sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
      }
    }
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__.SignUpComponent, _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_7__.TasksComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_2__.AdminModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule]
  });
})();

/***/ }),

/***/ 1443:
/*!***************************************************************!*\
  !*** ./src/app/client-location-status-validator.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationStatusValidatorDirective: () => (/* binding */ ClientLocationStatusValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class ClientLocationStatusValidatorDirective {
  constructor() {}
  validate(control) {
    let isValid = true;
    if (control.value.ClientLocation == 6 && control.value.Status == "Support") {
      isValid = false; //indicates invalid
    }

    if (isValid == true) {
      return null; //valid
    } else {
      return {
        clientLocationStatus: {
          valid: false
        }
      }; //invalid
    }
  }
}

ClientLocationStatusValidatorDirective.ɵfac = function ClientLocationStatusValidatorDirective_Factory(t) {
  return new (t || ClientLocationStatusValidatorDirective)();
};
ClientLocationStatusValidatorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ClientLocationStatusValidatorDirective,
  selectors: [["", "appClientLocationStatusValidator", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: ClientLocationStatusValidatorDirective,
    multi: true
  }])]
});


/***/ }),

/***/ 8832:
/*!************************************!*\
  !*** ./src/app/client-location.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocation: () => (/* binding */ ClientLocation)
/* harmony export */ });
class ClientLocation {
  constructor() {
    this.clientLocationID = null;
    this.clientLocationName = null;
  }
}

/***/ }),

/***/ 9746:
/*!*********************************************!*\
  !*** ./src/app/client-locations.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationsService: () => (/* binding */ ClientLocationsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ClientLocationsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getClientLocations() {
    return this.httpClient.get("/api/clientlocations", {
      responseType: "json"
    });
  }
}
ClientLocationsService.ɵfac = function ClientLocationsService_Factory(t) {
  return new (t || ClientLocationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ClientLocationsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ClientLocationsService,
  factory: ClientLocationsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 3149:
/*!**************************************!*\
  !*** ./src/app/countries.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesService: () => (/* binding */ CountriesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class CountriesService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getCountries() {
    return this.httpClient.get("/api/countries", {
      responseType: "json"
    });
  }
}
CountriesService.ɵfac = function CountriesService_Factory(t) {
  return new (t || CountriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
CountriesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CountriesService,
  factory: CountriesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 9721:
/*!**********************************************!*\
  !*** ./src/app/custom-validators.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidatorsService: () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 6018);



class CustomValidatorsService {
  constructor(loginService) {
    this.loginService = loginService;
  }
  minimumAgeValidator(minAge) {
    return control => {
      if (!control.value) return null; //return, if the date of birth is null
      var today = new Date();
      var dateOfBirth = new Date(control.value);
      var diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
      var diffYears = diffMilliSeconds / (1000 * 60 * 60 * 24) / 365.25;
      if (diffYears >= minAge) return null; //valid
      else return {
        minAge: {
          valid: false
        }
      }; //invalid
    };
  }

  compareValidator(controlToValidate, controlToCompare) {
    return formGroup => {
      if (!formGroup.get(controlToValidate).value) return null; //return, if the confirm password is null
      if (formGroup.get(controlToValidate).value == formGroup.get(controlToCompare).value) return null; //valid
      else {
        formGroup.get(controlToValidate).setErrors({
          compareValidator: {
            valid: false
          }
        });
        return {
          compareValidator: {
            valid: false
          }
        }; //invalid
      }
    };
  }

  DuplicateEmailValidator() {
    return control => {
      return this.loginService.getUserByEmail(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(existingUser => {
        if (existingUser != null) {
          return {
            uniqueEmail: {
              valid: false
            }
          }; //invalid
        } else {
          return null;
        }
      }));
    };
  }
}
CustomValidatorsService.ɵfac = function CustomValidatorsService_Factory(t) {
  return new (t || CustomValidatorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService));
};
CustomValidatorsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CustomValidatorsService,
  factory: CustomValidatorsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2129:
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DashboardService {
  getTeamMembersSummary() {
    var TeamMembersSummary = [{
      Region: 'East',
      TeamMembersCount: 20,
      TemporarilyUnavailableMembers: 4
    }, {
      Region: 'West',
      TeamMembersCount: 15,
      TemporarilyUnavailableMembers: 8
    }, {
      Region: 'South',
      TeamMembersCount: 17,
      TemporarilyUnavailableMembers: 1
    }, {
      Region: 'North',
      TeamMembersCount: 15,
      TemporarilyUnavailableMembers: 6
    }];
    return TeamMembersSummary;
  }
}
DashboardService.ɵfac = function DashboardService_Factory(t) {
  return new (t || DashboardService)();
};
DashboardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DashboardService,
  factory: DashboardService.ɵfac
});


/***/ }),

/***/ 5060:
/*!********************************************!*\
  !*** ./src/app/jwt-interceptor.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptorService: () => (/* binding */ JwtInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class JwtInterceptorService {
  constructor() {}
  intercept(req, next) {
    var currentUser = {
      token: ''
    };
    if (sessionStorage['currentUser'] != null) {
      currentUser = JSON.parse(sessionStorage['currentUser']);
    }
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + currentUser.token
      }
    });
    return next.handle(req);
  }
}
JwtInterceptorService.ɵfac = function JwtInterceptorService_Factory(t) {
  return new (t || JwtInterceptorService)();
};
JwtInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: JwtInterceptorService,
  factory: JwtInterceptorService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 5319:
/*!**********************************************************!*\
  !*** ./src/app/jwt-un-authorized-interceptor.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtUnAuthorizedInterceptorService: () => (/* binding */ JwtUnAuthorizedInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class JwtUnAuthorizedInterceptorService {
  constructor() {}
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.tap)({
      next: event => {},
      error: error => {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse) {
          if (error.status == 401) {
            console.log(error);
            alert('401 UnAuthorized');
          }
        }
      }
    }));
  }
}
JwtUnAuthorizedInterceptorService.ɵfac = function JwtUnAuthorizedInterceptorService_Factory(t) {
  return new (t || JwtUnAuthorizedInterceptorService)();
};
JwtUnAuthorizedInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: JwtUnAuthorizedInterceptorService,
  factory: JwtUnAuthorizedInterceptorService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2403:
/*!*************************************!*\
  !*** ./src/app/login-view-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginViewModel: () => (/* binding */ LoginViewModel)
/* harmony export */ });
class LoginViewModel {
  constructor() {
    this.UserName = "";
    this.Password = "";
  }
}

/***/ }),

/***/ 6018:
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);





class LoginService {
  constructor(httpBackend, jwtHelperService) {
    this.httpBackend = httpBackend;
    this.jwtHelperService = jwtHelperService;
    this.httpClient = null;
    this.currentUserName = null;
  }
  Login(loginViewModel) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.post("/authenticate", loginViewModel, {
      responseType: "json",
      observe: "response"
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response) {
        this.currentUserName = response.body.userName;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
        sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }));
  }
  Register(signUpViewModel) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.post("/register", signUpViewModel, {
      responseType: "json",
      observe: "response"
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response) {
        this.currentUserName = response.body.userName;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
        sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }));
  }
  getUserByEmail(Email) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.get("/api/getUserByEmail/" + Email, {
      responseType: "json"
    });
  }
  Logout() {
    sessionStorage.removeItem("currentUser");
    this.currentUserName = null;
  }
  isAuthenticated() {
    var token = sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
    if (this.jwtHelperService.isTokenExpired()) {
      return false; //token is not valid
    } else {
      return true; //token is valid
    }
  }
}

LoginService.ɵfac = function LoginService_Factory(t) {
  return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService));
};
LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: LoginService,
  factory: LoginService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-view-model */ 2403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ 6018);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





class LoginComponent {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
    this.loginViewModel = new _login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
    this.loginError = '';
  }
  ngOnInit() {}
  onLoginClick(event) {
    this.loginService.Login(this.loginViewModel).subscribe({
      next: response => {
        this.router.navigateByUrl('/dashboard');
      },
      error: error => {
        console.log(error);
        this.loginError = 'Invalid Username or Password';
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 23,
  vars: 3,
  consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.loginViewModel.UserName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.loginViewModel.Password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener($event) {
        return ctx.onLoginClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.UserName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.loginError, "\u00A0");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5978:
/*!*********************************************************!*\
  !*** ./src/app/project-idunique-validator.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectIDUniqueValidatorDirective: () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.service */ 7883);




class ProjectIDUniqueValidatorDirective {
  constructor(projectsService) {
    this.projectsService = projectsService;
  }
  validate(control) {
    return this.projectsService.getProjectByProjectID(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(existingProject => {
      if (existingProject != null) {
        return {
          uniqueProjectID: {
            valid: false
          }
        };
      } else {
        return null;
      }
    }));
  }
}
ProjectIDUniqueValidatorDirective.ɵfac = function ProjectIDUniqueValidatorDirective_Factory(t) {
  return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
};
ProjectIDUniqueValidatorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ProjectIDUniqueValidatorDirective,
  selectors: [["", "appProjectIDUniqueValidator", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_ASYNC_VALIDATORS,
    useExisting: ProjectIDUniqueValidatorDirective,
    multi: true
  }])]
});


/***/ }),

/***/ 5265:
/*!****************************!*\
  !*** ./src/app/project.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ 8832);

class Project {
  constructor() {
    this.projectID = null;
    this.projectName = null;
    this.dateOfStart = null;
    this.teamSize = null;
    this.active = true;
    this.status = null;
    this.clientLocationID = null;
    this.clientLocation = new _client_location__WEBPACK_IMPORTED_MODULE_0__.ClientLocation();
  }
}

/***/ }),

/***/ 7883:
/*!*************************************!*\
  !*** ./src/app/projects.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsService: () => (/* binding */ ProjectsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);



class ProjectsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.MySubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
  }
  //hideDetails:boolean = false;
  toggleDetails() {
    this.MySubject.next(!this.MySubject.value);
  }
  getAllProjects() {
    return this.httpClient.get("/api/projects", {
      responseType: "json"
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      return data;
    }));
  }
  getProjectByProjectID(ProjectID) {
    return this.httpClient.get("/api/projects/searchbyprojectid/" + ProjectID, {
      responseType: "json"
    });
  }
  insertProject(newProject) {
    // var requestHeaders = new HttpHeaders();
    // requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post("/api/projects", newProject, {
      responseType: "json"
    }); //headers: requestHeaders,
  }

  updateProject(existingProject) {
    return this.httpClient.put("/api/projects", existingProject, {
      responseType: "json"
    });
  }
  deleteProject(ProjectID) {
    return this.httpClient.delete("/api/projects?ProjectID=" + ProjectID);
  }
  SearchProjects(searchBy, searchText) {
    return this.httpClient.get("api/projects/search/" + searchBy + "/" + searchText, {
      responseType: "json"
    });
  }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) {
  return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ProjectsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ProjectsService,
  factory: ProjectsService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 7535:
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../countries.service */ 3149);
/* harmony import */ var _custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-validators.service */ 9721);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 6018);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








function SignUpComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "First name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Last name should contain at least 2 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email already exists");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Date of Birth can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Minimum Age must be 18");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Confirm Password can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_span_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password and Confirm Password do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const gender_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", gender_r19)("value", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", gender_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](gender_r19);
  }
}
function SignUpComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_option_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", country_r20.countryID);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", country_r20.countryName, " ");
  }
}
function SignUpComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
function SignUpComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42)(1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 45)(4, "select", 46)(5, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Expert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 51)(16, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpComponent_div_82_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);
      const i_r22 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.onRemoveClick(i_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, skill_r21.get("skillName").invalid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted), skill_r21.get("skillName").valid && (skill_r21.get("skillName").dirty || skill_r21.get("skillName").touched || ctx_r18.signUpForm.submitted)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, skill_r21.get("skillLevel").invalid && (skill_r21.get("skillLevel").dirty || skill_r21.get("skillLevel").touched || ctx_r18.signUpForm.submitted), skill_r21.get("skillLevel").valid && (skill_r21.get("skillLevel").dirty || skill_r21.get("skillLevel").touched || ctx_r18.signUpForm.submitted)));
  }
}
class SignUpComponent {
  constructor(countriesService, formBuilder, customValidatorsService, loginService, router) {
    this.countriesService = countriesService;
    this.formBuilder = formBuilder;
    this.customValidatorsService = customValidatorsService;
    this.loginService = loginService;
    this.router = router;
    this.signUpForm = null;
    this.genders = ['male', 'female'];
    this.countries = [];
    this.registerError = null;
  }
  ngOnInit() {
    this.countriesService.getCountries().subscribe(response => {
      this.countries = response;
    });
    this.signUpForm = this.formBuilder.group({
      personName: this.formBuilder.group({
        firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
        lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
      }),
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email], [this.customValidatorsService.DuplicateEmailValidator()], {
        updateOn: 'blur'
      }],
      mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.customValidatorsService.minimumAgeValidator(18)]],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      gender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      countryID: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      receiveNewsLetters: [null],
      skills: this.formBuilder.array([])
    }, {
      validators: [this.customValidatorsService.compareValidator('confirmPassword', 'password')]
    });
    this.signUpForm.valueChanges.subscribe(value => {
      //console.log(value);
    });
  }
  onSubmitClick() {
    debugger;
    //Display current form value
    this.signUpForm['submitted'] = true;
    console.log(this.signUpForm);
    if (this.signUpForm.valid) {
      var signUpVieModel = this.signUpForm.value;
      this.loginService.Register(signUpVieModel).subscribe({
        next: response => {
          this.router.navigate(['tasks']);
        },
        error: error => {
          console.log(error);
          this.registerError = 'Unable to submit';
        }
      });
    }
    //setValue
    // this.signUpForm.setValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com",
    //   mobile: "9876543210",
    //   dateOfBirth: "2020-01-01",
    //   gender: "male",
    //   countryID: 3,
    //   receiveNewsLetters: true
    // });
    //patchValue
    // this.signUpForm.patchValue({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com"
    // });
    //reset
    //this.signUpForm.reset();
    //reset with Parameters
    // this.signUpForm.reset({
    //   firstName: "Adam",
    //   lastName: "Smith",
    //   email: "smith@gmail.com"
    // });
  }

  onAddSkill() {
    var formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      skillName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      skillLevel: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.signUpForm.get('skills').push(formGroup);
  }
  onRemoveClick(index) {
    this.signUpForm.get('skills').removeAt(index);
  }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
SignUpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SignUpComponent,
  selectors: [["app-sign-up"]],
  decls: 90,
  vars: 53,
  consts: [[1, "row"], [1, "col-md-8", "col-xl-6", "mx-auto"], [3, "formGroup", "ngSubmit"], [1, "card", "mt-1"], [1, "card-header"], [1, "card-body"], ["formGroupName", "personName", 1, "form-group", "form-row"], ["for", "firstName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "name", "firstName", "id", "firstName", "placeholder", "First Name", "formControlName", "firstName", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "lastName", "id", "lastName", "placeholder", "Last Name", "formControlName", "lastName", 1, "form-control", 3, "ngClass"], [1, "form-group", "form-row"], ["for", "email", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "email", "id", "email", "placeholder", "Email", "formControlName", "email", 1, "form-control", 3, "ngClass"], ["for", "mobile", 1, "col-md-4", "col-form-label"], ["type", "text", "name", "mobile", "id", "mobile", "placeholder", "Mobile", "formControlName", "mobile", 1, "form-control", 3, "ngClass"], ["for", "dateOfBirth", 1, "col-md-4", "col-form-label"], ["type", "date", "name", "dateOfBirth", "id", "dateOfBirth", "placeholder", "Date of Birth", "formControlName", "dateOfBirth", 1, "form-control", 3, "ngClass"], ["for", "password", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "password", "id", "password", "placeholder", "Password", "formControlName", "password", 1, "form-control", 3, "ngClass"], ["for", "confirmPassword", 1, "col-md-4", "col-form-label"], ["type", "password", "name", "confirmPassword", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 1, "form-control", 3, "ngClass"], [1, "col-md-4", "col-form-label"], ["class", "form-check-label form-check-inline", 4, "ngFor", "ngForOf"], ["for", "countryID", 1, "col-md-4", "col-form-label"], ["name", "countryID", "id", "countryID", "formControlName", "countryID", 1, "form-control", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "name", "receiveNewsLetters", "id", "receiveNewsLetters", "value", "true", "formControlName", "receiveNewsLetters", 1, "form-check-input"], ["for", "receiveNewsLetters", 1, "form-check-label"], ["formArrayName", "skills", 1, "col-md-8"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "card-footer"], [1, "btn", "btn-success", "float-right"], [1, "text-danger"], [1, "form-check-label", "form-check-inline"], ["type", "radio", "name", "gender", "formControlName", "gender", 1, "form-check-input", 3, "id", "value"], [1, "form-check-label", 3, "for"], [3, "value"], [1, "row", 3, "formGroupName"], [1, "col-5"], ["type", "text", "name", "skillName", "id", "skillName", "placeholder", "Skill Name", "formControlName", "skillName", 1, "form-control", 3, "ngClass"], [1, "col-4"], ["name", "level", "id", "level", "formControlName", "skillLevel", 1, "form-control", 3, "ngClass"], ["value", "Beginner"], ["value", "Intermediate"], ["value", "Professional"], ["value", "Expert"], [1, "col-3"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmitClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "First Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SignUpComponent_span_13_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SignUpComponent_span_14_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Last Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SignUpComponent_span_20_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, SignUpComponent_span_21_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Email:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, SignUpComponent_span_27_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SignUpComponent_span_28_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SignUpComponent_span_29_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Mobile:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SignUpComponent_span_35_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, SignUpComponent_span_36_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 13)(38, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Date of Birth:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, SignUpComponent_span_42_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, SignUpComponent_span_43_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 13)(45, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, SignUpComponent_span_49_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 13)(51, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Confirm Password:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, SignUpComponent_span_55_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, SignUpComponent_span_56_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 13)(58, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Gender:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, SignUpComponent_div_61_Template, 4, 4, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, SignUpComponent_span_62_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 13)(64, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Country:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 8)(67, "select", 27)(68, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, SignUpComponent_option_70_Template, 2, 2, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, SignUpComponent_span_71_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Receive News Letters");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 13)(79, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "Skills:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, SignUpComponent_div_82_Template, 18, 9, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_83_listener() {
        return ctx.onAddSkill();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Add Skill");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 35)(86, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.signUpForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](29, _c0, ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.firstName").valid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.firstName").invalid && (ctx.signUpForm.get("personName.firstName").dirty || ctx.signUpForm.get("personName.firstName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.firstName").errors == null ? null : ctx.signUpForm.get("personName.firstName").errors.minlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](32, _c0, ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("personName.lastName").valid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("personName.lastName").invalid && (ctx.signUpForm.get("personName.lastName").dirty || ctx.signUpForm.get("personName.lastName").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("personName.lastName").errors == null ? null : ctx.signUpForm.get("personName.lastName").errors.minlength));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](35, _c0, ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("email").valid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.email));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("email").invalid && (ctx.signUpForm.get("email").dirty || ctx.signUpForm.get("email").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("email").errors == null ? null : ctx.signUpForm.get("email").errors.uniqueEmail));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](38, _c0, ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("mobile").valid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("mobile").invalid && (ctx.signUpForm.get("mobile").dirty || ctx.signUpForm.get("mobile").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("mobile").errors == null ? null : ctx.signUpForm.get("mobile").errors.pattern));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](41, _c0, ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("dateOfBirth").valid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("dateOfBirth").invalid && (ctx.signUpForm.get("dateOfBirth").dirty || ctx.signUpForm.get("dateOfBirth").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("dateOfBirth").errors == null ? null : ctx.signUpForm.get("dateOfBirth").errors.minAge));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](44, _c0, ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("password").valid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("password").invalid && (ctx.signUpForm.get("password").dirty || ctx.signUpForm.get("password").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("password").errors == null ? null : ctx.signUpForm.get("password").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](47, _c0, ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("confirmPassword").valid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("confirmPassword").invalid && (ctx.signUpForm.get("confirmPassword").dirty || ctx.signUpForm.get("confirmPassword").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("confirmPassword").errors == null ? null : ctx.signUpForm.get("confirmPassword").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.invalid && (ctx.signUpForm.dirty || ctx.signUpForm.touched || ctx.signUpForm.submitted) && (ctx.signUpForm.errors == null ? null : ctx.signUpForm.errors.compareValidator));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.genders);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("gender").invalid && (ctx.signUpForm.get("gender").dirty || ctx.signUpForm.get("gender").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("gender").errors == null ? null : ctx.signUpForm.get("gender").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](50, _c0, ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted), ctx.signUpForm.get("countryID").valid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.countries);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.signUpForm.get("countryID").invalid && (ctx.signUpForm.get("countryID").dirty || ctx.signUpForm.get("countryID").touched || ctx.signUpForm.submitted) && (ctx.signUpForm.get("countryID").errors == null ? null : ctx.signUpForm.get("countryID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.signUpForm.get("skills").controls);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.registerError);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4287:
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class TasksComponent {}
TasksComponent.ɵfac = function TasksComponent_Factory(t) {
  return new (t || TasksComponent)();
};
TasksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TasksComponent,
  selectors: [["app-tasks"]],
  decls: 2,
  vars: 0,
  template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tasks works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9621:
/*!**************************************************!*\
  !*** ./src/app/team-size-validator.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamSizeValidatorDirective: () => (/* binding */ TeamSizeValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class TeamSizeValidatorDirective {
  constructor() {
    this.n = 0;
  }
  validate(control) {
    let currentValue = control.value;
    let isValid = currentValue % this.n == 0;
    if (isValid) {
      return null; //valid
    } else {
      return {
        divisible: {
          valid: false
        }
      }; //indicates invalid
    }
  }
}

TeamSizeValidatorDirective.ɵfac = function TeamSizeValidatorDirective_Factory(t) {
  return new (t || TeamSizeValidatorDirective)();
};
TeamSizeValidatorDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: TeamSizeValidatorDirective,
  selectors: [["", "appTeamSizeValidator", ""]],
  inputs: {
    n: ["appTeamSizeValidator", "n"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
    useExisting: TeamSizeValidatorDirective,
    multi: true
  }])]
});


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map