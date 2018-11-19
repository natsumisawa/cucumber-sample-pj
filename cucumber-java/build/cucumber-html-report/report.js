$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gradle/cucumber/test.feature");
formatter.feature({
  "line": 1,
  "name": "テストシナリオ",
  "description": "",
  "id": "テストシナリオ",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "トップページ表示",
  "description": "",
  "id": "テストシナリオ;トップページ表示",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "playアプリケーションの立ち上げ",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "トップページに遷移",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "ここをクリックすると表示される",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.playアプリケーションの立ち上げ()"
});
formatter.result({
  "duration": 6903094507,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});