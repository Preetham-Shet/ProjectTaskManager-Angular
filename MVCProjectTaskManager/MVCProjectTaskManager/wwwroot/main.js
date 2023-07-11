"use strict";
(self["webpackChunkProjectTaskManager"] = self["webpackChunkProjectTaskManager"] || []).push([["main"],{

/***/ 5676:
/*!********************************!*\
  !*** ./src/app/MyAnimation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeAnimation: () => (/* binding */ fadeAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

const fadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("routeAnimations", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)("* <=> *", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter, :leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  position: 'absolute',
  width: '98%'
}), {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '1'
}))], {
  optional: true
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("0.6s", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: '0'
}))], {
  optional: true
})])])]);

/***/ }),

/***/ 6048:
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-routing/admin-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminRoutingModule: () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dashboard/dashboard.component */ 5520);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/projects/projects.component */ 2908);
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project-details/project-details.component */ 3502);
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/masters/masters.component */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: 'admin',
  data: {
    expectedRole: 'Admin'
  },
  children: [{
    path: 'dashboard',
    component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
  }, {
    path: 'projects',
    component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent
  }, {
    path: 'projects/view/:projectid',
    component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_2__.ProjectDetailsComponent
  }, {
    path: 'masters',
    component: _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_3__.MastersComponent
  }]
}];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

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
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 5520);
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/about/about.component */ 7280);
/* harmony import */ var _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/my-profile/my-profile.component */ 8519);
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/dashboard.service */ 5026);
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projects/projects.component */ 2908);
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project/project.component */ 5615);
/* harmony import */ var _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/check-box-printer/check-box-printer.component */ 4773);
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project-details/project-details.component */ 3502);
/* harmony import */ var _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-routing/admin-routing.module */ 6048);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/countries/countries.component */ 3479);
/* harmony import */ var _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/client-locations/client-locations.component */ 8678);
/* harmony import */ var _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/task-priorities/task-priorities.component */ 2363);
/* harmony import */ var _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/task-status/task-status.component */ 7894);
/* harmony import */ var _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/masters/masters.component */ 6316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
















class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__.DashboardService],
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_8__.AdminRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _components_project_project_component__WEBPACK_IMPORTED_MODULE_5__.ProjectComponent, _components_check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_6__.CheckBoxPrinterComponent, _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__.ProjectDetailsComponent, _components_countries_countries_component__WEBPACK_IMPORTED_MODULE_10__.CountriesComponent, _components_client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_11__.ClientLocationsComponent, _components_task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_12__.TaskPrioritiesComponent, _components_task_status_task_status_component__WEBPACK_IMPORTED_MODULE_13__.TaskStatusComponent, _components_masters_masters_component__WEBPACK_IMPORTED_MODULE_14__.MastersComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _admin_routing_admin_routing_module__WEBPACK_IMPORTED_MODULE_8__.AdminRoutingModule],
    exports: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _components_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__.MyProfileComponent, _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.ProjectsComponent, _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_7__.ProjectDetailsComponent]
  });
})();

/***/ }),

/***/ 7280:
/*!***********************************************************!*\
  !*** ./src/app/admin/components/about/about.component.ts ***!
  \***********************************************************/
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

/***/ 4773:
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/check-box-printer/check-box-printer.component.ts ***!
  \***********************************************************************************/
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

/***/ 8678:
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/client-locations/client-locations.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientLocationsComponent: () => (/* binding */ ClientLocationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/client-location */ 9765);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/client-locations.service */ 3797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function ClientLocationsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 53);
  }
}
function ClientLocationsComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r11.sortBy = "clientLocationName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const clientLocation_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onEditClick($event, clientLocation_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const clientLocation_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onDeleteClick($event, clientLocation_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const clientLocation_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](clientLocation_r17.clientLocationName);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function ClientLocationsComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const page_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.onPageIndexClicked(page_r23.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ClientLocationsComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
  }
}
function ClientLocationsComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
  }
}
function ClientLocationsComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_42_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_42_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ClientLocationsComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ClientLocationsComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_42_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_ng_container_42_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
  }
}
function ClientLocationsComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ClientLocationsComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Client Location Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class ClientLocationsComponent {
  //Constructor
  constructor(clientLocationsService, formBuilder) {
    this.clientLocationsService = clientLocationsService;
    this.formBuilder = formBuilder;
    //Objects for Holding Model Data
    this.clientLocations = [];
    this.showLoading = true;
    //Objects for Delete
    this.deleteClientLocation = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_0__.ClientLocation();
    this.editIndex = null;
    this.deleteIndex = null;
    //Properties for Searching
    this.searchBy = "clientLocationName";
    this.searchText = "";
    //Properties for Paging
    this.currentPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
    //Properties for Sorting
    this.sortBy = "clientLocationName";
    this.sortOrder = "ASC";
    //Reactive Forms
    this.newForm = null;
    this.editForm = null;
    //Autofocus TextBoxes
    this.defaultTextBox_New = null;
    this.defaultTextBox_Edit = null;
  }
  ngOnInit() {
    //Get data from database
    this.clientLocationsService.getClientLocations().subscribe(response => {
      this.clientLocations = response;
      this.showLoading = false;
      this.calculateNoOfPages();
    });
    //Create newForm
    this.newForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    //Create editForm
    this.editForm = this.formBuilder.group({
      clientLocationID: this.formBuilder.control(null),
      clientLocationName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
  }
  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.clientLocations, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }
  onNewClick(event) {
    //reset the newForm
    this.newForm.reset({
      clientLocationID: 0
    });
    setTimeout(() => {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.clientLocationsService.insertClientLocation(this.newForm.value).subscribe({
        next: response => {
          //Add Response to Grid
          var p = new src_app_models_client_location__WEBPACK_IMPORTED_MODULE_0__.ClientLocation();
          p.clientLocationID = response.clientLocationID;
          p.clientLocationName = response.clientLocationName;
          this.clientLocations.push(p);
          //Reset the newForm
          this.newForm.reset();
          $("#newClientLocationFormCancel").trigger("click");
          this.calculateNoOfPages();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(event, clientLocation) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      //Set data into editForm
      this.editForm.patchValue(clientLocation);
      this.editIndex = this.clientLocations.indexOf(clientLocation);
      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }
  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.clientLocationsService.updateClientLocation(this.editForm.value).subscribe({
        next: response => {
          //Update the response in Grid
          this.clientLocations[this.editIndex] = response;
          //Reset the editForm
          this.editForm.reset();
          $("#editClientLocationFormCancel").trigger("click");
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(event, clientLocation) {
    //Set data into deleteClientLocation
    this.deleteClientLocation.clientLocationID = clientLocation.clientLocationID;
    this.deleteClientLocation.clientLocationName = clientLocation.clientLocationName;
    this.deleteIndex = this.clientLocations.indexOf(clientLocation);
  }
  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.clientLocationsService.deleteClientLocation(this.deleteClientLocation.clientLocationID).subscribe({
      next: response => {
        //Delete object in Grid
        this.clientLocations.splice(this.deleteIndex, 1);
        //Clear deleteCountry
        this.deleteClientLocation.clientLocationID = null;
        this.deleteClientLocation.clientLocationName = null;
        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange(event) {
    this.calculateNoOfPages();
  }
}
ClientLocationsComponent.ɵfac = function ClientLocationsComponent_Factory(t) {
  return new (t || ClientLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_2__.ClientLocationsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
ClientLocationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ClientLocationsComponent,
  selectors: [["app-client-locations"]],
  viewQuery: function ClientLocationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    }
  },
  decls: 115,
  vars: 34,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newClientLocationModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "clientLocationName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newClientLocationModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewClientLocationName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editClientLocationModal", 1, "modal"], ["for", "txtEditClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "formControlName", "clientLocationName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editClientLocationFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteClientLocationName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteClientLocationName", "placeholder", "Client Location Name", "name", "ClientLocationName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editClientLocationModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function ClientLocationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Client Locations ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ClientLocationsComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Create Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7)(12, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "div", 11)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function ClientLocationsComponent_Template_input_keyup_19_listener($event) {
        return ctx.onSearchTextChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Client Location Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ClientLocationsComponent_i_27_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ClientLocationsComponent_i_28_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ClientLocationsComponent_i_29_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ClientLocationsComponent_tr_32_Template, 9, 1, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "ul", 22)(38, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_38_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ClientLocationsComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ClientLocationsComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_li_click_43_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "New Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 32)(54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 33)(57, "div", 3)(58, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Client Location Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, ClientLocationsComponent_span_63_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 39)(65, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_67_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "form", 26)(70, "div", 42)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Edit Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 32)(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 33)(80, "div", 3)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Client Location Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, ClientLocationsComponent_span_86_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39)(88, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "form")(93, "div", 47)(94, "div", 28)(95, "div", 29)(96, "div", 30)(97, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Delete Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 32)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 33)(103, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Are you sure to delete this Client Location?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 3)(106, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Client Location Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 35)(109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ClientLocationsComponent_Template_input_ngModelChange_109_listener($event) {
        return ctx.deleteClientLocation.clientLocationName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 39)(111, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ClientLocationsComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "clientLocationName");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "clientLocationName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](35, 24, ctx.clientLocations, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted), ctx.newForm.get("clientLocationName").valid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("clientLocationName").invalid && (ctx.newForm.get("clientLocationName").dirty || ctx.newForm.get("clientLocationName").touched || ctx.newForm.submitted) && (ctx.newForm.get("clientLocationName").errors == null ? null : ctx.newForm.get("clientLocationName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted), ctx.editForm.get("clientLocationName").valid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("clientLocationName").invalid && (ctx.editForm.get("clientLocationName").dirty || ctx.editForm.get("clientLocationName").touched || ctx.editForm.submitted) && (ctx.editForm.get("clientLocationName").errors == null ? null : ctx.editForm.get("clientLocationName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteClientLocation.clientLocationName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3479:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/countries/countries.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountriesComponent: () => (/* binding */ CountriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/country */ 1085);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/countries.service */ 532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function CountriesComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 53);
  }
}
function CountriesComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r11.sortBy = "countryName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const country_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onEditClick($event, country_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const country_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onDeleteClick($event, country_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const country_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](country_r17.countryName);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function CountriesComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const page_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.onPageIndexClicked(page_r23.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
  }
}
function CountriesComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CountriesComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
  }
}
function CountriesComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
  }
}
function CountriesComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_42_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_42_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CountriesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CountriesComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_42_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_ng_container_42_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
  }
}
function CountriesComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CountriesComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Country Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class CountriesComponent {
  //Constructor
  constructor(countriesService, formBuilder) {
    this.countriesService = countriesService;
    this.formBuilder = formBuilder;
    //Objects for Holding Model Data
    this.countries = [];
    this.showLoading = false;
    //Objects for Delete
    this.deleteCountry = new src_app_models_country__WEBPACK_IMPORTED_MODULE_0__.Country();
    this.editIndex = null;
    this.deleteIndex = null;
    //Properties for Searching
    this.searchBy = "countryName";
    this.searchText = "";
    //Properties for Paging
    this.currentPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
    //Reactive Forms
    this.newForm = null;
    this.editForm = null;
    //Autofocus TextBoxes
    this.defaultTextBox_New = null;
    this.defaultTextBox_Edit = null;
    //Sorting
    this.sortBy = "countryName";
    this.sortOrder = "ASC"; //ASC | DESC
  }

  ngOnInit() {
    //Get data from database
    this.countriesService.getCountries().subscribe(response => {
      this.countries = response;
      this.showLoading = false;
      this.calculateNoOfPages();
    });
    //Create newForm
    this.newForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    //Create editForm
    this.editForm = this.formBuilder.group({
      countryID: this.formBuilder.control(null),
      countryName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
  }
  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.countries, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }
  onNewClick(event) {
    //reset the newForm
    this.newForm.reset({
      countryID: null
    });
    setTimeout(() => {
      //Focus the ClientLocation textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.countriesService.insertCountry(this.newForm.value).subscribe({
        next: response => {
          //Add Response to Grid
          var p = new src_app_models_country__WEBPACK_IMPORTED_MODULE_0__.Country();
          p.countryID = response.countryID;
          p.countryName = response.countryName;
          this.countries.push(p);
          //Reset the newForm
          this.newForm.reset();
          $("#newCountryFormCancel").trigger("click");
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(event, country) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      //Set data into editForm
      this.editForm.patchValue(country);
      this.editIndex = this.countries.indexOf(country);
      //Focus the ClientLocation textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }
  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.countriesService.updateCountry(this.editForm.value).subscribe(response => {
        //Update the response in Grid
        this.countries[this.editIndex] = response;
        //Reset the editForm
        this.editForm.reset();
        $("#editCountryFormCancel").trigger("click");
      }, error => {
        console.log(error);
      });
    }
  }
  onDeleteClick(event, country) {
    //Set data into deleteCountry
    this.deleteCountry.countryID = country.countryID;
    this.deleteCountry.countryName = country.countryName;
    this.deleteIndex = this.countries.indexOf(country);
  }
  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.countriesService.deleteCountry(this.deleteCountry.countryID).subscribe(response => {
      //Delete object in Grid
      this.countries.splice(this.deleteIndex, 1);
      //Clear deleteCountry
      this.deleteCountry.countryID = null;
      this.deleteCountry.countryName = null;
      this.calculateNoOfPages();
    }, error => {
      console.log(error);
    });
  }
  onSearchTextChange(event) {
    //Recall the calculateNoOfPages
    this.calculateNoOfPages();
  }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) {
  return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_countries_service__WEBPACK_IMPORTED_MODULE_2__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
CountriesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CountriesComponent,
  selectors: [["app-countries"]],
  viewQuery: function CountriesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    }
  },
  decls: 115,
  vars: 34,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newCountryModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "countryName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newCountryModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewCountryName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editCountryModal", 1, "modal"], ["for", "txtEditCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditCountryName", "placeholder", "Country Name", "name", "CountryName", "formControlName", "countryName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editCountryFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteCountryModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteCountryName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteCountryName", "placeholder", "Country Name", "name", "CountryName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editCountryModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteCountryModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function CountriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Countries ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CountriesComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Create Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7)(12, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "div", 11)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function CountriesComponent_Template_input_keyup_19_listener($event) {
        return ctx.onSearchTextChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Country Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, CountriesComponent_i_27_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, CountriesComponent_i_28_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, CountriesComponent_i_29_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CountriesComponent_tr_32_Template, 9, 1, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "ul", 22)(38, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_38_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CountriesComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, CountriesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_li_click_43_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "New Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 32)(54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 33)(57, "div", 3)(58, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Country Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, CountriesComponent_span_63_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 39)(65, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_67_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "form", 26)(70, "div", 42)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Edit Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 32)(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 33)(80, "div", 3)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Country Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, CountriesComponent_span_86_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39)(88, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "form")(93, "div", 47)(94, "div", 28)(95, "div", 29)(96, "div", 30)(97, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Delete Country");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 32)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 33)(103, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Are you sure to delete this Country?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 3)(106, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Country Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 35)(109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function CountriesComponent_Template_input_ngModelChange_109_listener($event) {
        return ctx.deleteCountry.countryName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 39)(111, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "countryName");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "countryName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](35, 24, ctx.countries, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted), ctx.newForm.get("countryName").valid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("countryName").invalid && (ctx.newForm.get("countryName").dirty || ctx.newForm.get("countryName").touched || ctx.newForm.submitted) && (ctx.newForm.get("countryName").errors == null ? null : ctx.newForm.get("countryName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted), ctx.editForm.get("countryName").valid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("countryName").invalid && (ctx.editForm.get("countryName").dirty || ctx.editForm.get("countryName").touched || ctx.editForm.submitted) && (ctx.editForm.get("countryName").errors == null ? null : ctx.editForm.get("countryName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteCountry.countryName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5520:
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/dashboard.service */ 5026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




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
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_dashboard_service__WEBPACK_IMPORTED_MODULE_0__.DashboardService));
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6316:
/*!***************************************************************!*\
  !*** ./src/app/admin/components/masters/masters.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MastersComponent: () => (/* binding */ MastersComponent)
