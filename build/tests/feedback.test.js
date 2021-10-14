"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const feedback = require('../src/dao/feedback');
const productRequestDbAll = require('./productRequestDb');
const productRequestDbSingle = require('./productRequestDb');
jest.mock('../src/config/db/db', jest.fn(() => Promise.resolve({
    default: jest.fn(),
    leftJoin: jest.fn(),
    select: jest.fn(),
    count: jest.fn(),
    groupBy: jest.fn(),
    where: jest.fn(),
})));
const db = require('../src/config/db/db');
describe('feedback dao unit tests', () => {
    describe('feedbackDAO', () => {
        it('should call knex and return all feedback', () => __awaiter(void 0, void 0, void 0, function* () {
            const knex = yield db;
            knex.default.mockReturnThis();
            knex.leftJoin.mockReturnThis();
            knex.select.mockReturnThis();
            knex.count.mockReturnThis();
            knex.groupBy.mockResolvedValue(productRequestDbAll);
            const result = yield feedback.getFeedback();
            expect(result).toStrictEqual(productRequestDbAll);
        }));
        it('should call knex and return single feedback', () => __awaiter(void 0, void 0, void 0, function* () {
            const productFeedbackId = '6ea1ed94-e08e-4bf1-9cb3-d087e4ed9d3f';
            const knex = yield db;
            knex.default.mockReturnThis();
            knex.select.mockReturnThis();
            knex.where.mockResolvedValue(productRequestDbSingle);
            const result = yield feedback.getSingleFeedback(productFeedbackId);
            expect(result).toStrictEqual(productRequestDbSingle);
        }));
    });
});
