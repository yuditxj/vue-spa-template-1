/**
 * Created by an.han on 16/10/15.
 * 基于 express 的接口处理定义
 * See http://expressjs.com/zh-cn/4x/api.html
 */

module.exports = {
  api: '/api/activity/targets/get_list',
  response: function (req, res) {
    res.send(`
		{
			"status":0,
			"items":[
					{
							"start_time":"2017-12-07",
							"state_val":"活动结束",
							"address":"北京",
							"intro":"一句话简介",
							"name":"标题123333",
							"type_val":"活动报名",
							"id":3,
							"state":1,
							"type":1
					}
			],
			"pn":0,
			"total":2,
			"max_pn":2
		}
    `);
  }
}