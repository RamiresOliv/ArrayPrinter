// Module file
// i was bored....... ;)

exports.printArray = (
  array = Array,
  returnString = Boolean,
  needsIndex = Boolean,
  returnStringTranslated = Boolean
) => {
  if (needsIndex == Boolean) needsIndex = true;
  if (returnString == Boolean) returnString = false;
  if (returnStringTranslated == Boolean) returnStringTranslated = false;

  var r = [];
  if (
    !array ||
    array == null ||
    Object.prototype.toString.call(array) != "[object Array]"
  ) {
    var type = "null";
    if (!array == Array) {
      type = typeof array;
    }
    var msg = `Error: Needs a valid array constructor to continue! | > (typeof array = ${type})`;

    if (returnString == true) {
      return msg;
    } else return console.log(msg);
  }
  if (array.length == 0) {
    var msg = `This array is empty! arr.len == 0?`;

    if (!returnString) {
      return console.log(msg);
    } else return msg;
  }

  array.forEach((Rv, i) => {
    var v = "";
    if (Rv && typeof Rv != "undefined") {
      if (typeof Rv == "object") {
        if (Object.prototype.toString.call(Rv) === "[object Object]") {
          var readyV = "";
          for (var index in Rv) {
            var t = "";
            if (typeof Rv[index] == "string") {
              t += `"${Rv[index]}"`;
            } else {
              t += Rv[index];
            }

            if (index.includes(" ")) {
              index = `["${index}"]`;
            }

            readyV += ` ${index}: ${t} `;
          }

          v = `{${readyV}}`
            .replace(new RegExp("   ", "g"), " ")
            .replace(new RegExp("  ", "g"), " ");
        } else {
          const splitted = Rv.toString().split(",");
          var translated = [];
          splitted.forEach((v) => {
            var isFunc = false;
            try {
              const result = eval(`(${v})`);
              isFunc = typeof result === "function";
            } catch (error) {
              isFunc = false;
            }

            if (!Number(v) && !isFunc) {
              translated.push(`"${v}"`);
            } else {
              translated.push(`${v}`);
            }
          });
          v = "[" + translated.join(", ") + "]";
        }
      } else v = Rv;

      if (typeof Rv == "string") {
        v = `"${v}"`;
      }
      if (Rv == null) {
        v = "=> null";
      }
      if (needsIndex == true) {
        r.push(
          `[${i}]: ${v
            .toString()
            .replace(new RegExp("   ", "g"), " ")
            .replace(new RegExp("  ", "g"), " ")
            .replace(new RegExp("\r\n", "g"), "")}`
        );
      } else {
        r.push(
          `${v
            .toString()
            .replace(new RegExp("   ", "g"), " ")
            .replace(new RegExp("  ", "g"), " ")
            .replace(new RegExp("\r\n", "g"), "")}`
        );
      }
    }
  });

  if (returnString == false) {
    r.forEach((v) =>
      console.log(v.toString().replace(new RegExp("\r\n", "g"), ""))
    );
    return;
  } else {
    readyToGo = [];
    if (returnStringTranslated == true) {
      r.forEach((v) => {
        var isFunc = false;
        try {
          const result = eval(`(${v})`);
          isFunc = result;
        } catch (error) {
          isFunc = false;
        }

        if (Number(v)) {
          readyToGo.push(Number(v));
        } else if (isFunc) {
          readyToGo.push(isFunc);
        } else {
          readyToGo.push(v);
        }
      });
    } else {
      readyToGo = r;
    }

    r = readyToGo;
  }
  return r;
};

exports.doArray = (array) => {
  var preArray = [];
  array.forEach((v, i) => {
    preArray[i + 1] = v;
  });

  return preArray;
};
