class Discussion < ApplicationRecord
  has_many :comments
  validates :year, uniqueness: { scope: [:month, :day] }
end
