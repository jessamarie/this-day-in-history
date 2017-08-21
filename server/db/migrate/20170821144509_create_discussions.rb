class CreateDiscussions < ActiveRecord::Migration[5.1]
  def change
    create_table :discussions do |t|
      t.string :year
      t.string :month
      t.string :day
    end
  end
end
