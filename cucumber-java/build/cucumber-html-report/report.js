$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gradle/cucumber/nogi.feature");
formatter.feature({
  "line": 1,
  "name": "乃木坂3期生推し投票機能",
  "description": "",
  "id": "乃木坂3期生推し投票機能",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "トップページ表示",
  "description": "",
  "id": "乃木坂3期生推し投票機能;トップページ表示",
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
  "name": "乃木坂3期生が表示される",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "与田祐希のチェックボックスをチェックする",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "与田祐希に投票できる",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "投票完了と表示される",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.playアプリケーションの立ち上げ()"
});
formatter.result({
  "duration": 6963448623,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.トップページに遷移()"
});
formatter.result({
  "duration": 1045192114,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.乃木坂3期生が表示される()"
});
formatter.result({
  "duration": 1033441917,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.与田祐希のチェックボックスをチェックする()"
});
formatter.result({
  "duration": 2068981238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.与田祐希に投票できる()"
});
formatter.result({
  "duration": 198385287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.投票完了と表示される()"
});
formatter.result({
  "duration": 2160822669,
  "status": "passed"
});
});