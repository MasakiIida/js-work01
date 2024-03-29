// // let変数
// let val1 = "let変数";
// console.log(val1);

// // let変数は再宣言不可
// val1 = "let変数上書き";
// console.log(val1);

// const変数は上書き・再宣言不可
// const val2 = "const変数";
// console.log(val2);

// constで定義したオブジェクトはプロバティの変更が可能
// const val3 = {
//   name: "テスト",
//   age: 28
// };
// val3.name = "jack";
// val3.address = "Hiroshima";
// console.log(val3);

// constで定義したオブジェクトはプロバティの変更が可能
// const val4 = ["dog", "cat"];
// val4[0] = "bird";
// val4.push("monkey");
// console.log(val4);

/**
 * テンプレート文字列
 */

// const name = "まさき";
// const age = 25;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数 引数()を省略できる
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "masaki",
//   age: "22"
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["希咲", 22];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello();

/**
 * スプレッド構文...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["masaki", "tuki", "sayaka"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "masaki") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 *  三項演算子
 */
// ある条件? 条件がtureの時:条件がfalseの時
// const val1 = 1 > 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === `number` ? num.toLocaleString() : `数値を入力してください。`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています！！` : `許容範囲ないです`;
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子 && ||
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = 10;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
