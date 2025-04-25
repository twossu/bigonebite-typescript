// any
// 특정 변수의 타입을 우리가 확실히 모를때 모든타입사용가능

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
// 특정 변수의 타입을 우리가 확실히 모를때 모든타입사용가능
// 다른점 반대로 값을 못 넣음 하고 싶으면 밑 if문사용용
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
  num = unknownVar;
}
