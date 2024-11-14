/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21tw5wuwm0qcqnk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apie5gu0",
    "name": "course_name_ar",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryrdnrfk",
    "name": "course_name_en",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("21tw5wuwm0qcqnk")

  // remove
  collection.schema.removeField("apie5gu0")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryrdnrfk",
    "name": "course_name",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
