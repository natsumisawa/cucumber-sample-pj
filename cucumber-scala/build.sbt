name := "ex-cucumber"

version := "0.1"

scalaVersion := "2.12.7"

libraryDependencies += "info.cukes" % "cucumber-scala_2.11" % "1.2.4"
libraryDependencies += "info.cukes" % "cucumber-junit" % "1.2.4"
libraryDependencies += "junit" % "junit" % "4.12"
libraryDependencies += "com.codeborne" % "selenide" % "4.14.2"  % "test"