/* harmony export */ });
/* harmony import */ var src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../directives/component-loader.directive */ 9575);
/* harmony import */ var _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countries/countries.component */ 3479);
/* harmony import */ var _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client-locations/client-locations.component */ 8678);
/* harmony import */ var _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-priorities/task-priorities.component */ 2363);
/* harmony import */ var _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-status/task-status.component */ 7894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);








const _c0 = function (a0) {
  return {
    "active": a0
  };
};
function MastersComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_a_5_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const masterMenuItem_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.menuItemClick(masterMenuItem_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const masterMenuItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeItem == masterMenuItem_r3.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", masterMenuItem_r3.displayName, " ");
  }
}
function MastersComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_li_8_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.activeItem = tab_r6.itemName);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MastersComponent_li_8_Template_span_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const tab_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.onCloseClick(tab_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const tab_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", "#" + tab_r6.itemName, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, ctx_r1.activeItem == tab_r6.itemName));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tab_r6.displayName, " ");
  }
}
function MastersComponent_div_10_ng_template_2_Template(rf, ctx) {}
function MastersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MastersComponent_div_10_ng_template_2_Template, 0, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", tab_r10.itemName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r2.activeItem == tab_r10.itemName));
  }
}
class MastersComponent {
  constructor(componentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
    this.masterMenuItems = [{
      itemName: "Countries",
      displayName: "Countries",
      component: _countries_countries_component__WEBPACK_IMPORTED_MODULE_1__.CountriesComponent
    }, {
      itemName: "ClientLocations",
      displayName: "Client Locations",
      component: _client_locations_client_locations_component__WEBPACK_IMPORTED_MODULE_2__.ClientLocationsComponent
    }, {
      itemName: "TaskPriorities",
      displayName: "Task Priorities",
      component: _task_priorities_task_priorities_component__WEBPACK_IMPORTED_MODULE_3__.TaskPrioritiesComponent
    }, {
      itemName: "TaskStatus",
      displayName: "Task Status",
      component: _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_4__.TaskStatusComponent
    }];
    this.activeItem = "";
    this.tabs = [];
    this.componentLoaders = null;
  }
  ngOnInit() {}
  menuItemClick(clickedMasterMenuItem) {
    //console.log(clickedMasterMenuItem);
    this.activeItem = clickedMasterMenuItem.itemName;
    let matchingTabs = this.tabs.filter(tab => {
      return tab.itemName == clickedMasterMenuItem.itemName;
    });
    if (matchingTabs.length == 0) {
      this.tabs.push({
        tabIndex: this.tabs.length,
        itemName: clickedMasterMenuItem.itemName,
        displayName: clickedMasterMenuItem.displayName
      });
      setTimeout(() => {
        var componentLoadersArray = this.componentLoaders.toArray();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickedMasterMenuItem.component);
        var viewContainterRef = componentLoadersArray[this.tabs.length - 1].viewContainerRef;
        this.tabs[this.tabs.length - 1].viewContainerRef = viewContainterRef;
        var componentRef = viewContainterRef.createComponent(componentFactory);
        if (clickedMasterMenuItem.component.name == "CountriesComponent") {
          var componentInstance = componentRef.instance;
          // componentInstance.message = "Hello to Countries";
        }
      }, 100);
    }
  }
  onCloseClick(clickedTab) {
    clickedTab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(clickedTab), 1);
    if (this.tabs.length > 0) {
      this.activeItem = this.tabs[0].itemName;
    }
  }
}
MastersComponent.ɵfac = function MastersComponent_Factory(t) {
  return new (t || MastersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver));
};
MastersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MastersComponent,
  selectors: [["app-masters"]],
  viewQuery: function MastersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.componentLoaders = _t);
    }
  },
  decls: 11,
  vars: 3,
  consts: [[1, "row"], [1, "col-md-2"], [1, "list-group"], ["href", "#", "class", "list-group-item list-group-item-action", "onclick", "return false", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8"], ["role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["class", "tab-pane fade show", "role", "tabpanel", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "onclick", "return false", 1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "nav-item"], ["data-toggle", "tab", "role", "tab", 1, "nav-link", 3, "href", "ngClass", "click"], [1, "fa", "fa-window-close", 3, "click"], ["role", "tabpanel", 1, "tab-pane", "fade", "show", 3, "id", "ngClass"], [1, "pl-md-3", "pr-md-3", "mx-auto"], ["appComponentLoader", ""]],
  template: function MastersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Masters");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, MastersComponent_a_5_Template, 2, 4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MastersComponent_li_8_Template, 4, 5, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MastersComponent_div_10_Template, 3, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.masterMenuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, src_app_directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.ComponentLoaderDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8519:
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/my-profile/my-profile.component.ts ***!
  \*********************************************************************/
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

/***/ 3502:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/project-details/project-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDetailsComponent: () => (/* binding */ ProjectDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/project */ 6552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/projects.service */ 5650);




const _c0 = function () {
  return ["/admin", "projects"];
};
class ProjectDetailsComponent {
  constructor(activatedRoute, projectsService) {
    this.activatedRoute = activatedRoute;
    this.projectsService = projectsService;
    this.routeParmsSubscription = null;
    this.project = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
  }
  ngOnInit() {
    this.routeParmsSubscription = this.activatedRoute.params.subscribe(params => {
      let pid = params["projectid"];
      this.projectsService.getProjectByProjectID(pid).subscribe(proj => {
        this.project = proj;
      });
    });
  }
  ngOnDestroy() {
    this.routeParmsSubscription.unsubscribe();
  }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) {
  return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService));
};
ProjectDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProjectDetailsComponent,
  selectors: [["app-project-details"]],
  decls: 34,
  vars: 8,
  consts: [[1, "row"], [1, "col-md-8", "col-lg-6", "col-xl-5", "mx-auto"], [1, "card", "card-primary", "mb-1"], [1, "card-header"], [1, "card-body"], [1, "table", "table-borderless", "table-sm"], [1, "card-footer"], [1, "btn", "btn-info", 3, "routerLink"]],
  template: function ProjectDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "table", 5)(10, "tr")(11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "tr")(16, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "tr")(22, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tr")(27, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6)(32, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Back ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("#", ctx.project.projectID, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.projectName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.dateOfStart);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.project.teamSize, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.clientLocation == null ? null : ctx.project.clientLocation.clientLocationName);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.project.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5615:
/*!***************************************************************!*\
  !*** ./src/app/admin/components/project/project.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/projects.service */ 5650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);




const _c0 = ["selectionBox"];
const _c1 = function (a3) {
  return ["/admin", "projects", "view", a3];
};
const _c2 = ["*"];
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
  return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
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
  ngContentSelectors: _c2,
  decls: 40,
  vars: 10,
  consts: [[1, "card", "card-primary"], [1, "card-header"], [1, "row"], [1, "col-11"], [1, "col-1"], [1, "card-body"], [1, "table", "table-borderless", "table-sm", 3, "hidden"], [1, "card-footer"], ["data-toggle", "modal", "data-target", "#editModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], [1, "btn", "btn-primary", 3, "routerLink"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Learn More");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx.project.projectID));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2908:
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/projects/projects.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectsComponent: () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/project */ 6552);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ 3035);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projects.service */ 5650);
/* harmony import */ var src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/client-locations.service */ 3797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/team-size-validator.directive */ 8981);
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/client-location-status-validator.directive */ 5581);
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../directives/project-idunique-validator.directive */ 54);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project/project.component */ 5615);
/* harmony import */ var _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../check-box-printer/check-box-printer.component */ 4773);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);















