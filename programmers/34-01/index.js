const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거.
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }
  // 3단계 : .가 연속으로 ㄷ르어오면 하나의 .로 치환 (.. => .)
  while (answer.includes("..")) {
    console.log(answer);
    answer = answer.replace("..", ".");
  }

  // 4단계 : .가 처음이나 끝에 위치한다면 제거

  if (answer[0] === ".") {
    answer = answer.substr(1);
    console.log(answer);
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a"를 대입

  if (answer === "") {
    answer = "a";
    console.log(answer);
  }

  // 6단계 : 문자열의 길이가 16자 이상이면, 15자의 길이를 가지는 문자열로 치환 (= 15길이까지 자른다.)
  // 제거한 후 마침표가 끝에 붙으면 제거.

  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    removeLastDot();
    console.log(answer);
  }

  // 7단계 : 문자열의 길이가 2자 이하라면, new_id 마지막 문자를 new_id 길이가 3이 될때까지 반복하여 추가.

  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
    console.log(answer);
  }

  return answer;
}

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  // 1단계 : 대문자를 -> 소문자로 치환
  new_id = new_id.toLowerCase();
  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거.

  let answer = new_id.split("").filter((str) => filter.includes(str));
  console.log(answer);

  // 3단계 : .가 연속으로 ㄷ르어오면 하나의 .로 치환 (.. => .)

  answer = answer.filter(
    (str, i) => (str === "." && answer[i + 1] !== ".") || str !== "."
  );
  console.log(answer);

  // 4단계 : .가 처음이나 끝에 위치한다면 제거

  if (answer[0] === ".") {
    answer.splice(0, 1);
  }

  const removeLastDot = () => {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1); // answer.pop()
    }
  };
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a"를 대입

  if (answer.length === 0) {
    answer = ["a"];
  }

  // 6단계 : 문자열의 길이가 16자 이상이면, 15자의 길이를 가지는 문자열로 치환 (= 15길이까지 자른다.)
  // 제거한 후 마침표가 끝에 붙으면 제거.
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열의 길이가 2자 이하라면, new_id 마지막 문자를 new_id 길이가 3이 될때까지 반복하여 추가.

  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }

  return answer.join("");
}
