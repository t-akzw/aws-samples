require 'csv'

namespace :csv do
    desc "Usersテーブルのemailをcsvエクスポートする"
    task export: :environment do
        # FIXME: 本来はconfファイルに切り出すべき
        BATCH_SIZE = 2
        FILEDIR = "tmp"
        FILENAME = "users.csv"
        FILEPATH = "#{FILEDIR}/#{FILENAME}"
        WRITETYPE = 'w'
        puts "csv抽出処理開始"

        CSV.open(FILEPATH, WRITETYPE) do |csv|
            column_names = %w(name given_name family_name middle_name nickname preferred_username profile picture website email email_verified gender birthdate zoneinfo locale phone_number phone_number_verified address updated_at cognito:mfa_enabled cognito:username)
            csv << column_names

            User.limit(BATCH_SIZE).find_each do |user|
                column_values = [ nil, nil, nil, nil, nil, nil, nil, nil, nil, user.email, true, nil, nil, nil, nil, nil, false, nil, nil, false, user.email ]
                csv << column_values
            end
        end

        puts "csv抽出処理終了"
    end
end