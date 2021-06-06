/**
 * const,letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

//constは上書きも再宣言も不可能
// const val3 = "const変数";
// console.log(val3);

//const変数は上書き不可
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ootani",
//   age: 28,
// };
// val4.name = "yuka";
// val4.address = "Kanagawa";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ゆか";
// const age = 28;
// //「私の名前はゆかです。年齢は28歳です。」
// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);
// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
// return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
//引数のカッコは省略可能だが保存すると保管される
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));
// //処理が一行で終わるときreturnと{}を省略できる。
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(2, 3));

/**
 * 分割代入
 */
// オブジェクト;
// const myProfile = {
//   name: "yuka",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}す`;
// console.log(message2);

// 配列;
const myProfile = ["ゆか", 28];
const message3 = `名前は${myProfile[0]}。年齢は${myProfile[1]}`;
console.log(message3);
//分割代入 配列の順番通りにいれる
const [name, age] = myProfile;
const message4 = `名前は${name}でして年齢は${age}だよ`;
console.log(message4);
