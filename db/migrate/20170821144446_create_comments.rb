class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.references :discussion
      t.timestamps
    end
  end
end
