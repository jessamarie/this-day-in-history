class AddUniqueIndexToDiscussions < ActiveRecord::Migration[5.1]
  def change
    add_index :discussions, [:month, :day, :year], unique: true
  end
end
