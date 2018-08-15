export function settime(_this) {
  if (_this.countdown === 0) {
    _this.counVal = '获取验证码';
    _this.countdown = 90;
  } else {
    _this.counVal = `${_this.countdown}秒`;
    _this.countdown--;
    setTimeout(function() {
      settime(_this);
    }, 1000);
  }
}
