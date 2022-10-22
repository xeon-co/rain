// index.js
Page({
  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3, 4, 5],
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  },
  clickMe: function() {
    this.setData({ message: "Hello World" })
  }
})
