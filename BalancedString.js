const isValid = (s) => {
  let braceArray = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
      braceArray.push(s[i]);
    } else if (s[i] == "}" || s[i] == "]" || s[i] == "") {
      //Check if the value is already encountered

      let symbol = null;

      if (s[i] == "}") {
        symbol = "{";
      } else if (s[i] == "]") {
        symbol = "[";
      } else if (s[i] == ")") {
        symbol = "(";
      }

      if (braceArray[braceArray.length - 1] == symbol) {
        braceArray.pop();
      } else {
        return false;
      }
    }
  }

  return true;
};

console.log(isValid("{{[  {}]}}"));
