const express = require('express')
const router = express.Router()
const { checkData, getData, saveData } = require('../library/data')
const bcrypt = require('../library/bcrypt')

checkData()

router.get('/getTodos', async (req, res) => {
  try {
    let { todo_lists } = await getData()
    let todos = todo_lists.map(x => {
      let { id, title, password } = x
      let is_protected = password != null
      return { id, title, is_protected }
    })
    res.status(200).json({ success: true, todo_lists: todos })
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})

router.post('/addTodos', async (req, res) => {
  try {
    let { title, password } = req.body
    let { todo_lists } = await getData()
    let id
    if (password != null) {
      password = await bcrypt.hashPassword(password)
    } else {
      password = null
    }
    if (todo_lists.length > 0) {
      id = todo_lists.sort((a, b) => {
        return a - b;
      })[todo_lists.length - 1].id + 1
    } else {
      id = 1
    }
    let obj = {
      id,
      title,
      password,
      items: []
    }
    todo_lists.push(obj)
    todo_lists.sort((a, b) => {
      return a.id - b.id
    })
    await saveData({ todo_lists })
    res.status(200).json({ success: true, added_todo: { id, title } })
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})

router.get('/getTodoList/:id', async (req, res) => {
  try {
    let { id } = req.params
    let { password } = req.query
    let { todo_lists } = await getData()
    let todo = todo_lists.find(x => {
      return x.id == id
    })
    if (todo != null) {
      if (todo.password != null) {
        if (password != null) {
          let isPasswordCorrect = await bcrypt.comparePassword(password, todo.password)
          if (isPasswordCorrect) {
            delete todo['password']
            res.status(200).json({ success: true, todo_list: todo })
          } else {
            res.status(400).json({ success: false, msg: "Incorrect password." })
          }
        } else {
          res.status(400).json({ success: false, msg: "Todo list is protected. Please provide password." })
        }
      } else {
        delete todo['password']
        res.status(200).json({ success: true, todo_list: todo })
      }
    } else {
      res.status(400).json({ success: false, msg: "No such todo" })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})

router.post('/addListItem/:todo_id', async (req, res) => {
  try {
    let { todo_id } = req.params
    let { description, due_date, password } = req.body
    let { todo_lists } = await getData()
    let todo = todo_lists.find(x => {
      return x.id == todo_id
    })
    if (todo != null) {
      let todoIndex = todo_lists.indexOf(todo)
      if (todo.password != null) {
        if (password != null) {
          let isPasswordCorrect = await bcrypt.comparePassword(password, todo.password)
          if (isPasswordCorrect) {
            let itemId
            if (todo.items.length > 0) {
              itemId = todo.items.sort((a, b) => {
                return a - b;
              })[todo.items.length - 1].id + 1
            } else {
              itemId = 1
            }
            let obj = {
              id: itemId,
              description,
              due_date,
              done: false
            }
            todo.items.push(obj)
            todo_lists[todoIndex] = todo
            await saveData({ todo_lists })
            res.status(200).json({ success: true, todo_list: todo.items })
          } else {
            res.status(400).json({ success: false, msg: "Incorrect password." })
          }
        } else {
          res.status(400).json({ success: false, msg: "Todo list is protected. Please provide password." })
        }
      } else {
        let itemId
        if (todo.items.length > 0) {
          itemId = todo.items.sort((a, b) => {
            return a - b;
          })[todo.items.length - 1].id + 1
        } else {
          itemId = 1
        }
        let obj = {
          id: itemId,
          description,
          due_date,
          done: false
        }
        todo.items.push(obj)
        todo_lists[todoIndex] = todo
        console.log(todo_lists)
        await saveData({ todo_lists })
        res.status(200).json({ success: true, todo_list: todo.items })
      }
    } else {
      res.status(400).json({ success: false, msg: "No such todo" })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})

router.post('/removeListItem/:todo_id', async (req, res) => {
  try {
    let { todo_id } = req.params
    let { id, password } = req.body
    let { todo_lists } = await getData()
    let todo = todo_lists.find(x => {
      return x.id == todo_id
    })
    if (todo != null) {
      let todoIndex = todo_lists.indexOf(todo)
      if (todo.password != null) {
        if (password != null) {
          let isPasswordCorrect = await bcrypt.comparePassword(password, todo.password)
          if (isPasswordCorrect) {
            let newList = todo.items.filter(x => {
              return x.id != id
            })
            todo.items = newList
            todo_lists[todoIndex] = todo
            console.log(todo_lists)
            await saveData({ todo_lists })
            res.status(200).json({ success: true, todo_list: todo.items })
          } else {
            res.status(400).json({ success: false, msg: "Incorrect password." })
          }
        } else {
          res.status(400).json({ success: false, msg: "Todo list is protected. Please provide password." })
        }
      } else {
        let newList = todo.items.filter(x => {
          return x.id != id
        })
        todo.items = newList
        todo_lists[todoIndex] = todo
        console.log(todo_lists)
        await saveData({ todo_lists })
        res.status(200).json({ success: true, todo_list: todo.items })
      }
    } else {
      res.status(400).json({ success: false, msg: "No such todo" })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})

router.post('/done/:todo_id', async (req, res) => {
  try {
    let { todo_id } = req.params
    let { id, password } = req.body
    let { todo_lists } = await getData()
    let todo = todo_lists.find(x => {
      return x.id == todo_id
    })
    if (todo != null) {
      let todoIndex = todo_lists.indexOf(todo)
      if (todo.password != null) {
        if (password != null) {
          let isPasswordCorrect = await bcrypt.comparePassword(password, todo.password)
          if (isPasswordCorrect) {
            todo_lists[todoIndex].items.map(x => {
              if (x.id == id) {
                x.done = !x.done
              }
            })
            await saveData({ todo_lists })
            res.status(200).json({ success: true, todo_list: todo_lists[todoIndex].items })
          } else {
            res.status(400).json({ success: false, msg: "Incorrect password." })
          }
        } else {
          res.status(400).json({ success: false, msg: "Todo list is protected. Please provide password." })
        }
      } else {
        todo_lists[todoIndex].items.map(x => {
          if (x.id == id) {
            x.done = !x.done
          }
        })
        await saveData({ todo_lists })
        res.status(200).json({ success: true, todo_list: todo_lists[todoIndex].items })
      }
    } else {
      res.status(400).json({ success: false, msg: "No such todo" })
    }
  } catch (e) {
    console.log(e)
    res.status(500).json({ success: false, msg: "server error" })
  }
})


module.exports = router;