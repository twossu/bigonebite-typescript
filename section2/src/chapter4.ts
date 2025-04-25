// 타입 별칭
type User = {
  //중복코드묶기
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

// function test() {
//   type User = string; //User중복선언가능 지역변수 전역변수같은느김
//   //여기안에서 User는 string이고 밖에선 위 타입 유저임
// }

let user: User = {
  id: 1,
  name: "이정환",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; //추가적 무조건 number과 일치하거나 호환해야한다 그래서 string인데 number
};

// let countryNumberAndStringCodes: CountryNumberCodes = {
//   Korea: "ko",
// };
