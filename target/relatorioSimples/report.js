$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "line": 1,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3338885240,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Consulta de Ovo de Pascoa",
  "description": "",
  "id": "consulta;consulta-de-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.que_acesso_a_Wikipedia_em_Portugues()"
});
formatter.result({
  "duration": 4630973819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquiso_por(String)"
});
formatter.result({
  "duration": 3446764831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibe_a_expressao_no_titulo_da_guia(String)"
});
formatter.result({
  "duration": 537248103,
  "status": "passed"
});
formatter.after({
  "duration": 88716076,
  "status": "passed"
});
});