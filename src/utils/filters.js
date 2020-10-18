export const dateServer = value=>{
    value.toString();
}
/**
 *  格式化数值
 *  @s 数值
 *  @n 小数点位数
 *  @hidden 是否*代替
 */
export const moneyFormat = (s, n ,hidden)=>{
    if (hidden) {
        return "****";
      }
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n);
      if (isNaN(s)) {
        s = "0.00";
      }
      s = s + "";
      var oldN = n;
      n = n > 0 && n <= 20 ? n : 2;
      var l = s
          .split(".")[0]
          .split("")
          .reverse(),
        r = s.split(".")[1];
      var t = "";
      for (var i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
      }
  
      let value;
      if (oldN) {
        value =
          t
            .split("")
            .reverse()
            .join("") +
          "." +
          r;
      } else {
        value = t
          .split("")
          .reverse()
          .join("");
      }
      return value.replace(/([-],)/g, "-");
}