//obeject 구조기준 구조적타입 시스템
let user: {
  id?: number; //?의미는 있어도 되고 없어도된다
  name: string;
} = {
  id: 1,
  name: "이정환",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; 이렇게 절때 값이 바뀌면 안된다면 readonly 붙이기 읽기전용으로 만들기
