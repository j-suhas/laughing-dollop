function flip(pos, list, K) {
  if (pos + K > list.length) {
    return -1;
  }
  for (i = pos; i < pos + K; i++) {
    if (list[i] == "-") {
      list[i] = "+";
    } else {
      list[i] = "-";
    }
  }
  return 0;
}

function getFirstSadBurger(list) {
  for (i = 0; i < list.length; i++) {
    if (list[i] == "-") {
      return i;
    }
  }
  return list.length;
}

function minimumFlips(list, K) {
  console.log("input: ", list);

  let pos = getFirstSadBurger(list);
  if (pos == list.length) return 0;

  count = 0;

  while (pos < list.length) {
    if (list[pos] == "+") pos++;
    else if (list[pos] == "-") {
      if (flip(pos, list, K) == -1) return -1;
      pos++;
      count++;
    }
  }
  if (pos < list.length) return -1;
  return count;
}

//  conditions
//  ---+-++- 3
//  +++++ 4
//  -+-+- 4

let inputA = ["-", "-", "-", "+", "-", "+", "+", "-"];
let Ka = 3;

let inputB = ["+", "+", "+", "+", "+"];
let Kb = 4;

let inputC = ["-", "+", "-", "+", "-"];
let Kc = 4;

let res = minimumFlips(inputA, Ka);
console.log("res", res == -1 ? "IMPOSSIBLE" : res);

//
//
//
// let resB = minimumFlips(inputB, 4);
// console.log("inputB: ", inputB);
// console.log("resB", resB);

// let resC = minimumFlips(inputC, 4);
// console.log("inputC: ", inputC);
// console.log("resC", resC, " ");
