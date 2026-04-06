let grade = 85;

if(grade > 100 || grade < 0) {
  console.log('입력값 오류');
} else {
  if(grade === 100) {
  console.log(`당신의 점수는 ${grade}점입니다. <A+>`); 
} else if(grade >= 90) {
  console.log(`당신의 점수는 ${grade}점입니다. <A>`); 
} else if(grade >= 80) {
  console.log(`당신의 점수는 ${grade}점입니다. <B>`); 
} else if(grade >= 70) {
  console.log(`당신의 점수는 ${grade}점입니다. <C>`); 
} else if(grade >= 60) {
  console.log(`당신의 점수는 ${grade}점입니다. <D>`); 
} else {
  console.log(`당신의 점수는 ${grade}점입니다. <F>`); 
}
}