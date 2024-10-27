/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stu0d9uo",
    "name": "question",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1har6g5mk2hke13",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "stu0d9uo",
    "name": "Question",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1har6g5mk2hke13",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
