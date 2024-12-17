/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1har6g5mk2hke13")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nrt78nlf",
    "name": "SubmittedAnswers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bo7avwoxfnqwbs8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1har6g5mk2hke13")

  // remove
  collection.schema.removeField("nrt78nlf")

  return dao.saveCollection(collection)
})
