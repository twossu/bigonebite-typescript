/**
 * 타입 추론 됨 신기기
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  //함수의 반환값은 return문 다음에 오는것을 추론
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello"; //위에서는 숫자로 추론 되는데 여기서는 문자추론됨
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];
