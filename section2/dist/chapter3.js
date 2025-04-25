//obeject 구조기준 구조적타입 시스템
let user = {
    id: 1,
    name: "이정환",
};
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; 이렇게 절때 값이 바뀌면 안된다면 readonly 붙이기 읽기전용으로 만들기
