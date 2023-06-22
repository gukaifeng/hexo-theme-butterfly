function reward() {
  console.log(window.location.pathname)
  const reward_list = window.location.pathname === '/about/' ? '' : '<br /><br /><a href="/about/#reward_list">赞赏名单</a>'
  const edit_reward_list = '<br /><br />赞赏完记得<a id="edit-reward-list" href="https://github.com/gukaifeng/gukaifeng.cn/edit/main/_data/reward.yml" target="_blank">露个脸</a>哦！'
  Swal.fire({
    title: '<strong>您正在为 <u>GuKaifeng</u> 充电</strong>',
    html:  `请打开<b>微信</b>或<b>支付宝</b> <b>[扫一扫]</b><br /><br />\
    <div>\
    <img src="/img/qrcode/wechat.png" alt="Wechat" width="50%" max-width="500px"><img src="/img/qrcode/alipay.png" alt="Alipay" width="50%" max-width="500px">\
    ${reward_list}\
    ${edit_reward_list}\
    </div>`,
    confirmButtonColor: '#2f7bf4'
  })
}