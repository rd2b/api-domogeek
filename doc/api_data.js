define({ api: [
  {
    "type": "get",
    "url": "/holiday/:date",
    "title": "Holiday Status Request",
    "name": "GetHoliday",
    "group": "Api.domogeek.fr",
    "description": "Ask whether know if :date is a holiday",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "now",
            "optional": false,
            "description": "Ask for today."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "all",
            "optional": false,
            "description": "Ask for all entry."
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "field": "D-M-YYYY",
            "optional": false,
            "description": "Ask for specific date."
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   Jour de Noel\n    HTTP/1.1 200 OK\n   (empty response if not holiday)\n"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Bad Request\n   400 Bad Request\n"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl http://api.domogeek.fr/holiday/now\n   curl http://api.domogeek.fr/holiday/all\n   curl http://api.domogeek.fr/holiday/25-12-2014\n"
      }
    ],
    "version": "0.0.0",
    "filename": "./apidomogeek.py"
  }
] });