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