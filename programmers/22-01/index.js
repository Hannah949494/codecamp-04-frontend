let answers = [1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2];

function solution(answers) {
  let answer = [];

  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === man1[i % man1.length]) score[0]++;
    if (answers[i] === man2[i % man2.length]) score[1]++;
    if (answers[i] === man3[i % man3.length]) score[2]++;
  }

  const max = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) answer.push(i + 1);
  }

  return answer;
}

//ref code

const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  //학생들의 점수를 저장하는 배열

  const score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }

  const biggest = Math.max(...score);
  const result = [];

  for (let j = 0; j < score.length; j++) {
    if (biggest === score[j]) {
      result.push(j + 1);
    }
  }
  return result;
}

const answerTable = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const scoreList = [
    { student: 1, score: 0 },
    { student: 2, score: 0 },
    { student: 3, score: 0 },
  ];

  answers.forEach((el, i) => {
    answerTable.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        scoreList[l].score += 1;
      }
    });
  });

  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );

  const result = scoreList.filter((el) => {
    return el.score === biggest;
  });

  return result.map((el) => el.student);
}
