define({ "api": [
  {
    "group": "resolvers",
    "type": "",
    "url": "get_es_body",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "termo",
            "description": "<p>recebe o term para ser tratada</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "urls",
            "description": "<p>recebe a url para ser tratada</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tipo",
            "description": "<p>recebe  type para ser tratada</p>"
          }
        ]
      }
    },
    "description": "<p>Analisa os dados recebidos para verificar se estão válidos ou não,caso esteja tudo ok,retorna um objeto que será inserido no banco de dados,senão ,retorna o erro</p>",
    "version": "0.0.0",
    "filename": "./resolvers/resolvers.js",
    "groupTitle": "resolvers",
    "name": "Get_es_body"
  },
  {
    "group": "resolvers",
    "type": "",
    "url": "Mutation",
    "title": "",
    "description": "<p>Cria um novo registro com os dados passados na requisição</p>",
    "parameter": {
      "examples": [
        {
          "title": "Exemplo_de_request:",
          "content": "{\n    \"term\":\"Um termo qualquer\",\n    \"url\": a url deve está no formato http://site.com ou http://site.com.br,\n    \"type\":o tipo  deve ser somente 'like' ou 'dislike'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./resolvers/resolvers.js",
    "groupTitle": "resolvers",
    "name": "Mutation"
  },
  {
    "group": "resolvers",
    "type": "",
    "url": "Query",
    "title": "",
    "description": "<p>Faz a busca de todos os documentos no banco de dados</p>",
    "version": "0.0.0",
    "filename": "./resolvers/resolvers.js",
    "groupTitle": "resolvers",
    "name": "Query"
  }
] });
