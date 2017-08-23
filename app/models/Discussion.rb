class Discussion < ApplicationRecord
  has_many :comments
  validates_uniqueness_of :year, scope: [:month, :day]
end
