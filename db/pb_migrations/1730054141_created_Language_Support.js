/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "voc088yo8qekojm",
    "created": "2024-10-27 18:35:41.977Z",
    "updated": "2024-10-27 18:35:41.977Z",
    "name": "Language_Support",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oeagunzv",
        "name": "language",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("voc088yo8qekojm");

  return dao.deleteCollection(collection);
})
