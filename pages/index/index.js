Page({
  data: {
    shopImgs: [
      "https://static.bokao2o.com/bk-alipay-modules-pc/images/5c47244e6f534c1eb8d4943b1234bc83.jpg", 
      "https://static.bokao2o.com/bk-alipay-modules-pc/images/25cf77252ee4437884bfc37614d97101.jpg"
    ],
    recordList: [
      {
        title: '',
        key: 'resRecord',
        tip: 'ORDER',
        url: '/pages/cIndex/reservation/myReservation/index',
        imgSrc: '',
      },
      {
        title: '',
        key: 'msgRecord',
        tip: 'MESSAGE',
        url: '/pages/message/index',
        imgSrc: '',
      },
      {
        title: '',
        key: 'tradeRecord',
        tip: 'TRANSACTION',
        url: '/pages/customer/detail-c/index?tab=1',
        imgSrc: '',
      },
    ],
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
