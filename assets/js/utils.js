/**
 * document querySelector 간소화
 * */
export const $ = (selector) => document.querySelector(selector);

/**
 * axios baseURL 설정
 * */
export const baseURL = 'https://fakestoreapi.com';

/**
 * 로그인 유효성 검사(validator)
 * */
export const loginValidator = (userId, userPw) => {
    const validateUserId = (userId) => userId.value === '' || userId.value.length < 2
    const validateUserPw = (userPw) => userPw.value === '' || userPw.value.length < 2

    if (validateUserId(userId)) {
        alert('정확한 아이디를 입력해주세요');
        return false;
    } else if (validateUserPw(userPw)) {
        alert('정확한 패스워드를 입력해주세요');
        return false;
    }

    return true;
}

/**
 * 함수 중복 실행 방지
 * */
export const preventReentry = (fn) => {
    let isRunning = false;

    return async function (...args) {
        if (isRunning) return;

        isRunning = true;
        try {
            await fn.apply(this, args);
            // this와 인자가 없는 함수를 사용하게 될 경우 fn()으로 사용해도 됨
            // 일반 함수에서 this를 안 쓰면 null도 상관 없음
            // 하지만 이벤트 핸들러, 메서드, 생성자처럼 this가 필요한 함수도 많음
            // 그래서 재사용 가능한 함수(onceAsync) 만들 땐 apply(this, args)로 보존하는 게 안정적임
        } finally {
            isRunning = false;
        }
    }
}