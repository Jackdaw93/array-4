const pertama = ["Math", "English", "Programming"];
const kedua = ["Geography", "Spannish", "Programming"];

const check = (data1, data2) => {
  let result = false;

  for (let i = 0; i < data1.length; i++) {
    if (data2.includes(data1[i])) {
      result = true;
    }
  }
  return result;
};
console.log(check(pertama, kedua));
