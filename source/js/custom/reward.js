function reward() {
  Swal.fire({
    title: '<strong>您正在为 <u>GuKaifeng</u> 充电</strong>',
    html: '请打开<b>微信</b>或<b>支付宝</b> <b>[扫一扫]</b><br /><br />\
    <div>\
    <img src="/img/qrcode/wechat.png" alt="Wechat" width="50%" max-width="500px"><img src="/img/qrcode/alipay.png" alt="Alipay" width="50%" max-width="500px">\
    </div>',
    confirmButtonColor: '#2f7bf4'
  })
}