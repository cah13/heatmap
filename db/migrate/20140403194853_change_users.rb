class ChangeUsers < ActiveRecord::Migration
  def change
      change_table(:users) do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.timestamps
    end
  end
end
