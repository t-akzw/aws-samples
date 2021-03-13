# Rails Authentication
- `rails new` and `Sorcery` by Rails6.1+MySQL8.0 sample

## Rails README
- Ruby version
  - 2.6.6
- Database
  - MySQL
- Database creation
  - `rails db:create`
  - `rails db:migrate`
- Deployment instructions
  - `docker-compose up -d`

# デモ手順書

1. Cognitoで認証を実装した[ウェブページ](https://dev.dagzggcqf8lqq.amplifyapp.com)にアクセス
1. Cognitoのユーザプールに`akazawt+777@amazon.com`でログインできないことを確認
1. 以降、Railsで実装された認証で`akazawt+777@amazon.com`ユーザを作成して、Cognitoユーザプールにインポートするデモを実施する
    1. Rails Sign Up/In APIでユーザを作成する
    1. ユーザリスト取得APIでユーザが作成されていることを確認する
    1. セッションマネージャーでEC2にログイン
    1. CSVを作成する
    1. ユーザプールのインポートJob作成・開始
    1. Cognito Consoleでユーザがインポートされたことを確認する
    1. 再度、ウェブページに`akazawt+777@amazon.com`でログイン
    1. ユーザが存在してパスワードリセットに進めることを確認する


# Rails API

```bash
URL=#コンソールを確認
EMAIL="akazawt+777@amazon.com"
USER_EMAIL="user[email]=${EMAIL}"
PASS="password"
USER_PASS="user[password]=${PASS}"
PASS_CONFIRM="password"
USER_PASS_CONFIRM="user[password_confirmation]=${PASS_CONFIRM}"

# ユーザ追加
curl -i -X POST http://${URL}/api/v1/users.json -d "${USER_EMAIL}" -d "${USER_PASS}" -d "${USER_PASS_CONFIRM}"

# ログイン
curl -i -X POST http://${URL}/api/v1/user_sessions.json -d "${USER_EMAIL}" -d  "${USER_PASS}"

TOKEN="36d30299a8db548b63f451ff361be5e4"
USER_TOKEN="ACCESS_TOKEN: ${TOKEN}"

## ユーザリスト取得API
curl -i -X GET -H "${USER_TOKEN}" http://${URL}/api/v1/users.json
```

# セッションマネージャー操作

```bash
# CSV作成
cat tmp/users.csv
docker exec -it app bundle exec rake csv:export
cat tmp/users.csv

# ユーザプールにcsvをインポートするjobの作成

REGION="us-east-1"
JOBNAME="IMPORTJOB0777"
USER_POOL_ID="us-east-1_g21km8avI"
LOGS_ARN=arn:aws:iam::067150986393:role/service-role/Cognito-UserImport-Role
aws cognito-idp create-user-import-job --region "${REGION}" --job-name "${JOBNAME}" --user-pool-id "${USER_POOL_ID}" --cloud-watch-logs-role-arn "${LOGS_ARN}" > tmp.json

JOBID=`cat tmp.json |jq ". | .UserImportJob.JobId" |sed 's/"//g'`
PRESIGNED=`cat tmp.json |jq ". | .UserImportJob.PreSignedUrl" |sed 's/"//g'`

PATH_TO_CSV_FILE="./tmp/users.csv"

curl -v -T "${PATH_TO_CSV_FILE}" -H "x-amz-server-side-encryption:aws:kms" "${PRESIGNED}"

# ユーザーインポートジョブの開始
aws cognito-idp start-user-import-job --region "${REGION}" --job-id "${JOBID}" --user-pool-id "${USER_POOL_ID}"
```