(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./src/modules/appointments/components/page.calendar.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/appointments/components/page.calendar.tsx ***!
  \***************************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CalendarPage\", function() { return CalendarPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst AppointmentEditorPanel = react_loadable__WEBPACK_IMPORTED_MODULE_9__({\n    loader: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(void 0, void 0, void 0, function* () {\n        return (yield __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! modules/appointments/components/appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n            .AppointmentEditorPanel;\n    }),\n    loading: () => react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Shimmer\"], null)\n});\nlet CalendarPage = class CalendarPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.criticalWidth = 500;\n        this.filter = \"\";\n        this.showAdditionPanel = false;\n        this.newAppointmentForPatientID = \"\";\n        this.showAll = true;\n        this.c = _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"];\n        this.collapsedMobileCalendar = false;\n        this.nextWeekBTN = () => {\n            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"Next\" }, onClick: () => {\n                    const target = this.c.weeksCalendar[this.c.selectedWeekIndex + 1];\n                    if (target) {\n                        this.c.selected.year = target[0].yearNum;\n                        this.c.selected.month = target[0].monthNum;\n                        this.c.selected.day = target[0].dateNum;\n                    }\n                    else {\n                        this.c.selected.year = this.c.selected.year + 1;\n                        this.c.selected.month = this.c.weeksCalendar[0][this.c.weeksCalendar[0].length - 1].monthNum;\n                        this.c.selected.day = this.c.weeksCalendar[0][this.c.weeksCalendar[0].length - 1].dateNum;\n                    }\n                } }));\n        };\n        this.prevWeekBTN = () => {\n            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { onClick: () => {\n                    const target = this.c.weeksCalendar[this.c.selectedWeekIndex - 1];\n                    if (target) {\n                        this.c.selected.year = target[0].yearNum;\n                        this.c.selected.month = target[0].monthNum;\n                        this.c.selected.day = target[0].dateNum;\n                    }\n                    else {\n                        this.c.selected.year = this.c.selected.year - 1;\n                        this.c.selected.month = this.c.weeksCalendar[this.c.weeksCalendar.length - 1][0].monthNum;\n                        this.c.selected.day = this.c.weeksCalendar[this.c.weeksCalendar.length - 1][0].dateNum;\n                    }\n                }, iconProps: { iconName: \"Previous\" } }));\n        };\n    }\n    get newAppointmentForPatient() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].docs.find(x => x._id === this.newAppointmentForPatientID);\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditAppointments;\n    }\n    get appointment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].docs.find(a => a._id === _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedID);\n    }\n    get selectedAppointments() {\n        return this.c.selectedWeek.map(day => {\n            return _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].appointmentsForDay(day.yearNum, day.monthNum + 1, day.dateNum, this.filter, this.showAll ? undefined : _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id);\n        });\n    }\n    get noAppointmentsThisWeek() {\n        return !this.selectedAppointments.find(x => x.length > 0);\n    }\n    componentDidMount() {\n        this.unifyHeight();\n    }\n    componentDidUpdate() {\n        this.unifyHeight();\n    }\n    unifyHeight() {\n        if (!(_core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > this.criticalWidth)) {\n            return;\n        }\n        const parent = document.getElementById(\"full-day-cols\");\n        if (!parent) {\n            return;\n        }\n        const els = document.getElementsByClassName(\"full-day-col\");\n        let largest = 0;\n        for (let index = 0; index < els.length; index++) {\n            const height = els[index].clientHeight;\n            if (height > largest) {\n                largest = height;\n            }\n        }\n        for (let index = 0; index < els.length; index++) {\n            els[index].style.minHeight = largest ? largest + \"px\" : \"auto\";\n        }\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"calendar-component\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"CommandBar\"], Object.assign({}, {\n                className: \"commandBar fixed\",\n                isSearchBoxVisible: true,\n                elipisisAriaLabel: _core__WEBPACK_IMPORTED_MODULE_2__[\"text\"](\"More options\"),\n                farItems: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > 550\n                    ? [\n                        {\n                            key: \"my-appointments-only\",\n                            onRender: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { checked: this.showAll, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All appointments\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"My appointments only\"), onChange: (ev, newValue) => {\n                                    this.showAll = newValue;\n                                }, className: \"appointments-toggle\" }))\n                        }\n                    ]\n                    : undefined,\n                items: [\n                    {\n                        key: this.canEdit ? \"addNew\" : \"\",\n                        title: \"Add new\",\n                        name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                        onClick: () => {\n                            this.showAdditionPanel = true;\n                            this.newAppointmentForPatientID = \"\";\n                        },\n                        iconProps: {\n                            iconName: \"Add\"\n                        }\n                    },\n                    {\n                        key: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > 600 ? \"pw\" : \"\",\n                        onRender: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](this.prevWeekBTN, null))\n                    },\n                    {\n                        key: \"ds\",\n                        onRender: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DatePicker\"], { onSelectDate: date => {\n                                if (date) {\n                                    this.c.selected.year = date.getFullYear();\n                                    this.c.selected.month = date.getMonth();\n                                    this.c.selected.day = date.getDate();\n                                }\n                            }, formatDate: () => {\n                                return `${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(new Date(this.c.selectedWeek[0].yearNum, this.c.selectedWeek[0].monthNum, this.c.selectedWeek[0].dateNum), _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"))} — ${Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(new Date(this.c.selectedWeek[this.c.selectedWeek\n                                    .length - 1].yearNum, this.c.selectedWeek[this.c.selectedWeek\n                                    .length - 1].monthNum, this.c.selectedWeek[this.c.selectedWeek\n                                    .length - 1].dateNum), _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"))}`;\n                            }, value: new Date(this.c.selected.year, this.c.selected.month, this.c.selected.day), firstDayOfWeek: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"firstDayOfTheWeekDayPicker\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"weekend_num\")), calendarProps: {\n                                dateRangeType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DateRangeType\"].Week,\n                                strings: {\n                                    months: _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].months(),\n                                    shortMonths: _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].monthsShort(),\n                                    days: [\n                                        \"Sunday\",\n                                        \"Monday\",\n                                        \"Tuesday\",\n                                        \"Wednesday\",\n                                        \"Thursday\",\n                                        \"Friday\",\n                                        \"Saturday\"\n                                    ],\n                                    shortDays: [\n                                        \"Su\",\n                                        \"Mo\",\n                                        \"Tu\",\n                                        \"We\",\n                                        \"Th\",\n                                        \"Fr\",\n                                        \"Sa\"\n                                    ],\n                                    goToToday: \"Go to today\"\n                                },\n                                autoNavigateOnSelection: true\n                            }, isMonthPickerVisible: true, showGoToToday: true }))\n                    },\n                    {\n                        key: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > 600 ? \"nw\" : \"\",\n                        onRender: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](this.nextWeekBTN, null))\n                    },\n                    {\n                        key: _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > 550 ? \"tw\" : \"\",\n                        onRender: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { disabled: !!this.c.selectedWeek.find(x => x.dateNum ===\n                                this.c.currentDay &&\n                                x.monthNum ===\n                                    this.c.currentMonth &&\n                                x.yearNum ===\n                                    this.c.currentYear), iconProps: {\n                                iconName: \"GotoToday\"\n                            }, onClick: () => {\n                                this.c.selected.day = this.c.currentDay;\n                                this.c.selected.month = this.c.currentMonth;\n                                this.c.selected.year = this.c.currentYear;\n                            }, text: \"Today\" }))\n                    }\n                ].filter(x => x.key)\n            })),\n            _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].innerWidth > this.criticalWidth ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"appointments-overview\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"table\", null,\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"thead\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tr\", null, this.c.overview\n                            .reduce((arr, arr2) => {\n                            arr2.forEach(x => arr.push(x));\n                            return arr;\n                        }, [])\n                            .map(day => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"th\", { key: `${day.yearNum}-${day.monthNum}-${day.dateNum}`, onClick: () => {\n                                    this.c.selected.year =\n                                        day.yearNum;\n                                    this.c.selected.month =\n                                        day.monthNum;\n                                    this.c.selected.day =\n                                        day.dateNum;\n                                }, className: (day.weekDay.isWeekend\n                                    ? \"is-weekend\"\n                                    : \"\") +\n                                    (this.c.selectedWeek.find(x => x === day)\n                                        ? \" is-selected\"\n                                        : \"\") +\n                                    (day.dateNum ===\n                                        this.c.currentDay &&\n                                        this.c.currentMonth ===\n                                            day.monthNum &&\n                                        day.yearNum ===\n                                            this.c.currentYear\n                                        ? \" is-current\"\n                                        : \"\") }, day.weekDay.dayLiteralShort.substr(0, 2)));\n                        }))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tbody\", null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tr\", null, this.c.overview\n                            .reduce((arr, arr2) => {\n                            arr2.forEach(x => arr.push(x));\n                            return arr;\n                        }, [])\n                            .map(day => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"td\", { key: `${day.yearNum}-${day.monthNum}-${day.dateNum}`, onClick: () => {\n                                    this.c.selected.year =\n                                        day.yearNum;\n                                    this.c.selected.month =\n                                        day.monthNum;\n                                    this.c.selected.day =\n                                        day.dateNum;\n                                }, className: (day.weekDay.isWeekend\n                                    ? \"is-weekend\"\n                                    : \"\") +\n                                    (this.c.selectedWeek.find(x => x === day)\n                                        ? \" is-selected\"\n                                        : \"\") +\n                                    (day.dateNum ===\n                                        this.c.currentDay &&\n                                        this.c.currentMonth ===\n                                            day.monthNum &&\n                                        day.yearNum ===\n                                            this.c.currentYear\n                                        ? \" is-current\"\n                                        : \"\") },\n                                day.dateNum,\n                                \"/\",\n                                day.monthNum + 1));\n                        })),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"tr\", null, this.c.overview\n                            .reduce((arr, arr2) => {\n                            arr2.forEach(x => arr.push(x));\n                            return arr;\n                        }, [])\n                            .map(day => {\n                            const num = _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].appointmentsForDay(day.yearNum, day.monthNum + 1, day.dateNum, this.filter, this.showAll\n                                ? undefined\n                                : _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id).length;\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"td\", { key: `${day.yearNum}-${day.monthNum}-${day.dateNum}`, onClick: () => {\n                                    this.c.selected.year =\n                                        day.yearNum;\n                                    this.c.selected.month =\n                                        day.monthNum;\n                                    this.c.selected.day =\n                                        day.dateNum;\n                                }, className: (day.weekDay.isWeekend\n                                    ? \"is-weekend\"\n                                    : \"\") +\n                                    (this.c.selectedWeek.find(x => x === day)\n                                        ? \" is-selected\"\n                                        : \"\") +\n                                    (day.dateNum ===\n                                        this.c.currentDay &&\n                                        this.c.currentMonth ===\n                                            day.monthNum &&\n                                        day.yearNum ===\n                                            this.c.currentYear\n                                        ? \" is-current\"\n                                        : \"\") },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", { className: `appointments-num num-${num}` }, num)));\n                        })))))) : (\"\"),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: `week-view${this.collapsedMobileCalendar ? \" full-height\" : \"\"}` },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { id: \"full-day-cols\", key: JSON.stringify(this.c.selected) }, this.c.selectedWeek.map((day, index) => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: `${day.yearNum}-${day.monthNum}-${day.dateNum}`, id: \"day\" + \"_\" + day.dateNum, className: \"full-day-col\" +\n                            (this.c.selected.day === day.dateNum\n                                ? \" selected\"\n                                : \"\") +\n                            (day.dateNum === this.c.currentDay &&\n                                this.c.currentMonth === day.monthNum &&\n                                day.yearNum === this.c.currentYear\n                                ? \" current\"\n                                : \"\"), style: {\n                            width: (100 / this.c.selectedWeek.length).toString() + \"%\"\n                        } },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h4\", null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 20 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"b\", null, Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"formatDate\"])(new Date(day.yearNum, day.monthNum, day.dateNum), _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"date_format\"))),\n                                    \"\\u00A0\\u00A0\",\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", { className: \"day-name\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(day.weekDay.dayLiteral))),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 4 },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"appointments-num-wrap\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", { className: `appointments-num num-${this.selectedAppointments[index].length}` }, this\n                                            .selectedAppointments[index].length))))),\n                        this.selectedAppointments[index]\n                            .sort((a, b) => a.date - b.date)\n                            .map(appointment => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: appointment._id, className: \"appointment\", onClick: () => {\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                                        id: appointment._id,\n                                        sub: \"details\"\n                                    });\n                                } },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"time\" +\n                                        (appointment.isMissed\n                                            ? \" missed\"\n                                            : appointment.isDone\n                                                ? \" done\"\n                                                : \"\") }, appointment.isMissed\n                                    ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Missed\")\n                                    : appointment.isDone\n                                        ? Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Done\")\n                                        : appointment.formattedTime),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"m-b-5\" },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: appointment.treatment\n                                            ? appointment\n                                                .treatment\n                                                .type\n                                            : \"\", size: 1 })),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientLinkComponent\"], { id: (appointment.patient || {\n                                        _id: \"\"\n                                    })._id, name: (appointment.patient || {\n                                        name: \"\"\n                                    }).name }),\n                                appointment.operatingStaff.map(operator => {\n                                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: operator._id, className: \"m-t-5 fs-11\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Medical\" }),\n                                        \" \",\n                                        operator.name));\n                                })));\n                        })));\n                }))),\n            this.showAdditionPanel ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: this.showAdditionPanel, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].smallFixedFar, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.showAdditionPanel = false;\n                } },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagInputComponent\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Choose patient\"), options: _modules__WEBPACK_IMPORTED_MODULE_3__[\"patients\"].docs.map(patient => ({\n                        text: patient.name,\n                        key: patient._id\n                    })), className: \"choose-patient\", suggestionsHeaderText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Select patient\"), noResultsFoundText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"No patients found\"), maxItems: 1, disabled: !this.canEdit, value: this.newAppointmentForPatient\n                        ? [\n                            {\n                                key: this\n                                    .newAppointmentForPatientID,\n                                text: this\n                                    .newAppointmentForPatient\n                                    .name\n                            }\n                        ]\n                        : [], onChange: selectedKeys => {\n                        this.newAppointmentForPatientID =\n                            selectedKeys[0] || \"\";\n                    } }),\n                this.newAppointmentForPatient ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { className: \"new-appointment\", onChange: (ev, option) => {\n                        const newApt = _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].new();\n                        newApt.patientID = this.newAppointmentForPatientID;\n                        newApt.date = new Date(this.c.selected.year, this.c.selected.month, this.c.selected.day).getTime();\n                        newApt.treatmentID = option.key.toString();\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].add(newApt);\n                        this.showAdditionPanel = false;\n                        this.newAppointmentForPatientID = \"\";\n                        _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].select({\n                            id: newApt._id,\n                            sub: \"details\"\n                        });\n                    }, onRenderItem: (item, render) => {\n                        return item.key === \"ph\" ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null)) : (render(item));\n                    }, options: _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].docs.map(treatment => ({\n                        text: treatment.type,\n                        key: treatment._id\n                    }))\n                        .concat([\n                        {\n                            key: \"ph\",\n                            text: \"＋ \" + Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Select treatment\")\n                        }\n                    ]), selectedKey: \"ph\" })) : (\"\"))) : (\"\"),\n            this.appointment && _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].selectedSub ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.appointment, onDismiss: () => _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].unSelect() })) : (\"\")));\n    }\n    findPos(obj) {\n        let currentTop = 0;\n        if (obj && obj.offsetParent) {\n            do {\n                currentTop += obj.offsetTop;\n            } while ((obj = obj.offsetParent));\n            return currentTop - 70;\n        }\n        return 0;\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"filter\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"showAdditionPanel\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"newAppointmentForPatientID\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], CalendarPage.prototype, \"newAppointmentForPatient\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], CalendarPage.prototype, \"canEdit\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], CalendarPage.prototype, \"appointment\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], CalendarPage.prototype, \"selectedAppointments\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], CalendarPage.prototype, \"noAppointmentsThisWeek\", null);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"showAll\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"c\", void 0);\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"collapsedMobileCalendar\", void 0);\nCalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], CalendarPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/appointments/components/page.calendar.tsx?");

/***/ })

}]);