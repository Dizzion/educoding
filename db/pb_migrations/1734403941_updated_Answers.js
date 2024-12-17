/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yff0xzdb",
    "name": "Rating",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bo7avwoxfnqwbs8")

  // remove
  collection.schema.removeField("yff0xzdb")

  return dao.saveCollection(collection)
})
