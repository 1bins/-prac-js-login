# Fake Store API를 이용한 로그인 기능 구현

[Fake Store API](https://fakestoreapi.com/docs)를 이용하여 로그인 기능 연습해보기

ES6 JS 모듈 사용해보기

## 로그인 ID/PW
| ID  |    PW    |
|-----|:--------:|
| mor_2314 | 83r5^_ | 

<br />

## 🎨 공부한 점
### axios
- axios를 사용했을 때 응답 값이 200~299가 아니면 자동으로 catch블록으로 넘어가므로 `response.status !== 200(~299) 처럼 굳이 조건문을 작성할 필요가 없다.
<br /><br />
- `withCredentials: true`는 <b>서버가 응답에 `set-cookie` 헤더를 보내는</b> 경우나 <b>서버가 세션 쿠키 혹은 HttpOnly JWT 쿠키를 사용</b>하는 경우에 사용한다.

<br />
