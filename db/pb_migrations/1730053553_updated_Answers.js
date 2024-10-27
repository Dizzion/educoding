/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // remove
  collection.schema.removeField("6rzggsts")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnivov8n",
    "name": "module",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rzggsts",
    "name": "module",
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

  // remove
  collection.schema.removeField("nnivov8n")

  // remove
  collection.schema.removeField("stu0d9uo")

  return dao.saveCollection(collection)
})
