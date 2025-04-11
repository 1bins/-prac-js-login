import { baseURL, $, loginValidator } from "./utils.js";

let user = {};

/**
 * 로그인 기능
 * */
export const login = async () => {
    const userId = $('#userId');
    const userPw = $('#userPw');

    // 로그인 유효성 검사
    if (!loginValidator(userId, userPw)) return;

    try {
        const response = await axios.post(`${baseURL}/auth/login`, {
            username: userId.value,
            password: userPw.value
        });

        const token = response.data.token;
        if (!token) throw new Error("로그인이 실패하였습니다");

        // 토큰을 로컬스토리지에 저장하기
        localStorage.setItem('token', response.data.token);
        alert('로그인되었습니다');
        location.href = "./page/login.html";
        // TODO:: 이벤트 버블링 제어하기
    }
    catch (error) {
        let message = error.message || '로그인이 실패하였습니다';
        if (error.response && error.response.status === 401) {
            message = '아이디 또는 비밀번호가 틀렸습니다'
        }
        alert(message);
    }
}

/**
 * 로그인 상태 검사
 * 
 * 현재는 임의로 users/1 <- 유저 더미 가져왔음
 * 페이지 상단 스크립트에 window.onload = () => { checkLogin() }으로 로그인체크
 * */
export const checkLogin = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        alert('로그인이 필요합니다');
        location.href = "/";
    }

    try {
        const response = await axios.get(`${baseURL}/users/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        user = response.data;
    }
    catch (error) {
        let message = '로그인을 다시 해주세요';
        alert(message);
    }
}

/**
 * 로그아웃 기능
 * */
export const logout = () => {
    localStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    location.href = '/';
}