const fs = require('fs').promises
const dataPath = __dirname + '/../../../data/data'

const checkData = async () => {
    const raw = await checkFile()
    if(raw != null){
      const data = JSONParser(raw)
      if (data != null) {
        if (typeof data.todo_lists == 'undefined' && !Array.isArray(data.todo_lists)) {
          await initData()
        }
      } else {
        await initData()
      }
    }else{
      await initData()
    }
  }
  
  const checkFile = async () => {
    try {
      const raw = await fs.readFile(dataPath, 'utf8')
      return raw
    } catch (e) { 
      return null 
    }
  }
  
  const initData = async () => {
    let data = JSON.stringify({
      todo_lists: []
    })
    await fs.writeFile(dataPath, data, 'utf8')
  }

  const JSONParser = (data) => {
    try {
      return JSON.parse(data);
    } catch (e) {
      return null
    }
  }

  const getData = async () => {
    const data = await fs.readFile(dataPath, 'utf8')
    return JSON.parse(data)
  }

  const saveData = async (data) => {
    await fs.writeFile(dataPath, JSON.stringify(data), 'utf8')
  }

module.exports = {checkData, getData, saveData} 