const _c0 = ["newForm"];
const _c1 = ["editForm"];
const _c2 = ["prjID"];
const _c3 = ["prj"];
function ProjectsComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 104);
  }
}
function ProjectsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 105)(1, "app-project", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("editClick", function ProjectsComponent_div_34_Template_app_project_editClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const i_r47 = restoredCtx.index;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.onEditClick($event, i_r47));
    })("deleteClick", function ProjectsComponent_div_34_Template_app_project_deleteClick_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r51);
      const i_r47 = restoredCtx.index;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.onDeleteClick($event, i_r47));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "app-check-box-printer", null, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("currentProject", project_r46)("recordIndex", i_r47);
  }
}
const _c4 = function (a0) {
  return {
    "active": a0
  };
};
function ProjectsComponent_li_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_li_40_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r55);
      const page_r53 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r54.onPageIndexClicked(page_r53.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r53 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c4, page_r53.pageIndex == ctx_r2.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", page_r53.pageIndex + 1, " ");
  }
}
function ProjectsComponent_span_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", clientLocation_r56.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", clientLocation_r56.clientLocationName, " ");
  }
}
function ProjectsComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project ID should contain numbers only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Duplicate Project ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project Name can contain alphabets, digits, dot, hyphen or space only");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Project name should be at least 3 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Date of Start can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be a number");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Team Size should be divisble by 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_193_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please select status");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_option_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const clientLocation_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", clientLocation_r57.clientLocationID);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", clientLocation_r57.clientLocationName, " ");
  }
}
function ProjectsComponent_span_203_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Please client location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function ProjectsComponent_span_204_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Support projects are not allowed at Tokyo");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
const _c5 = function (a0, a1) {
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
    this.newProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.editIndex = null;
    this.deleteProject = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
    this.deleteIndex = null;
    this.searchBy = 'ProjectName';
    this.searchText = '';
    this.currentPageIndex = 0;
    this.pages = [];
    this.pageSize = 3;
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
        this.calculateNoOfPages();
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
  calculateNoOfPages() {
    let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe();
    var resultProjects = filterPipe.transform(this.projects, this.searchBy, this.searchText);
    var noOfPages = Math.ceil(resultProjects.length / this.pageSize);
    this.pages = [];
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
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
          var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
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
          this.calculateNoOfPages();
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
          var p = new src_app_models_project__WEBPACK_IMPORTED_MODULE_0__.Project();
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
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchClick() {
    // this.projectService
    //   .SearchProjects(this.searchBy, this.searchText)
    //   .subscribe({
    //     next: (response: Project[]) => {
    //       this.projects = response;
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
  }
  onSearchTextKeyup(event) {
    this.calculateNoOfPages();
  }
  onHideShowDetails(event) {
    this.projectService.toggleDetails();
  }
  onPageIndexClicked(pageIndex) {
    this.currentPageIndex = pageIndex;
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_client_locations_service__WEBPACK_IMPORTED_MODULE_4__.ClientLocationsService));
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  viewQuery: function ProjectsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.newForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editForm = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.prjID = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.projs = _t);
    }
  },
  decls: 238,
  vars: 98,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:34px", 4, "ngIf"], [1, "row"], [1, "col-xl-12", "mx-auto"], [1, "form-group", "form-row"], [1, "col-2"], ["data-toggle", "modal", "data-target", "#newModal", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-1", "custom-control", "custom-checkbox"], ["type", "checkbox", "value", "true", "name", "isAllChecked", "id", "isAllChecked", 1, "custom-control-input", 3, "ngModel", "ngModelChange", "change"], ["for", "isAllChecked", 1, "custom-control-label"], ["for", "drpSearchBy", 1, "col-form-label", "col-1", "text-right"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "projectID"], ["value", "projectName"], ["value", "dateOfStart"], ["value", "teamSize"], ["for", "textSearchText", 1, "col-form-label", "col-1", "text-right"], [1, "col-3"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["class", "col-md-4 mb-1 projectcard", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["novalidate", "novalidate", "appClientLocationStatusValidator", ""], ["newForm", "ngForm"], ["role", "dialog", "id", "newModal", 1, "modal"], [1, "modal-dialog"], [1, "modal-content", 2, "width", "700px"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "form-group", "row"], ["for", "txtNewProjectID", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewProjectID", "placeholder", "Project ID", "name", "ProjectID", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectID", "ngModel", "prjID", ""], ["class", "text-danger", 4, "ngIf"], ["for", "txtNewProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtNewProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newProjectName", "ngModel"], ["for", "txtNewDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtNewDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["newDateOfStart", "ngModel"], ["for", "txtTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["newTeamSize", "ngModel"], ["for", "col-sm-4 col-form-label"], [1, "form-check"], ["type", "checkbox", "id", "chkNewActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkNewActive", 1, "form-check-label"], ["for", "rbNewStatusInForce", 1, "col-sm-4"], [1, "form-check", "form-check-inline"], ["type", "radio", "id", "rbNewStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusInForce", "ngModel"], ["for", "rbNewStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbNewStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["newStatusSupport", "ngModel"], ["for", "rbNewStatusSupport", 1, "form-check-label"], ["for", "drpNewClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpNewClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["newClientLocationID", "ngModel"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newFormCancel", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["editForm", "ngForm"], ["role", "dialog", "id", "editModal", 1, "modal"], [1, "modal-header"], ["for", "txtEditProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", "required", "required", "pattern", "^[0-9]*$", "appProjectIDUniqueValidator", "", 1, "form-control-plain-text", 2, "width", "130px", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectID", "ngModel"], ["for", "txtEditProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditProjectName", "placeholder", "Project Name", "name", "ProjectName", "required", "required", "minlength", "3", "maxlength", "30", "pattern", "^[A-Za-z0-9 /-]*$", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editProjectName", "ngModel"], ["for", "txtEditDateOfStart", 1, "col-sm-4", "col-form-label"], ["type", "date", "id", "txtEditDateOfStart", "placeholder", "Date of Start", "name", "DateOfStart", "required", "required", 1, "form-control", 2, "width", "180px", 3, "ngModel", "ngClass", "ngModelChange"], ["editDateOfStart", "ngModel"], ["for", "txtEditTeamSize", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTeamSize", "placeholder", "Team Size", "name", "TeamSize", "pattern", "^[0-9]*$", "maxlength", "7", "appTeamSizeValidator", "5", 1, "form-control", 2, "width", "150px", 3, "ngModel", "ngClass", "ngModelChange"], ["editTeamSize", "ngModel"], ["type", "checkbox", "id", "chkEditActive", "value", "true", "name", "active", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "chkEditActive", 1, "form-check-label"], ["for", "rbEditStatusInForce", 1, "col-sm-4"], ["type", "radio", "id", "rbEditStatusInForce", "value", "In Force", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusInForce", "ngModel"], ["for", "rbEditStatusInForce", 1, "form-check-label"], ["type", "radio", "id", "rbEditStatusSupport", "value", "Support", "name", "Status", "required", "required", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["editStatusSupport", "ngModel"], ["for", "rbEditStatusSupport", 1, "form-check-label"], ["for", "drpEditClientLocation", 1, "col-sm-4", "col-form-label"], ["id", "drpEditClientLocation", "name", "ClientLocation", "required", "required", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["editClientLocationID", "ngModel"], ["data-dismiss", "modal", "id", "editFormCancel", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteProjectID", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectID", "placeholder", "Project ID", "name", "ProjectID", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "100px", 3, "ngModel", "ngModelChange"], ["for", "txtDeleteProjectName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteProjectName", "placeholder", "Project Name", "name", "ProjectName", "disabled", "disabled", 1, "form-control-plain-text", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "34px"], [1, "col-md-4", "mb-1", "projectcard"], [3, "currentProject", "recordIndex", "editClick", "deleteClick"], ["prj", ""], ["selectionBox", ""], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], [1, "text-danger"], [3, "value"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, " Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ProjectsComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Create Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 4)(10, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_10_listener($event) {
        return ctx.onHideShowDetails($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Hide/Show Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 7)(13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.isAllChecked = $event;
      })("change", function ProjectsComponent_Template_input_change_13_listener($event) {
        return ctx.isAllCheckedChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 4)(18, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_18_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_31_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function ProjectsComponent_Template_input_keyup_31_listener($event) {
        return ctx.onSearchTextKeyup($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 2)(33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](34, ProjectsComponent_div_34_Template, 5, 2, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](36, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 1)(38, "div", 21)(39, "ul", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](40, ProjectsComponent_li_40_Template, 3, 4, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "form", 24, 25)(43, "div", 26)(44, "div", 27)(45, "div", 28)(46, "div", 29)(47, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "New Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "button", 31)(50, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 32)(53, "div", 33)(54, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "div", 35)(57, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_57_listener($event) {
        return ctx.newProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](60, ProjectsComponent_span_60_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, ProjectsComponent_span_61_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, ProjectsComponent_span_62_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "div", 33)(64, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div", 35)(67, "input", 40, 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_67_listener($event) {
        return ctx.newProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, ProjectsComponent_span_69_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, ProjectsComponent_span_70_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, ProjectsComponent_span_71_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "div", 33)(73, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 35)(76, "input", 43, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_76_listener($event) {
        return ctx.newProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](78, ProjectsComponent_span_78_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 33)(80, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "div", 35)(83, "input", 46, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_83_listener($event) {
        return ctx.newProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, ProjectsComponent_span_85_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](86, ProjectsComponent_span_86_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 33)(88, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](89, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](90, "div", 35)(91, "div", 49)(92, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_92_listener($event) {
        return ctx.newProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 33)(96, "label", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](97, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 35)(99, "div", 53)(100, "input", 54, 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_100_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "label", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](103, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "div", 53)(105, "input", 57, 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_105_listener($event) {
        return ctx.newProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, ProjectsComponent_span_109_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 33)(111, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](112, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "div", 35)(114, "select", 61, 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_114_listener($event) {
        return ctx.newProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](118, ProjectsComponent_option_118_Template, 2, 2, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, ProjectsComponent_span_119_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ProjectsComponent_span_120_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "div", 65)(122, "button", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](124, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_124_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "form", 24, 68)(128, "div", 69)(129, "div", 27)(130, "div", 28)(131, "div", 70)(132, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](133, "Edit Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "button", 31)(135, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](136, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "div", 32)(138, "div", 33)(139, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](140, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "div", 35)(142, "input", 72, 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_142_listener($event) {
        return ctx.editProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](144, ProjectsComponent_span_144_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](145, ProjectsComponent_span_145_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](146, ProjectsComponent_span_146_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "div", 33)(148, "label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "div", 35)(151, "input", 75, 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_151_listener($event) {
        return ctx.editProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](153, ProjectsComponent_span_153_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](154, ProjectsComponent_span_154_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](155, ProjectsComponent_span_155_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "div", 33)(157, "label", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](158, "Date of Start");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "div", 35)(160, "input", 78, 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_160_listener($event) {
        return ctx.editProject.dateOfStart = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](162, ProjectsComponent_span_162_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "div", 33)(164, "label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](165, "Team Size");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](166, "div", 35)(167, "input", 81, 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_167_listener($event) {
        return ctx.editProject.teamSize = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](169, ProjectsComponent_span_169_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](170, ProjectsComponent_span_170_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](171, "div", 33)(172, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](173, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](174, "div", 35)(175, "div", 49)(176, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_176_listener($event) {
        return ctx.editProject.active = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](177, "label", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](178, "Active");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](179, "div", 33)(180, "label", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](181, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](182, "div", 35)(183, "div", 53)(184, "input", 86, 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_184_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](186, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](187, "In Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](188, "div", 53)(189, "input", 89, 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_189_listener($event) {
        return ctx.editProject.status = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](191, "label", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](192, "Support");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](193, ProjectsComponent_span_193_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](194, "div", 33)(195, "label", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](196, "Client Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](197, "div", 35)(198, "select", 93, 94);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_select_ngModelChange_198_listener($event) {
        return ctx.editProject.clientLocationID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](200, "option", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](201, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](202, ProjectsComponent_option_202_Template, 2, 2, "option", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](203, ProjectsComponent_span_203_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](204, ProjectsComponent_span_204_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](205, "div", 65)(206, "button", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](207, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](208, "button", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_208_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](209, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](210, "form")(211, "div", 96)(212, "div", 27)(213, "div", 28)(214, "div", 70)(215, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](216, "Delete Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](217, "button", 31)(218, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](219, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](220, "div", 32)(221, "div", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](222, "Are you sure to delete this Project?");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](223, "div", 33)(224, "label", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](225, "Project ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](226, "div", 35)(227, "input", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_227_listener($event) {
        return ctx.deleteProject.projectID = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](228, "div", 33)(229, "label", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](230, "Project Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](231, "div", 35)(232, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function ProjectsComponent_Template_input_ngModelChange_232_listener($event) {
        return ctx.deleteProject.projectName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](233, "div", 65)(234, "button", 102);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](235, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](236, "button", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_236_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](237, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](42);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](58);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](68);
      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](77);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](84);
      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](101);
      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](115);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](127);
      const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](143);
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](152);
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](161);
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](168);
      const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](185);
      const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](199);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.isAllChecked);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](35, 60, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](36, 64, ctx.projects, ctx.searchBy, ctx.searchText), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](68, _c5, _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted), _r4.valid && (_r4.dirty || _r4.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched || _r3.submitted) && _r4.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](71, _c5, _r9.invalid && (_r9.dirty || _r9.touched || _r3.submitted), _r9.valid && (_r9.dirty || _r9.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched || _r3.submitted) && _r9.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched || _r3.submitted) && _r9.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r9.invalid && (_r9.dirty || _r9.touched || _r3.submitted) && _r9.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](74, _c5, _r13.invalid && (_r13.dirty || _r13.touched || _r3.submitted), _r13.valid && (_r13.dirty || _r13.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r13.invalid && (_r13.dirty || _r13.touched || _r3.submitted) && _r13.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](77, _c5, _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted), _r15.valid && (_r15.dirty || _r15.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted) && _r15.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r15.invalid && (_r15.dirty || _r15.touched || _r3.submitted) && _r15.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r18.invalid && (_r18.dirty || _r18.touched || _r3.submitted) && _r18.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.newProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](80, _c5, _r21.invalid && (_r21.dirty || _r21.touched || _r3.submitted), _r21.valid && (_r21.dirty || _r21.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r21.invalid && (_r21.dirty || _r21.touched || _r3.submitted) && _r21.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched || _r3.submitted) && (_r3.errors ? _r3.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.projectID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](83, _c5, _r26.invalid && (_r26.dirty || _r26.touched || _r3.submitted), _r26.valid && (_r26.dirty || _r26.touched || _r3.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r26.invalid && (_r26.dirty || _r26.touched || _r25.submitted) && _r26.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r26.invalid && (_r26.dirty || _r26.touched || _r25.submitted) && _r26.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r26.invalid && (_r26.dirty || _r26.touched || _r25.submitted) && _r26.errors["uniqueProjectID"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.projectName)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](86, _c5, _r30.invalid && (_r30.dirty || _r30.touched || _r25.submitted), _r30.valid && (_r30.dirty || _r30.touched || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r30.invalid && (_r30.dirty || _r30.touched || _r25.submitted) && _r30.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r30.invalid && (_r30.dirty || _r30.touched || _r25.submitted) && _r30.errors["pattern"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r30.invalid && (_r30.dirty || _r30.touched || _r25.submitted) && _r30.errors["minlength"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.dateOfStart)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](89, _c5, _r34.invalid && (_r34.dirty || _r34.touched || _r25.submitted), _r34.valid && (_r34.dirty || _r34.touched || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r34.invalid && _r25.submitted && _r34.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.teamSize)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](92, _c5, _r36.invalid && (_r36.dirty || _r36.touched || _r25.submitted), _r36.valid && (_r36.dirty || _r36.touched || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r36.invalid && (_r36.dirty || _r36.touched || _r25.submitted) && _r36.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r36.invalid && (_r36.dirty || _r36.touched || _r25.submitted) && _r36.errors["divisible"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.active);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r39.invalid && (_r39.dirty || _r39.touched || _r25.submitted) && _r39.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.editProject.clientLocationID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](95, _c5, _r42.invalid && (_r42.dirty || _r42.touched || _r25.submitted), _r42.valid && (_r42.dirty || _r42.touched || _r25.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.clientLocations);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r42.invalid && (_r42.dirty || _r42.touched || _r25.submitted) && _r42.errors["required"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _r25.invalid && (_r25.dirty || _r25.touched || _r25.submitted) && (_r25.errors ? _r25.errors["clientLocationStatus"] : false));
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectID);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.deleteProject.projectName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_5__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_6__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_7__.ProjectIDUniqueValidatorDirective, _project_project_component__WEBPACK_IMPORTED_MODULE_8__.ProjectComponent, _check_box_printer_check_box_printer_component__WEBPACK_IMPORTED_MODULE_9__.CheckBoxPrinterComponent, src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_2__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_10__.PagingPipe],
  styles: [".projectcard[_ngcontent-%COMP%] {\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7QUFBSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0Y2FyZFxyXG57XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2363:
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/task-priorities/task-priorities.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPrioritiesComponent: () => (/* binding */ TaskPrioritiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/task-priority */ 7951);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-priorities.service */ 2203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskPrioritiesComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 53);
  }
}
function TaskPrioritiesComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r11.sortBy = "taskPriorityName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const taskPriority_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onEditClick($event, taskPriority_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const taskPriority_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onDeleteClick($event, taskPriority_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskPriority_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](taskPriority_r17.taskPriorityName);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function TaskPrioritiesComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const page_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.onPageIndexClicked(page_r23.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskPrioritiesComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
  }
}
function TaskPrioritiesComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
  }
}
function TaskPrioritiesComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TaskPrioritiesComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TaskPrioritiesComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_ng_container_42_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
  }
}
function TaskPrioritiesComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskPrioritiesComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Priority Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class TaskPrioritiesComponent {
  //Constructor
  constructor(taskPrioritiesService, formBuilder) {
    this.taskPrioritiesService = taskPrioritiesService;
    this.formBuilder = formBuilder;
    //Objects for Holding Model Data
    this.taskPriorities = [];
    this.showLoading = true;
    //Objects for Delete
    this.deleteTaskPriority = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_0__.TaskPriority();
    this.editIndex = null;
    this.deleteIndex = null;
    //Properties for Searching
    this.searchBy = "taskPriorityName";
    this.searchText = "";
    //Properties for Paging
    this.currentPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
    //Properties for Sorting
    this.sortBy = "taskPriorityName";
    this.sortOrder = "ASC";
    //Reactive Forms
    this.newForm = null;
    this.editForm = null;
    //Autofocus TextBoxes
    this.defaultTextBox_New = null;
    this.defaultTextBox_Edit = null;
  }
  ngOnInit() {
    //Get data from database
    this.taskPrioritiesService.getTaskPriorities().subscribe(response => {
      this.taskPriorities = response;
      this.showLoading = false;
      this.calculateNoOfPages();
    });
    //Create newForm
    this.newForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    //Create editForm
    this.editForm = this.formBuilder.group({
      taskPriorityID: this.formBuilder.control(null),
      taskPriorityName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
  }
  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.taskPriorities, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }
  onNewClick(event) {
    //reset the newForm
    this.newForm.reset({
      taskPriorityID: 0
    });
    setTimeout(() => {
      //Focus the TaskPriority textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.taskPrioritiesService.insertTaskPriority(this.newForm.value).subscribe({
        next: response => {
          //Add Response to Grid
          var p = new src_app_models_task_priority__WEBPACK_IMPORTED_MODULE_0__.TaskPriority();
          p.taskPriorityID = response.taskPriorityID;
          p.taskPriorityName = response.taskPriorityName;
          this.taskPriorities.push(p);
          //Reset the newForm
          this.newForm.reset();
          $("#newTaskPriorityFormCancel").trigger("click");
          this.calculateNoOfPages();
          this.calculateNoOfPages();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onEditClick(event, taskPriority) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      //Set data into editForm
      this.editForm.patchValue(taskPriority);
      this.editIndex = this.taskPriorities.indexOf(taskPriority);
      //Focus the TaskPriority textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }
  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.taskPrioritiesService.updateTaskPriority(this.editForm.value).subscribe({
        next: response => {
          //Update the response in Grid
          this.taskPriorities[this.editIndex] = response;
          //Reset the editForm
          this.editForm.reset();
          $("#editTaskPriorityFormCancel").trigger("click");
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  onDeleteClick(event, taskPriority) {
    //Set data into deleteTaskPriority
    this.deleteTaskPriority.taskPriorityID = taskPriority.taskPriorityID;
    this.deleteTaskPriority.taskPriorityName = taskPriority.taskPriorityName;
    this.deleteIndex = this.taskPriorities.indexOf(taskPriority);
  }
  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.taskPrioritiesService.deleteTaskPriority(this.deleteTaskPriority.taskPriorityID).subscribe({
      next: response => {
        //Delete object in Grid
        this.taskPriorities.splice(this.deleteIndex, 1);
        //Clear deleteCountry
        this.deleteTaskPriority.taskPriorityID = null;
        this.deleteTaskPriority.taskPriorityName = null;
        //Recall the calculateNoOfPages
        this.calculateNoOfPages();
      },
      error: error => {
        console.log(error);
      }
    });
  }
  onSearchTextChange(event) {
    this.calculateNoOfPages();
  }
}
TaskPrioritiesComponent.ɵfac = function TaskPrioritiesComponent_Factory(t) {
  return new (t || TaskPrioritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
TaskPrioritiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TaskPrioritiesComponent,
  selectors: [["app-task-priorities"]],
  viewQuery: function TaskPrioritiesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    }
  },
  decls: 115,
  vars: 34,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newTaskPriorityModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskPriorityName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskPriorityModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskPriorityName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskPriorityModal", 1, "modal"], ["for", "txtEditTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "formControlName", "taskPriorityName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskPriorityFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskPriorityName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskPriorityName", "placeholder", "Task Priority Name", "name", "TaskPriorityName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskPriorityModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function TaskPrioritiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Task Priorities ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TaskPrioritiesComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Create Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7)(12, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "div", 11)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function TaskPrioritiesComponent_Template_input_keyup_19_listener($event) {
        return ctx.onSearchTextChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Task Priority Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TaskPrioritiesComponent_i_27_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, TaskPrioritiesComponent_i_28_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TaskPrioritiesComponent_i_29_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TaskPrioritiesComponent_tr_32_Template, 9, 1, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "ul", 22)(38, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_38_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, TaskPrioritiesComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, TaskPrioritiesComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_li_click_43_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "New Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 32)(54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 33)(57, "div", 3)(58, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Task Priority Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, TaskPrioritiesComponent_span_63_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 39)(65, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_67_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "form", 26)(70, "div", 42)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Edit Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 32)(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 33)(80, "div", 3)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Task Priority Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, TaskPrioritiesComponent_span_86_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39)(88, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "form")(93, "div", 47)(94, "div", 28)(95, "div", 29)(96, "div", 30)(97, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Delete Task Priority");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 32)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 33)(103, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Are you sure to delete this Task Priority?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 3)(106, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Task Priority Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 35)(109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskPrioritiesComponent_Template_input_ngModelChange_109_listener($event) {
        return ctx.deleteTaskPriority.taskPriorityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 39)(111, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskPrioritiesComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskPriorityName");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskPriorityName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](35, 24, ctx.taskPriorities, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted), ctx.newForm.get("taskPriorityName").valid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskPriorityName").invalid && (ctx.newForm.get("taskPriorityName").dirty || ctx.newForm.get("taskPriorityName").touched || ctx.newForm.submitted) && (ctx.newForm.get("taskPriorityName").errors == null ? null : ctx.newForm.get("taskPriorityName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted), ctx.editForm.get("taskPriorityName").valid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskPriorityName").invalid && (ctx.editForm.get("taskPriorityName").dirty || ctx.editForm.get("taskPriorityName").touched || ctx.editForm.submitted) && (ctx.editForm.get("taskPriorityName").errors == null ? null : ctx.editForm.get("taskPriorityName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteTaskPriority.taskPriorityName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7894:
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/task-status/task-status.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusComponent: () => (/* binding */ TaskStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_task_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/task-status */ 2527);
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/filter.pipe */ 23);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-statuses.service */ 8260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/paging.pipe */ 8890);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/sort.pipe */ 1805);










const _c0 = ["defaultTextBox_New"];
const _c1 = ["defaultTextBox_Edit"];
function TaskStatusComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 53);
  }
}
function TaskStatusComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_i_27_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r11.sortBy = "taskStatusName";
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_i_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_i_28_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.sortOrder = "DESC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_i_29_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r15.sortOrder = "ASC");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 57)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_tr_32_Template_button_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const taskStatus_r17 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.onEditClick($event, taskStatus_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_tr_32_Template_button_click_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);
      const taskStatus_r17 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onDeleteClick($event, taskStatus_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskStatus_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](taskStatus_r17.taskStatusName);
  }
}
const _c2 = function (a0) {
  return {
    "active": a0
  };
};
function TaskStatusComponent_ng_container_41_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_41_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const page_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.onPageIndexClicked(page_r23.pageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, page_r23.pageIndex == ctx_r22.currentPageIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](page_r23.pageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskStatusComponent_ng_container_41_li_1_Template, 3, 4, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.pages);
  }
}
function TaskStatusComponent_ng_container_42_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_ng_container_42_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_li_8_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.onPageIndexClicked(ctx_r28.currentPageIndex));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.currentPageIndex + 1);
  }
}
function TaskStatusComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_Template_li_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.onPageIndexClicked(0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r32.onPageIndexClicked(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TaskStatusComponent_ng_container_42_li_7_Template, 2, 0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TaskStatusComponent_ng_container_42_li_8_Template, 3, 2, "li", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\u00A0...\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_Template_li_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onPageIndexClicked(ctx_r33.pages.length - 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_ng_container_42_Template_li_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onPageIndexClicked(ctx_r34.pages.length - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c2, ctx_r6.currentPageIndex == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c2, ctx_r6.currentPageIndex == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.currentPageIndex > 1 && ctx_r6.currentPageIndex < ctx_r6.pages.length - 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](14, _c2, ctx_r6.currentPageIndex == ctx_r6.pages.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.pages.length);
  }
}
function TaskStatusComponent_span_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function TaskStatusComponent_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Task Status Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1) {
  return {
    "is-invalid": a0,
    "is-valid": a1
  };
};
class TaskStatusComponent {
  //Constructor
  constructor(taskStatusesService, formBuilder) {
    this.taskStatusesService = taskStatusesService;
    this.formBuilder = formBuilder;
    //Objects for Holding Model Data
    this.taskStatuses = [];
    this.showLoading = true;
    //Objects for Delete
    this.deleteTaskStatus = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_0__.TaskStatus();
    this.editIndex = null;
    this.deleteIndex = null;
    //Properties for Searching
    this.searchBy = "taskStatusName";
    this.searchText = "";
    //Properties for Paging
    this.currentPageIndex = 0;
    this.pages = [];
    this.pageSize = 7;
    //Properties for Sorting
    this.sortBy = "taskStatusName";
    this.sortOrder = "ASC";
    //Reactive Forms
    this.newForm = null;
    this.editForm = null;
    //Autofocus TextBoxes
    this.defaultTextBox_New = null;
    this.defaultTextBox_Edit = null;
  }
  ngOnInit() {
    //Get data from database
    this.taskStatusesService.getTaskStatuses().subscribe(response => {
      this.taskStatuses = response;
      this.showLoading = false;
      this.calculateNoOfPages();
    });
    //Create newForm
    this.newForm = this.formBuilder.group({
      taskStatusID: this.formBuilder.control(null),
      taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
    //Create editForm
    this.editForm = this.formBuilder.group({
      taskStatusID: this.formBuilder.control(null),
      taskStatusName: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
    });
  }
  calculateNoOfPages() {
    //Get no. of Pages
    let filterPipe = new src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe();
    var noOfPages = Math.ceil(filterPipe.transform(this.taskStatuses, this.searchBy, this.searchText).length / this.pageSize);
    this.pages = [];
    //Generate pages
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({
        pageIndex: i
      });
    }
    this.currentPageIndex = 0;
  }
  onPageIndexClicked(ind) {
    //Set currentPageIndex
    if (ind >= 0 && ind < this.pages.length) {
      this.currentPageIndex = ind;
    }
  }
  onNewClick(event) {
    //reset the newForm
    this.newForm.reset({
      taskStatusID: 0
    });
    setTimeout(() => {
      //Focus the TaskStatus textbox in newForm
      this.defaultTextBox_New.nativeElement.focus();
    }, 100);
  }
  onSaveClick() {
    if (this.newForm.valid) {
      //Invoke the REST-API call
      this.taskStatusesService.insertTaskStatus(this.newForm.value).subscribe(response => {
        //Add Response to Grid
        var p = new src_app_models_task_status__WEBPACK_IMPORTED_MODULE_0__.TaskStatus();
        p.taskStatusID = response.taskStatusID;
        p.taskStatusName = response.taskStatusName;
        this.taskStatuses.push(p);
        //Reset the newForm
        this.newForm.reset();
        $("#newTaskStatusFormCancel").trigger("click");
        this.calculateNoOfPages();
        this.calculateNoOfPages();
      }, error => {
        console.log(error);
      });
    }
  }
  onEditClick(event, taskStatus) {
    //Reset the editForm
    this.editForm.reset();
    setTimeout(() => {
      this.editForm.patchValue(taskStatus);
      this.editIndex = this.taskStatuses.indexOf(taskStatus);
      //Focus the TaskStatus textbox in editForm
      this.defaultTextBox_Edit.nativeElement.focus();
    }, 100);
  }
  onUpdateClick() {
    if (this.editForm.valid) {
      //Invoke the REST-API call
      this.taskStatusesService.updateTaskStatus(this.editForm.value).subscribe(response => {
        //Update the response in Grid
        this.taskStatuses[this.editIndex] = response;
        //Reset the editForm
        this.editForm.reset();
        $("#editTaskStatusFormCancel").trigger("click");
      }, error => {
        console.log(error);
      });
    }
  }
  onDeleteClick(event, taskStatus) {
    //Set data into deleteTaskStatus
    this.deleteTaskStatus.taskStatusID = taskStatus.taskStatusID;
    this.deleteTaskStatus.taskStatusName = taskStatus.taskStatusName;
    this.deleteIndex = this.taskStatuses.indexOf(taskStatus);
  }
  onDeleteConfirmClick() {
    //Invoke the REST-API call
    this.taskStatusesService.deleteTaskStatus(this.deleteTaskStatus.taskStatusID).subscribe(response => {
      //Delete object in Grid
      this.taskStatuses.splice(this.deleteIndex, 1);
      //Clear deleteCountry
      this.deleteTaskStatus.taskStatusID = null;
      this.deleteTaskStatus.taskStatusName = null;
      //Recall the calculateNoOfPages
      this.calculateNoOfPages();
    }, error => {
      console.log(error);
    });
  }
  onSearchTextChange(event) {
    this.calculateNoOfPages();
  }
}
TaskStatusComponent.ɵfac = function TaskStatusComponent_Factory(t) {
  return new (t || TaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_2__.TaskStatusesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder));
};
TaskStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: TaskStatusComponent,
  selectors: [["app-task-status"]],
  viewQuery: function TaskStatusComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_New = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.defaultTextBox_Edit = _t.first);
    }
  },
  decls: 115,
  vars: 34,
  consts: [["class", "fa fa-circle-o-notch fa-spin", "style", "font-size:24px", 4, "ngIf"], [1, "row"], [1, "col-xl-12"], [1, "form-group", "row"], [1, "col-md-12", "col-lg-12", "col-xl-2"], ["data-toggle", "modal", "data-target", "#newTaskStatusModal", 1, "btn", "btn-primary", 3, "click"], ["for", "drpSearchBy", 1, "col-form-label", "col-md-6", "col-lg-2", "offset-xl-1", "col-xl-2", "text-right"], [1, "col-md-6", "col-lg-4", "col-xl-3"], ["id", "drpSearchBy", "name", "SearchBy", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "taskStatusName"], ["for", "textSearchText", 1, "col-form-label", "col-md-6", "col-lg-2", "col-xl-1", "text-right"], [1, "input-group"], ["type", "text", "id", "txtSearchText", "name", "SearchText", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [1, "col-xl-8", "col-lg-9", "mx-auto"], [1, "table"], [1, "table-dark", "text-dark"], ["class", "fa fa-sort hand-icon", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-up hand-icon text-primary", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-down hand-icon text-primary", 3, "click", 4, "ngIf"], [1, "text-center", 2, "width", "200px"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mt-1"], [1, "page-item", 3, "click"], ["href", "#", "onclick", "return false", 1, "page-link", "bg-secondary", "text-white"], [4, "ngIf"], ["novalidate", "novalidate", 3, "formGroup"], ["role", "dialog", "id", "newTaskStatusModal", 1, "modal"], [1, "modal-dialog", "modal-md"], [1, "modal-content"], [1, "modal-header", "bg-primary", "text-white"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["for", "txtNewTaskStatusName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtNewTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_New", ""], ["class", "text-danger", 4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "id", "newTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], [1, "btn", "btn-success", 3, "click"], ["role", "dialog", "id", "editTaskStatusModal", 1, "modal"], ["for", "txtEditTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtEditTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "formControlName", "taskStatusName", "maxlength", "30", 1, "form-control", 3, "ngClass"], ["defaultTextBox_Edit", ""], ["data-dismiss", "modal", "id", "editTaskStatusFormCancel", "type", "button", 1, "btn", "btn-warning"], ["role", "dialog", "id", "deleteModal", 1, "modal"], [1, "text-warning"], ["for", "txtDeleteTaskStatusName", 1, "col-sm-4", "col-form-label"], ["type", "text", "id", "txtDeleteTaskStatusName", "placeholder", "Task Status Name", "name", "TaskStatusName", "disabled", "disabled", 1, "form-control-plain-text", 2, "width", "300px", 3, "ngModel", "ngModelChange"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-warning"], ["data-dismiss", "modal", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-circle-o-notch", "fa-spin", 2, "font-size", "24px"], [1, "fa", "fa-sort", "hand-icon", 3, "click"], [1, "fa", "fa-sort-up", "hand-icon", "text-primary", 3, "click"], [1, "fa", "fa-sort-down", "hand-icon", "text-primary", 3, "click"], [1, "text-center"], ["data-toggle", "modal", "data-target", "#editTaskStatusModal", 1, "btn", "btn-info", 3, "click"], ["data-toggle", "modal", "data-target", "#deleteModal", 1, "btn", "btn-warning", 3, "click"], ["class", "page-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "page-item", 3, "ngClass", "click"], ["href", "#", "onclick", "return false", 1, "page-link"], ["class", "page-item", 3, "ngClass", "click", 4, "ngIf"], [1, "text-danger"]],
  template: function TaskStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Task Statuses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TaskStatusComponent_i_2_Template, 1, 0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_7_listener($event) {
        return ctx.onNewClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Create Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search by:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7)(12, "select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_select_ngModelChange_12_listener($event) {
        return ctx.searchBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Search:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 7)(18, "div", 11)(19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.searchText = $event;
      })("keyup", function TaskStatusComponent_Template_input_keyup_19_listener($event) {
        return ctx.onSearchTextChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 2)(21, "div", 1)(22, "div", 13)(23, "table", 14)(24, "tr", 15)(25, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Task Status Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TaskStatusComponent_i_27_Template, 1, 0, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, TaskStatusComponent_i_28_Template, 1, 0, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TaskStatusComponent_i_29_Template, 1, 0, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TaskStatusComponent_tr_32_Template, 9, 1, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "paging");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "sort");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "ul", 22)(38, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_38_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex - 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, TaskStatusComponent_ng_container_41_Template, 2, 1, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, TaskStatusComponent_ng_container_42_Template, 17, 16, "ng-container", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_li_click_43_listener() {
        return ctx.onPageIndexClicked(ctx.currentPageIndex + 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "form", 26)(47, "div", 27)(48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "New Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 32)(54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 33)(57, "div", 3)(58, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Task Status Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, TaskStatusComponent_span_63_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 39)(65, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_67_listener() {
        return ctx.onSaveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "form", 26)(70, "div", 42)(71, "div", 28)(72, "div", 29)(73, "div", 30)(74, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Edit Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "button", 32)(77, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 33)(80, "div", 3)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "Task Status Name *");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, TaskStatusComponent_span_86_Template, 2, 0, "span", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 39)(88, "button", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_90_listener() {
        return ctx.onUpdateClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "form")(93, "div", 47)(94, "div", 28)(95, "div", 29)(96, "div", 30)(97, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Delete Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 32)(100, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\u00D7");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 33)(103, "div", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Are you sure to delete this Task Status?");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 3)(106, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "Task Status Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 35)(109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskStatusComponent_Template_input_ngModelChange_109_listener($event) {
        return ctx.deleteTaskStatus.taskStatusName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 39)(111, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "button", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskStatusComponent_Template_button_click_113_listener() {
        return ctx.onDeleteConfirmClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchText);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy != "taskStatusName");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "ASC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.sortBy == "taskStatusName" && ctx.sortOrder == "DESC");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](33, 16, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](34, 20, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](35, 24, ctx.taskStatuses, ctx.searchBy, ctx.searchText), ctx.sortBy, ctx.sortOrder), ctx.currentPageIndex, ctx.pageSize));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length <= 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.pages.length > 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.newForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](28, _c3, ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted), ctx.newForm.get("taskStatusName").valid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.newForm.get("taskStatusName").invalid && (ctx.newForm.get("taskStatusName").dirty || ctx.newForm.get("taskStatusName").touched || ctx.newForm.submitted) && (ctx.newForm.get("taskStatusName").errors == null ? null : ctx.newForm.get("taskStatusName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](31, _c3, ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted), ctx.editForm.get("taskStatusName").valid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted)));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("taskStatusName").invalid && (ctx.editForm.get("taskStatusName").dirty || ctx.editForm.get("taskStatusName").touched || ctx.editForm.submitted) && (ctx.editForm.get("taskStatusName").errors == null ? null : ctx.editForm.get("taskStatusName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.deleteTaskStatus.taskStatusName);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_3__.PagingPipe, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_4__.SortPipe],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/components/about/about.component */ 7280);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'signup',
  component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent
}, {
  path: 'about',
  component: _admin_components_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _MyAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAnimation */ 5676);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services//login.service */ 6138);
/* harmony import */ var _services_router_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/router-logger.service */ 8870);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);








