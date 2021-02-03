module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 1) return false;

    let strNew = str.split("");
    let length = strNew.length / 2;
    let t = 0;

    while (t < length) {
        for (let item of bracketsConfig) {
            let i = 0;

            while (i < strNew.length + 1) {
                if (item[0] === strNew[i]) {
                    if (item[1] === strNew[i + 1]) {
                        strNew.splice(i, 2);
                        console.log(strNew, t);
                        i = i - 2;
                    }
                }

                i = i + 1;
            }
        }
        t = t + 1;
    }

    return strNew.length === 0;
};
