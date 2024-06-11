import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        profile: {
            nickname: "탐정",
            email: "detective@example.com",
            profileImage: "path/to/profile-image.jpg", // 실제 프로필 이미지 경로로 수정
            balance: 3285000,
        },
        transactions: [
            {
                id: 1,
                datetime: "2024-06-01T00:00:00+09:00",
                category_id: 101,
                amount: 3000000,
                memo: "6월 급여",
            },
            {
                id: 2,
                datetime: "2024-06-02T00:00:00+09:00",
                category_id: 102,
                amount: 500000,
                memo: "이자",
            },
            {
                id: 3,
                datetime: "2024-06-03T00:00:00+09:00",
                category_id: 103,
                amount: 12000,
                memo: "용돈",
            },
            {
                id: 4,
                datetime: "2024-06-04T00:00:00+09:00",
                category_id: 201,
                amount: 12000,
                memo: "회사 점심",
            },
            {
                id: 5,
                datetime: "2024-06-05T00:00:00+09:00",
                category_id: 207,
                amount: 68000,
                memo: "6월 교통비",
            },
            {
                id: 6,
                datetime: "2024-06-06T00:00:00+09:00",
                category_id: 203,
                amount: 92000,
                memo: "다이소 구매",
            },
            {
                id: 7,
                datetime: "2024-06-07T00:00:00+09:00",
                category_id: 214,
                amount: 192000,
                memo: "이발비",
            },
        ],
        categories: [
            {
                id: 101,
                title: "월급",
                is_expense: false,
                is_cash: true,
            },
            {
                id: 102,
                title: "이자",
                is_expense: false,
                is_cash: true,
            },
            {
                id: 103,
                title: "용돈",
                is_expense: false,
                is_cash: true,
            },
            {
                id: 201,
                title: "식비",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 211,
                title: "식비",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 202,
                title: "주거/통신",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 212,
                title: "주거/통신",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 203,
                title: "생활용품",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 213,
                title: "생활용품",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 204,
                title: "의복/미용",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 214,
                title: "의복/미용",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 205,
                title: "건강/문화",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 215,
                title: "건강/문화",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 206,
                title: "교육/육아",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 216,
                title: "교육/육아",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 207,
                title: "교통/차량",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 217,
                title: "교통/차량",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 208,
                title: "경조사/회비",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 218,
                title: "경조사/회비",
                is_expense: true,
                is_cash: true,
            },
            {
                id: 209,
                title: "세금",
                is_expense: true,
                is_cash: false,
            },
            {
                id: 219,
                title: "세금",
                is_expense: true,
                is_cash: true,
            },
        ],
    }),
    actions: {
        setProfile(profile) {
            this.profile = profile;
        },
        addTransaction(transaction) {
            this.transactions.push(transaction);
        },
        updateBalance(amount) {
            this.profile.balance += amount;
        },
    },
});