const _c0 = function () {
  return ["/admin", "dashboard"];
};
const _c1 = function () {
  return ["/admin", "projects"];
};
const _c2 = function () {
  return ["/admin", "masters"];
};
function AppComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7)(5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li", 7)(8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Masters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
  }
}
const _c3 = function () {
  return ["/employee", "tasks"];
};
function AppComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c3));
  }
}
const _c4 = function () {
  return ["/login"];
};
const _c5 = function () {
  return ["/signup"];
};
function AppComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7)(2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7)(5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c5));
  }
}
function AppComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 7)(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 7)(5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_13_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.loginService.Logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.loginService.currentUserName);
  }
}
const _c6 = function () {
  return ["/about"];
};
class AppComponent {
  constructor(loginService, routerLoggerService, router) {
    this.loginService = loginService;
    this.routerLoggerService = routerLoggerService;
    this.router = router;
  }
  ngOnIntIt() {
    this.loginService.detectIfAlreadyLoggedIn();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
        let userName = this.loginService.currentUserName ? this.loginService.currentUserName : "anonymous";
        let logMsg = new Date().toLocaleString() + ": " + userName + " navigates to " + event.url;
        this.routerLoggerService.log(logMsg).subscribe();
      }
    });
  }
  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url[0].path : "none";
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_router_logger_service__WEBPACK_IMPORTED_MODULE_2__.RouterLoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 25,
  vars: 7,
  consts: [[1, "navbar", "navbar-expand-sm", "bg-dark", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mynav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mynav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [4, "ngIf"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], [1, "form-inline", "my-2", "my-lg-0"], [1, "input-group"], [1, "input-group-prepend"], ["id", "search", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "placeholder", "Search", 1, "form-control"], ["type", "button", 1, "btn", "btn-warning", "my2-", "my-sm-0", "ml-1"], [1, "container-fluid"], ["outlet", "outlet"], ["href", "/myprofile", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Project Task Manager ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 10, 6, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_ng_container_8_Template, 4, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_ng_container_9_Template, 7, 4, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 7)(11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AppComponent_ng_container_13_Template, 7, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "form", 9)(15, "div", 10)(16, "div", 11)(17, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "router-outlet", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null && ctx.loginService.currentUserRole == "Employee");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName == null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c6));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginService.currentUserName != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.getState(_r4));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [_MyAnimation__WEBPACK_IMPORTED_MODULE_0__.fadeAnimation]
  }
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @auth0/angular-jwt */ 2401);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.module */ 7008);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ 6666);
/* harmony import */ var _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/jwt-interceptor.service */ 7137);
/* harmony import */ var _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/jwt-un-authorized-interceptor.service */ 3242);
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ 9607);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/alert.directive */ 4142);
/* harmony import */ var _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/repeater.directive */ 4465);
/* harmony import */ var _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee/employee.module */ 4266);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptorService,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
    useClass: _interceptors_jwt_un_authorized_interceptor_service__WEBPACK_IMPORTED_MODULE_4__.JwtUnAuthorizedInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__.AdminModule, _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__.EmployeeModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JwtModule.forRoot({
    config: {
      tokenGetter: () => {
        return sessionStorage.getItem("currentUser") ? JSON.parse(sessionStorage.getItem("currentUser")).token : null;
      }
    }
  })]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__.AppComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__.SignUpComponent, _directives_alert_directive__WEBPACK_IMPORTED_MODULE_6__.AlertDirective, _directives_repeater_directive__WEBPACK_IMPORTED_MODULE_7__.RepeaterDirective],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_1__.AdminModule, _employee_employee_module__WEBPACK_IMPORTED_MODULE_8__.EmployeeModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_15__.JwtModule]
  });
})();

