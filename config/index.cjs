/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc353c65af6c4a554',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5c44b5de9c37ccf9f3f6a85edc42056a',

  PROVINCE: '内蒙古',
  CITY: '呼和浩特',

  USERS: [
    {
      // 想要发送的人的名字
      name: '吴雪妍宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: [ocI2d5-ZGPp3mnR9LvJuMs0Zhf70,ocI2d5zENxSaXozfmq1BWV9W2_rM],
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'Y62J0El5IMBsKIdIv1P1WVzP1--bK6HXW22JsFfgLKg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '吴雪妍宝贝', year: '2003', date: '02-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '吴雪妍宝贝', year: '2003', date: '03-09',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '01-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-23' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Y62J0El5IMBsKIdIv1P1WVzP1--bK6HXW22JsFfgLKg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: [ocI2d5-ZGPp3mnR9LvJuMs0Zhf70,ocI2d5zENxSaXozfmq1BWV9W2_rM],
    }
  ],

}

module.exports = USER_CONFIG

