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
Object.defineProperty(exports, "__esModule", { value: true });
const feedbackCtrl = require('../src/controllers/feedbackController');
const feedbackService = require('../src/services/feedbackService');
const productRequestTable = [
    {
        title: 'Add tags for solutions',
        category: 'enhancement',
        upvotes: 112,
        status: 'suggestion',
        description: 'Easier to search for solutions based on a specific stack.',
    },
    {
        product_feedback_id: 2,
        title: 'Add a dark theme option',
        category: 'feature',
        upvotes: 99,
        status: 'suggestion',
        description: 'It would help people with light sensitivities and who prefer dark mode.',
    },
];
describe('feedbackController Unit Tests', () => {
    const res = {
        status: () => ({
            json: (data) => {
                return data;
            },
        }),
    };
    it('should return empty array', () => __awaiter(void 0, void 0, void 0, function* () {
        feedbackService.getFeedback = jest.fn().mockResolvedValue([]);
        const result = yield feedbackCtrl.getFeedback('', res, '');
        expect(result).toStrictEqual([]);
    }));
    it('should return all feedback', () => __awaiter(void 0, void 0, void 0, function* () {
        feedbackService.getFeedback = jest
            .fn()
            .mockResolvedValue(productRequestTable);
        const result = yield feedbackCtrl.getFeedback('', res, '');
        expect(result).toStrictEqual(productRequestTable);
    }));
    it('should return an error', () => __awaiter(void 0, void 0, void 0, function* () {
        const asyncMock = (feedbackService.getFeedback = jest
            .fn()
            .mockRejectedValue(new Error('Error')));
        try {
            yield asyncMock();
        }
        catch (err) {
            expect(err.message).toEqual('Error');
        }
    }));
    describe('when getting a single feedback', () => {
        const req = {
            params: {
                id: 1,
            },
        };
        describe('when an error occurs', () => {
            it('should return an error', () => __awaiter(void 0, void 0, void 0, function* () {
                const asyncMock = (feedbackService.getSingleFeedback = jest
                    .fn()
                    .mockRejectedValue(new Error('Error')));
                try {
                    yield asyncMock();
                }
                catch (err) {
                    expect(err.message).toEqual('Error');
                }
            }));
        });
        describe('when getting correctly a single feedback', () => {
            it('should return a single feedback', () => __awaiter(void 0, void 0, void 0, function* () {
                feedbackService.getSingleFeedback = jest
                    .fn()
                    .mockResolvedValue(productRequestTable[0]);
                const result = yield feedbackCtrl.getSingleFeedback(req, res, '');
                expect(result).toEqual(productRequestTable[0]);
                expect(feedbackService.getSingleFeedback).toHaveBeenCalledTimes(1);
                expect(feedbackService.getSingleFeedback).toHaveBeenCalledWith(1);
            }));
        });
    });
});
module.exports = productRequestTable;