/***/ }),

/***/ 6666:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _models_login_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login-view-model */ 7540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ 6138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/alert.directive */ 4142);







function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("error", ctx_r0.loginError);
  }
}
class LoginComponent {
  constructor(loginService, router) {
    this.loginService = loginService;
    this.router = router;
    this.loginViewModel = new _models_login_view_model__WEBPACK_IMPORTED_MODULE_0__.LoginViewModel();
    this.loginError = '';
  }
  ngOnInit() {}
  onLoginClick(event) {
    this.loginService.Login(this.loginViewModel).subscribe({
      next: response => {
        if (this.loginService.currentUserRole == "Admin") {
          this.router.navigate(["/admin", "dashboard"]);
        } else {
          this.router.navigate(["/employee", "tasks"]);
        }
      },
      error: error => {
        console.log(error);
        this.loginError = 'Invalid Username or Password';
      }
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 22,
  vars: 3,
  consts: [[1, "row"], [1, "col-lg-6", "col-xl-5", "col-md-9", "mx-auto"], [1, "card", "mt-4"], [1, "card-header", "bg-secondary", "text-white"], ["appAlert", "", 3, "error", 4, "ngIf"], [1, "card-body"], [1, "form-group", "form-row"], ["for", "UserName", 1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["type", "text", "placeholder", "Username", "name", "UserName", "autofocus", "autofocus", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "Password", 1, "col-md-4", "col-form-label"], ["type", "password", "placeholder", "Password", "name", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card-footer", "text-right"], [1, "btn", "btn-primary", 3, "click"], ["appAlert", "", 3, "error"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 1, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Username");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.loginViewModel.UserName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6)(15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8)(18, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.loginViewModel.Password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener($event) {
        return ctx.onLoginClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.UserName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.loginViewModel.Password);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _directives_alert_directive__WEBPACK_IMPORTED_MODULE_2__.AlertDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9607:
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/countries.service */ 532);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/custom-validators.service */ 1482);
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ 6138);
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
    this.canLeave = false;
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
      this.canLeave = false;
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
          this.canLeave = true;
          this.router.navigate(["/employee", "tasks"]);
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
  return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_countries_service__WEBPACK_IMPORTED_MODULE_0__.CountriesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
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

/***/ 4142:
/*!***********************************************!*\
  !*** ./src/app/directives/alert.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertDirective: () => (/* binding */ AlertDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AlertDirective {
  constructor(elementRef, renderer2) {
    this.elementRef = elementRef;
    this.renderer2 = renderer2;
    this.error = null;
    this.title = null;
  }
  ngOnInit() {
    /* div */
    this.divElement = this.renderer2.createElement("div"); //<div></div>
    this.renderer2.setAttribute(this.divElement, "role", "alert"); //<div role="alert"> </div>
    this.renderer2.setAttribute(this.divElement, "class", "alert alert-danger fade show");
    //<div role="alert" class="alert alert-danger fade show"> </div>
    this.renderer2.setStyle(this.divElement, "transition", "transform 0.5s");
    //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> </div>
    /* span */
    this.spanElement = this.renderer2.createElement("span");
    this.renderer2.setAttribute(this.spanElement, "class", "message");
    //<span class="message"></span>
    /* spanText */
    this.spanText = this.renderer2.createText(this.error);
    this.renderer2.appendChild(this.spanElement, this.spanText);
    //<span class="message">${this.error}</span>
    this.renderer2.appendChild(this.divElement, this.spanElement);
    //<div role="alert" class="alert alert-danger fade show" style="transition: transform 0.5s"> <span class="message">${this.error}</span> </div>
    this.elementRef.nativeElement.appendChild(this.divElement);
    this.title = "Please try again!";
  }
  onMouseEnter(event) {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)");
  }
  onMouseLeave() {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
    this.renderer2.setStyle(this.divElement, "transform", "scale(1)");
  }
}
AlertDirective.ɵfac = function AlertDirective_Factory(t) {
  return new (t || AlertDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
AlertDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AlertDirective,
  selectors: [["", "appAlert", ""]],
  hostVars: 1,
  hostBindings: function AlertDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AlertDirective_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseEnter($event);
      })("mouseleave", function AlertDirective_mouseleave_HostBindingHandler($event) {
        return ctx.onMouseLeave($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("title", ctx.title);
    }
  },
  inputs: {
    error: "error"
  }
});


/***/ }),

