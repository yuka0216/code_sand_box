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

// // 配列;
// const myProfile = ["ゆか", 28];
// const message3 = `名前は${myProfile[0]}。年齢は${myProfile[1]}`;
// console.log(message3);
// //分割代入 配列の順番通りにいれる
// const [name, age] = myProfile;
// const message4 = `名前は${name}でして年齢は${age}だよ`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
//デフォルト値を設定していないとundefinedになっていまうので
//ゲストを設定してみる
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("yuks");

/**
 * スプレッド構文...
 * 配列の中身を順番に展開してくれる
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);//100,20
// console.log(arr4);//10,20 影響を受けない

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// // console.log(arr8);
// // 参照が引き継がれていて新しい配列の中身が変わった時元の配列が影響を受けてしまう
// arr8[0] = 100;
// console.log(arr8);//100,20
// console.log(arr4);//100,20　影響を受けて変わってしまっている

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "ゆか"];
// //従来のfor文
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// 結果全て出力される　田中　山田　ゆか

// map
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });
// console.log(nameArr2);//結果新しい配列が生成される["田中", "山田", "ゆか"]

// nameArr.map((name) => console.log(name));
// 結果配列をループして処理する　田中　山田　ゆか

// filter 配列に対してある条件に一致するものを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["田中", "山田", "ゆか"];
//従来のfor文
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
//第二引数でインデックス番号が取り出せる
// nameArr.map((name, index) => console.log(`${index +1}番目は${name}です`));

// const newNameArr = nameArr.map((name) => {
//   if (name === "ゆか") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);
