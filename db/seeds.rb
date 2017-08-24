# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Discussion.destroy_all
patricks_bday = Discussion.create!(year: "1994", month: "2", day: "20")
patricks_bday.comments.create!(text: 'No, this is Patrick')
patricks_bday.comments.create!(text: 'No, this is Patrick also')
patricks_bday.comments.create!(text: 'No, this is Patrick to')

jessas_bday = Discussion.create!(year: "1994", month: "9", day: "12")
jessas_bday.comments.create(text: 'This is the best day ever!!!')
jessas_bday.comments.create(text: 'Jessa birthday.....')

mitche = Discussion.create!(year: "1989", month: "4", day: "5")
mitche.comments.create(text: "This day was Mitche's Birthday!")

alex = Discussion.create!(year: "1990", month: "7", day: "3")
alex.comments.create(text: "This day was Alex's Birthday!")

tim = Discussion.create!(year: "1985", month: "8", day: "24")
tim.comments.create(text: "This day was Tims's Birthday!")

colleen = Discussion.create!(year: "1985", month: "1", day: "11")
colleen.comments.create(text: "This day was Colleen's Birthday!")

jacob = Discussion.create!(year: "1988", month: "8", day: "28")
jacob.comments.create(text: "This day was Jacob's Birthday!")


jd = Discussion.create!(year: "1986", month: "5", day: "25")
jd.comments.create(text: "This day was JD's Birthday!")

charlie = Discussion.create!(year: "1987", month: "11", day: "6")
charlie.comments.create(text: "This day was Charlies's Birthday!")

frew = Discussion.create!(year: "1976", month: "5", day: "5")
frew.comments.create(text: "This day was Frews's Birthday!")

luis = Discussion.create!(year: "1981", month: "9", day: "26")
luis.comments.create(text: "This day was Luis's Birthday!")

liz = Discussion.create!(year: "1987", month: "1", day: "13")
liz.comments.create(text: "This day was Liz's Birthday!")

matt = Discussion.create!(year: "1991", month: "10", day: "30")
matt.comments.create(text: "This day was Matt's Birthday!")

kendall = Discussion.create!(year: "1990", month: "4", day: "15")
kendall.comments.create(text: "This day was Kendall's Birthday!")
