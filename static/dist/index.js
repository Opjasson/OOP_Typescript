"use strict";
// Property static
// class Information {
//     static NAME: string = "JASSON NURMGOMEDOVE";
//     static JURUSAN: string = "SISTEM INFORMASI VISUAL";
//     static TAHUN: number = 2024;
// }
// console.log(Information.NAME);
// console.log(Information.JURUSAN);
// console.log(Information.TAHUN);
// Method static
class MathUtil {
    static math(...nilai) {
        let total = 0;
        for (const value of nilai) {
            total += value;
        }
        return total;
    }
}
console.log(MathUtil.math(1, 4, 5, 2, 6));
