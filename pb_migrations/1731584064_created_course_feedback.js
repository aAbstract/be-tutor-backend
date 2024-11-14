/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fkl0byrz6pdmb1a",
    "created": "2024-11-14 11:34:24.448Z",
    "updated": "2024-11-14 11:34:24.448Z",
    "name": "course_feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sharporz",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "hyogrvhm",
        "name": "course",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "21tw5wuwm0qcqnk",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "zzwkwmkp",
        "name": "comment",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jslskt2w",
        "name": "rating",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 5,
          "noDecimal": false
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_fVpAc99` ON `course_feedback` (`course`)"
    ],
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
  const collection = dao.findCollectionByNameOrId("fkl0byrz6pdmb1a");

  return dao.deleteCollection(collection);
})
