function splitJobCharacters(str) {
  let result = [];
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "-" && str[i] !== ",") {
      temp += str[i];
    } else {
      result.push(temp);
      temp = "";
    }

    if (i === str.length - 1) {
      result.push(temp);
    }
  }
  return result;
}

function reverseJobCharacters(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let temp = "";
      for (let j = arr[i].length - 1; j >= 0; j--) {
        temp += arr[i][j];
      }
      result.push(temp);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function decryptJobCharacters(arr) {
  let dict = "abcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      let temp = "";
      for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < dict.length; k++) {
          if (dict[k] === arr[i][j].toLowerCase()) {
            temp += dict[(k + 25) % 26];
          }
        }
      }
      result.push(temp);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function makingDreamTeam(arr) {
  let result = [];
  let n = 0;

  while (true) {
    let temp = [];

    for (let i = 0; i < 2; i++) {
      temp.push(arr[n]);
      n++;
    }
    result.push(temp);
    if (arr.length === 2 * result.length) {
      break;
    }
  }

  return result;
}

function startUpMatchMaking(str) {
  let splittedStr = splitJobCharacters(str);
  let reverseJob = reverseJobCharacters(splittedStr);
  let DecrypttedJob = decryptJobCharacters(reverseJob);
  let dreamTeam = makingDreamTeam(DecrypttedJob);

  if (dreamTeam.length < 3) {
    return "Minimum 3 members in the team";
  }

  let hustler = false;
  let hipster = false;
  let hacker = false;
  for (let i = 0; i < dreamTeam.length; i++) {
    if (dreamTeam[i][1] === "hustler") {
      hustler = true;
    } else if (dreamTeam[i][1] === "hipster") {
      hipster = true;
    } else if (dreamTeam[i][1] === "hacker") {
      hacker = true;
    }
  }

  if (hustler && hipster && hacker) {
    return "Match your Dream Start-Up Team";
  } else {
    return "The job composition in the team is not suitable";
  }
}

console.log(startUpMatchMaking("idaz-sfmutvi,anggara-sfutqji,fika-sfldbi"));
// Match your Dream Start-Up Team
console.log(
  startUpMatchMaking(
    "eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji"
  )
);
// Match your Dream Start-Up Team
console.log(
  startUpMatchMaking(
    "abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi"
  )
);
// The job composition in the team is not suitable
console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji,eko-sfmutvi"));
// The job composition in the team is not suitable
console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji"));
// Minimum 3 members in the team
