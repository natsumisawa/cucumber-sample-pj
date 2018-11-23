$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("gradle/cucumber/test.feature");
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
formatter.match({
  "location": "StepDefinition.playアプリケーションの立ち上げ()"
});
formatter.result({
  "duration": 4881819388,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.トップページに遷移()"
});
formatter.result({
  "duration": 1044183483,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.乃木坂3期生が表示される()"
});
formatter.result({
  "duration": 1034141849,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.与田祐希のチェックボックスをチェックする()"
});
formatter.result({
  "duration": 2223474963,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.与田祐希に投票できる()"
});
formatter.result({
  "duration": 3310458,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat gradle.cucumber.StepDefinition.与田祐希に投票できる(StepDefinition.java:53)\n\tat ✽.And 与田祐希に投票できる(gradle/cucumber/test.feature:8)\n",
  "status": "pending"
});
});