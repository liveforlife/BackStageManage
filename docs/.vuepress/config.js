module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
	dest: './dist',   // 设置输出目录
	port: 2333, //端口
	themeConfig: { //主题配置
		// 添加导航栏
		nav: [
			{ text: '主页', link: '/' }, // 导航条
			{ text: '组件文档', link: '/guide/' },
			{ text: '知识库', link: '/knowledge/' },
			{
				text: 'github',
				// 这里是下拉列表展现形式。
				items: [
					{ text: 'focus-outside', link: 'https://github.com/TaoXuSheng/focus-outside' },
					{ text: 'stylus-converter', link: 'https://github.com/TaoXuSheng/stylus-converter' },
				]
			}
		],
		sidebar:[
			'/',
			'/page-a',
			['page-b','Explicit link text']
		]
	}
}