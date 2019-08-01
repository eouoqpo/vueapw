import { host } from "./ip";

// 状态判断
export const ErrorNil = 0;
export const ErrorFail = 1;
export const ErrorSidReqNil = 2;
export const ErrorSidQueNil = 3;
export const ErrorSidTimeOut = 4;

// 模板
// export const DImg = host + "/api/app/user/codeimg";    //    获取图片验证码

//     首页数据       /api/app/public/goodstypelist
export const IindexData = host + "/api/app/public/home";          //   首页信息banner  分类接口   推荐中  未开始  已结束 等
export const GoodsList = host + "/api/app/public/goodstypelist";      //商品列表
export const Detail = host + "/api/app/news/news";                    //  首页的banner跳转

//    登录注册相关
export const imgcode = host + "/api/app/user/codeimg";    //    获取图片验证码
export const Phonecode = host + "/api/app/user/codephone";   //   通过手机号发送验证码
export const Codephone = host + "/api/app/oluser/codephone";   //  通过账号向手机发送验证码
export const Register = host + "/api/app/user/register";    //    注册
export const Login = host + "/api/app/user/login";    //    登录
export const Resetpwd = host + "/api/app/user/reset/pwd";        //   重置密码       1-登录密码    2-支付密码
 
//    用户个人中心
export const Modifypwd = host + "/api/app/oluser/change/pwd";    //   修改密码   1-登录密码    2-支付密码
export const Logout = host + "/api/app/oluser/logout";    //   退出登录
export const Upload = host + "/api/app/oluser/edithead";    //    上传头像
export const Auth = host + "/api/app/oluser/renzheng";       //   实名认证    用户添加银行卡
// export const BankAdd = "https://api.myproduct.com/v1/users";       //   用户添加银行卡   /api/app/oluser/addcard
export const BankAdd = host + "/api/app/oluser/addcard";       //   用户添加银行卡   /api/app/oluser/addcard
export const Addrlist = host + "/api/app/address/list";    //   获取收货地址列表
export const Addadress = host + "/api/app/address/add";    //   添加收货地址
export const Putaddress = host + "/api/app/address/edit";        //修改收货地址
export const Deladdress = host + "/api/app/address/delet";        //删除收货地址
export const NickName = host + "/api/app/oluser/editusername";    //  用户修改昵称
export const Banklist = host + "/api/app/public/bank";           //银行卡列表   
export const BannerInfo = host + "/api/app/oluser/bannerinfo";  //  个人中心的广告
export const OrderList = host + "/api/app/order/orderlist";     //    订单管理
export const CanPai = host + "/api/app/oluser/mycanpai";        //  我的参拍
export const Shouhuo = host + "/api/app/order/shouhuo";         //   收货
export const Arsis = host + "/api/app/order/twoauction";       //    二次上拍
export const ArsisList = host +"/api/app/order/twoauctionlist";    //    二次上拍列表
export const Reload = host + "/api/app/oluser/info";    // 涮新用户信息
export const Discount = host + "/api/app/oluser/hongbaolist";   //  我的红包
export const GetDiscount = host + "/api/app/hongbao/add";       //   用户领取红包
export const DiscountList = host + "/api/app/user/hongbaolist";    //  红包列表
export const Purchase = host + "/api/app/order/payment";       //   用户付款
export const Wuliu = host + "/api/app/order/logistics";       //    物流信息
export const QRCode = host + "/api/app/oluser/usererweima";       //    二维码

export const TiXian = host + "/api/app/paylianlian/omoneypre";   //  用户提现
export const Capital = host + "/api/app/oluser/iomoneylist";        //   资金明细
export const CommList = host + "/api/app/commission/list";          //   佣金明细
export const CashBankList = host + "/api/app/oluser/cardlist";     //   用户银行卡列表
export const Recharge = host + "/api/app/paylianlian/imoneypre";   //   用户充值
export const DelCard = host + "/api/app/oluser/deletecard";        //  删除银行卡
export const Treaty = host + "/api/app/user/models";        //    获取协议的接口   1  注册协议  2  绑卡协议   3 充值协议   4 付款协议
export const CanCelOrder = host + "/api/app/order/cancel";           //    用户取消订单
export const SureOrder = host + "/api/app/order/affirm";           //  用户确认发货

export const WxDel = host + "/api/app/oluser/delwx";               //   用户解绑微信   
export const WxAdd = host + "/api/app/oluser/addwx";               //   用户绑定微信 
export const WxLogin = host + "/api/app/user/wxregister";          //    用户使用第三方登录（微信）

//    发现
export const FindList = host + "/api/app/oluser/list";             //    获取分类的类别
export const FindIndex = host + "/api/app/oluser/typelist";        //   咨询类型
export const FsDetail = host + "/api/app/news/news";             //     发现的详情页
export const FindShare = host + "/api/app/user/wx";              //     发现里面的分享

//      分类专场
export const FiledList = host + "/api/app/public/goodstypelist";         //     商场的分类   一级分类
export const FGoodsList = host + "/api/app/public/goodslist";            //     商品列表
export const GoodsInfo = host + "/api/app/public/show";                  //     商品详情页
export const addCol = host + "/api/app/collection/addcollection";        //     添加收藏
export const delCol = host + "/api/app/collection/delcollection";        //     删除收藏
export const colList = host + "/api/app/collection/collectionlist";      //     收藏列表
export const offerList = host + "/api/app/offer/offerlist";              //     出价列表   以前的
export const publicList = host + "/api/app/public/offerlist";            //     用户出价拍卖   不需要登录的情况
export const offerAdd = host + "/api/app/offer/add";                     //     用户出价
export const YiKouJia = host + "/api/app/order/yikoujia";                //     一口价
export const WheCollect = host + '/api/app/collection/collection';       //     商品是否收藏
export const ForWard = host + "/api/app/relay/relay";                    //     用户转发