/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1har6g5mk2hke13",
    "created": "2024-10-27 18:10:48.994Z",
    "updated": "2024-10-27 18:10:48.994Z",
    "name": "Algorithms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m3ov7xdq",
        "name": "Question",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "gsunb62l",
        "name": "Prompt",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
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
  const collection = dao.findCollectionByNameOrId("1har6g5mk2hke13");

  return dao.deleteCollection(collection);
})
