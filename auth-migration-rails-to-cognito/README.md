# Amplify

Amplifyの技術調査を行います。

## 導入

公式ドキュメントの通りの手順で進めることでデプロイまでの一連の流れを体験できます。  
https://docs.amplify.aws/start/getting-started/installation/q/integration/vue

課金するのであればcoreuiなどを導入すれば良いと思います。

### 利用技術

- vue2  
  vue3系だとbootstrap, ui-vueなど対応ができていないものがありました
- bootstrapvue v4  
  coreuiでもいいですがpro版でないとtypescript対応してない＋薄くサンプルとしては作りたかったので選定しました
- google federation auth
- typescript
- vue-chartjs

### 手順

### 初期導入

まず、amplifyの使い方に習熟する必要があります。
[公式](https://docs.amplify.aws/start/getting-started/installation/q/integration/vue)の
手順に沿ってamplifyを導入してみてください。

1. amplify自体の導入と設定
2. プロジェクトの導入
3. amplify authやhosting追加で認証や画面の追加
4. デプロイ

本sampleではgoogleアカウントでの認証を導入しました。  
設定情報はファイルとして残されているので、
本サンプルリポジトリに関しては`amplify add`は実施しなくても良いと思います。（できないはず）

### typescript導入

amplifyではwebpackは利用しておらずvue cliに隠蔽されています。
そのため、vueコマンドでtypescriptを導入しました。
aws-export.jsなどtsで置き換えられないファイルがあるのでtsconfig.jsonに
`"allowJs": true,`を指定する必要がありました。
本サンプルでは動かすことを優先したため型付けはそこまで厳密に行っておりません。

### vue-property-decorator

vue向けのデコレーターです。
詳細な使い方は公式ドキュメントを参照してください。
[こちらのQiita](https://qiita.com/simochee/items/e5b77af4aa36bd0f32e5#watch)の記事もわかりやすくまとまっていて便利です。

### bootstrap vue

[公式](https://bootstrap-vue.org/docs)の設定に基づいて導入しました。

### basic認証

amplify consoleでコンソール画面を開きます。
「アクセスコントロール」からbasic認証の設定が行えます。

### chartjs

vue-chartjsを導入しました。
公式サンプルはvue-property-decoratorに対応してない書き方なので独自でdecorator向けに書き換えています。
[公式](https://vue-chartjs.org/ja/guide/#%E5%88%9D%E3%82%81%E3%81%AB)ページを参考にグラフ作成を行ってください。

### graphQL

`amplify add api`でgraphQLやRESTを作成することができます。
今回はgraphQLを利用してみました。

- chartjsで固定値から生成されたグラフを表示する
- graphQL設定を行いdynamoDBにサンプルデータをpostする（mutation）
- grapQLのqueryでdynamoDBからデータをgetする
- 取得したデータをグラフに表示する

## 画面

google認証を行うと以下の画面に遷移します。
初期化、更新、Sign out、Submitボタンにそれぞれ機能が実装されています。

- 初期化  
  ランダムな値でグラフを更新します  
- 更新  
  API経由でデータを取得して表示します  
- Sign out  
  amplify authのSign outが実装されています  
- Submit  
  データをgraphQL経由でdynamoDBにpostします（mutation）

![](./img/sample-dashboard.png)

## アクセスしてみる

https://dev.***.amplifyapp.com/
amplify console上からエンドポイントとbasic認証情報が確認できます。

## 機能追加

|対象|内容|ブランチ|
|:--|:--|:--|
|frontend|amplifyでsampleダッシュボードを構築する|feature/spa_amplify_sample_dashboard|
