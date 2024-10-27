/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1har6g5mk2hke13")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ytoy04au",
    "name": "language",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "voc088yo8qekojm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1har6g5mk2hke13")

  // remove
  collection.schema.removeField("ytoy04au")

  return dao.saveCollection(collection)
})
