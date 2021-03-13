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
            column_names = %w(email)
            csv << column_names

            User.limit(BATCH_SIZE).find_each do |user|
                column_values = [user.email]
                csv << column_values
            end
        end

        puts "csv抽出処理終了"
    end
end