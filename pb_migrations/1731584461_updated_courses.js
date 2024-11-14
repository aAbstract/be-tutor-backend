/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21tw5wuwm0qcqnk")

  collection.indexes = [
    "CREATE INDEX `idx_RqHoLPL` ON `courses` (\n  `instructor`,\n  `tags`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vy5xgmka",
    "name": "tags",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "POPULAR",
        "BEST_SELLER",
        "TOP_RATE"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21tw5wuwm0qcqnk")

  collection.indexes = [
    "CREATE INDEX `idx_RqHoLPL` ON `courses` (`instructor`)"
  ]

  // remove
  collection.schema.removeField("vy5xgmka")

  return dao.saveCollection(collection)
})
