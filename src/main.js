const {PORT} = require('./config/conifg.dotenv') //导入

const app = require('./app/index') // 导入app文件



app.listen(PORT, () => {
    console.log(`我们启动了一个${PORT}端口的服务`)
})
