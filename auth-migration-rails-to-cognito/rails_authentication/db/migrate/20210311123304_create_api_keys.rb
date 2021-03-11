class CreateApiKeys < ActiveRecord::Migration[6.1]
  def change
    create_table :api_keys do |t|
      t.string :access_token
      t.datetime :expires_at
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