/***/ 5581:
/*!**************************************************************************!*\
  !*** ./src/app/directives/client-location-status-validator.directive.ts ***!
  \**************************************************************************/
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

/***/ 9575:
/*!**********************************************************!*\
  !*** ./src/app/directives/component-loader.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentLoaderDirective: () => (/* binding */ ComponentLoaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ComponentLoaderDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
}
ComponentLoaderDirective.ɵfac = function ComponentLoaderDirective_Factory(t) {
  return new (t || ComponentLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
ComponentLoaderDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ComponentLoaderDirective,
  selectors: [["", "appComponentLoader", ""]]
});


/***/ }),

/***/ 54:
/*!********************************************************************!*\
  !*** ./src/app/directives/project-idunique-validator.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectIDUniqueValidatorDirective: () => (/* binding */ ProjectIDUniqueValidatorDirective)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/projects.service */ 5650);




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
  return new (t || ProjectIDUniqueValidatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_projects_service__WEBPACK_IMPORTED_MODULE_0__.ProjectsService));
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

/***/ 4465:
/*!**************************************************!*\
  !*** ./src/app/directives/repeater.directive.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepeaterDirective: () => (/* binding */ RepeaterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class RepeaterDirective {
  constructor(viewContainerRef, templateRef) {
    this.viewContainerRef = viewContainerRef;
    this.templateRef = templateRef;
    this.n = 0;
    this.viewContainerRef.clear();
  }
  ngOnInit() {
    for (let i = 0; i < this.n; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: i
      });
    }
  }
}
RepeaterDirective.ɵfac = function RepeaterDirective_Factory(t) {
  return new (t || RepeaterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
RepeaterDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: RepeaterDirective,
  selectors: [["", "appRepeater", ""]],
  inputs: {
    n: ["appRepeater", "n"]
  }
});


/***/ }),

/***/ 8981:
/*!*************************************************************!*\
  !*** ./src/app/directives/team-size-validator.directive.ts ***!
  \*************************************************************/
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

/***/ 4771:
/*!**************************************************************************!*\
  !*** ./src/app/employee/components/create-task/create-task.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTaskComponent: () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tasks.service */ 9940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/projects.service */ 5650);
/* harmony import */ var src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-priorities.service */ 2203);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









function CreateTaskComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Task Name can't be blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", project_r7.projectID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", project_r7.projectName, " ");
  }
}
function CreateTaskComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Please select project, to which the task belongs to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const employee_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", employee_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", employee_r8.userName, " ");
  }
}
function CreateTaskComponent_span_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Select the employee, to whom the task id assigned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CreateTaskComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taskPriority_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", taskPriority_r9.taskPriorityID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", taskPriority_r9.taskPriorityName, " ");
  }
}
function CreateTaskComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Select the employee, to whom the task id assigned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/employee", "tasks"];
};
class CreateTaskComponent {
  constructor(tasksService, router, projectsService, taskPrioritiesService, loginService) {
    this.tasksService = tasksService;
    this.router = router;
    this.projectsService = projectsService;
    this.taskPrioritiesService = taskPrioritiesService;
    this.loginService = loginService;
  }
  ngOnInit() {
    this.newTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      taskID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
      taskName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, []),
      projectID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      assignedTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      taskPriorityID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(2, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
    this.projects = this.projectsService.getAllProjects();
    this.employees = this.loginService.getAllEmployes();
    this.taskPriorities = this.taskPrioritiesService.getTaskPriorities();
  }
  onCreateTaskClick(event) {
    this.newTaskForm["submitted"] = true;
    if (this.newTaskForm.valid) {
      this.tasksService.insertTask(this.newTaskForm.value).subscribe(() => {
        this.router.navigate(["/employee", "tasks"]);
      }, error => {
        console.log(error);
      });
    } else {
      console.log(this.newTaskForm.errors);
    }
  }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) {
  return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_1__.ProjectsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_priorities_service__WEBPACK_IMPORTED_MODULE_2__.TaskPrioritiesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService));
};
CreateTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CreateTaskComponent,
  selectors: [["app-create-task"]],
  decls: 60,
  vars: 16,
  consts: [["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "form-group"], ["for", "taskName", 1, "text-infor", 2, "font-size", "18px"], ["type", "text", "id", "taskName", "placeholder", "Task Name", "autofocus", "autofocus", "formControlName", "taskName", 1, "form-control", 2, "font-size", "20px"], ["class", "text-danger", 4, "ngIf"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "projectID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "projectID", "formControlName", "projectID", 1, "form-control"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo", 1, "text-info", "col-md-3", "col-form-label"], ["id", "assignedTo", "formControlName", "assignedTo", 1, "form-control"], ["for", "taskPriorityID", 1, "text-info", "col-md-3", "col-form-label"], ["id", "taskPriorityID", "formControlName", "taskPriorityID", 1, "form-control"], ["for", "taskStatus", 1, "text-info", "col-md-3", "col-form-label"], ["type", "text", "id", "taskStatus", "placeholder", "Task Status", "value", "Holding", "readonly", "readonly", 1, "form-control-plaintext"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-1", 3, "routerLink"], [1, "text-danger"], [3, "value"]],
  template: function CreateTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "create-task works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 0)(5, "div", 1)(6, "div", 2)(7, "div", 3)(8, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Task Name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, CreateTaskComponent_span_11_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9)(18, "div", 10)(19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Project:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "select", 13)(23, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, CreateTaskComponent_option_25_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CreateTaskComponent_span_27_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 10)(29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Assigned To:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 12)(32, "select", 17)(33, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, CreateTaskComponent_option_35_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, CreateTaskComponent_span_37_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 9)(39, "div", 10)(40, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Priority:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 12)(43, "select", 19)(44, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, CreateTaskComponent_option_46_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, CreateTaskComponent_span_48_Template, 2, 0, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 10)(50, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 22)(55, "div")(56, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_56_listener($event) {
        return ctx.onCreateTaskClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.newTaskForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("taskName").invalid && (ctx.newTaskForm.get("taskName").dirty || ctx.newTaskForm.get("taskName").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("taskName").errors == null ? null : ctx.newTaskForm.get("taskName").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 9, ctx.projects));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("projectID").invalid && (ctx.newTaskForm.get("projectID").dirty || ctx.newTaskForm.get("projectID").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("projectID").errors == null ? null : ctx.newTaskForm.get("projectID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 11, ctx.employees));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("assignedTo").invalid && (ctx.newTaskForm.get("assignedTo").dirty || ctx.newTaskForm.get("assignedTo").touched || ctx.newTaskForm.submitted) && (ctx.newTaskForm.get("assignedTo").errors == null ? null : ctx.newTaskForm.get("assignedTo").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 13, ctx.taskPriorities));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.newTaskForm.get("taskPriorityID").invalid && (ctx.newTaskForm.get("taskPriorityID").dirty || ctx.newTaskForm.get("taskPriorityID").touched || ctx.newTaskForm.taskPriorityID) && (ctx.newTaskForm.get("taskPriorityID").errors == null ? null : ctx.newTaskForm.get("taskPriorityID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](15, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6500:
/*!**********************************************************************!*\
  !*** ./src/app/employee/components/edit-task/edit-task.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditTaskComponent: () => (/* binding */ EditTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class EditTaskComponent {}
EditTaskComponent.ɵfac = function EditTaskComponent_Factory(t) {
  return new (t || EditTaskComponent)();
};
EditTaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditTaskComponent,
  selectors: [["app-edit-task"]],
  decls: 2,
  vars: 0,
  template: function EditTaskComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-task works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3150:
/*!**************************************************************!*\
  !*** ./src/app/employee/components/tasks/tasks.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksComponent: () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tasks.service */ 9940);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 6138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);





