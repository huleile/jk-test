define({ "api": [
  {
    "type": "get",
    "url": "/books",
    "title": "GetBooks",
    "name": "______",
    "group": "Book",
    "description": "<p>获取一条书籍信息</p>",
    "parameter": {
      "fields": {
        "query": [
          {
            "group": "query",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Book"
  },
  {
    "type": "delete",
    "url": "/books/:id",
    "title": "RemoveBook",
    "name": "______",
    "group": "Book",
    "description": "<p>删除一条书籍信息</p>",
    "parameter": {
      "fields": {
        "param": [
          {
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>书籍ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Book"
  },
  {
    "type": "post",
    "url": "/books",
    "title": "CreateBook",
    "name": "________",
    "group": "Book",
    "description": "<p>插入一条书籍信息</p>",
    "parameter": {
      "fields": {
        "body": [
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "body",
            "type": "String",
            "optional": false,
            "field": "press",
            "description": "<p>出版社</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Book"
  }
] });
