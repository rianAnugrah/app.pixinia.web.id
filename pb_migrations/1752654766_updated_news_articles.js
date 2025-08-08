/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_news_articles")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_news_articles")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.id != '' && author = @request.auth.id",
    "listRule": "@request.auth.id != '' || status = 'published'",
    "updateRule": "@request.auth.id != '' && author = @request.auth.id",
    "viewRule": "@request.auth.id != '' || status = 'published'"
  }, collection)

  return app.save(collection)
})
