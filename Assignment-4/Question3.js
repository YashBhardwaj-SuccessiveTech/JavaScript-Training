// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countvaribles(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (!map.has(ch)) {
      map.set(ch, 1);
    } else {
      let currval = map.get(ch);
      map.set(ch, currval + 1);
    }
  }
  let ans = "";

  // for (let [key, value] of map.entries()) {
  //     ans += `${key}${value}`;
  // }

  for (let key of map.keys()) {
    ans += `${key}${map.get(key)}`;
  }

  return ans;
}

let str = "abcabcdabbcc";
console.log(countvaribles(str));
