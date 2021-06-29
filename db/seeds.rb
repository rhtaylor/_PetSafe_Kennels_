# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'bcrypt'
include BCrypt 



Customer.create([{name: 'John Taylor', number: 5207307020, address: '123 happy street', password_digest: BCrypt::Password.create('randy'), email: 'jackisbusy@gmail.com', city: 'Phoenix'},
                 {name: "Tom Burger", number: 5555555555, email: 'moneyman', city: 'Glendale', address: '123 happy street', password_digest: BCrypt::Password.create('steel') }]) 
Kennel.create([{kennel_type: 'Dog Run', material_cost: 30000, labor_cost: 5000, price: 20000, customer_id: 6},   
                {kennel_type: 'Cool Kennel', material_cost: 50000, labor_cost: 3000, price: 50000, customer_id: 7}])