function TasksComponent_div_5_div_9_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const taskStatusDetail_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.statusUpdationDateTimeString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.getTaskGroupTextCssClass(taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.taskStatus == null ? null : taskStatusDetail_r7.taskStatus.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.taskStatus == null ? null : taskStatusDetail_r7.taskStatus.taskStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.user == null ? null : taskStatusDetail_r7.user.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskStatusDetail_r7 == null ? null : taskStatusDetail_r7.description, " ");
  }
}
const _c0 = function (a2) {
  return ["/employee", "edittask", a2];
};
function TasksComponent_div_5_div_9_a_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const task_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, task_r3.taskID));
  }
}
const _c1 = function (a2) {
  return ["/employee", "updatetaskstatus", a2];
};
function TasksComponent_div_5_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "table", 13)(10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Created:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr")(19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Assigned to:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr")(25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Project:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "table", 18)(31, "thead", 19)(32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, TasksComponent_div_5_div_9_tr_41_Template, 11, 5, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 21)(43, "div", 22)(44, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Change Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, TasksComponent_div_5_div_9_a_47_Template, 3, 3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" #", i_r4 + 1, " \u00A0\u00A0 ", task_r3.taskName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getTaskPriorityBadgeCssClass(task_r3.taskPriority == null ? null : task_r3.taskPriority.taskPriorityName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.taskPriority == null ? null : task_r3.taskPriority.taskPriorityName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](task_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.createdByUser == null ? null : task_r3.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.createdOnString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", task_r3.assignedToUser == null ? null : task_r3.assignedToUser.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", task_r3.project == null ? null : task_r3.project.projectName, " - ", task_r3.project == null ? null : task_r3.project.clientLocation == null ? null : task_r3.project.clientLocation.clientLocationName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", task_r3.taskStatusDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, task_r3.taskID));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (task_r3.createdByUser == null ? null : task_r3.createdByUser.userName) == ctx_r2.loginService.currentUserName);
  }
}
function TasksComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TasksComponent_div_5_div_9_Template, 48, 15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const taskGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.getTaskGroupBgCssClass(taskGroup_r1.taskStatusName));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskGroup_r1.taskStatusName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", taskGroup_r1.tasks.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", taskGroup_r1.tasks);
  }
}
const _c2 = function () {
  return ["/employee", "createtask"];
};
class TasksComponent {
  constructor(tasksService, loginService) {
    this.tasksService = tasksService;
    this.loginService = loginService;
    this.taskGroups = [];
  }
  ngOnInit() {
    this.tasksService.getTasks().subscribe(response => {
      this.taskGroups = response;
    });
  }
  /* Get background color based on task status */
  getTaskGroupBgCssClass(taskStatusName) {
    var className = "";
    switch (taskStatusName) {
      case "Holding":
        className = "bg-secondary text-white";
        break;
      case "Prioritized":
        className = "bg-primary text-white";
        break;
      case "Started":
        className = "bg-info text-white";
        break;
      case "Finished":
        className = "bg-success text-white";
        break;
      case "Reverted":
        className = "bg-danger text-white";
        break;
    }
    return className;
  }
  /* Get background color based on task priority */
  getTaskPriorityBadgeCssClass(taskPriorityName) {
    var className = "";
    switch (taskPriorityName) {
      case "Urgent":
        className = "badge-danger";
        break;
      case "Normal":
        className = "badge-primary";
        break;
      case "Below Normal":
        className = "badge-info";
        break;
      case "Low":
        className = "badge-secondary";
        break;
    }
    return className;
  }
  /* Get text color based on task status */
  getTaskGroupTextCssClass(taskStatusName) {
    var className = "";
    switch (taskStatusName) {
      case "Holding":
        className = "text-secondary";
        break;
      case "Prioritized":
        className = "text-primary";
        break;
      case "Started":
        className = "text-info";
        break;
      case "Finished":
        className = "text-success";
        break;
      case "Reverted":
        className = "text-danger";
        break;
    }
    return className;
  }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) {
  return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService));
};
TasksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TasksComponent,
  selectors: [["app-tasks"]],
  decls: 6,
  vars: 3,
  consts: [[1, "btn", "btn-primary", 3, "routerLink"], [1, "row", "mt-1", "mb-2"], ["class", "col-lg-6 mb-1", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "mb-1"], [1, "card", "card-primary"], [1, "card-header", 3, "ngClass"], [1, "card-title"], [1, "badge", "badge-warning", "float-right"], [1, "card-body"], ["class", "card mb-1", 4, "ngFor", "ngForOf"], [1, "card", "mb-1"], [1, "card-header"], [1, "badge", "float-right", "mr-1", 2, "font-size", "15px", 3, "ngClass"], [1, "table", "table-sm", "table-borderless"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "fa", "fa-user-o"], [1, "fa", "fa-briefcase"], [1, "table", "table-sm", "table-bordered"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "btn-group"], [1, "btn", "btn-sm", "btn-outline-secondary", 3, "routerLink"], [1, "fa", "fa-pencil"], ["class", "btn btn-sm btn-outline-secondary", 3, "routerLink", 4, "ngIf"], [1, "text-primary", 3, "ngClass"], [1, "fa", "fa-pencil-square-o"]],
  template: function TasksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Create Task");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TasksComponent_div_5_Template, 10, 4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.taskGroups);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4937:
/*!****************************************************************************************!*\
  !*** ./src/app/employee/components/update-task-status/update-task-status.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateTaskStatusComponent: () => (/* binding */ UpdateTaskStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/task */ 3088);
/* harmony import */ var src_app_models_task_status_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/task-status-detail */ 4214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tasks.service */ 9940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task-statuses.service */ 8260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);









function UpdateTaskStatusComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const taskStatus_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", taskStatus_r2.taskStatusID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", taskStatus_r2.taskStatusName, " ");
  }
}
function UpdateTaskStatusComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select current task status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/employee", "tasks"];
};
class UpdateTaskStatusComponent {
  constructor(tasksService, router, taskStatuesService, activatedRoute) {
    this.tasksService = tasksService;
    this.router = router;
    this.taskStatuesService = taskStatuesService;
    this.activatedRoute = activatedRoute;
    this.currentTask = new src_app_models_task__WEBPACK_IMPORTED_MODULE_0__.Task();
    this.currentTaskStatusDetail = new src_app_models_task_status_detail__WEBPACK_IMPORTED_MODULE_1__.TaskStatusDetail();
  }
  ngOnInit() {
    //Receive taskid parameter
    this.activatedRoute.params.subscribe(params => {
      this.taskID = params["taskid"];
    });
    //Create reactive form
    this.editTaskStatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      thisStatusDetailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(0),
      taskID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null),
      taskStatusID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null)
    });
    //get taskstatuses from db for dropdownlist
    this.taskStatuses = this.taskStatuesService.getTaskStatuses();
    //get task by taskid
    this.tasksService.getTaskByTaskID(this.taskID).subscribe(task => {
      this.currentTask = task;
      //Load task details into Reactive form
      this.currentTaskStatusDetail.taskID = this.taskID;
      this.currentTaskStatusDetail.description = null;
      this.currentTaskStatusDetail.taskStatusID = task.currentTaskStatusID;
      this.currentTaskStatusDetail.taskStatusDetailID = 0;
      console.log(this.currentTaskStatusDetail);
      this.editTaskStatusForm.patchValue(this.currentTaskStatusDetail);
    });
  }
  onUpdateTaskStatusClick(event) {
    this.editTaskStatusForm["submitted"] = true;
    if (this.editTaskStatusForm.valid) {
      //send REST-API call to server
      this.tasksService.updateTaskStatus(this.editTaskStatusForm.value).subscribe({
        next: response => {
          this.router.navigate(["/employee", "tasks"]);
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      console.log(this.editTaskStatusForm.errors);
    }
  }
}
UpdateTaskStatusComponent.ɵfac = function UpdateTaskStatusComponent_Factory(t) {
  return new (t || UpdateTaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_2__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_statuses_service__WEBPACK_IMPORTED_MODULE_3__.TaskStatusesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
UpdateTaskStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: UpdateTaskStatusComponent,
  selectors: [["app-update-task-status"]],
  decls: 42,
  vars: 10,
  consts: [["novalidate", "novalidate", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "table", "table-sm", "table-borderless"], [2, "width", "65px"], [1, "fa", "fa-user"], [1, "fa", "fa-calendar"], [1, "text-right"], [1, "fa", "fa-calendar-check-o"], [1, "col-lg-12"], [1, "form-group"], ["for", "description", 1, "text-info"], ["id", "description", "placeholder", "Description", "formControlName", "description", 1, "form-control"], [1, "col-lg-6"], [1, "form-group", "form-row"], ["for", "taskStatusID", 1, "text-info", "col-md-3", "col-form-label"], [1, "col-md-9"], ["id", "taskStatusID", "formControlName", "taskStatusID", 1, "form-control"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-12", "border-top", "text-center"], [1, "btn", "btn-success", "btn-lg", "mt-2", 3, "click"], [1, "btn", "btn-info", "btn-sm", "mt-1", 3, "routerLink"], [3, "value"], [1, "text-danger"]],
  template: function UpdateTaskStatusComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Update Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 0)(3, "div", 1)(4, "div", 2)(5, "table", 3)(6, "tr")(7, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Created:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Last Updated on:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9)(20, "div", 10)(21, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Description:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "textarea", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Status:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 16)(29, "select", 17)(30, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Please Select");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, UpdateTaskStatusComponent_option_32_Template, 2, 2, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, UpdateTaskStatusComponent_span_34_Template, 2, 0, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 21)(36, "div")(37, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UpdateTaskStatusComponent_Template_button_click_37_listener($event) {
        return ctx.onUpdateTaskStatusClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Update Task Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div")(40, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Back to Tasks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editTaskStatusForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentTask.createdByUser == null ? null : ctx.currentTask.createdByUser.userName, " \u00A0\u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentTask.createdOn, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.currentTask.lastUpdatedOn, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 7, ctx.taskStatuses));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editTaskStatusForm.get("taskStatusID").invalid && (ctx.editTaskStatusForm.get("taskStatusID").dirty || ctx.editTaskStatusForm.get("taskStatusID").touched || ctx.editTaskStatusForm.submitted) && (ctx.editTaskStatusForm.get("taskStatusID").errors == null ? null : ctx.editTaskStatusForm.get("taskStatusID").errors.required));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8266:
/*!**********************************************************************!*\
  !*** ./src/app/employee/employee-routing/employee-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeRoutingModule: () => (/* binding */ EmployeeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/tasks/tasks.component */ 3150);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/create-task/create-task.component */ 4771);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/edit-task/edit-task.component */ 6500);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/update-task-status/update-task-status.component */ 4937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: 'employee',
  data: {
    expectedRole: 'Employee'
  },
  children: [{
    path: 'tasks',
    component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent,
    data: {
      linkIndex: 1
    }
  }, {
    path: 'createtask',
    component: _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_1__.CreateTaskComponent,
    data: {
      linkIndex: 2
    }
  }, {
    path: 'edittask/:taskid',
    component: _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_2__.EditTaskComponent,
    data: {
      linkIndex: 3
    }
  }, {
    path: 'updatetaskstatus/:taskid',
    component: _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_3__.UpdateTaskStatusComponent,
    data: {
      linkIndex: 4
    }
  }]
}];
class EmployeeRoutingModule {}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) {
  return new (t || EmployeeRoutingModule)();
};
EmployeeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: EmployeeRoutingModule
});
EmployeeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4266:
/*!*********************************************!*\
  !*** ./src/app/employee/employee.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeModule: () => (/* binding */ EmployeeModule)
/* harmony export */ });
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tasks/tasks.component */ 3150);
/* harmony import */ var _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing/employee-routing.module */ 8266);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 6208);
/* harmony import */ var _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/create-task/create-task.component */ 4771);
/* harmony import */ var _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit-task/edit-task.component */ 6500);
/* harmony import */ var _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/update-task-status/update-task-status.component */ 4937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);







class EmployeeModule {}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) {
  return new (t || EmployeeModule)();
};
EmployeeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: EmployeeModule
});
EmployeeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmployeeModule, {
    declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent, _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__.CreateTaskComponent, _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__.EditTaskComponent, _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__.UpdateTaskStatusComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _employee_routing_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmployeeRoutingModule],
    exports: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_0__.TasksComponent, _components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_3__.CreateTaskComponent, _components_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__.EditTaskComponent, _components_update_task_status_update_task_status_component__WEBPACK_IMPORTED_MODULE_5__.UpdateTaskStatusComponent]
  });
})();

