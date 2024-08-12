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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const teams_service_1 = require("../../services/teams/teams.service");
const TeamParams_dto_1 = require("../../../dtos/TeamParams.dto");
const TeamQuery_dto_1 = require("../../../dtos/TeamQuery.dto");
let TeamsController = class TeamsController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    getTeams(query) {
        return this.teamService.getTeams(query);
    }
    searchTeams(name) {
        return this.teamService.searchTeams(name);
    }
    getTeam(params) {
        return this.teamService.getTeam(params);
    }
};
exports.TeamsController = TeamsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TeamQuery_dto_1.TeamQuery]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "getTeams", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "searchTeams", null);
__decorate([
    (0, common_1.Get)(':team'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TeamParams_dto_1.TeamParams]),
    __metadata("design:returntype", void 0)
], TeamsController.prototype, "getTeam", null);
exports.TeamsController = TeamsController = __decorate([
    (0, common_1.Controller)('teams'),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
//# sourceMappingURL=teams.controller.js.map