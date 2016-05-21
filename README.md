# JJUG-CCC-2016-Spring

このプロジェクトは、下記のセッションで紹介したGradleの機能やPluginを使ったサンプルプロジェクトです。

## セッション情報

[JJUG CCC 2016 Spring](http://www.java-users.jp/?page_id=2377) / [M-6_1 十徳ナイフとしてのGradle](http://www.java-users.jp/?page_id=2396#M-6_1)

*[#ccc_m61](https://twitter.com/search?f=tweets&q=%23ccc_m61&src=typd)*

## スライド

[十徳ナイフとしてのGradle](https://nbviewer.jupyter.org/format/slides/github/grimrose/JJUG-CCC-2016-Spring/blob/master/Gradle%20as%20Army%20Knife.ipynb#/)

## 必須環境

* Docker
* JDK 1.8 (ローカルで動かす場合)

## 構成

* workspace: 作業スペース
  * embulk: embulkを使った作業を想定したサンプル
  * front: フロントエンドのサンプルプロジェクト
  * gradle: 分割したbuild.gradleやwrapper等
  * html: サンプルアプリケーションの本番向けhtmlファイル
  * nginx: サンプルアプリケーションのHTTPサーバ
  * server: Spring Bootを利用したサーバアプリケーション
  * serverspec: サーバの設定をテストする[serverspec](http://serverspec.org)のサンプル
