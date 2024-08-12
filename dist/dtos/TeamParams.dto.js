"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamParams = void 0;
const class_validator_1 = require("class-validator");
var TeamEnum;
(function (TeamEnum) {
    TeamEnum["ALABAMA"] = "alabama";
    TeamEnum["ARKANSAS"] = "arkansas";
    TeamEnum["AUBURN"] = "auburn";
    TeamEnum["FLORIDA"] = "florida";
    TeamEnum["GEORGIA"] = "georgia";
    TeamEnum["KENTUCKY"] = "kentucky";
    TeamEnum["LSU"] = "lsu";
    TeamEnum["MISSISSIPPI_STATE"] = "mississippi_state";
    TeamEnum["MISSOURI"] = "missouri";
    TeamEnum["OKLAHOMA"] = "oklahoma";
    TeamEnum["OLE_MISS"] = "ole_miss";
    TeamEnum["SOUTH_CAROLINA"] = "south_carolina";
    TeamEnum["TENNESSEE"] = "tennessee";
    TeamEnum["TEXAS"] = "texas";
    TeamEnum["TEXAS_AM"] = "texas_a&m";
    TeamEnum["VANDERBILT"] = "vanderbilt";
})(TeamEnum || (TeamEnum = {}));
class TeamParams {
}
exports.TeamParams = TeamParams;
__decorate([
    (0, class_validator_1.IsEnum)(TeamEnum),
    __metadata("design:type", String)
], TeamParams.prototype, "team", void 0);
//# sourceMappingURL=TeamParams.dto.js.map