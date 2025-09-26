Page({
  data: {
    menuList: [
      { title: "猜单词", url: "/pages/learn/guess_word/guess_word" },
      { title: "猜成语", url: "/pages/learn/guess_ch_idiom/guess_ch_idiom" }
      // { title: "demo", url: "/pages/demo/demo" }
      
    ]
  },

  goPage(e) {
    const url = e.currentTarget.dataset.url;
    if (url) {
      wx.navigateTo({ url });
    }
  },
  onShareAppMessage() {
    return {
      title: '实用小工具',
      path: '/pages/index/index',  // 转发后打开的路径
      imageUrl: '/image/logo.png'       // 可选，自定义分享图
    }
  },
  onShareTimeline() {
    return {
      title: '实用小工具',
      //query: 'id=123',   // 分享后带的参数
      imageUrl: '/image/logo.png'
    }
  }
  
});
