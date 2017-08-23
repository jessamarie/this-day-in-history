# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Discussion.destroy_all
patricks_bday = Discussion.create!(year: "1994", month: "2", day: "21")
patricks_bday.comments.create!(text: 'No, this is Patrick')
patricks_bday.comments.create!(text: 'No, this is Patrick also')
patricks_bday.comments.create!(text: 'No, this is Patrick to')
patricks_bday.comments.create!(text: 'My bday was actually yesterday guys')


jessas_bday = Discussion.create!(year: "1994", month: "9", day: "12")
jessas_bday.comments.create(text: 'This is the best day ever!!!')
jessas_bday.comments.create(text: 'Jessa birthday.....')
