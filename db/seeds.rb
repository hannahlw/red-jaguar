# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


b1 = Board.create(name: "Beyonce <3")
l1 = Link.create(url: "http://www.beyonce.com/", kind: 1)
l2 = Link.create(url: "https://www.youtube.com/watch?v=k4YRWT_Aldo", kind: 2)
l3 = Link.create(url: "https://www.youtube.com/watch?v=nVtT4jZM9GA", kind: 2)
l4 = Link.create(url: "https://twitter.com/Beyonce/status/341358625639526401", kind: 3)
t1 = Tag.create(name: "Pop Culture")

b1.user_id = User.create(name: "Steven N.").id
b1.save
l1.boards << Board.first
l2.boards << Board.first
l3.boards << Board.first
l4.boards << Board.first
t1.boards << Board.first





