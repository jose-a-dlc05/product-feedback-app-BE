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
const feedbackServ = require('../src/services/feedbackService');
const feedbackDataObject = require('../src/dao/feedback');
const productRequestTable = require('./feedbackController.test');
describe('feedbackService Unit Tests', () => {
    describe('when calling getFeedback ', () => {
        it('should return all feedback', () => __awaiter(void 0, void 0, void 0, function* () {
            feedbackDataObject.getFeedback = jest
                .fn()
                .mockResolvedValue(productRequestTable);
            const result = yield feedbackDataObject.getFeedback();
            expect(result).toStrictEqual(productRequestTable);
        }));
        it('should return an empty array', () => __awaiter(void 0, void 0, void 0, function* () {
            feedbackDataObject.getFeedback = jest.fn().mockResolvedValue([]);
            const result = yield feedbackDataObject.getFeedback();
            expect(result).toStrictEqual([]);
        }));
    });
    describe('when an error occurs', () => {
        it('should return an error', () => __awaiter(void 0, void 0, void 0, function* () {
            feedbackDataObject.getFeedback = jest
                .fn()
                .mockRejectedValue(new Error('Error'));
            try {
                yield feedbackDataObject.getFeedback();
            }
            catch (err) {
                expect(err.message).toEqual('Error');
            }
        }));
    });
});