/***/ }),

/***/ 7137:
/*!*********************************************************!*\
  !*** ./src/app/interceptors/jwt-interceptor.service.ts ***!
  \*********************************************************/
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

/***/ 3242:
/*!***********************************************************************!*\
  !*** ./src/app/interceptors/jwt-un-authorized-interceptor.service.ts ***!
  \***********************************************************************/
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

/***/ 9765:
/*!*******************************************!*\
  !*** ./src/app/models/client-location.ts ***!
  \*******************************************/
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

/***/ 1085:
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Country: () => (/* binding */ Country)
/* harmony export */ });
class Country {
  // constructor(countryIDParam: number, countryNameParam: string)
  // {
  //     this.countryID = countryIDParam;
  //     this.countryName = countryNameParam;
  // }
  constructor() {
    this.countryID = null;
    this.countryName = null;
  }
}

/***/ }),

/***/ 7540:
/*!********************************************!*\
  !*** ./src/app/models/login-view-model.ts ***!
  \********************************************/
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

/***/ 6552:
/*!***********************************!*\
  !*** ./src/app/models/project.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _client_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-location */ 9765);

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

/***/ 7951:
/*!*****************************************!*\
  !*** ./src/app/models/task-priority.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPriority: () => (/* binding */ TaskPriority)
/* harmony export */ });
class TaskPriority {
  constructor() {
    this.taskPriorityID = null;
    this.taskPriorityName = null;
  }
}

/***/ }),

/***/ 4214:
/*!**********************************************!*\
  !*** ./src/app/models/task-status-detail.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusDetail: () => (/* binding */ TaskStatusDetail)
/* harmony export */ });
class TaskStatusDetail {
  constructor() {
    this.taskStatusDetailID = null;
    this.taskID = null;
    this.taskStatusID = null;
    this.description = null;
    this.userID = null;
    this.taskstatus = null;
    this.user = null;
    this.statsUpdationDateTimeString = null;
  }
}

/***/ }),

/***/ 2527:
/*!***************************************!*\
  !*** ./src/app/models/task-status.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatus: () => (/* binding */ TaskStatus)
/* harmony export */ });
class TaskStatus {
  constructor() {
    this.taskStatusID = null;
    this.taskStatusName = null;
  }
}

/***/ }),

/***/ 3088:
/*!********************************!*\
  !*** ./src/app/models/task.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor() {
    this.taskID = null;
    this.taskName = null;
    this.description = null;
    this.createdOn = null;
    this.projectID = null;
    this.createdBy = null;
    this.assignedTo = null;
    this.taskPriorityID = null;
    this.lastUpdatedOn = null;
    this.currentStatus = null;
    this.project = null;
    this.createdByUser = null;
    this.assignedToUser = null;
    this.taskStatusDetails = null;
    this.taskStatusDetails = null;
    this.currentTaskStatusID = null;
  }
}

/***/ }),

/***/ 23:
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterPipe: () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FilterPipe {
  transform(value, searchBy, searchText) {
    if (value == null) {
      return value;
    }
    let resultArray = [];
    for (let item of value) {
      if (String(item[searchBy]).toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) {
  return new (t || FilterPipe)();
};
FilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "filter",
  type: FilterPipe,
  pure: false
});


/***/ }),

/***/ 8890:
/*!**************************************!*\
  !*** ./src/app/pipes/paging.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagingPipe: () => (/* binding */ PagingPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PagingPipe {
  transform(value, currentPageIndex, pageSize) {
    if (value == null) {
      return value;
    }
    let resultArray = [];
    for (let i = currentPageIndex * pageSize; i < (currentPageIndex + 1) * pageSize; i++) {
      if (value[i]) {
        resultArray.push(value[i]);
      }
    }
    return resultArray;
  }
}
PagingPipe.ɵfac = function PagingPipe_Factory(t) {
  return new (t || PagingPipe)();
};
PagingPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "paging",
  type: PagingPipe,
  pure: true
});


/***/ }),

/***/ 1805:
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SortPipe: () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SortPipe {
  transform(value, sortBy, sortOrder) {
    if (value == null) {
      return null;
    }
    value.sort(function (a, b) {
      //less than 0        :   a comes before b
      //greater than 0  :   b comes before a
      //equal to 0         :   a and b are left unchanged
      if (a[sortBy] && b[sortBy]) {
        return a[sortBy].toString().toLowerCase()[0] - b[sortBy].toString().toLowerCase()[0];
        //a = cat  --> 99
        //b = dog --> 100
        //99 - 100 = -1     --> less than 0        :   a comes before b
      } else {
        return 0;
      }
    });
    if (sortOrder == "DESC") {
      value.reverse();
    }
    return value;
  }
}
SortPipe.ɵfac = function SortPipe_Factory(t) {
  return new (t || SortPipe)();
};
SortPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "sort",
  type: SortPipe,
  pure: true
});


/***/ }),

/***/ 3797:
/*!******************************************************!*\
  !*** ./src/app/services/client-locations.service.ts ***!
  \******************************************************/
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
  getClientLocationtByClientLocationID(ClientLocationID) {
    return this.httpClient.get("/api/clientlocations/searchbyclientlocationid/" + ClientLocationID, {
      responseType: "json"
    });
  }
  insertClientLocation(newClientLocation) {
    return this.httpClient.post("/api/clientlocations", newClientLocation, {
      responseType: "json"
    });
  }
  updateClientLocation(existingClientLocation) {
    return this.httpClient.put("/api/clientlocations", existingClientLocation, {
      responseType: "json"
    });
  }
  deleteClientLocation(ClientLocationID) {
    return this.httpClient.delete("/api/clientlocations?ClientLocationID=" + ClientLocationID);
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

/***/ 532:
/*!***********************************************!*\
  !*** ./src/app/services/countries.service.ts ***!
  \***********************************************/
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
  getCountryByCountryID(CountryID) {
    return this.httpClient.get("/api/countries/searchbycountryid/" + CountryID, {
      responseType: "json"
    });
  }
  insertCountry(newCountry) {
    return this.httpClient.post("/api/countries", newCountry, {
      responseType: "json"
    });
  }
  updateCountry(existingCountry) {
    return this.httpClient.put("/api/countries", existingCountry, {
      responseType: "json"
    });
  }
  deleteCountry(CountryID) {
    return this.httpClient.delete("/api/countries?countryID=" + CountryID);
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

/***/ 1482:
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidatorsService: () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 6138);



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

/***/ 5026:
/*!***********************************************!*\
  !*** ./src/app/services/dashboard.service.ts ***!
  \***********************************************/
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

/***/ 6138:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
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
    this.currentUserRole = null;
  }
  Login(loginViewModel) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.post("/authenticate", loginViewModel, {
      responseType: "json",
      observe: "response"
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(response => {
      if (response) {
        this.currentUserName = response.body.userName;
        this.currentUserRole = response.body.role;
        sessionStorage['currentUser'] = JSON.stringify(response.body);
        sessionStorage['XSRFRequestToken'] = response.headers.get("XSRF-REQUEST-TOKEN");
      }
      return response.body;
    }));
  }
  detectIfAlreadyLoggedIn() {
    if (this.jwtHelperService.isTokenExpired() == false) {
      var currentUser = JSON.parse(sessionStorage['currentUser']);
      this.currentUserName = currentUser.userName;
      this.currentUserRole = currentUser.role;
    }
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

  getAllEmployes() {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.get("/api/getallemployees", {
      responseType: "json"
    });
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

/***/ 5650:
/*!**********************************************!*\
  !*** ./src/app/services/projects.service.ts ***!
  \**********************************************/
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

/***/ 8870:
/*!***************************************************!*\
  !*** ./src/app/services/router-logger.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterLoggerService: () => (/* binding */ RouterLoggerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);



class RouterLoggerService {
  constructor(httpBackend) {
    this.httpBackend = httpBackend;
    this.httpClient = null;
    this.currentUserName = null;
  }
  log(logMsg) {
    this.httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient(this.httpBackend);
    return this.httpClient.post("/api/routerlogger", {
      log: logMsg
    }, {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().set("content-type", "text/plain")
    });
  }
}
RouterLoggerService.ɵfac = function RouterLoggerService_Factory(t) {
  return new (t || RouterLoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpBackend));
};
RouterLoggerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RouterLoggerService,
  factory: RouterLoggerService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 2203:
/*!*****************************************************!*\
  !*** ./src/app/services/task-priorities.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskPrioritiesService: () => (/* binding */ TaskPrioritiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class TaskPrioritiesService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getTaskPriorities() {
    return this.httpClient.get("/api/taskpriorities", {
      responseType: "json"
    });
  }
  getTaskPrioritytByTaskPriorityID(TaskPriorityID) {
    return this.httpClient.get("/api/taskpriorities/searchbytaskpriorityid/" + TaskPriorityID, {
      responseType: "json"
    });
  }
  insertTaskPriority(newTaskPriority) {
    return this.httpClient.post("/api/taskpriorities", newTaskPriority, {
      responseType: "json"
    });
  }
  updateTaskPriority(existingTaskPriority) {
    return this.httpClient.put("/api/taskpriorities", existingTaskPriority, {
      responseType: "json"
    });
  }
  deleteTaskPriority(TaskPriorityID) {
    return this.httpClient.delete("/api/taskpriorities?TaskPriorityID=" + TaskPriorityID);
  }
}
TaskPrioritiesService.ɵfac = function TaskPrioritiesService_Factory(t) {
  return new (t || TaskPrioritiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
TaskPrioritiesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TaskPrioritiesService,
  factory: TaskPrioritiesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 8260:
/*!***************************************************!*\
  !*** ./src/app/services/task-statuses.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskStatusesService: () => (/* binding */ TaskStatusesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class TaskStatusesService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getTaskStatuses() {
    return this.httpClient.get("/api/taskstatuses", {
      responseType: "json"
    });
  }
  getTaskStatusByTaskStatusID(TaskStatusID) {
    return this.httpClient.get("/api/taskstatuses/searchbytaskstatusid/" + TaskStatusID, {
      responseType: "json"
    });
  }
  insertTaskStatus(newTaskStatus) {
    return this.httpClient.post("/api/taskstatuses", newTaskStatus, {
      responseType: "json"
    });
  }
  updateTaskStatus(existingTaskStatus) {
    return this.httpClient.put("/api/taskstatuses", existingTaskStatus, {
      responseType: "json"
    });
  }
  deleteTaskStatus(TaskStatusID) {
    return this.httpClient.delete("/api/taskstatuses?TaskStatusID=" + TaskStatusID);
  }
}
TaskStatusesService.ɵfac = function TaskStatusesService_Factory(t) {
  return new (t || TaskStatusesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
TaskStatusesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TaskStatusesService,
  factory: TaskStatusesService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 9940:
/*!*******************************************!*\
  !*** ./src/app/services/tasks.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TasksService: () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class TasksService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getTasks() {
    return this.httpClient.get("/api/tasks", {
      responseType: "json"
    });
  }
  getTaskByTaskID(TaskID) {
    return this.httpClient.get("/api/tasks/searchbytaskid/" + TaskID, {
      responseType: "json"
    });
  }
  updateTaskStatus(taskStatusDetail) {
    var user = JSON.parse(sessionStorage['currentUser']);
    //console.log(user);
    taskStatusDetail.userID = user.id; //add this statement to store the current user's id in the 'taskStatusDetails' table
    return this.httpClient.put("/api/updatetaskstatus", taskStatusDetail, {
      responseType: "json"
    });
  }
  insertTask(newTask) {
    var user = JSON.parse(sessionStorage['currentUser']);
    newTask.createdBy = user.id; //add this statement to store the current user's id in the 'tasks' table
    return this.httpClient.post("/api/createtask", newTask, {
      responseType: "json"
    });
  }
}
TasksService.ɵfac = function TasksService_Factory(t) {
  return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
TasksService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: TasksService,
  factory: TasksService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/team-size-validator.directive */ 8981);
/* harmony import */ var _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directives/client-location-status-validator.directive */ 5581);
/* harmony import */ var _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/project-idunique-validator.directive */ 54);
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/filter.pipe */ 23);
/* harmony import */ var _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/paging.pipe */ 8890);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../directives/component-loader.directive */ 9575);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/sort.pipe */ 1805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);











class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_4__.PagingPipe, _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderDirective, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_6__.SortPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _directives_team_size_validator_directive__WEBPACK_IMPORTED_MODULE_0__.TeamSizeValidatorDirective, _directives_client_location_status_validator_directive__WEBPACK_IMPORTED_MODULE_1__.ClientLocationStatusValidatorDirective, _directives_project_idunique_validator_directive__WEBPACK_IMPORTED_MODULE_2__.ProjectIDUniqueValidatorDirective, _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.FilterPipe, _pipes_paging_pipe__WEBPACK_IMPORTED_MODULE_4__.PagingPipe, _directives_component_loader_directive__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderDirective, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_6__.SortPipe]
  });
})();

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